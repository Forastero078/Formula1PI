import React, { useState } from "react";
import styles from './Form.module.css';
import F1 from '../../assets/createSection.jpeg';
import axios from 'axios';
import validate from "./validation";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { allDrivers } from "../../redux/actions";



export default function Form() {

    const globalState = useSelector((state) => state.allDrivers)

    const [inputs, setInputs] = useState({
        isCreated: true,
        name: '',
        lastName: '',
        description: '',
        image: '',
        nationality: '',
        birdthDate: '0000-00-00'
    });

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();


    const handlerInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

        setErrors(validate(inputs));
    };

    const handlerSubmit = async(e) => {
        e.preventDefault();



        await axios.post('http://localhost:3001/drivers', {
            ...inputs
        }).then(({ data }) => alert(`Tu piloto ${data.name} ${data.lastName} ha sido creado con exito!, puedes encontrarlo en la seccion de "Galeria de conductores"`))
            .catch(error => console.log({ error: error.message }))

        setInputs({
            isCreated: true,
            name: '',
            lastName: '',
            description: '',
            image: '',
            nationality: '',
            birdthDate: '0000-00-00'
        });

        dispatch(allDrivers());

    };






    return (
        <div className={styles.body}>

            <section className={styles.header}>
                <br />
                <h1 className={styles.h1}>¡Crea tu conductor de F1!</h1>

                <h4 className={styles.h4}>"Crea tu conductor de Formula 1, luego encuentralo en la 'Galeria de conductores'"</h4>
                <hr style={{ width: '90%' }} />
                <br />

            </section>

            <form onSubmit={handlerSubmit} className={styles.form}>

                {/* 
                <h1 className={styles.h1}>¡Crea tu conductor de F1!</h1> */}
                <section className={styles.inputsAndLabels}>
                    <p className={styles.labels}>Nombre:</p>
                    <input className={styles.input} onChange={handlerInputs} type="text" name='name' value={inputs.name} placeholder='Nombre...' />
                    {errors.name && <p className={styles.warning}>{errors.name}</p>}

                    <p className={styles.labels}>Apellido:</p>
                    <input className={styles.input} onChange={handlerInputs} type="text" name='lastName' value={inputs.lastName} placeholder='Apellido...' />
                    {errors.lastName && <p className={styles.warning}>{errors.lastName}</p>}

                    <p className={styles.labels}>Imagen:</p>
                    <input className={styles.input} onChange={handlerInputs} type="text" name='image' value={inputs.image} placeholder='https://www.imagen.com' />
                    {errors.image && <p className={styles.warning}>{errors.image}</p>}

                    <p className={styles.labels}>Nacionalidad:</p>
                    <input className={styles.input} onChange={handlerInputs} type="text" name='nationality' value={inputs.nationality} placeholder='Nacionalidad de tu conductor...' />
                    {errors.nationality && <p className={styles.warning}>{errors.nationality}</p>}

                    <p className={styles.labels}>Fecha de Nacimiento:</p>
                    <input className={styles.input} onChange={handlerInputs} type="date" id="fecha" name="birdthDate" value={inputs.birdthDate} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" required />

                    <p className={styles.labels}>Descripción:</p>
                    <textarea className={styles.textarea} onChange={handlerInputs} type="text" name='description' value={inputs.description} placeholder='Descripción de tu conductor...' />

                </section>

                <img className={styles.img} src={F1} alt='Formula 1' />


                <button className={styles.button} type='submit'>Crear conductor!</button>






            </form>

            <button onClick={() => console.log(globalState)}>LOG!!!!</button>
            <button onClick={() => console.log(inputs)}>LOG!!!!</button>


            <Footer />

        </div>
    )
}