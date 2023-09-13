import React, { useState } from "react";
import styles from './FormNewUser.module.css';
import F1 from '../../assets/ideogram.jpeg';
import axios from 'axios';
import validate from "./validation";




export default function FormNewUser(props) {

    const { display, handlerDisplay } = props;

    const [inputs, setInputs] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        nationality: '',
        birdthDate: '0000-00-00'
    });

    const [errors, setErrors] = useState({});

    const handlerClass = (display) => {
       if(display === true){
        return styles.popup
       } else {
        return styles.none
       }
    }

    const handlerInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

        setErrors(validate(inputs));
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
    
    

      axios.post('http://localhost:3001/user', {
        ...inputs,
        }).then((response) => alert('Usuario creado con exito!'))
      .catch( error => console.log({error: error.message}))
     
      setInputs({
        name: '',
        lastName: '',
        email: '',
        password: '',
        nationality: '',
        birdthDate: '0000-00-00'
      })

      setTimeout(() => {
          handlerDisplay(display);
      }, 2000)
    };





    return (
        <div className={handlerClass(display)}>

            <form onSubmit={handlerSubmit} className={styles.form}>

                <button className={styles.close} onClick={handlerDisplay}><span className={styles.x}>X</span></button>
  
                <h1 className={styles.h1}>¡Crea tu usuario!</h1>
                 <section className={styles.inputsAndLabels}>
                <p className={styles.labels}>Nombre:</p>
                <input className={styles.input} onChange={handlerInputs} type="text" name='name' value={inputs.name} placeholder='Tu nombre...' />
                {errors.name && <p className={styles.warning}>{errors.name}</p>}

                <p className={styles.labels}>Apellido:</p>
                <input className={styles.input} onChange={handlerInputs} type="text" name='lastName' value={inputs.lastName} placeholder='Tu apellido...' />
                {errors.lastName && <p className={styles.warning}>{errors.lastName}</p>}

                <p className={styles.labels}>E-mail:</p>
                <input className={styles.input} onChange={handlerInputs} type="text" name='email' value={inputs.email} placeholder='usuario@email.com...' />
                {errors.email && <p className={styles.warning}>{errors.email}</p>}

                <p className={styles.labels}>Password:</p>
                <input className={styles.input} onChange={handlerInputs} type="password" name='password' value={inputs.password} placeholder='Debe tener una mayuscula y un numero' />
                {errors.password && <p className={styles.warning}>{errors.password}</p>}

                <p className={styles.labels}>Nacionalidad:</p>
                <input className={styles.input} onChange={handlerInputs} type="text" name='nationality' value={inputs.nationality} placeholder='Tu nacionalidad...' />

                <p className={styles.labels}>Fecha de Nacimiento:</p>
                <input className={styles.input} onChange={handlerInputs} type="date" id="fecha" name="birdthDate" value={inputs.birdthDate} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" required />
                </section>

                <img className={styles.img} src={F1} alt='Formula 1' />

                 
                <button className={styles.button} type='submit'>Crear Usuario!</button>






            </form>




        </div>
    )
}