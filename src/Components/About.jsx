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
import { FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <div className={styles.contAbout}>
      <div className={styles.titleAbout}>Sobre Mi</div>

      <div className={styles.contenidoSobreMi}>
        <div className={styles.aboutLeft}>
          <div className={styles.subTitle}>Educación</div>
          <div className={styles.contenidoEducación}>
            <div className={styles.educación}>
              <div className={styles.izq}>
                <FaGraduationCap className={styles.icon} />
              </div>

              <div className={styles.der}>
                <div className={styles.edTitle}>Full Stack Developer</div>
                <div className={styles.institucion}>Soy Henry</div>
                <div className={styles.fecha}>2022</div>
              </div>
            </div>

            <div className={styles.educación}>
              <div className={styles.izq}>
                <FaGraduationCap className={styles.icon} />
              </div>

              <div className={styles.der}>
                <div className={styles.edTitle}>Diseñadora Gráfica</div>
                <div className={styles.institucion}>
                  Instituto Superior San Jorge
                </div>
                <div className={styles.fecha}>2017 - 2019</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.subTitle}>Skills</div>

          <ul className={styles.skills}>
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
