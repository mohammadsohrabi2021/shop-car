import Hatchback from "@/component/icons/Hatchback";
import Sedan from "@/component/icons/Sedan";
import Sport from "@/component/icons/Sport";
import Suv from "@/component/icons/Suv";
import Link from "next/link";
import React from "react";
import styles from "./Categories.module.css";
const Categories = () => {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv">
        <div>
          <p>SUV</p>
          <Suv />
        </div>
      </Link>
      <Link href="/categories/hatchback">
        <div>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>
      <Link href="/categories/sport">
        <div>
          <p>Sport cars</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
};

export default Categories;
