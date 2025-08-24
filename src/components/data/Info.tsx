import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoMdImages } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";

const Info = () => {
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
    <div className=" bg-white p-4 relative pb-16 shadow-lg rounded-md   ">
      <div className="w-full overflow-y-scroll h-[65vh]">
        {/* Chart */}
        <div className="w-full ">
          <Chart options={options} series={series} type="bar" height={300} />
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 ">
            This chart displays the top five product categories ranked by net
            sales value. <span className="font-medium">Cold Beverages</span>{" "}
            lead the category, followed by{" "}
            <span className="font-medium">Bread</span> and{" "}
            <span className="font-medium">Biscuits & Confectionery</span>. The
            data suggests that seasonal trends and promotional campaigns
            strongly impact the ranking, with bakery-related products
            consistently performing well. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Sequi veniam, facere itaque,
            aspernatur aliquid cum, nesciunt soluta ipsum at quos laudantium
            deleniti. Corrupti quasi saepe doloribus in tempore dolorum
            exercitationem nulla ad adipisci id ipsa dignissimos vero blanditiis
            repellendus porro, deserunt deleniti iste? Eum molestias dolorum
            eius placeat nobis neque iste repellat? Aliquam, suscipit maxime.
            Magnam molestias ut natus quasi itaque! Deserunt eius sint quisquam
            recusandae corrupti mollitia reiciendis aliquid quos natus deleniti
            ex rerum ab totam repudiandae, aut corporis praesentium Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Enim repellat libero
            modi corrupti delectus deserunt provident dolore, aut alias est
            cumque quis facere consectetur aperiam eaque? Aperiam tempore,
            voluptas id corporis pariatur quae fugiat minima libero sunt,
            laborum impedit assumenda accusamus incidunt voluptates consequuntur
            beatae deserunt ipsam. Iure vel dolore reiciendis minus tempore
            voluptas sequi blanditiis voluptatem exercitationem temporibus error
            provident asperiores nostrum unde iusto et, distinctio enim
            laudantium doloribus eveniet magnam suscipit aliquam? Obcaecati
            voluptas quae odio et inventore veritatis, pariatur blanditiis unde
            natus id eius sunt ratione, vel atque eum esse odit autem nisi
            perspiciatis hic. Cum quae quaerat minus eaque natus eveniet
            voluptatem provident aliquid est repellat, eius libero maxime quis
            ad cupiditate aut voluptatibus magnam ducimus repellendus, dolor
            aliquam! Labore accusantium distinctio eveniet, excepturi animi quia
            error officiis harum numquam voluptas quibusdam nesciunt mollitia
            quae amet laboriosam perspiciatis, tempora ipsum consectetur rem?
            Quam dolorem, commodi nesciunt dolorum cum et facilis non facere
            repellendus dicta maiores saepe ea porro quod accusamus voluptatem
            dolore laudantium vero, blanditiis sunt, magnam eaque! Sunt
            aspernatur nesciunt quaerat unde iusto voluptatum tempore hic
            ducimus saepe ipsam quos accusamus quae deserunt eveniet ullam nulla
            mollitia fugit ut eaque totam similique, tenetur, at perferendis
            dignissimos? Ipsum nobis nulla incidunt et numquam explicabo
            architecto eaque tempora, minus repellat doloribus, delectus fugiat!
            Non provident ipsam voluptatibus voluptate laudantium, nemo, et
            delectus nisi molestiae nobis veritatis suscipit adipisci nam
            tempora nostrum iste. Odit commodi dolore suscipit eaque libero
            provident ea laudantium ab soluta voluptates quia praesentium
            consequatur incidunt sit tenetur, quo dignissimos quas accusantium,
            perspiciatis, iure fugit quibusdam. Magnam, nihil? Nulla quasi
            voluptatum numquam debitis excepturi, asperiores magnam unde ipsam
            officia ullam sapiente fuga enim deleniti ut porro iusto atque vel
            necessitatibus blanditiis esse odio ad. Dolor, qui consequuntur. Quo
            blanditiis ea quibusdam cumque, deleniti qui explicabo modi
            perspiciatis accusantium laboriosam suscipit dicta numquam commodi
            reprehenderit in quod voluptatum alias architecto ipsam consequatur
            sunt animi error? Dolor adipisci vitae doloremque facilis? Aperiam,
            ex at aspernatur reprehenderit odit officiis atque, aliquam sint
            ipsa minima alias culpa quaerat. Dolorum, saepe? Atque quasi
            consectetur non asperiores blanditiis facere dolores reprehenderit
            impedit totam unde quam repudiandae tempora ipsum iure, alias rem
            quod odio optio id illo ipsam cupiditate corporis aliquid quo.
            Voluptatem iste nostrum quam consequuntur exercitationem ab officiis
            possimus tenetur totam optio necessitatibus aut, fuga temporibus
            laborum officia praesentium animi beatae doloribus quo aspernatur
            accusantium repudiandae. Ut illo nam doloremque!
          </p>
        </div>
      </div>

      {/* search bar  */}

      <div className="w-full pt-6 flex items-center gap-6 absolute bottom-0 left-0 px-4 pb-4 ">
        <div className="bg-white w-full flex items-center text-gray-600 rounded-md px-3.5 border border-gray-200 focus-within:outline outline-2 outline-sky-500">
          <BsEmojiSmile className="text-2xl cursor-pointer" />
          <input
            name="message"
            className="w-full px-3.5 py-2 text-gray-600 bg-white outline-none sm:text-sm"
            placeholder="Message"
          />
          <IoMdImages className="text-2xl cursor-pointer" />
          <input type="file" className="hidden" />
        </div>

        <button className="flex-none rounded-md bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400">
          Send
        </button>
      </div>
    </div>
  );
};

export default Info;
