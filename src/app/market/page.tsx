"use client";
import React, { useState } from "react";
import MiniNavBar from "@/components/MiniNavBar";
import FaqAccordion from "@/components/data/Data";
import Info from "@/components/data/Info";
import SearchTab from "@/components/data/SearchTab";
const page = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="w-full">
      <MiniNavBar />
      <div className="w-full flex justify-between h-[82vh] pt-4 gap-4">
        <div className="w-3/12 h-full">
          <FaqAccordion />
        </div>

        {/* Conditionally render */}
        {showInfo ? <Info /> : <SearchTab onEnter={() => setShowInfo(true)} />}
      </div>
    </div>
  );
};

export default page;
