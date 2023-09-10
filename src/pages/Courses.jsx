import React from "react";
import { styles } from "../Styles";
import Card from "../components/Cards";
import { courseCard } from "../constants";

export default function Courses() {
  return (
    <>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} my-20`}>
          <h1 className="text-4xl font-extrabold mb-5 md:ml-0 ml-20">
            Nuestros <span className="text-[#FF0096]">Cursos</span>
          </h1>
          <div className="grid gap-x-20 gap-y-8 md:grid-cols-4 justify-center">
            {courseCard.map((card) => (
              <Card
                key={card.id}
                image={card.image}
                name={card.name}
                url={card.url}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
