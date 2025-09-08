import React, { useState } from "react";
import { MdClose } from "react-icons/md"; // Close Icon

const Summary = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Cost Drivers");

  // Dummy data for each tab
  const summaryData = {
    Small:
      "This is the summary for Small. It contains insights for short-term business impacts.",
    Medium:
      "This is the summary for Medium. It focuses on medium-term strategies and growth potential.",
    Long: "This is the summary for Long. It highlights long-term forecasting and sustainability goals.",
    "Cost Drivers":
      "This is the summary for Cost Drivers. It explains the main factors contributing to costs such as Net Sales Value and Billing Quantity.",
    "Growth Strategies":
      "This is the summary for Growth Strategies. It includes ideas like expanding product lines, entering new markets, and optimizing marketing campaigns.",
    "Planning Analysis":
      "This is the summary for Planning Analysis. It covers financial planning, resource allocation, and strategic decision making.",
    Variance:
      "This is the summary for Variance. It discusses differences between actual and expected results with a focus on identifying root causes.",
  };

  return (
    <div className="w-11/12 md:w-9/12 mx-auto bg-white shadow-lg rounded-lg p-6 relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer"
      >
        <MdClose size={22} />
      </button>

      <h1 className="text-gray-600 text-xl font-semibold pb-4">Summary</h1>

      {/* Tabs */}
      <div className="flex gap-4 text-sm font-medium  pb-2 mb-4 overflow-x-auto">
        {Object.keys(summaryData).map((tab) => (
          <button
            key={tab}
            className={` cursor-pointer font-semibold text-gray-400 ${
              activeTab === tab
                ? "bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent border-b-2 border-sky-500"
                : "text-gray-500 hover:text-sky-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Summary Content */}
      <div className="text-sm text-gray-700 leading-relaxed">
        <p>{summaryData[activeTab]}</p>
      </div>
    </div>
  );
};

export default Summary;
