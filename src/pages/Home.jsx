import React from "react";
import { styles } from "../Styles";
import Navbar from "../components/Navbar";
import ContentHero from "../components/ContentHero";
import HistoryAnsGoals from "../components/HistoryAndGoals";
import videobg from "../assets/backgrounds/sky_full_of_stars.mp4";

export default function Home() {
  return (
    <div className={`overflow-hidden `}>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} fixed w-full z-10`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexCenter} h-screen w-screen`}>
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src={videobg} type="video/mp4" />
        </video>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100`}
        >
          <ContentHero />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}`}>
          <HistoryAnsGoals />
        </div>
      </div>
    </div>
  );
}
