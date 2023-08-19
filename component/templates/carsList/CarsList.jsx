import Back from "@/component/icons/Back";
import Card from "@/component/module/card/Card";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";
import styles from "./CarsList.module.css";
const CarsList = (props) => {
  const router = useRouter();
  console.log(router.route);
  const categoieCar = router.query.slug;
  const backHandler = () => {
    router.back();
  };
  const [min, max] = router.query.slug || [];

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {router.route === "/categories/[slug]" ? (
          <>
            {carsData
              .filter((car) => car.category === categoieCar)
              .map((car) => (
                <Card key={car.id} {...car} />
              ))}
          </>
        ) : (
          <>
            {carsData.filter((item) => item.price > min && item.price < max)
              .length > 0 ? (
              <>
                {carsData
                  .filter((item) => item.price > min && item.price < max)
                  .map((car) => (
                    <Card key={car.id} {...car} />
                  ))}
              </>
            ) : (
              <h3>NotFound</h3>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CarsList;
