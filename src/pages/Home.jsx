import React from "react";
import styles from "../Styles";
import Navbar from "../components/Navbar";
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
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>Hola desde Home</div>
      </div>
    </div>
  );
}
