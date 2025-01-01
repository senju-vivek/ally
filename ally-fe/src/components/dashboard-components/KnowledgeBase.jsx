import { Send } from 'lucide-react';
import { useState } from 'react';

function KnowledgeBase() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() !== "") {
            setMessages([...messages, { text: input, isUser: true }]);
            setInput("");  
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-100 border border-gray-300 rounded-md">
     
    <div className="bg-white text-black p-2">
        <h1 className="font-bold text-sm">Knowledge Base</h1>
    </div>

     
    <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {messages.map((message, index) => (
            <div
                key={index}
                className={`p-3 rounded-lg ${
                    message.isUser
                        ? "bg-blue-500 text-white self-end"
                        : "bg-gray-300 self-start"
                }`}
            >
                {message.text}
            </div>
        ))}
    </div>

     
    <div className="bg-white p-2 flex items-center border-t">
        <input
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-lg outline-none mr-2"
        />
        <button
            onClick={handleSend}
            className="bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center"
        >
            <Send size={20} />
        </button>
    </div>
</div>

    );
}

export default KnowledgeBase;
