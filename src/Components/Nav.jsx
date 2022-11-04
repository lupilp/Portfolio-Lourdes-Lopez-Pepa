import React, { useState } from "react";
import {
  BiHomeAlt,
  BiUser,
  BiCode,
  BiSend,
  BiChevronDown,
} from "react-icons/bi";
import styles from "../Styles/Nav.module.css";

function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const handleClick = (e) => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div
      className={`${styles.navContenedor} ${
        !menuIsOpen && styles.navContCerrado
      }`}
    >
      <ul className={`${styles.navLista} ${!menuIsOpen && styles.closeMenu}`}>
        <li className={styles.navItem}>
          <BiHomeAlt className={styles.navIcono} /> Home
        </li>

        <li className={styles.navItem}>
          <BiUser className={styles.navIcono} /> About Me
        </li>

        <li className={styles.navItem}>
          <BiCode className={styles.navIcono} /> Projects
        </li>

        <li className={styles.navItem}>
          <BiSend className={styles.navIcono} /> Contact Me
        </li>
      </ul>

      {/* <div className={styles.navName}>
        <a
          href="https://www.linkedin.com/in/lourdeslopezpepa/"
          target="_blank"
          rel="noreferrer"
        >
          Lourdes
        </a>
      </div> */}

      <button
        className={`${styles.buttonClose} ${
          !menuIsOpen && styles.buttonRotate
        }`}
        onClick={handleClick}
      >
        <BiChevronDown />
      </button>
    </div>
  );
}

export default Nav;
