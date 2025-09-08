"use client";
import React, { useState } from "react";
import FaqAccordion from "@/components/data/Data";
import ChatBox from "@/components/analyst/ChatBox";
const page = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between h-[90vh] pt-4 gap-4">
        <div className="w-3/12 h-full">
          <FaqAccordion />
        </div>
        <ChatBox />
      </div>
    </div>
  );
};

export default page;
