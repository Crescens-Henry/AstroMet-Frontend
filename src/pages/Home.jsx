import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styles } from "../Styles";
import ContentHero from "../components/ContentHero";
import HistoryAnsGoals from "../components/HistoryAndGoals";
import videobg from "../assets/backgrounds/sky_full_of_stars.mp4";
import Goals from "../components/Goals";

export default function Home() {
  const location = useLocation();

  const scrollToAnchor = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.hash) {
      scrollToAnchor(location.hash.substring(1));
    }
  }, [location]);

  return (
    <div className={`overflow-hidden `}>
      <div className={`${styles.flexCenter} h-screen w-screen`}>
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src={videobg} type="video/mp4" />
        </video>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 `}
        >
          <ContentHero />
        </div>
      </div>

      <div
        id="history"
        className={` ${styles.paddingX} ${styles.flexCenter}`}
        onClick={() => scrollToAnchor("history")}
      >
        <div className={` ${styles.boxWidth}`}>
          <HistoryAnsGoals />
        </div>
      </div>
      <div
        id="goals"
        className={` ${styles.paddingX} ${styles.flexCenter}`}
        onClick={() => scrollToAnchor("goals")}
      >
        <div className={`${styles.boxWidth}`}>
          <Goals />
        </div>
      </div>
    </div>
  );
}
