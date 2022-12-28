import React from "react";
import styles from "../Styles/Proyectos.module.css";
import { RiGithubFill } from "react-icons/ri";
import pokemon from "../Styles/Images/pokemon.png";
import urlearning from "../Styles/Images/urlearning.png";
import portfolio from "../Styles/Images/portfolio.png";

function Proyectos() {
  return (
    <div className={styles.contGeneral}>
      <div className={styles.edText}>Mis Proyectos</div>

      <div className={styles.contProyectos}>
        <div className={styles.contProyecto}>
          <div className={styles.contenedor}>
            <a
              href="https://pi-pokemon-gilt.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={pokemon} alt="pokemon" className={styles.img} />
                <div className={styles.capa}>
                  <h3>Ir al deploy</h3>
                </div>
              </figure>
            </a>
          </div>

          <div className={styles.title}>Pokemon App</div>
          <a
            href="https://github.com/lupilp/PI-Pokemon"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.github}>
              <RiGithubFill className={styles.icon} />
              Ir al codigo
            </div>
          </a>
        </div>

        <div className={styles.contProyecto}>
          <div className={styles.contenedor}>
            <a
              href="https://pf-ur-learning.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={urlearning} alt="urlearning" className={styles.img} />
                <div className={styles.capa}>
                  <h3>Ir al deploy</h3>
                </div>
              </figure>
            </a>
          </div>

          <div className={styles.title}>urLearning</div>
          <a
            href="https://github.com/JuanSBass/PF-urLearning"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.github}>
              <RiGithubFill className={styles.icon} />
              Ir al codigo
            </div>
          </a>
        </div>

        <div className={styles.contProyecto}>
          <div className={styles.contenedor}>
            <a
              href="https://portafolio-two-gilt.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={portfolio} alt="portfolio" className={styles.img} />
                <div className={styles.capa}>
                  <h3>Ir al deploy</h3>
                </div>
              </figure>
            </a>
          </div>

          <div className={styles.title}>Portafolio</div>
          <a
            href="https://github.com/lupilp/Portfolio-LourdesLopezPepa"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.github}>
              <RiGithubFill className={styles.icon} />
              Ir al codigo
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
