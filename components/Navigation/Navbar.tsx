"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./nav.css";
import { getNavigationLinks } from "@/lib/Links";
import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import LanguageSwitch from "./languageSwitch";
import { useLocale } from "next-intl";
import Drawer from "@mui/joy/Drawer";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = React.useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const localeActive = useLocale();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = currentScrollPos < prevScrollPos;

    setVisible(isScrolledDown);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navigationLinks = getNavigationLinks(localeActive);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <>
      <nav
        className={`bg-white flex place-content-between sm:px-8 px-4 w-full py-2 fixed z-40 ${
          open ? "shadow-none" : "shadow-md"
        } ${visible ? "transleteNavUp" : "transleteNav"}`}
      >
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="font-arbutus font-black text-2xl text-yellow">
            <span className="text-dark_blue_black">Villa</span>
            Bergi
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="lg:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <ul className="flex gap-4 items-center">
              {navigationLinks.NavData.map((item, index) => (
                <li
                  key={index}
                  className={`${pathname === item.path ? "" : "hover_nav"}`}
                >
                  <Link
                    href={item.path}
                    className={`nav_list ${
                      pathname === item.path ? "active_nav" : ""
                    }`}
                  >
                    {item.titles}
                  </Link>
                </li>
              ))}
              <li>
                <LanguageSwitch />
              </li>
              <li>
                <Link href="/contact" className="btn">
                  {navigationLinks.NavData[0].button}
                  <MdKeyboardDoubleArrowRight />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex relative" ref={navRef}>
          <button className=" z-50">
            <Hamburger
              toggled={open}
              toggle={setOpen}
              label="Show menu"
              size={24}
              color="#343a40"
              rounded
            />
          </button>
        </div>
      </nav>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        className=" drawer_custom translate-y-[64px] !z-30"
      >
        <div className={`bg-white w-full px-3  py-3 shadow-md`}>
          <ul className="flex flex-col gap-4">
            {navigationLinks.NavData.map((item, index) => (
              <li key={index} className={`flex `}>
                <Link
                  href={item.path}
                  className={`nav_list ${
                    pathname === item.path ? "active_nav" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <div
                    className={` ${
                      pathname === item.path ? "active_nav" : "hover_nav"
                    }`}
                  >
                    {item.titles}
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitch />
            </li>
            <li className="flex" onClick={() => setOpen(false)}>
              <Link href="/contact" className="btn pb-2">
                {navigationLinks.NavData[0].button}
                <MdKeyboardDoubleArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
