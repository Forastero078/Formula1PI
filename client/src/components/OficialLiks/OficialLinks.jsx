import React from "react";
import styles from './OficialLinks.module.css';
import logo from '../../assets/logo.jpeg';
import wiki from '../../assets/wiki.jpeg';
import { NavLink } from "react-router-dom";




export default function OficialLinks() {



    return (
        <div className={styles.links}>
            
            <section className={styles.section}>

            <NavLink
                to="https://www.formula1.com/" target="_blank"
                style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                activeStyle={{ color: 'black', textDecoration: 'none' }}
                className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
                <div className={styles.img1}>
                    <div className={styles.text}>
                        Pagina Oficial Formula 1
                    </div>
                    <img src={logo} alt="F1" className={styles.img} />
                </div>
            </NavLink>

            

            <NavLink
                to="https://www.fia.com/" target="_blank"
                style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                activeStyle={{ color: 'black', textDecoration: 'none' }}
                className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
            <div className={styles.img1}>
                <div className={styles.text}>
                    Pagina Oficial "FIA"
                </div>
                <img src='https://www.fia.com/sites/default/files/page/top_image/07110801_052_5.jpg' alt="F1" className={styles.img} />
            </div>
            </NavLink>

            

            <NavLink
                to="https://es.wikipedia.org/wiki/F%C3%B3rmula_1" target="_blank"
                style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                activeStyle={{ color: 'black', textDecoration: 'none' }}
                className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
            <div className={styles.img1}>
                <div className={styles.text}>
                    Wikipedia
                </div>
                <img src={wiki} alt="F1" className={styles.img} />
            </div>
            </NavLink>

            </section>


        </div>
    )
}