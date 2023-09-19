import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from './Detail.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';




export default function Detail() {

    const [character, setCharacter] = useState([]);

    const { detailId } = useParams();
    
    const prevId = useMemo(() => {return ''}, [detailId]);

    

    useEffect(() => {

        async function update() {
        try {
            const response = await axios.get(`http://localhost:3001/drivers/${detailId}`);
            const { data } = response;

            data ? setCharacter(data) : console.log('No data');
        } catch (error) {
            console.log({ error: error.message });
        }
    }
    
    if(prevId !== detailId) update();
    console.log(prevId)
    console.log(detailId)
}, []);



    // if (character) {
    //     const {
    //         id,
    //         nombre,
    //         apellido,
    //         nacionalidad,
    //         imagen,
    //         descripcion,
    //         dob,
    //         teams
    //     } = character[0];
    // }

    // const name = nombre[0].toUpperCase() + nombre.slice(1);
    // const lastName = apellido[0].toUpperCase() + apellido.slice(1);





    return (
        <div className={styles.detail}>


            <header className={styles.header}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
                <button onClick={() => console.log(character)}>LOGGG!!!</button>
                <button onClick={() => console.log(refPrev)}>LOGGG!!!</button>
                {/* <h1 className={styles.h1}>{`${name} ${lastName}`}</h1> */}
            </header>

            {/* <main className={styles.main}>

                <span className={styles.info}>Fecha de nacimiento: {dob}</span>
                <br />
                <span className={styles.info}>Nacionalidad : {nacionalidad}</span>
                <br />
                <span className={styles.info}>Escuderias: {teams}</span>
                <br />
                <span className={styles.info}>Descripcion: {descripcion}</span>


                <img src={imagen} alt={`${name} ${lastName}`} className={styles.img} />
            </main> */}


        </div>
    )
}