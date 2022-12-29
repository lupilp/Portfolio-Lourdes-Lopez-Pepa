import React from "react";
import styles from "../Styles/Home.module.css";
// import profile from "../Styles/Images/profile.jpg";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Profile from "../Components/Profile";

function Home() {
  return (
    <div className={styles.homeContenedor}>
      <div className={styles.imageBorder}>
        <Profile></Profile>
        {/* <img src={profile} alt="profile pic" className={styles.profilePic} /> */}
      </div>

      <div className={styles.homeRight}>
        <div className={styles.hola}>¡Hola!</div>
        <div className={styles.titulo}>Soy Lourdes López Pepa</div>
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
