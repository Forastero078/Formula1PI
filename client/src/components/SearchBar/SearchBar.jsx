import React from "react";
import styles from './SearchBar.module.css';




export default function SearchBar(){




    return(
        <div className={styles.searchBar}>
        <section className={styles.search}>
            <span className={styles.buscar}>Buscar</span>
            <input type="search" placeholder="Busca un conductor..." className={styles.input} />
        </section>
    </div>
    )
}