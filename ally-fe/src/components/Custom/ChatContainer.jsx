import React, { useContext, useState } from "react";
import { ContextApp } from "../../utils/context";
import { LuPanelLeftOpen } from "react-icons/lu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import Chat from "./Chat";

function ChatContainer() {
  const {
    setShowSlide,
    showSlide,
    setMobile,
    Mobile,
    chatValue,
    setChatValue,
    handleSend,
    handleKeyPress,
  } = useContext(ContextApp);

  const [isListening, setIsListening] = useState(false);

  
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const handleVoiceInput = () => {
    if (!recognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setChatValue((prev) => prev + " " + transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error: ", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div
      className={
        showSlide
          ? "h-screen w-screen bg-black flex items-start justify-between flex-col p-2"
          : "h-screen w-full lg:w-[calc(100%-300px)] bg-black flex items-start justify-between flex-col p-2"
      }
    >
      <span
        className="rounded px-3 py-[9px] hidden lg:flex items-center justify-center cursor-pointer text-white m-1 hover:bg-black duration-200"
        title="Open sidebar"
        onClick={() => setShowSlide(!showSlide)}
      >
        {showSlide && <LuPanelLeftOpen />}
      </span>
      <span
        className="rounded px-3 py-[9px] lg:hidden flex items-center justify-center cursor-pointer text-white mt-0 mb-3 border border-gray-600"
        title="Open sidebar"
        onClick={() => setMobile(!Mobile)}
      >
        <HiOutlineMenuAlt2 fontSize={20} />
      </span>

      
      <Chat />

      
      <div className="w-full m-auto flex items-center justify-center flex-col gap-2 my-2">
        <span className="flex gap-2 border-white items-center justify-center bg-black rounded-lg shadow-md w-[90%] lg:w-2/5 xl:w-1/2">
          <input
            type="text"
            placeholder="Send a message"
            className="h-full text-white border border-white bg-transparent px-3 py-4 w-full outline-none text-base rounded"
            value={chatValue}
            onChange={(e) => setChatValue(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <RiSendPlane2Fill
            title="Send message"
            className={
              chatValue.length <= 0
                ? "text-gray-400 cursor-auto mx-3 text-xl"
                : "text-white cursor-pointer mx-3 text-3xl bg-green-500 p-1 rounded shadow-md"
            }
            onClick={handleSend}
          />
          <button
            className={`mx-3 p-2 rounded ${
              isListening ? "bg-red-500" : "bg-blue-500"
            } text-white`}
            onClick={handleVoiceInput}
          >
            {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
          </button>
        </span>

        <p className="lg:text-xs text-gray-400 text-center text-[10px]">
          Free Research Preview. Ally Global Services
        </p>
      </div>
    </div>
  );
}

export default ChatContainer;
