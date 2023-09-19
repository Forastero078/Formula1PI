import React from "react";
import styles from './AsideLinks.module.css';
import F1 from '../../assets/allDrivers.jpeg';
import create from '../../assets/createDriver.jpeg';
import about from '../../assets/about.jpeg';
import logo from '../../assets/logo.jpeg';
import wiki from '../../assets/wiki.jpeg';
import { NavLink } from "react-router-dom";




export default function AsideLinks() {




    return (
        <aside className={styles.aside}>
            <section className={styles.aside_section}>

                <NavLink
                    to="/drivers"
                    style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                    activeStyle={{ color: 'black', textDecoration: 'none' }}
                    className={({ isActive }) => (isActive ? styles.active : styles.link)}
                >
                    <div className={styles.img1}>
                        <div className={styles.text}>
                            Todos los conductores
                        </div>
                        <img src={F1} alt="F1Aside" className={styles.img} />
                    </div>
                </NavLink>


                <NavLink
                    to="/create"
                    style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                    activeStyle={{ color: 'black', textDecoration: 'none' }}
                    className={({ isActive }) => (isActive ? styles.active : styles.link)}
                >
                    <div className={styles.img1}>
                        <div className={styles.text}>
                            Crea tu piloto
                        </div>
                        <img src={create} alt="F1Aside" className={styles.img} />

                    </div>
                </NavLink>


                <NavLink
                    to="/about"
                    style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                    activeStyle={{ color: 'black', textDecoration: 'none' }}
                    className={({ isActive }) => (isActive ? styles.active : styles.link)}
                >
                    <div className={styles.img1}>
                        <div className={styles.text}>
                            About
                        </div>
                        <img src={about} alt="F1Aside" className={styles.img} />

                    </div>
                </NavLink>


            </section>
        </aside>
    )
}