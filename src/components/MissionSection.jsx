import React from "react";
import { layout } from "../Styles";

export default function MissionSection({ info }) {
  return (
    <div className={`${layout.sectionImg}`}>
      <div className="md:flex md:flex-row-reverse">
        <div className="md:w-1/2 md:mr-20">
          <h3 className="text-xs flex flex-row-reverse">#eventos</h3>
          <h2 className="text-xl text-[#00FFE1;] flex flex-row-reverse">
            {info.title}
          </h2>
          <div className="md:relative sm:flex-row">
            <div className="md:absolute flex-row inset-0 bg-gradient-to-l from-black to-transparent opacity-100"></div>
            <img
              src={info.image}
              alt={`${info.title}-image`}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex items-center">
          <p>{info.paragraph}</p>
        </div>
      </div>
    </div>
  );
}
