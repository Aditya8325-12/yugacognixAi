import Link from "next/link";
import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
type DashboardNavBarProps = {
  sidebar: () => void; // function prop
};

const DashboardNavBar: React.FC<DashboardNavBarProps> = ({ sidebar }) => {
  return (
    <div className="fixed z-50 h-1/12 w-full bg-white shadow-xl flex items-center justify-between">
      <div className="flex items-center justify-start gap-2 px-6">
        <button
          onClick={() => {
            sidebar();
          }}
          className="cursor-pointer"
        >
          <AiOutlineAlignLeft className="h-6 w-6 text-gray-600 hover:text-gray-900" />
        </button>
        <Link href="/" className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent font-play">
            YugaCognix Ai
          </h1>
          {/* <p>Finance Control Tower</p> */}
        </Link>
      </div>
      <div className="flex items-center pr-8 gap-3 ">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              {" "}
              Financial Score Card
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Analytics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Action Manager
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white bg-sky-700 rounded lg:bg-transparent lg:text-sky-700 lg:p-0 dark:text-white"
              aria-current="page"
            >
              insightsGPT{" "}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Smart Contract Assist
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavBar;
