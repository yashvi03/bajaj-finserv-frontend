// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleInputChange = (e) => {
        setJsonInput(e.target.value);
    };

    const handleSelectChange = (e) => {
        const options = Array.from(e.target.selectedOptions).map(option => option.value);
        setSelectedOptions(options);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = JSON.parse(jsonInput);
            const result = await axios.post('https://<your-heroku-app>.herokuapp.com/bfhl', { data });
            setResponse(result.data);
        } catch (error) {
            console.error('Invalid JSON or API error', error);
        }
    };

    const renderResponse = () => {
        if (!response) return null;

        const { numbers, alphabets, highest_lowercase_alphabet } = response;
        const displayData = {
            Alphabets: selectedOptions.includes('Alphabets') ? alphabets : [],
            Numbers: selectedOptions.includes('Numbers') ? numbers : [],
            'Highest lowercase alphabet': selectedOptions.includes('Highest lowercase alphabet') ? highest_lowercase_alphabet : [],
        };

        return Object.keys(displayData).map(key => (
            <div key={key}>
                <h3>{key}</h3>
                <p>{displayData[key].join(', ')}</p>
            </div>
        ));
    };

    return (
        <div className="App">
            <h1>JSON Input</h1>
            <form onSubmit={handleSubmit}>
                <textarea value={jsonInput} onChange={handleInputChange} rows="10" cols="50" />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <select multiple={true} onChange={handleSelectChange}>
                <option value="Alphabets">Alphabets</option>
                <option value="Numbers">Numbers</option>
                <option value="Highest lowercase alphabet">Highest lowercase alphabet</option>
            </select>
            <div>
                {renderResponse()}
            </div>
        </div>
    );
}

export default App;
