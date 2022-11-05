import React from "react";
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

function About() {
  return (
    <div className={styles.contAbout}>
      <div className={styles.titleAbout}>About Me</div>
      <div className={styles.infoAbout}>
        <div className={styles.aboutLeft}>
          Estoy pronto por finalizar el bootcamp Soy Henry, donde me formé para
          ser full stack web developer. Además soy Diseñadora Gráfica, y trabajé
          como freelance durante 5 años.
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.skillsTitle}>Skills</div>
          <ul className={styles.skills}>
            <li className={styles.skillsIcon}>
              <DiJavascript1 />
            </li>

            <li className={styles.skillsIcon}>
              <DiHtml5 />
            </li>

            <li className={styles.skillsIcon}>
              <DiCss3 />
            </li>

            <li className={styles.skillsIcon}>
              <DiNodejsSmall />
            </li>

            <li className={styles.skillsIcon}>
              <DiReact />
            </li>

            <li className={styles.skillsIcon}>
              <SiRedux />
            </li>

            <li className={styles.skillsIcon}>
              <DiPostgresql />
            </li>

            <li className={styles.skillsIcon}>
              <SiSequelize />
            </li>

            <li className={styles.skillsIcon}>
              <SiExpress />
            </li>

            <li className={styles.skillsIcon}>
              <SiFigma />
            </li>

            <li className={styles.skillsIcon}>
              <DiPhotoshop />
            </li>

            <li className={styles.skillsIcon}>
              <DiIllustrator />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
