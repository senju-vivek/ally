// components/AgentInterface.js
import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // Import the Firestore instance

const AgentInterface = ({ agentId }) => {
  // State to store transcriptions and suggestions
  const [transcriptions, setTranscriptions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Listener for transcriptions collection
    const transcriptionRef = collection(db, `agents/${agentId}/transcriptions`);
    const unsubscribeTranscriptions = onSnapshot(transcriptionRef, (snapshot) => {
      const updatedTranscriptions = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTranscriptions(updatedTranscriptions);
    });

    // Listener for GPT suggestions collection
    const suggestionsRef = collection(db, `agents/${agentId}/suggestions`);
    const unsubscribeSuggestions = onSnapshot(suggestionsRef, (snapshot) => {
      const updatedSuggestions = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSuggestions(updatedSuggestions);
    });

    // Cleanup listeners on component unmount
    return () => {
      unsubscribeTranscriptions();
      unsubscribeSuggestions();
    };
  }, [agentId]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col gap-8 text-white">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Real-Time Agent Interface
        </h1>
        <p className="text-gray-600">Stay updated with live transcriptions and suggestions</p>
      </header>

      {/* Transcriptions Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Transcriptions</h2>
        <ul className="space-y-4">
          {transcriptions.length > 0 ? (
            transcriptions.map((transcription) => (
              <li
                key={transcription.id}
                className="p-4 bg-gray-50 shadow-sm rounded-lg border border-gray-200"
              >
                {transcription.text}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No transcriptions available.</p>
          )}
        </ul>
      </section>

      {/* GPT Suggestions Section */}
      <section className="bg-blue-50 shadow-lg p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">GPT Suggestions</h2>
        <ul className="space-y-4">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="p-4 bg-white shadow-sm rounded-lg border border-blue-300"
              >
                {suggestion.text}
              </li>
            ))
          ) : (
            <p className="text-blue-600">No suggestions available.</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default AgentInterface;
