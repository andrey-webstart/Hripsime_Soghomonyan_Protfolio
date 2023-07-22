import React from 'react'
import Styles from './Voluntiring.module.css'

export default function Voluntiring() {
  return (
    <div>
      <div className={Styles.table}>
      <p className={Styles.title}>Voluntiring</p>
      <table>
        <tr>
          <th>2022</th>
          <th>Volunter</th>
          <th>Tumo Labs</th>
        </tr>
        <tr>
          <th>2017 - 2018</th>
          <th>Volunter</th>
          <th>Red Cross</th>
        </tr>
        <tr>
          <th>2017 </th>
          <th>Volunter Coach</th>
          <th>Tumo Center for Creative Technologies</th>
        </tr>
      </table>
    </div>
    </div>
  )
}
