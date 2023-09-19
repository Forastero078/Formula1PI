import React, { useEffect, useState } from "react";
import styles from './NavButtonsTop.module.css';
import SearchBar from "../SearchBar/SearchBar";




export default function NavButtonsTop(props) {

    const { back, next, currentPage, handleGoToPage, search } = props;

    const handlerCurrentPage = (e) => {
        return handleGoToPage(Number(e.target.value));
    }

    return (
        <div className={styles.nav}>

            <div className={styles.paginadorButtons}>
                <button onClick={back} className={styles.backAndNext}> Atras </button>
                <input type="number" style={{ width: '40px' }} value={currentPage} onChange={handlerCurrentPage}/>
                <button onClick={next} className={styles.backAndNext}> Siguiente </button>
            </div>

            <SearchBar search={search}/>

        </div>
    )
}