import React from "react";
import personIcon from "ally-fe/src/assets/person1.png"

const ClientBox = ({ clientName }) => {
    return (
        <div className="flex items-center space-x-3 p-2 bg-gray-600 rounded">
            <img
                src={personIcon}
                alt="Client 1"
                className="w-10 h-10 rounded-full"
            />
            <div>
                <p className="font-semibold">{clientName}</p>
            </div>
        </div>
    );
};

export default ClientBox;