import React from "react";
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import '../../icons/style.css';




export default function NavBar() {






    return (
        <div className={styles.Nav}>

            <img className={styles.logo} src="https://lebalap.academy/wp-content/uploads/2021/02/f1-logo.png" alt="logo" />

            <div className={styles.franja1} />

            <ul className={styles.botonera}>
                <NavLink
                    to="/home"
                    style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                    activeStyle={{ color: 'black', textDecoration: 'none' }}
                    className={({ isActive }) => (isActive ? styles.active : styles.link)}
                > <span className={styles.buttons}><span className="icon-home"></span> Home</span> </NavLink>
                <NavLink
                    to="/drivers"
                    style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                    activeStyle={{ color: 'black', textDecoration: 'none' }}
                    className={({ isActive }) => (isActive ? styles.active : styles.link)}
                > <span className={styles.buttons}><span className={`icon-flag1 ${styles.icon_flag}`}></span> Galeria de conductores</span></NavLink>
                <NavLink
                    to="/create"
                    style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                    activeStyle={{ color: 'black', textDecoration: 'none' }}
                    className={({ isActive }) => (isActive ? styles.active : styles.link)}
                > <span className={styles.buttons}><span className={`icon-user-solid-circle ${styles.icon_add}`}></span> ¡Crea tu conductor!</span></NavLink>
                <NavLink
                    to="/about"
                    style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                    activeStyle={{ color: 'black', textDecoration: 'none' }}
                    className={({ isActive }) => (isActive ? styles.active : styles.link)}
                > <span className={styles.buttons}><span className={`icon-exclamation-solid ${styles.icon_add}`}></span> About</span></NavLink>
                <NavLink
                    to="/contact"
                    style={{ textDecoration: 'none', color: 'white', textDecorationColor: 'none' }}
                    activeStyle={{ color: 'black', textDecoration: 'none' }}
                    className={({ isActive }) => (isActive ? styles.active : styles.link)}
                > <span className={styles.buttons}><span className={`icon-envelope ${styles.icon_add}`}></span> Contact</span></NavLink>
            </ul>

        </div>
    )
}