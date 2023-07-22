import React from 'react'
import Styles from './Education.module.css'

export default function Education() {
  return (
    <div className={Styles.table}>        
      <p className={Styles.title}>Education</p>
        <table>
            <tr>
                <td>2022 - Present</td>
                <th>Tumo Labs</th>
                <th>Java Script Developer</th>
            </tr>
            <tr>
                <td>2022</td>
                <th>Leran Code Academy</th>
                <th>HTML, CSS, JavaScript, React</th>
            </tr>
            <tr>
                <td>2017 - 2019</td>
                <th>SEUA</th>
                <th>Master in "Network and Computer Siences"</th>
            </tr>
            <tr>
                <td>2017 - 2019</td>
                <th>SEUA</th>
                <th>Bachelor of "Computer Siences"</th>
            </tr>
        </table>
    </div>
  )
}
