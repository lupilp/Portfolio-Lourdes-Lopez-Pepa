import React from "react";
import styles from "../Styles/Contacto.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6zognvq",
        "template_2dm4jns",
        form.current,
        "ValVvH1AJzNQo7ZaE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles.contGeneral}>
      <div className={styles.edText}>¡Contactame!</div>

      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Mensaje</label>
        <textarea name="message" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Contacto;
