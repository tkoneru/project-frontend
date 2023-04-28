import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header>
        <Link className={styles.logo} href="/">home</Link>

        <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
        <label for="menu-bar">menu</label>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Scheduler</Link>
              <ul>
                <li>
                  <Link href="/customers">all orders</Link>
                </li>
                <li>
                  <Link href="/customers/add">new order</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
