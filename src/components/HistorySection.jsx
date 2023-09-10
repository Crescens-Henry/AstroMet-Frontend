import React from "react";
import { layout } from "../Styles";

export default function HistoryAndGoals({ info }) {
  return (
    <>
      <div className={`${layout.section} relative`}>
        <div>
          <h2 className="text-6xl">{info.title}</h2>
        </div>
        <div className={`${layout.sectionInfo} md:mx-20`}>
          <p>{info.paragraph}</p>
        </div>
      </div>
    </>
  );
}
