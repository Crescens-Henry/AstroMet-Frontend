import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import AstroMet_Logo from "../assets/logo/ASTROMET white_074730.png";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";

export default function Navbar() {
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
      className={`w-full py-2 md:flex md:justify-between md:items-center navbar font-Roboto  flex-nowrap`}
    >
      <div className="flex justify-between items-center">
        <img
          src={AstroMet_Logo}
          alt="AstroMet-Logo"
          className="h-[40px]  inline"
        />
        {mobileMenuOpen ? ( // Mostrar botón de cierre si el menú está abierto
          <IconX
            size={36}
            stroke={3}
            strokeLinejoin="miter"
            className="cursor-pointer md:hidden block"
            onClick={handleMobileMenuClick}
          />
        ) : (
          // Mostrar botón de menú si el menú está cerrado
          <IconMenu2
            size={36}
            stroke={3}
            strokeLinejoin="miter"
            className="cursor-pointer md:hidden block"
            onClick={handleMobileMenuClick}
          />
        )}
      </div>

      <ul
        className={`list-none md:flex md:items-center md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
          mobileMenuOpen ? "top-10 opacity-100" : "top-[-400px] opacity-0"
        } transition-all ease-in duration-500`}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`hover:text-[#00CAC8] duration-200 px-4 md:w-auto py-2 font-bold cursor-pointer text-lg ${
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
                  <span className="w-full h-full relative z-2c flex items-center">
                    {nav.title} <IconChevronDown />
                  </span>
                </div>
              ) : (
                <Link
                  to={
                    nav.id === "Contents"
                      ? "/Contents"
                      : `/${nav.id.toLowerCase()}`
                  }
                  className="block w-full h-full p-2"
                >
                  <span className=" w-full h-full z-2">{nav.title}</span>
                </Link>
              )}
              {nav.subLinks && activeSubMenuId === nav.id && (
                <ul className="md:absolute top-full left-0 mt-2 bg-transparent shadow-md">
                  {nav.subLinks.map((subLink) => (
                    <li key={subLink.id}>
                      <Link
                        to={
                          nav.id === "Know-us"
                            ? `/home#${subLink.id}`
                            : `/Contents#${subLink.id}`
                        }
                        className="text-[#ffff] w-full"
                      >
                        <span
                          className="w-full h-full relative z-2 text-base my-4 hover:text-[#00CAC8] leading-loose"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {subLink.title}
                        </span>
                      </Link>
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
