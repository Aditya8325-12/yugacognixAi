import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FiDatabase } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const MiniSideBar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <FiDatabase /> },
    { href: "/market", icon: <IoSearch /> },
    { href: "/analyst", icon: <RiUserSearchLine /> },
    { href: "/storyboard", icon: <MdOutlineDashboardCustomize /> },
  ];
  return (
    <div className="h-full w-20 transition-all duration-300">
      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0 items-center pt-4 gap-4 ">
          {navItems.map(({ href, icon }, index) => {
            const isActive = pathname === href;
            const wrapperClass = `flex items-center justify-center  rounded-lg stroke-0 text-center xl:p-2.5 transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-gradient-to-tl from-sky-400 to-blue-500 shadow-soft-2xl"
                : "bg-white border border-slate-200 shadow-soft-2xl"
            }`;

            const iconClass = `text-md transition-colors duration-300 ${
              isActive ? "text-white" : "text-slate-700"
            }`;

            return (
              <li key={index}>
                <Link href={href}>
                  <div className={wrapperClass}>
                    {React.cloneElement(icon, { className: iconClass })}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MiniSideBar;
