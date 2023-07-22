import React from "react";
import Styles from "./Expirience.module.css";

export default function Expiriance() {
  return (
    <div className={Styles.table}>
      <p className={Styles.title}>Expirience</p>
      <table>
        <tr>
          <th>2023 - Present</th>
          <th>Administrator</th>
          <th>Web Start</th>
        </tr>
        <tr>
          <th>2022</th>
          <th>Markup Specialist</th>
          <th>Web Foundation</th>
          <td>
            Working with HTML5, CSS3 and Bootstrap. Expirience in writing code
            that can be read and debugged long after it was wrotten.Expirience
            with mobile and implementing responsive design. Take direction and
            work well with multiple teams.
          </td>
        </tr>
        <tr>
          <th>2019 - 2022</th>
          <th>Call-Center Specialist</th>
          <th>Team Telecom Armenia</th>
          <td>
            Answered 70+ calls per shift. Cultivated customer relationships and
            increased sales by offering information about new products.
          </td>
        </tr>
        <tr>
          <th>2017</th>
          <th>Sales Manager</th>
          <th>Bookinist</th>
          <td>
            Worked closely with senior managers in order to develop sales goals
            and targets, new company palicies and procedures, and indentify and
            execute improvments.
          </td>
        </tr>
      </table>
    </div>
  );
}
