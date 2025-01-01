import React from "react";
import personIcon from "ally-fe/src/assets/person1.png"

const WhyAllyBox = ({ why, description }) => {
    return (
        <div className="flex items-center space-x-4">
            <img src={personIcon} alt="Enhanced Productivity" className="w-20 h-20 rounded-full"/>
            <div>
              <h3 className="text-xl font-semibold text-white">{why}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default WhyAllyBox;