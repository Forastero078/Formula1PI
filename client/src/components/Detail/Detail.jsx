import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from './Detail.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';




export default function Detail() {

    const [character, setCharacter] = useState([]);

    const { detailId } = useParams();


    useEffect(() => {

        return async function () {
            try {
                const response = await axios.get(`http://localhost:3001/drivers/${detailId}`);
                const { data } = response;

                data ? setCharacter(data) : console.log('No data');
                console.log(detailId)
                console.log(data)
            } catch (error) {
                console.log({ error: error.message });
            }
        }


    }, [detailId]);


    let nombre;
    let apellido;

    let id,
        name,
        lastName,
        nationality,
        image,
        description,
        dob,
        teams,
        url,
        number



    if (character[0] && isNaN(detailId)) {

        id= character[0].id
        name = character[0].name
        lastName = character[0].lastName
        image = character[0].image
        nationality = character[0].nationality
        dob = character[0].birdthDate
        description = character[0].description
        teams = ''
        number = '\N'

        nombre = name[0].toUpperCase() + name.slice(1);
        apellido = lastName[0].toUpperCase() + lastName.slice(1);

    } 
    if(character[0] && !character[0].isCreated){


            id = character[0].id
            name = character[0].name
            nationality = character[0].nationality
            image = character[0].image.url ? character[0].image.url : "https://wallpapercave.com/wp/wp8757580.jpg"
            description = character[0].description
            dob = character[0].dob
            teams = character[0].teams
            url = character[0].url
            number = character[0].number

        nombre = name.forename[0].toUpperCase() + name.forename.slice(1);
        apellido = name.surname[0].toUpperCase() + name.surname.slice(1);
    }







    return (
        <div className={styles.detail}>


            <header className={styles.header}>

                <h1 className={styles.h1}>{`${nombre} ${apellido}`}</h1>

            </header>

            <div className={styles.number}>
                <span className={styles.numberSpan}>{number}</span>
            </div>

            <main className={styles.main}>

                <section className={styles.text}>

                    <p className={styles.info}><span className={styles.span}>Fecha de nacimiento:</span> {dob}</p>
                    <br />
                    <p className={styles.info}><span className={styles.span}>Nacionalidad :</span> {nationality}</p>
                    <br />
                    <p className={styles.info}><span className={styles.span}>Escuderias: </span> "{teams}"</p>
                    <br />
                    <p className={styles.info}><span className={styles.span}>Descripcion: </span> {description}</p>

                </section>


                <img src={image} alt={`${nombre} ${apellido}`} className={styles.img} />

            </main>


            <hr style={{width: '90%', marginTop: '20px', marginBottom: '20px'}}/>
            <br />


        </div>
    )
}