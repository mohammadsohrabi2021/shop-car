import CarDetails from "@/component/templates/carDetail/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

const CarDetail = () => {
  const router = useRouter();
  const { carId } = router.query;
  const dataCarDetail = carsData[carId - 1];
  return (
   <CarDetails {...dataCarDetail}/>
  );
};

export default CarDetail;
