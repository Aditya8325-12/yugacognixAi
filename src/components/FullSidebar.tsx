import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FiDatabase } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const getLinkClasses = (path: string, currentPath: string) => {
  let isActive = false;

  isActive = currentPath === path;

  return {
    li: `mt-0.5 w-full`,
    link: isActive
      ? "py-2 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white border border-slate-200 shadow-xl px-4 font-semibold text-slate-700 transition-colors"
      : "py-1.5 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors",
    iconWrapper: isActive
      ? "bg-gradient-to-tl from-sky-400 to-blue-500 shadow-soft-2xl mr-2 flex items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 transition-all duration-300 ease-in-out"
      : "shadow-soft-2xl mr-2 flex items-center justify-center rounded-lg bg-white border border-slate-200 bg-center stroke-0 text-center xl:p-2.5",
    iconClass: isActive ? "text-md text-white" : "text-lg text-gray-600",
  };
};

const FullSidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Data",
      href: "/",
      icon: <FiDatabase className="text-gray-600" />,
    },
    {
      label: "Market",
      href: "/market",
      icon: <IoSearch className="text-gray-600" />,
    },
    {
      label: "Analyst",
      href: "/analyst",
      icon: <RiUserSearchLine className="text-gray-600" />,
    },
    {
      label: "Story Board",
      href: "/storyboard",
      icon: <MdOutlineDashboardCustomize className="text-gray-600" />,
    },
  ];
  return (
    <div className="h-full w-96  transition-all duration-300 font-play">
      <aside className="max-w-62.5 inset-y-0 my-4 ml-2 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
        <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
          <ul className="flex flex-col pl-0 mb-0">
            {navItems.map(({ label, href, icon }) => {
              const { li, link, iconWrapper, iconClass } = getLinkClasses(
                href,
                pathname
              );
              return (
                <li key={label} className={li}>
                  <Link href={href} className={link}>
                    <div className={iconWrapper}>
                      {React.cloneElement(icon, { className: iconClass })}
                    </div>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-gray-600">
                      {label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default FullSidebar;
