import React from "react";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconDeviceMobile,
  IconPhoneIncoming,
  IconAt,
  IconMapSearch,
} from "@tabler/icons-react";
import AstroMet_Logo from "../assets/logo/ASTROMET white_074730.png";
import { instagramLink, facebookLink } from "../constants";

export default function Footer() {
  return (
    <div id="footer" className="border-t border-gray-300 py-5">
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start md:space-x-10 p-5">
        <div className="text-center md:text-left mb-5 md:mb-0 h-full">
          <img
            src={AstroMet_Logo}
            alt="AstroMet-Logo"
            className="h-12 mx-auto md:mx-0"
          />
        </div>
        <div className="text-center md:text-left mb-5 md:mb-0">
          <h2 className="text-xl font-black md:mb-2">Sobre Nosotros</h2>
          <ul>
            <li className="flex">
              <IconDeviceMobile
                size={20}
                stroke={2}
                color="#00FFE1"
                strokeLinejoin="miter"
                className="cursor-pointer block mx-2"
              />
              961-123-45-67
            </li>
            <li className="flex">
              <IconPhoneIncoming
                size={20}
                stroke={2}
                color="#00FFE1"
                strokeLinejoin="miter"
                className="cursor-pointer block mx-2"
              />
              961-123-45-67
            </li>
            <li className="flex">
              <IconAt
                size={20}
                stroke={2}
                color="#00FFE1"
                strokeLinejoin="miter"
                className="cursor-pointer block mx-2"
              />
              example@gmail.com
            </li>
            <li className="flex">
              <IconMapSearch
                size={20}
                stroke={2}
                color="#00FFE1"
                strokeLinejoin="miter"
                className="cursor-pointer block mx-2"
              />
              Av. Rio Pichucalco mza 130 lote 2, col. Albania alta
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black md:mb-2">Siguenos</h2>
          <div className="flex justify-center md:justify-start">
            <a href={instagramLink} target="_blank">
              <IconBrandInstagram
                size={30}
                stroke={2}
                color="#FF0096"
                strokeLinejoin="miter"
                className="cursor-pointer block mx-2"
              />
            </a>
            <a href={facebookLink} target="_blank">
              <IconBrandFacebook
                size={30}
                stroke={2}
                color="#0096FF"
                strokeLinejoin="miter"
                className="cursor-pointer block mx-2"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <span>Jatamatzá Club de Divulgación Científica A. C.</span>
      </div>
    </div>
  );
}
