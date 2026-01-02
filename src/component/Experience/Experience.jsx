import React from 'react';
import styles from'./Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';

const Experience = () => {
  return (
    <div>
      <section id='experience' className={styles.container}>
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>

        <div className={styles.skills} >
            {skills.map((skill, id) => {
            return <div key={id} className={styles.skill}>
                <div className={styles.skillImage}><img src={`assets/${skill.imageSrc}`} alt={skill.title} /></div>
                <p>{skill.title}</p>
            </div>
        })}
        </div>
        
        <ul className={styles.history}>
            {history.map((item, id) => {
                return <li key={id} className={styles.historyItem}>
                    <img src={`assets/${item.imageSrc}`} alt={`${item.organisation} Logo`} />
                    <div className={styles.historyItemDetails}>
                        <h3>{`${item.role}, ${item.organisation}`}</h3>
                        <p>{`${item.startDate} - ${item.endDate}`}</p>
                        <ul>
                            {item.experiences.map((experience, id) => {
                                return <li key={id}>{experience}</li>
                            })}
                        </ul>
                    </div>
                </li>
            })}

        </ul>
    </div>
      </section>
    </div>
  );
};

export default Experience;