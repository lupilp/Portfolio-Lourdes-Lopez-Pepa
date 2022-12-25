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
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
        <a href="#Home" className={styles.navItem}>
          <BiHomeAlt className={styles.navIcono} /> Home
        </a>

        <a href="#SobreMi" className={styles.navItem}>
          <BiUser className={styles.navIcono} /> Sobre Mi
        </a>

        <a href="#Proyectos" className={styles.navItem}>
          <BiCode className={styles.navIcono} /> Proyectos
        </a>

        <a href="#Contacto" className={styles.navItem}>
          <BiSend className={styles.navIcono} /> Contacto
        </a>
      </ul>

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
