import React from 'react'
import styles from './Home.module.css'
import Nkar from './Nkar/Nkar'
import NameandCoverlatter from './NameandCoverlatter/NameandCoverlatter'
import Contucts from './Contuct/Contucts'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import Expirience from './Expirience/Expirience'
import Voluntiring from './Voluntiring/Voluntiring'
import Languages from './Languages/Languages'

export default function Home() {
  return (
    <div className={styles.main}>
      <Nkar />
      <NameandCoverlatter />
      <div className={styles.conted}>
        <Contucts />
        <Education />
      </div>
      <div className={styles.conted}>
          <Skills />
        <div className={styles.div}>
          <Expirience />
          <Voluntiring />
        </div>
      </div>
      <div className={styles.conted}>
          <Languages />
        <div className={styles.div}>
          <Expirience />
        </div>
      </div>


    </div>
  )
}
