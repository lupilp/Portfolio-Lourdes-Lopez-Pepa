import React from "react";
import styles from "../Styles/Home.module.css";
import profile from "../Styles/Images/profile.jpg";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

function Home() {
  return (
    <div className={styles.homeContenedor}>
      <div className={styles.imageBorder}>
        <div className={styles.circuloGithub}>
          <a href="https://github.com/lupilp" target="_blank" rel="noreferrer">
            <RiGithubFill />
          </a>
        </div>

        <div className={styles.circuloLinkedin}>
          <a
            href="https://www.linkedin.com/in/lourdeslopezpepa/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinFill />
          </a>
        </div>
        <img src={profile} alt="profile pic" className={styles.profilePic} />
      </div>
      <div className={styles.homeLeft}>
        <div className={styles.titulo}>Hola! Soy Lourdes López Pepa</div>
        <div className={styles.subtitulo}>Full Stack Developer</div>
        <div className={styles.descripcion}>
          Full Stack Developer con formación como Diseñadora Gráfica. Con
          pensamiento creativo, resolución de problemas, trabajo en equipo,
          comunicación y autonomía.
        </div>
      </div>
    </div>
  );
}

export default Home;
