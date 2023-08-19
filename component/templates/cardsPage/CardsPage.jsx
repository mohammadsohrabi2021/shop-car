import Card from "@/component/module/card/Card";
import React from "react";
import styles from "./CardsPage.module.css";
const CardsPage = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car}/>
      ))}
    </div>
  );
};

export default CardsPage;
