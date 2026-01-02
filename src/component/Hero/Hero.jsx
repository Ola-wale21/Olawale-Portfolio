import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Samuel</h1>
        <p className={styles.description}>I'm a frontend developer with 2+ years of experience specializing in React and responsive web design. Let's connect if you'd like to collaborate!</p>
        <a href="mailto:olakunleolawale21@email.com " className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="/assets/hero/heroImage.png" alt="hero-image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;