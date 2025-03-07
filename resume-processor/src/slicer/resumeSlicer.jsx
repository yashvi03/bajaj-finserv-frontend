import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEventSource } from "@microsoft/fetch-event-source";

let abortcontroller = null;

export const generateChat = createAsyncThunk(
  "chat",
  async (formData, { dispatch }) => {
    try {
      abortcontroller = new AbortController();
      const { signal } = abortcontroller;
      // const file = JSON.parse(localStorage.getItem("file"));
      console.log('file',formData)


      await fetchEventSource("http://192.168.29.32:8000/invoke", {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
          Accept: "text/event-stream",
        },
        body: formData,
        signal,
        onmessage(event) {
          let chunkString = JSON.parse(event.data).content;

          console.log("Received chunk:", chunkString);
          dispatch(addChunk(chunkString));
        },
        onerror(error) {
          console.error("Streaming error:", error);
          throw error;
        },
      });
    } catch (error) {
      if (error.name === "AbortError") console.log("chat stream aborted");
      console.error("Error fetching chat:", error);
      throw error;
    }
  }
);

const resumeTextSlice = createSlice({
  name: "resumeText",
  initialState: {
    isLoading: false,
    data: [],
    streamText: "",
    error: false,
  },
  reducers: {
    addChunk: (state, action) => {
      if (
        state.data.length === 0 ||
        state.data[state.data.length - 1].sender !== "assistant"
      ) {
        state.data.push({ text: action.payload, sender: "assistant" });
      } else {
        state.data[state.data.length - 1].text += action.payload;
      }
    },
    abortChat: (state) => {
      if (abortcontroller) {
        abortcontroller.abort();
        abortcontroller = null;
      }
      state.isLoading = false;
      state.error = false;
    },
    resetChat: (state) => {
      state.data = [];
      state.streamText = "";
      state.isLoading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(generateChat.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(generateChat.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(generateChat.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { addChunk, sendMessage, resetChat, abortChat } =
  resumeTextSlice.actions;
export default resumeTextSlice.reducer;
