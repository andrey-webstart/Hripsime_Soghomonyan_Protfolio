import React from 'react'
import { NavLink } from 'react-router-dom'
import menu from './menu.json'
import styles from './Header.module.css'
import { useLocation } from 'react-router-dom'


export default function Header() {
  // console.log(menu);
  const location = useLocation()
  return (    
    <ul className={menu.find(i => i.path === location.pathname) ? `${styles.menum}` : `${styles.errormenu}`}>
      {menu.map(item => (
        //  <li key={item.id} className= {item.path == location.pathname ? `${styles.menum}` : `${styles.errormenu}`}>
        <li key={item.id}>
          <NavLink to={item.path} className={({ isActive }) => isActive ? 'active_menu' : false.toString()}>
            {item.name}</NavLink>
        </li>
        
      ))}  </ul>
  )
}
