"use client";
import React, { useState } from "react";
import FullSidebar from "./FullSidebar";
import MiniSideBar from "./MiniSideBar";
import DashboardNavBar from "./DashboardNavBar";
interface BodyProps {
  children: React.ReactNode;
}

const Body = ({ children }: BodyProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="w-full bg-slate-200">
      <header className="fixed top-0 left-0 right-0 z-50">
        <DashboardNavBar sidebar={toggleSidebar} />
      </header>
      <div className="w-full flex flex-1 pt-16">
        {/* Fixed Sidebar */}
        <aside
          className={`fixed top-16 left-0 min-h-screen overflow-y-auto  transition-all duration-300 ${
            isSidebarOpen ? "w-64" : "w-20"
          }`}
        >
          {isSidebarOpen ? <FullSidebar /> : <MiniSideBar />}
        </aside>

        {/* Main Content Area */}
        <main
          className={` w-full overflow-y-auto  px-4 pb-2 transition-all duration-300 flex  justify-between ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Body;
