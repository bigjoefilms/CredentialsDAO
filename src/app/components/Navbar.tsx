"use client";
import react, { useState } from "react";

import Link from "next/link";
import { NAV__LINKS } from "../../../constants";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <nav className="justify-between  max-container p-6 relative z-30  py-5 font-semibold text-[22px] flex items-center lg:px-[60px]">
      <Link href="/" className="flex items-center text-[25px] tracking-tighter gap-1">
      {/* <Image
        src="/dao.png"
        alt="logo"
        width={402}
        height={402}
       
      /> */}


        Credentials<span className="bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-2 rounded-lg text-[#fff]" > DAO</span>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex font-normal text-[16px]">
        {NAV__LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="items-center cursor-pointer  transition-all hover:font-bold text-[#494848]"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className=" lg:flex hidden gap-4">
        <Button
          type="button"
          title="Login"
           variant="bg-[#111] px-[40px]"
          icon="/user.svg"
        />
          {/* <Button
          type="button"
          title="Login"
          variant="bg-[#111]"
          icon="/user.svg"
        /> */}
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleSidebar}
      />
    

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 flex justify-end transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-64 bg-white h-full p-5 flex flex-col shadow-lg absolute right-0">
          <button
            onClick={toggleSidebar}
            className="self-end mb-5 text-xl font-bold"
          >
           <Image
        src="/close.svg"
        alt="menu"
        width={32}
        height={32}
        className=""
        onClick={toggleSidebar}
      />
          </button>
          <ul className="flex flex-col gap-6 font-normal text-[16px] ">
              {NAV__LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="cursor-pointer transition-all hover:font-bold text-[#494848]"
                  onClick={toggleSidebar} // Close sidebar on link click
                >
                  {link.label}
                </Link>
              ))}
            </ul>

            <div className=" mt-[25px]">
              {/* <Button
                type="button"
                title="Login"
                variant="bg-[#111]"
                icon="/user.svg"
              /> */}
            </div>
        </div>
        <div className="flex-1" onClick={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
