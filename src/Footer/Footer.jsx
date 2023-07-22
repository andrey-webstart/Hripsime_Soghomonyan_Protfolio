import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import footermenu from './Footermenu.json'
import styles from './Footermenu.module.css'

export default function Footer() {
  const locationn = useLocation()
  return (
    <ul className={footermenu.find(i => i.path === locationn.pathname) ? `${styles.menumm}` : `${styles.errormenum}`}>
      {footermenu.map(item => (
        <li key={item.id}>
          <NavLink to={item.path} className={({ isActive }) => isActive ? 'active_menu' : false.toString()}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>

  )
}
