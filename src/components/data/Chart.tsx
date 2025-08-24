"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
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
    <div className="bg-white shadow-md rounded-2xl p-4">
      {/* Chart */}
      <div className="w-full">
        <Chart options={options} series={series} type="bar" height={300} />
      </div>

      {/* Description */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          This chart displays the top five product categories ranked by net
          sales value. <span className="font-medium">Cold Beverages</span> lead
          the category, followed by <span className="font-medium">Bread</span>{" "}
          and <span className="font-medium">Biscuits & Confectionery</span>. The
          data suggests that seasonal trends and promotional campaigns strongly
          impact the ranking, with bakery-related products consistently
          performing well.
        </p>
      </div>
    </div>
  );
};

export default BarChart;
