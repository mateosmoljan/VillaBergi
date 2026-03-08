"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./nav.css";
import { getNavigationLinks } from "@/lib/Links";
import { usePathname } from "next/navigation";
import LanguageSwitch from "./languageSwitch";
import { useLocale } from "next-intl";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const localeActive = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navigationLinks = getNavigationLinks(localeActive);

  return (
    <>
      <nav className={`secondary-bg flex place-content-between sm:px-8 px-4 w-full py-2 fixed z-40 ${open ? "shadow-none" : "shadow-md"} ${visible ? "transleteNavUp" : "transleteNav"}`}>
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/assets/images/logo.png" alt="logo" width={40} height={40} className="object-contain" />
          <p className="font-arbutus font-black text-2xl accent-primary"><span className="text-primary">Villa</span>Bergi</p>
        </Link>

        <div className="lg:flex hidden">
          <ul className="flex gap-4 items-center">
            {navigationLinks.NavData.map((item, index) => (
              <li key={index} className={`${pathname === item.path ? "" : "hover_nav"}`}>
                <Link href={item.path} className={`nav_list ${pathname === item.path ? "active_nav" : ""}`}>{item.titles}</Link>
              </li>
            ))}
            <li><LanguageSwitch /></li>
            <li>
              <Link href="/contact" className="btn">
                {navigationLinks.NavData[0].button}
                <MdKeyboardDoubleArrowRight />
              </Link>
            </li>
          </ul>
        </div>

        <button className="lg:hidden h-10 w-10 rounded-md border border-white/20 flex items-center justify-center" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <span className="text-2xl">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      {open ? (
        <div className="secondary-bg fixed top-16 left-0 right-0 px-3 py-3 shadow-md z-30 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navigationLinks.NavData.map((item, index) => (
              <li key={index} className="flex">
                <Link href={item.path} className={`nav_list ${pathname === item.path ? "active_nav" : ""}`} onClick={() => setOpen(false)}>
                  <div className={`${pathname === item.path ? "active_nav" : "hover_nav"}`}>{item.titles}</div>
                </Link>
              </li>
            ))}
            <li><LanguageSwitch /></li>
            <li className="flex" onClick={() => setOpen(false)}>
              <Link href="/contact" className="btn pb-2">
                {navigationLinks.NavData[0].button}
                <MdKeyboardDoubleArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
