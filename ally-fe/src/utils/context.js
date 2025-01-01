import { createContext, useEffect, useRef, useState } from "react";
import { sendMessageToAI } from "./api";

export const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [showSlide, setShowSlide] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const [chatValue, setChatValue] = useState("");
  const [message, setMessage] = useState([
    {
      text: "Hi! Welcome 😊 to Ally Services! How can I help you?",
      isBot: true,
    },
  ]);
  const msgEnd = useRef(null);

  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  // Send user message and fetch assistant response
  const handleSend = async () => {
    const text = chatValue.trim();
    if (!text) return;

    // Add user message to the chat
    setMessage((prev) => [...prev, { text, isBot: false }]);
    setChatValue("");

    // Fetch assistant response
    const res = await sendMessageToAI(text);
    setMessage((prev) => [...prev, { text: res, isBot: true }]);
  };

  // Handle key press (Enter to send)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <ContextApp.Provider
      value={{
        showSlide,
        setShowSlide,
        Mobile,
        setMobile,
        chatValue,
        setChatValue,
        handleSend,
        handleKeyPress,
        message,
        msgEnd,
      }}
    >
      <div>
        {children}
        {/* Attach the ref for scrolling */}
        <div ref={msgEnd} />
      </div>
    </ContextApp.Provider>
  );
};

export default AppContext;
