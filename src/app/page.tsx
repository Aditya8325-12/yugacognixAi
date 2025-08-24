"use client";
import React from "react";
import MiniNavBar from "@/components/MiniNavBar";
import FaqAccordion from "@/components/data/Data";
import Info from "@/components/data/Info";
const page = () => {
  return (
    <div className="w-full  ">
      <MiniNavBar />

      <div className="w-full    flex justify-between gap-4 mt-4 ">
        <div className="w-3/12">
          <FaqAccordion />
        </div>
        <div className="w-9/12 bg-blue-500 rounded-md  ">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default page;
