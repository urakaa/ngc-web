import MobileMenu from "./mobile-menu";
import MobileMenuButton from "./mobine-menu-button";
import React, { useState, useEffect } from "react";

import LogoCommon from "components/common/logo";

import { Link as LinkScroll } from "react-scroll";

export default function Header() {
  const [menuState, setMenu] = useState(false);

  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const toggleMenu = () => {
    setMenu(!menuState);
  };

  return (
    <header className={"header" + (scrollActive ? " shadow-md pt-0 " : "")}>
      <div>
        <nav className="nav">
          <LogoCommon />
        </nav>
        <div className="flex-action">
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("about");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block text-white relative" +
              (activeLink === "about"
                ? " text-[#f58521] animation-active"
                : " text-black-500 hover:text-[#f58521]")
            }
          >
            Танилцуулга
          </LinkScroll>

          <LinkScroll
            activeClass="active"
            to="step"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("step");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover text-white inline-block relative" +
              (activeLink === "step"
                ? " text-[#f58521] animation-active"
                : " text-black-500 hover:text-[#f58521]")
            }
          >
            Хөрөнгө оруулагч
          </LinkScroll>

          <button className="mx-2 bg-[#f584213e] hover:text-[divide-gray-100] text-white border-[#f584213e] lg:text-[15px] md:text-[10px]  rounded-[8px]  px-[16px] text-center py-[12px]   font-bold  hover:bg-[#f58521] hover:ring-sky-[#f58521] ">
            Нэвтрэх
          </button>
        </div>
        {/* <!-- mobile menu button --> */}
        <MobileMenuButton menuState={menuState} togMenu={toggleMenu} />
        {/* <!-- mobile menu --> */}
        {menuState ? <MobileMenu /> : null}
      </div>
    </header>
  );
}
