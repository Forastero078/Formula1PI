import React from "react";
import styles from './Card.module.css';
import handlerColorTeam from "./handlerColorTeam";




export default function Card(props) {

    const {
        forename,
        surname,
        name,
        image,
        escuderia,
        number
    } = props;

    const apellido = surname[0].toUpperCase() + surname.slice(1)
    


    return (
        <div className={styles.card}>
            <img src={image} alt={surname} className={styles.img} />

            <div className={styles.info}>
                <p className={styles.name}>{`${forename[0].toUpperCase()}. ${apellido}`}</p>
                <p className={handlerColorTeam(escuderia)}>{escuderia}</p>
            </div>
        </div>
    )

}