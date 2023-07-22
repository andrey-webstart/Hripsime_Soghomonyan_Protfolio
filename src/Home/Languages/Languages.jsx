import React from "react";
import styles from "./Languages.module.css";

export default function Languages() {
  return (
    <div className={styles.skills}>
      <p className={styles.title}>Languages</p>
      <div className={styles.part} title="Armenian: 100%">
        <div className={styles.part100}>Armenian</div>
      </div>
      <div className={styles.part} title="Russian: 90%">
        <div className={styles.part90}> Russian</div>
      </div>
      <div className={styles.part} title="English: 70%">
        <div className={styles.part70}>English</div>
      </div>
      <div className={styles.part} title="Greek: 50%">
        <div className={styles.part50}>Greek</div>
      </div>
    </div>
  );
}
