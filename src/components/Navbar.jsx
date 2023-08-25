import React, { useState } from "react";
import { navLinks } from "../constants";
import AstroMet_Logo from "../assets/logo/ASTROMET white_074730.png";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const location = useLocation();

  const [activeSubMenuId, setActiveSubMenuId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubMenuClick = (subLinkId) => {
    if (activeSubMenuId === subLinkId) {
      setActiveSubMenuId(null);
    } else {
      setActiveSubMenuId(subLinkId);
    }
  };

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className={`w-full py-2 md:flex md:justify-between md:items-center navbar font-Roboto  flex-nowrap fixed z-20 bg-black opacity-90`}
    >
      <div className="flex justify-between items-center">
        <img
          src={AstroMet_Logo}
          alt="AstroMet-Logo"
          className="h-[40px]  inline mx-10"
        />
        {mobileMenuOpen ? (
          <IconX
            size={36}
            stroke={3}
            strokeLinejoin="miter"
            className="cursor-pointer md:hidden block mx-10"
            onClick={handleMobileMenuClick}
          />
        ) : (
          <IconMenu2
            size={36}
            stroke={3}
            strokeLinejoin="miter"
            className="cursor-pointer md:hidden block mx-10"
            onClick={handleMobileMenuClick}
          />
        )}
      </div>
      <ul
        className={`list-none md:flex md:items-center md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  ${
          mobileMenuOpen
            ? "top-14 bg-black opacity-100"
            : "top-[-400px] opacity-0"
        } transition-all ease-in duration-700`}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            style={{ whiteSpace: "nowrap" }}
            className={`hover:text-[#00CAC8] duration-200 px-4 md:w-auto py-2 font-bold cursor-pointer text-lg  ${
              index === navLinks.length - 1 ? `mr-0` : `md:w-auto`
            } `}
            onMouseEnter={() => handleSubMenuClick(nav.id)}
            onMouseLeave={() => handleSubMenuClick(null)}
          >
            <div className="md:relative">
              {nav.subLinks ? (
                <div
                  className="w-full h-full p-2"
                  style={{
                    pointerEvents: activeSubMenuId === nav.id ? "auto" : "none",
                  }}
                >
                  <span className="w-full h-full relative z-20 flex items-center">
                    {nav.title} <IconChevronDown />
                  </span>
                </div>
              ) : location.pathname === "/" ? (
                <ScrollLink
                  to={nav.id}
                  smooth={true}
                  className="block w-full h-full p-2"
                >
                  <span className=" w-full h-full z-2">{nav.title}</span>
                </ScrollLink>
              ) : (
                <RouterLink
                  to={nav.id === "Contents" ? "/Contents" : `/${nav.id}`}
                  className="block w-full h-full p-2"
                >
                  <span className=" w-full h-full z-2">{nav.title}</span>
                </RouterLink>
              )}
              {nav.subLinks && activeSubMenuId === nav.id && (
                <ul className="md:absolute top-full mt-2 py-2 px-8 bg-black opacity-100 shadow-md">
                  {nav.subLinks.map((subLink) => (
                    <li key={subLink.id}>
                      {location.pathname.includes(nav.id) &&
                      location.pathname.includes(subLink.id) ? (
                        <ScrollLink
                          to={`${nav.id}`}
                          smooth={true}
                          duration={1000}
                          className="text-[#ffff] w-full block"
                        >
                          <span className="w-full h-full relative z-2 text-base my-4 hover:text-[#00CAC8] leading-loose">
                            {subLink.title}
                          </span>
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to={subLink.id}
                          className="text-[#ffff] w-full block"
                        >
                          <span className="w-full h-full relative z-2 text-base my-4 hover:text-[#00CAC8] leading-loose">
                            {subLink.title}
                          </span>
                        </RouterLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
