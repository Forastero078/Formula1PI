import React from "react";
import styles from './Card.module.css';
import handlerColorTeam from "./handlerColorTeam";
import { Link } from "react-router-dom";




export default function Card(props) {

    const {
        id,
        forename,
        surname,
        name,
        image,
        escuderia,
        number,
        isCreated
    } = props;

    const apellido = surname[0].toUpperCase() + surname.slice(1)
    


    return (
        <div className={styles.card}>
            <Link to={ isCreated === true ? `/detail/${surname}` : `/detail/${id}`}>
            <img src={image} alt={surname} className={styles.img} loading="eager"/>

            <div className={styles.info}>
                <p style={apellido.length > 9 ? {fontSize: '20px'}: {}} className={styles.name}>{`${forename[0].toUpperCase()}. ${apellido}`}</p>
                <p className={handlerColorTeam(escuderia)} style={{fontSize: '15px'}}>{escuderia}</p>
            </div>
            </Link>
        </div>
    )

}