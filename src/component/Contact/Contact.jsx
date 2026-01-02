import React from 'react';
import styles from'./Contact.module.css';

const Contact = () => {
  return (
   <footer className={styles.container} id='contact'>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me via email or through my social media profiles.</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src="/assets/contact/emailIcon.png" alt="Email" />
            <a href="mailto:olakunleolawale21@gmail.com">olakunleolawale21@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/olakunle-olawale/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li className={styles.link}>
            <img src="/assets/contact/githubIcon.png" alt="GitHub" />
            <a href="https://github.com/Ola-wale21" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
    </ul>
   </footer>
  );
};

export default Contact;