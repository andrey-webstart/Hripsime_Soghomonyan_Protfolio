import { useState } from 'react'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import styles from './Error404.module.css'
import icon from '../image/icon-search.png'

export default function Error404({ err }) {
    const navigate = useNavigate()
    return (
       <> 
        <div className={styles.parenterr}>
            <h1>
                Error404
            </h1>
            <h2>Sorry, we were unable to find that page</h2>
            <div className={styles.sear}>
                <input type="text" />
                <button className={styles.search}><img src={icon}></img></button>
            </div>
            {/* <button onClick={() => setRedirect(true)}>Go to Home Page</button> */}
            {/* {redirect && <Navigate to="/" />} */}
            <button onClick={() => navigate("/", { state: err })}>Start from <a href='/'>home page</a></button>

        </div>
       </>
    )
}