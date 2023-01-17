import { Link as LinkScroll } from "react-scroll";
import React, { useState, useEffect } from "react";

export default function MobileMenu() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <div id="mobile-menu" className={"menu" + scrollActive}>
        <ul className="mobileNav">
          <li>
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
                "px-4 py-2 mx-2 cursor-pointer  inline-block text-white relative" +
                (activeLink === "about" ? " text-white " : " text-black-500")
              }
            >
              Танилцуулга
            </LinkScroll>
          </li>
          <li>
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
                "px-4 py-2 mx-2 cursor-pointer text-white inline-block relative" +
                (activeLink === "step" ? " text-white" : " text-black-500  ")
              }
            >
              Хөрөнгө оруулагч
            </LinkScroll>
          </li>
        </ul>
      </div>
    </>
  );
}
