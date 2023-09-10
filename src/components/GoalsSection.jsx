import React from "react";
import { layout } from "../Styles";

export default function Goals({ info }) {
  return (
    <>
      <div className={`${layout.sectionReverse} relative`}>
        <div className={`${layout.sectionInfo} md:mx-20`}>
          <p>{info.paragraph}</p>
        </div>
        <div className="">
          <h2 className="text-6xl">{info.title}</h2>
        </div>
      </div>
    </>
  );
}
