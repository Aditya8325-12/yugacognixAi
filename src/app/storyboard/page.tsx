"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { GrPowerCycle } from "react-icons/gr";
import { MdFileDownload } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { TiPinOutline } from "react-icons/ti";

const page = () => {
  const [showInfo, setShowInfo] = useState(false);
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 6,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Sales", "Honeel", "Sarace", "Serice"],
    },
    legend: {
      position: "bottom",
      labels: { colors: "#374151" }, // gray-700 text
    },
    colors: ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"],
  };

  const series = [
    {
      name: "Cold Beverages",
      data: [700, 800, 900, 750],
    },
    {
      name: "Bread",
      data: [500, 600, 400, 300],
    },
    {
      name: "Biscuits & Confectionery",
      data: [300, 500, 200, 450],
    },
    {
      name: "Sweet Bakery",
      data: [200, 300, 500, 400],
    },
    {
      name: "Other Quickbread Food",
      data: [150, 250, 350, 200],
    },
  ];
  return (
    <div className="w-full p-4 ">
      <div className="w-full flex justify-between h-[86vh]     gap-4">
        <div className="w-8/12 h-full   grid grid-cols-2 grid-rows-2 gap-2">
          <div className="bg-white shadow rounded-md  pb-2 relative ">
            <Chart
              options={options}
              series={series}
              type="bar"
              height="100%"
              width="100%"
            />

            <TiPinOutline className="text-gray-600 absolute top-2 right-2 w-6 h-6 " />
          </div>
          <div className="bg-white shadow rounded-md  pb-2 relative ">
            <Chart
              options={options}
              series={series}
              type="bar"
              height="100%"
              width="100%"
            />
            <TiPinOutline className="text-gray-600 absolute top-2 right-2 w-6 h-6 " />
          </div>
          <div className="bg-white shadow rounded-md  pb-2 relative ">
            <Chart
              options={options}
              series={series}
              type="bar"
              height="100%"
              width="100%"
            />
            <TiPinOutline className="text-gray-600 absolute top-2 right-2 w-6 h-6 " />
          </div>
          <div className="bg-white shadow rounded-md  pb-2 relative ">
            <Chart
              options={options}
              series={series}
              type="bar"
              height="100%"
              width="100%"
            />
            <TiPinOutline className="text-gray-600 absolute top-2 right-2 w-6 h-6 " />
          </div>
        </div>

        <div className="w-4/12 bg-white  p-4 border border-slate-200 rounded-md shadow-xl ">
          <div className="w-full h-11/12 overflow-y-auto">
            <h1 className="font-bold text-gray-600 my-4">
              1.Lorem ipsum dolor sit.
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              iure alias, similique nesciunt necessitatibus eius provident vitae
              inventore dolores aliquid dolor unde voluptas qui voluptate
              veritatis vel pariatur illum optio tenetur. Odio corrupti deserunt
              harum architecto blanditiis dolorum! Expedita placeat atque
              tenetur? Nisi ipsa quidem voluptatem unde obcaecati voluptatum qui
              culpa, nulla reiciendis at nam soluta, incidunt quaerat ab ullam
              vel! Magni nam deserunt nesciunt, repellendus enim quibusdam
              molestias molestiae et autem perspiciatis nisi ad ex optio quia
              sit dolorem illo? Harum sed accusamus, consectetur asperiores
              voluptates eligendi natus explicabo, corrupti, doloribus cumque
              doloremque incidunt aliquid libero qui labore nostrum?
            </p>
            <h1 className="font-bold text-gray-600 my-4">
              2.Lorem ipsum dolor sit.
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              iure alias, similique nesciunt necessitatibus eius provident vitae
              inventore dolores aliquid dolor unde voluptas qui voluptate
              veritatis vel pariatur illum optio tenetur. Odio corrupti deserunt
              harum architecto blanditiis dolorum! Expedita placeat atque
              tenetur? Nisi ipsa quidem voluptatem unde obcaecati voluptatum qui
              culpa, nulla reiciendis at nam soluta, incidunt quaerat ab ullam
              vel! Magni nam deserunt nesciunt, repellendus enim quibusdam
              molestias molestiae et autem perspiciatis nisi ad ex optio quia
              sit dolorem illo? Harum sed accusamus, consectetur asperiores
              voluptates eligendi natus explicabo, corrupti, doloribus cumque
              doloremque incidunt aliquid libero qui labore nostrum?
            </p>
          </div>

          <div className="  w-full flex justify-start items-center gap-2 text-sm  text-gray-600 my-2">
            <button className="flex justify-center items-center px-2 py-1 bg-gray-400 rounded-md gap-2 ">
              <p>Resources</p>
              <GrPowerCycle />
            </button>
            <button className="flex justify-center items-center px-2 py-1 bg-gray-400 rounded-md gap-2 ">
              <p>Download</p>
              <MdFileDownload />
            </button>
            <button className="flex justify-center items-center px-2 py-1 bg-gray-400 rounded-md gap-2 ">
              <p>Share</p>
              <FaShareNodes />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
