import React from 'react';
import people from '../../assets/people.png';
import styles from './header.module.css';

const Header = () => (
  <div className={`${styles.header} section__padding`} id="home">
    <div className={styles.headerContent}>
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className={styles.headerContentInput}>
        <input type="email" placeholder="Your Email Address" className={styles.headerContentInputInput} />
        <button type="button" className={styles.headerContentInputButton}>Get Started</button>
      </div>

      <div className={styles.headerContentPeople}>
        <img src={people} className={styles.headerContentPeopleImg} />
        <p className={styles.headerContentPeopleP}>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
  </div>
);

export default Header;
