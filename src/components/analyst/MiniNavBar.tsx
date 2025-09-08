import React from "react";

const MiniNavBar = ({ onSummaryClick }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex w-full pr-4 justify-start items-center ">
        <input
          className="appearance-none border-2 pl-4 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-1.5 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="flex  justify-end items-center gap-2  text-sm">
        <button
          onClick={onSummaryClick}
          className="px-4 py-1.5   bg-gradient-to-r  from-sky-400 to-blue-600  text-white rounded-md hover:bg-sky-700 transition cursor-pointer"
        >
          Summary
        </button>
        <button className="px-4 py-1.5  bg-gradient-to-r  from-sky-400 to-blue-600  text-white rounded-md hover:bg-sky-700 transition cursor-pointer">
          Upload
        </button>
        <button className="px-4 py-1.5   bg-gradient-to-r  from-sky-400 to-blue-600  text-white rounded-md hover:bg-sky-700 transition cursor-pointer">
          Compare
        </button>
        <button className="px-4 py-1.5  bg-gradient-to-r  from-sky-400 to-blue-600  text-white rounded-md hover:bg-sky-700 transition cursor-pointer">
          Clear
        </button>
        <button className="px-4 py-1.5   bg-gradient-to-r  from-sky-400 to-blue-600  text-white rounded-md hover:bg-sky-700 transition cursor-pointer">
          Reset
        </button>
      </div>
    </div>
  );
};

export default MiniNavBar;
