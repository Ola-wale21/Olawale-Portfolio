import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
        <h2>ABOUT</h2>
        <div className={styles.aboutContent}>
            <img src="/assets/about/Aboutme.png" alt="about-image" />
            <div className={styles.aboutItems}>
            <div className={styles.aboutSection}>
                <img src="/assets/about/cursorIcon.png" alt="developer" />
                <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer who transforms ideas into interactive web experiences. With 2+ years of freelance work, I specialize in React development and turning complex Figma designs into clean, responsive interfaces. I thrive on solving UI challenges and building applications that users love to interact with.</p>
                </div>
            </div>
            <div className={styles.aboutSection}>
                <img src="/assets/about/serverIcon.png" alt="server" />
                <div>
                    <h3>Backend Developer</h3>
                    <p>As a backend developer, I have experience in building and maintaining server-side applications. I am proficient in using NodeJS and Express to create RESTful APIs and handle database operations. I enjoy working on the logic and architecture of web applications to ensure they are scalable and efficient.</p>
                </div>
            </div>
            <div className={styles.aboutSection}>
                <img src="/assets/about/uiIcon.png" alt="ui-icon" />
                <div>
                    <h3>Data Analyst</h3>
                    <p>As a data analyst, I have experience in collecting, analyzing, and interpreting data to help businesses make informed decisions. I am skilled in using tools such as Excel, SQL, and powerBI to manipulate and visualize data. I enjoy finding patterns and insights in data that can drive business growth and improve performance.</p>
                </div>
            </div>
         </div>
        </div>
    </section>
  );
};

export default About;