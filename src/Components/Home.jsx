import React from "react";
import styles from "../Styles/Home.module.css";
// import profile from "../Styles/Images/profile.jpg";
import Profile from "../Components/Profile";
import { RiLinkedinFill, RiGithubFill, RiDownload2Fill } from "react-icons/ri";
import CV from "../Styles/Images/Portafolio-Lourdes-Lopez-Pepa-2023.pdf";
import Carousel from "./Carousel";

function Home() {
  const strings = ["Full Stack Developer", "Graphic Designer"];
  return (
    <div className={styles.homeContenedor}>
      <div className={styles.imageBorder}>
        <Profile></Profile>
        {/* <img src={profile} alt="profile pic" className={styles.profilePic} /> */}
      </div>

      <div className={styles.homeRight}>
        <div className={styles.hola}>¡Hola!</div>
        <div className={styles.titulo}>Soy Lourdes López Pepa</div>
        <Carousel strings={strings} interval={3000}></Carousel>
        {/* <div className={styles.subtitulo}>Full Stack Developer</div> */}
        <div className={styles.descripcion}>
          Full Stack Developer con formación como Diseñadora Gráfica. Con
          pensamiento creativo, resolución de problemas, trabajo en equipo,
          comunicación y autonomía.
        </div>

        <div className={styles.contacto}>
          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className={styles.contCurriculum}
          >
            <RiDownload2Fill className={styles.iconCv} />
            Mi Curriculum
          </a>

          <a href="https://github.com/lupilp" target="_blank" rel="noreferrer">
            <RiGithubFill className={styles.icono} />
          </a>

          <a
            href="https://www.linkedin.com/in/lourdeslopezpepa/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinFill className={styles.icono} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
