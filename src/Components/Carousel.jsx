import React, { useState, useEffect } from "react";
import style from "../Styles/Carousel.module.css";

const Carousel = ({ strings, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % strings.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, strings]);

  return (
    <div className={style.container}>
      <div className={style.strings}>{strings[currentIndex]}</div>
    </div>
  );
};

export default Carousel;
