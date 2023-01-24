import React from "react";
import styles from "../Styles/Contacto.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function validate(input) {
  const errors = {};
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!input.user_name || input.user_name.length < 3) {
    errors.user_name = "Coloca tu nombre";
  }

  if (!input.user_email || input.user_email.match(mailFormat)) {
    errors.user_email = "Coloca tu email";
  }

  if (!input.message || input.message.length < 10) {
    errors.message = "Dejame tu mensaje";
  }
  return errors;
}

function Contacto() {
  const form = useRef();
  const [input, setinput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(
      validate({
        ...input,
      })
    );
  }, [input]);

  const handleChange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  // let btnDisabled = !(
  //   input.user_name.length &&
  //   input.user_email.length &&
  //   input.message.length
  // );

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
        <div className={styles.contInput}>
          <label>Nombre</label>
          <input
            type="text"
            name="user_name"
            value={input.user_name}
            onChange={(e) => handleChange(e)}
          />
          {errors.user_name && (
            <div className={styles.error}>{errors.user_name}</div>
          )}
        </div>

        <div className={styles.contInput}>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={input.user_email}
            onChange={(e) => handleChange(e)}
          />
          {errors.user_email && (
            <div className={styles.error}>{errors.user_email}</div>
          )}
        </div>

        <div className={styles.contInput}>
          <label>Mensaje</label>
          <textarea
            name="message"
            value={input.message}
            onChange={(e) => handleChange(e)}
          />
          {errors.message && (
            <div className={styles.error}>{errors.message}</div>
          )}
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Contacto;
