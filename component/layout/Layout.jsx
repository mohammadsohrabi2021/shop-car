import Link from "next/link";
import React from "react";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <h2>SHOPCAR</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        shop-car Next.js | mohammad sohrabi &copy;
      </footer>
    </>
  );
};

export default Layout;
