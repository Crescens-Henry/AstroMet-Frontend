import React from "react";
import { layout } from "../Styles";

export default function VissionSection({ info }) {
  return (
    <div className={`${layout.sectionImgReverse}`}>
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2 md:mr-20">
          <h3 className="text-xs">#noticias</h3>
          <h2 className="text-xl text-[#00FFE1;]">{info.title}</h2>
          <div className="md:relative sm:flex-row">
            <div className="md:absolute flex-row inset-0 bg-gradient-to-r from-black to-transparent opacity-100"></div>
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
