import React from "react";
import styles from "../Styles/Profile.module.css";
import foto from "../Styles/Images/foto.png";
import fondo from "../Styles/Images/fondo.jpg";

function Profile() {
  return (
    <div className={styles.persona}>
      <div className={styles.contPersona}>
        <img className={styles.circulo} src={fondo} alt="" />
        <img className={styles.imagenPersona} src={foto} alt="Lourdes" />
      </div>
    </div>
  );
}

export default Profile;
