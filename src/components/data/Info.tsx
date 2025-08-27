import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { PiDotsThreeVerticalBold } from "react-icons/pi";

import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { TiPinOutline } from "react-icons/ti";
import { GiSoundWaves } from "react-icons/gi";
import { PiFileCode } from "react-icons/pi";

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
    <div className="bg-white shadow border border-slate-100 rounded-md w-9/12 pt-4 h-full flex flex-col justify-center items-center pl-4">
      <div className="w-full h-11/12  overflow-auto pr-4 pt-4 pb-4 ">
        <div className="w-full flex justify-end items-center ">
          <h1 className="px-2 py-2 bg-slate-300 rounded-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, laborum.
          </h1>
        </div>

        <div className="w-full flex justify-between mt-4">
          <div className="w-11/12 bg-white shadow-lg border border-slate-200  rounded-md  p-4 ">
            <div className="w-full ">
              <Chart
                options={options}
                series={series}
                type="bar"
                height={300}
              />
            </div>
            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              totam animi sint autem voluptatibus dicta cumque tempore?
              Perferendis architecto qui sequi veritatis? Quas, earum mollitia
              quod ea eveniet quae dignissimos non alias. Velit, animi?
              Cupiditate nostrum molestias deleniti asperiores dolorum, aliquam
              exercitationem recusandae commodi animi amet minima dolorem porro
              velit reprehenderit maiores dolores, est tempora iusto mollitia ab
              ipsa? Iste molestias quidem, recusandae alias illum quibusdam
              laudantium cupiditate voluptas odio expedita neque fuga quae quo
              eum deserunt deleniti? Nulla deserunt dolore accusamus omnis
              maxime? Nam velit dolore vero quo, quam sed aut reprehenderit odit
              cum dolorum! Provident fugiat omnis qui sunt corrupti, a, esse
              ipsum deserunt maiores minima ipsam sit porro praesentium placeat
              ex sequi. Excepturi nobis cupiditate ipsum? Ducimus vitae rem
              numquam! Sint quis laudantium, possimus esse provident odio id,
              doloribus quisquam facilis ducimus magni sit rem in incidunt quam,
              pariatur ad eius! Corporis dicta illum nam architecto obcaecati.
              Quis expedita temporibus quidem corrupti tempora, numquam dolor
              suscipit aliquam itaque provident labore molestiae? Corporis autem
              similique veritatis amet sit! Veniam reprehenderit dolorum et modi
              id quo labore fugiat dicta? Quasi numquam officiis nesciunt
              quibusdam consectetur quo nisi dolor fugit velit incidunt, facere
              itaque beatae, non accusamus vitae eveniet minus cum dolores.
              Commodi laudantium eum dicta odit nulla, possimus harum reiciendis
              omnis ad distinctio nisi deserunt architecto deleniti eius illo
              autem. Rerum optio voluptatibus mollitia eius molestias iure
              perspiciatis earum dignissimos quam nihil possimus corporis
              aliquam non at ipsum itaque quas officiis, unde excepturi saepe
              fugiat dicta, nam tempora? Quaerat distinctio quis aperiam vitae
              corporis perferendis similique accusantium soluta maxime ullam,
              incidunt numquam recusandae magni, cumque possimus dolorum! Sequi
              magni vitae enim modi dolore! Quis, vel non. Rerum unde pariatur
              tempore doloribus, reprehenderit nam consectetur quas in rem
              provident vel possimus voluptates, fugit quam dolor quis quos
              saepe, necessitatibus quo. Vero, dolor quasi expedita adipisci
              minima facere corporis odio. Cumque ab rerum possimus vel quod
              porro nulla voluptatibus, eius pariatur id? Nostrum, sed deleniti
              commodi repudiandae alias animi earum amet eum maxime saepe.
              Aspernatur, harum tempore! Ipsam iure dolores sequi tempore rem
              vero quisquam neque quas corporis blanditiis excepturi, iusto
              nulla officia illum odit dolore delectus, exercitationem natus
              numquam ab et ipsa voluptates deserunt dignissimos. Exercitationem
              totam consectetur consequatur nobis, quisquam velit minus libero
              dolorum autem corrupti dolor ratione, accusantium aliquid
              corporis. Repudiandae error suscipit molestias exercitationem!
              Eaque recusandae, mollitia placeat a suscipit minus voluptate
              aperiam possimus dolore, optio nobis laudantium animi ex ducimus
              veritatis minima, rerum vel obcaecati blanditiis explicabo totam
              sapiente! Assumenda ad nobis nesciunt. Doloribus incidunt atque
              commodi quis ab illum animi rem, quisquam magnam omnis amet natus
              perferendis optio similique a facilis cumque nostrum saepe
              repudiandae eum sit. Aut saepe obcaecati dicta reiciendis fugit
              cupiditate unde quaerat? Ab earum autem architecto, voluptatum
              possimus optio inventore saepe explicabo sed itaque odio veritatis
              dolorum. Iusto nulla ipsa sed eius beatae. Earum vero dolores
              explicabo velit enim dolorem eaque commodi voluptas eveniet?
              Ipsam, voluptate quos quas accusantium enim nulla aspernatur,
              natus animi voluptas maiores, dolore nesciunt laborum laudantium
              accusamus.
            </div>
          </div>
          <div className="w-1/12  h-full flex flex-col gap-2 items-start  pl-2 pt-1">
            <div className="w-10 h-10 bg-slate-200 cursor-pointer rounded-full flex items-center justify-center">
              <PiFileCode className="text-gray-600" />
            </div>
            <div className="w-10 h-10 bg-slate-200 cursor-pointer rounded-full flex items-center justify-center">
              <TiPinOutline className="text-gray-600" />
            </div>
            <div className="w-10 h-10 bg-slate-200 cursor-pointer rounded-full flex items-center justify-center">
              <BiLike className="text-gray-600" />
            </div>
            <div className="w-10 h-10 bg-slate-200 cursor-pointer rounded-full flex items-center justify-center">
              <BiDislike className="text-gray-600" />
            </div>
            <div className="w-10 h-10 bg-slate-200 cursor-pointer rounded-full flex items-center justify-center">
              <GiSoundWaves className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* search  bar  */}
      <div className="w-full flex items-center gap-6  bottom-0 left-0  pb-4 pr-4 ">
        <div className="bg-slate-200 w-full flex items-center text-gray-600 rounded-md px-3.5 py-1 border border-gray-200  ">
          <input
            name="message"
            className="w-full px-3.5 py-2 text-gray-600 bg-slate-200 outline-none sm:text-sm"
            placeholder="Type here ...."
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
