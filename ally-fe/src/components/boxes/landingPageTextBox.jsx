import React from "react";

const MessageTextBox = ({ feature, description }) => {
    return (
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3 text-white">{feature}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

export default MessageTextBox;