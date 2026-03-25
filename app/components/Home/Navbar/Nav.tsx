"use client";
import { navLinks } from "@/app/Constant/Constant";
import { TbAirBalloon } from "react-icons/tb";
import { HiBars3BottomRight } from "react-icons/hi2";
import react, { useState, useEffect } from "react";
import Link from "next/link";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setnavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setnavBg(true);
      if (window.scrollY < 90) setnavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`${navBg ? "bg-blue-950 shadow-md" : "fixed"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center  flex-col ">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Trip
          </h1>
        </div>
        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p
                className="relative text-white text-sm md:text-base font-medium w-fit block after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-right"
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Book Now
          </button>
          {/* burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
