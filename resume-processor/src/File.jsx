import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { generateChat } from "./slicer/resumeSlicer";

// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { uploadFile } from "../redux/slices/uploadSlice";

const FileUpload = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const uploadStatus = useSelector((state) => state.upload.status);
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const filePreviews = acceptedFiles.map((file) => ({
        name: file.name,
        size: (file.size / 1024).toFixed(2),
        type: file.name.split(".").pop().toUpperCase(),
        preview: URL.createObjectURL(file), // Generate preview URL
        status: "pending",
        file,
      }));

      setFiles(() => [...filePreviews]);
      console.log(filePreviews);

      // Upload each file using Redux Toolkit thunk
      acceptedFiles.forEach((file) => {
        const formData = new FormData();
        formData.append("file", file);
        console.log("formdata file", file);

        localStorage.setItem("file", JSON.stringify());
        dispatch(generateChat(formData));

        // dispatch(uploadFile(formData)).then((response) => {
        //   if (response?.payload?.success) {
        //     navigate("/results");
        //   }
        // });
      });
    },
  });

  const handleNavigate = () => {
    setFiles([]);
    // navigate("/");
  };
  return (
    <div className="w-[1000px]">
      {/* Left Side - Drop Area */}

      {files && files.length ? (
        <>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            onClick={handleNavigate}
          >
            UploadAgain
          </button>
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-[100%] flex px-6 overflow-y-auto h-[80vh]">
            {files.map((file, index) => (
              <div key={index} className="mb-4 border p-3 rounded-lg bg-white">
                <p className="font-semibold">
                  {file.name} ({file.size})
                </p>
                {file.preview &&
                  (file.type === "PDF" ? (
                    <embed
                      src={file.preview}
                      type="application/pdf"
                      className="w-full h-60 mt-2"
                    />
                  ) : (
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="w-full h-60 object-cover mt-2"
                    />
                  ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-[100%] flex">
          <div
            {...getRootProps()}
            className="border-dashed border-2 border-gray-300 flex flex-col items-center justify-center p-10 cursor-pointer w-[100%]"
          >
            <input {...getInputProps()} />
            <div className="text-center">
              <div className="text-blue-500 text-3xl mb-4">📤</div>
              <p className="text-gray-600">Drag and Drop file</p>
              <p className="text-gray-500">or</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                Browse
              </button>
            </div>
          </div>
        </div>
      )}

      {/* {uploadStatus === "loading" && (
        <p className="text-center mt-4">Uploading...</p>
      )} */}
    </div>
  );
};

export default FileUpload;
