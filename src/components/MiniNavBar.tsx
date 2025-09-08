import React from "react";

const MiniNavBar = ({ onSummaryClick }) => {
  return (
    <div className="w-full pt-6 flex justify-between items-center">
      <div className="flex justify-start items-center gap-2 ">
        <button className="px-4 py-1  bg-gray-400 border border-gray-300 shadow text-white text-sm cursor-pointer rounded-md transition">
          sales
        </button>
        <button className="px-4 py-1  bg-gray-200 border border-gray-300 shadow text-gray-600 text-sm cursor-pointer rounded-md hover:bg-gray-100 transition">
          Profit & Loss
        </button>
        <button className="px-4 py-1  bg-gray-200 border border-gray-300 shadow text-gray-600 text-sm cursor-pointer rounded-md hover:bg-gray-100 transition">
          Receivables
        </button>
        <button className="px-4 py-1  bg-gray-200 border border-gray-300 shadow text-gray-600 text-sm cursor-pointer rounded-md hover:bg-gray-100 transition">
          Paybles
        </button>
        <button className="px-4 py-1  bg-gray-200 border border-gray-300 shadow text-gray-600 text-sm cursor-pointer rounded-md hover:bg-gray-100 transition">
          Cost
        </button>
        <button className="px-4 py-1  bg-gray-200 border border-gray-300 shadow text-gray-600 text-sm cursor-pointer rounded-md hover:bg-gray-100 transition">
          Working Capital Analytics
        </button>
        <button className="px-4 py-1  bg-gray-200 border border-gray-300 shadow text-gray-600 text-sm cursor-pointer rounded-md hover:bg-gray-100 transition">
          Financial Planning & Forecasting
        </button>
        <button className="px-4 py-1  bg-gray-200 border border-gray-300 shadow text-gray-600 text-sm cursor-pointer rounded-md hover:bg-gray-100 transition">
          Tax
        </button>
      </div>

      <div className="flex  justify-end items-center gap-2  text-sm">
        <button
          onClick={onSummaryClick}
          className="px-4 py-1.5   bg-gradient-to-r  from-sky-400 to-blue-600  text-white rounded-md hover:bg-sky-700 transition cursor-pointer"
        >
          {" "}
          Summary
        </button>
        <button className="px-4 py-1.5  bg-gradient-to-r  from-sky-400 to-blue-600  text-white rounded-md hover:bg-sky-700 transition cursor-pointer">
          {" "}
          Upload Data
        </button>
      </div>
    </div>
  );
};

export default MiniNavBar;
