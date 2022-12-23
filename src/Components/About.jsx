import React, { useState } from "react";
import styles from "../Styles/About.module.css";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiReact,
  DiPostgresql,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";

import { SiRedux, SiSequelize, SiExpress, SiFigma } from "react-icons/si";
import { BiChevronDown } from "react-icons/bi";

function About() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClick = (e) => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div className={styles.contAbout}>
      <div className={styles.titleAbout}>Sobre Mi</div>
      <div>Educacion</div>
      <div className={styles.infoAbout}>
        <div className={styles.aboutRight}>
          <div className={styles.skillsTitle}>
            Skills
            <button
              className={`${styles.buttonClose} ${
                !menuIsOpen && styles.buttonRotate
              }`}
              onClick={handleClick}
            >
              <BiChevronDown />
            </button>
          </div>

          <ul
            className={`${styles.skills} ${!menuIsOpen && styles.closeSkills}`}
          >
            <li className={styles.skillsItem}>
              <DiJavascript1 className={styles.skillsIcon} /> Javascript
            </li>

            <li className={styles.skillsItem}>
              <DiHtml5 className={styles.skillsIcon} /> HTML
            </li>

            <li className={styles.skillsItem}>
              <DiCss3 className={styles.skillsIcon} /> CSS
            </li>

            <li className={styles.skillsItem}>
              <DiNodejsSmall className={styles.skillsIcon} /> Node.js
            </li>

            <li className={styles.skillsItem}>
              <DiReact className={styles.skillsIcon} /> React
            </li>

            <li className={styles.skillsItem}>
              <SiRedux className={styles.skillsIcon} /> Redux
            </li>

            <li className={styles.skillsItem}>
              <DiPostgresql className={styles.skillsIcon} /> Postgresql
            </li>

            <li className={styles.skillsItem}>
              <SiSequelize className={styles.skillsIcon} /> Sequelize
            </li>

            <li className={styles.skillsItem}>
              <SiExpress className={styles.skillsIcon} /> Express
            </li>

            <li className={styles.skillsItem}>
              <SiFigma className={styles.skillsIcon} /> Figma
            </li>

            <li className={styles.skillsItem}>
              <DiPhotoshop className={styles.skillsIcon} /> Photoshop
            </li>

            <li className={styles.skillsItem}>
              <DiIllustrator className={styles.skillsIcon} /> Illustrator
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
