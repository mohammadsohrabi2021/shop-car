import Link from "next/link";
import React from "react";
import styles from "./AllButton.module.css";
const AllButton = () => {
  return (
    <div className={styles.container}>
      <Link href="/cars">See all cars</Link>
    </div>
  );
};

export default AllButton;
