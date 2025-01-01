import React, { useState, useEffect, useRef } from "react";
import { FaSpinner } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";  

function RealTimeTranscription() {
    const [transcriptions, setTranscriptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const ws = useRef(null);  

    const handleFetchTranscriptions = () => {
        setError("");
        setLoading(true);

        if (ws.current) {
            
            console.log("WebSocket already active.");
            return;
        }

        try {
            
            ws.current = new WebSocket("ws://localhost:5000/transcribe");

            ws.current.onopen = () => {
                console.log("WebSocket connection established.");
            };

            ws.current.onmessage = (event) => {
                const transcript = event.data;
                console.log("Received:", transcript);

               
                setTranscriptions((prevTranscriptions) => [
                    ...prevTranscriptions,
                    transcript,
                ]);
            };

            ws.current.onerror = (err) => {
                console.error("WebSocket error:", err);
                setError("Error with WebSocket connection.");
            };

            ws.current.onclose = () => {
                console.log("WebSocket connection closed.");
                setLoading(false);
            };
        } catch (err) {
            console.error("Error initializing WebSocket:", err);
            setError("Failed to initialize WebSocket connection.");
            setLoading(false);
        }
    };

    const handleStopTranscriptions = () => {
        if (ws.current) {
            ws.current.close(); 
            ws.current = null;
            setLoading(false);
            console.log("WebSocket connection stopped.");
        }
    };

    
    useEffect(() => {
        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    return (
        <>
            <nav className="flex items-center justify-between text-black p-4">
                <span className="font-bold">Realtime Transcription</span>
                <div className="flex gap-2">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                        onClick={handleFetchTranscriptions}
                        disabled={loading}
                    >
                        {loading && <FaSpinner className="animate-spin" />}
                        {loading ? "Transcribing..." : "Start Transcription"}
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2"
                        onClick={handleStopTranscriptions}
                        disabled={!loading}
                    >
                        Stop Transcription
                    </button>
                </div>
            </nav>
            <div className="h-[1px] bg-gray-600"></div>
            <div className="p-4">
                {error && <p className="text-red-500">{error}</p>}
                {transcriptions.length > 0 ? (
                    <div>
                        <h2 className="text-xl font-bold">Transcriptions:</h2>
                        <div className="h-64 overflow-y-scroll border border-gray-300 rounded-md p-4">
                            <ul className="list-none space-y-4">
                                {transcriptions.map((text, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <FaUserCircle className="text-blue-500 text-2xl" />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    !loading && <p>No transcriptions available yet. Click "Start Transcription" to begin.</p>
                )}
            </div>
        </>
    );
}

export default RealTimeTranscription;