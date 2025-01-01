// import React, { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';

// const RealTimeTranscription = () => {
//   const [transcription, setTranscription] = useState('');
//   const [isRecording, setIsRecording] = useState(false);
//   const socketRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   // Initialize WebSocket connection when the component mounts
//   useEffect(() => {
//     socketRef.current = io('http://localhost:5000'); // Change this to your backend URL

//     socketRef.current.on('transcription', (data) => {
//       // Only update transcription if the message contains valid text
//       if (data.text && data.text !== 'Stopped listening.' && data.text !== 'Started listening...') {
//         setTranscription(data.text);
//       }
//     });

//     socketRef.current.on('connect', () => {
//       console.log('Connected to WebSocket server');
//     });

//     socketRef.current.on('disconnect', () => {
//       console.log('Disconnected from WebSocket server');
//     });

//     return () => {
//       if (socketRef.current) {
//         socketRef.current.disconnect();
//       }
//     };
//   }, []);

//   // Start recording using MediaRecorder API
//   const startRecording = async () => {
//     setIsRecording(true);
//     audioChunksRef.current = []; // Clear previous audio chunks

//     // Request access to the microphone
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorderRef.current = new MediaRecorder(stream);

//     // Collect audio chunks when data is available
//     mediaRecorderRef.current.ondataavailable = (event) => {
//       audioChunksRef.current.push(event.data);
//       const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         socketRef.current.emit('audio_chunk', { audio: reader.result });
//       };
//       reader.readAsArrayBuffer(audioBlob);
//     };

//     // Handle when the recording stops
//     mediaRecorderRef.current.onstop = () => {
//       console.log('Recording stopped');
//     };

//     // Start recording
//     mediaRecorderRef.current.start();
//     socketRef.current.emit('start_mic');
//   };

//   // Stop recording
//   const stopRecording = () => {
//     setIsRecording(false);
//     mediaRecorderRef.current.stop();
//     socketRef.current.emit('stop_mic');
//   };

//   return (
//     <div className=' bg-yellow-300' >
//       <h1>Real-Time Transcription</h1>

//       <div>
//         <button onClick={startRecording} disabled={isRecording}>
//           Start Recording
//         </button>
//         <button onClick={stopRecording} disabled={!isRecording}>
//           Stop Recording
//         </button>
//       </div>

//       <div>
//         <h2>Transcription Output</h2>
//         <p>{transcription}</p>
//       </div>
//     </div>
//   );
// };

// export default RealTimeTranscription;


import React, { useState, useEffect } from "react";

// Optional: import socket.io-client if you're using it
// import io from "socket.io-client";

const TranscriptionComponent = () => {
  const [transcription, setTranscription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Connect to the Flask WebSocket server
    const socket = new WebSocket("ws://localhost:5000/transcribe");

    // Event listener for when the connection is open
    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    // Event listener for incoming messages (transcriptions)
    socket.onmessage = (event) => {
      // Update the state with the transcription received
      const newTranscription = event.data;
      setTranscription((prev) => prev + newTranscription + " ");
    };

    // Event listener for errors
    socket.onerror = (event) => {
      setError("An error occurred with the WebSocket connection.");
      console.error("WebSocket error:", event);
    };

    // Event listener for when the connection is closed
    socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h2>Real-time Transcription</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <p>{transcription}</p>
      </div>
    </div>
  );
};

export default TranscriptionComponent;
