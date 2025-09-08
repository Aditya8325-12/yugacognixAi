"use client";
import React, { useState } from "react";
import MiniNavBar from "@/components/MiniNavBar";
import FaqAccordion from "@/components/data/Data";
import Info from "@/components/data/Info";
import SearchTab from "@/components/data/SearchTab";
import Summary from "@/components/data/Summary";
const Page = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  return (
    <div className="w-full">
      <MiniNavBar onSummaryClick={() => setShowSummary(true)} />
      <div className="w-full flex justify-between h-[82vh] pt-4 gap-4">
        <div className="w-3/12 h-full">
          <FaqAccordion />
        </div>

        {showSummary ? (
          <Summary onClose={() => setShowSummary(false)} />
        ) : showInfo ? (
          <Info />
        ) : (
          <SearchTab onEnter={() => setShowInfo(true)} />
        )}
      </div>
    </div>
  );
};

export default Page;
