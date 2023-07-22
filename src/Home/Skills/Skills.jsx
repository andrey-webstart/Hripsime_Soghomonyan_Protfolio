import React from "react";
import styles from "./Skills.module.css";
import {
  UilHtml5,
  UilCss3Simple,
  UilJavaScript,
  UilReact,
  UilVuejs,
} from "@iconscout/react-unicons";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <p className={styles.title}>Skills</p>
      <div className={styles.part} title="HTML5, Bootstrap, CSS3, SASS: 100%">
        <div className={styles.part100}>HTML5, Bootstrap, CSS3, SASS</div>
      </div>
      <div className={styles.part} title="JavaScript, React, JSX: 90%">
        <div className={styles.part90}>JavaScript, React, JSX</div>
      </div>
      <div className={styles.part} title="Vue.js, TypeScript: 70%">
        <div className={styles.part70}> Vue.js, TypeScript</div>
      </div>
      <div className={styles.part} title="Python: 60%">
        <div className={styles.part60}> Python</div>
      </div>
      <div className={styles.part} title="PHP Storme, Visual Studio: 100%">
        <div className={styles.part100}>PHP Storme, Visual Studio</div>
      </div>
      <div className={styles.part} title="Git, GitHub: 100%">
        <div className={styles.part100}>Git, GitHub</div>
      </div>
      <span></span>
      <div className={styles.part} title="Adobe Photoshop, LightRoom: 80%">
        <div className={styles.part80}> Photoshop, LightRoom</div>
      </div>
      <div className={styles.part} title="Adobe Illustrator: 80%">
        <div className={styles.part80}>Adobe Illustrator</div>
      </div>
      <div className={styles.part} title="After Effect, Premier Pro: 80%">
        <div className={styles.part80}> After Effect, Premier Pro</div>
      </div>
    </div>
  );
}
