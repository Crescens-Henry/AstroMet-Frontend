import React from "react";
import Navbar from "../components/Navbar";
import styles from "../Styles";

export default function Contents() {
  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} fixed w-full z-10`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hola desde Contenido y mas</div>
      </div>
    </>
  );
}
