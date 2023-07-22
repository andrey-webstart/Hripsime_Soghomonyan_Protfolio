import React from 'react'
import styles from './NameandCoverlatter.module.css'
import ExamplePdf from './CV/Hripsime-Soghomonyan-CV.pdf'

export default function NameandCoverlatter() {
  return (
    <div className={styles.anun}>
        <h1>Hripsime Soghomonyan</h1>
        <h2>React Developer</h2>
        <div className={styles.p}>
          <p> I am web developer with strong attention to details. I am highly motivated with my new
                        profession and that's why I want to learn more and more about this field and improve my skills
                        every day. My goal is to become professional
                        specialist in a short time. I am looking for a company that will give me the chance to learn and
                        develop myself as a web developer.
          
            <br />
          <a href={ExamplePdf} download="Hripsime-Soghomonyan-CV.pdf" target="_blank" rel="noreferrer">
            <button>Download CV</button>
          </a></p>
        </div>
      </div>
  )
}
