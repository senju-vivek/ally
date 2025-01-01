import React, { useEffect, useState } from "react";

// Dummy person names
const dummyNames = ["Vivek"];

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000/");

    ws.onopen = () => {
      console.log("WebSocket connection established.");
    };

    ws.onmessage = (event) => {
      console.log("Received:", event.data);

      // Add a random name to each message
      const randomName =
        dummyNames[Math.floor(Math.random() * dummyNames.length)];
      const message = { name: randomName, text: event.data };

      setMessages((prev) => [...prev, message]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          WebSocket Transcriptions
        </h1>
        <ul className="space-y-3">
          {messages.map((msg, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {msg.name[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">{msg.name}</p>
                <p className="text-gray-600 text-sm">{msg.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketComponent;
