import React, { useState } from "react";
import { SiCodefresh } from "react-icons/si";
import { LuCircleFadingArrowUp } from "react-icons/lu";

const SearchTab = ({ onEnter }: { onEnter: () => void }) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      onEnter(); // call parent function to show Info
    }
  };

  return (
    <div className="bg-white shadow border border-slate-100 rounded-md w-9/12 pt-4 h-full flex flex-col justify-center items-center pl-4">
      <SiCodefresh className="text-8xl text-blue-600" />
      <h1 className="text-gray-600 font-bold text-4xl font-sans">
        How can I help you today?
      </h1>

      {/* search bar */}
      <div className="w-full flex items-center pb-4 pr-4 px-8 py-8">
        <div className="bg-slate-200 w-full flex items-center text-gray-600 rounded-md px-2 pr-4 py-1 border border-gray-200">
          <input
            name="message"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-3.5 py-2 text-gray-600 bg-slate-200 outline-none sm:text-sm"
            placeholder="Type here ...."
          />
          <LuCircleFadingArrowUp
            className="cursor-pointer text-2xl"
            onClick={() => query.trim() !== "" && onEnter()}
          />
        </div>
      </div>

      <div className="w-full px-8 pb-4 pr-4 gap-4 grid grid-cols-2 mt-6">
        <div className="border border-slate-300 shadow-xl p-4 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          numquam.
        </div>
        <div className="border border-slate-300 shadow-xl p-4 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          numquam.
        </div>
        <div className="border border-slate-300 shadow-xl p-4 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          numquam.
        </div>
        <div className="border border-slate-300 shadow-xl p-4 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          numquam.
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
