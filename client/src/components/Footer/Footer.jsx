import React from "react";
import styles from './Footer.module.css';




export default function Footer() {






    return (
        <div>
            <div className={styles.footer}>

                <p className={styles.p}>Proyecto Individual Front-End/Back-End/PostgreSQL para <img src="https://avatars.githubusercontent.com/u/57154655?s=280&v=4" alt="soyHenry" className={styles.logo} /> Henry /Etapa Labs </p>

            </div>
            <hr style={{ width: '90%' }} />
            <br />
        </div>
    )
}