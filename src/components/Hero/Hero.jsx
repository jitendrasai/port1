import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jitendra Sai Vigrahala</h1>
        <p className={styles.description}>
        An analytical thinker with a strong background in data science, including expertise in Python, SQL, and data visualization tools.
        With one year of experience in applying machine learning algorithms, statistical analysis, and data preprocessing,
         I am currently pursuing a master's degree in CSE at Florida State University.
        Eagerly waiting to leverage my skills in a dynamic role to drive data-driven decision-making and contribute to impactful projects.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
