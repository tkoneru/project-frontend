import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header>
        <Link className={styles.logo} href="/">logo</Link>

        <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
        <label for="menu-bar">menu</label>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/">customers +</Link>
              <ul>
                <li>
                  <Link href="/customers">all customers</Link>
                </li>
                <li>
                  <Link href="/customers/add">new customer</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/login">register/login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
