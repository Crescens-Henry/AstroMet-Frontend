import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styles } from "../Styles";
import ContentHero from "../components/ContentHero";
import History from "../components/HistorySection";
import videobg from "../assets/backgrounds/sky_full_of_stars.mp4";
import Goals from "../components/GoalsSection";
import Mission from "../components/MissionSection";
import Vission from "../components/VissionSection";
import { information } from "../constants";
import gradient from "../assets/backgrounds/Gradient.png";

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
    <div className={`overflow-hidden font-Roboto`}>
      <div id="Home" className={`${styles.flexCenter} h-screen w-screen`}>
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src={videobg} type="video/mp4" />
        </video>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 `}
        >
          <ContentHero />
        </div>
      </div>

      <div className="relative md:h-screen">
        <div className="absolute inset-0 pointer-events-none">
          <img src={gradient} alt="" className="object-cover w-full h-full" />
        </div>
        <div
          id="history"
          className={`md:h-1/2 md:scroll-mt-16 ${styles.paddingX} ${styles.flexCenter}`}
          onClick={() => scrollToAnchor("history")}
        >
          <div className={`${styles.boxWidth}`}>
            <History info={information.find((item) => item.id === "history")} />
          </div>
        </div>
        <div
          id="goals"
          className={`md:h-1/2 md:scroll-mt-16 ${styles.paddingX} ${styles.flexCenter}`}
          onClick={() => scrollToAnchor("goals")}
        >
          <div className={`${styles.boxWidth}`}>
            <Goals info={information.find((item) => item.id === "goals")} />
          </div>
        </div>
      </div>

      <div className="md:h-screen">
        <div
          id="mission"
          className={`md:h-1/2 md:scroll-mt-16 ${styles.paddingX} ${styles.flexCenter}`}
          onClick={() => scrollToAnchor("goals")}
        >
          <div className={`${styles.boxWidth}`}>
            <Mission info={information.find((item) => item.id === "mission")} />
          </div>
        </div>
        <div
          id="vission"
          className={`md:h-1/2 md:scroll-mt-16 ${styles.paddingX} ${styles.flexCenter}`}
          onClick={() => scrollToAnchor("goals")}
        >
          <div className={`${styles.boxWidth}`}>
            <Vission info={information.find((item) => item.id === "vission")} />
          </div>
        </div>
      </div>
    </div>
  );
}
