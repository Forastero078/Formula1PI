import React, { useState } from "react";
import styles from './LandingPage.module.css';
import validate from './validation';
import FormNewUser from "../FormNewUser/FormNewUser";


export default function LandingPage(props){


    const { login } = props;

    const [ display, setDisplay ] = useState(false)

    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({});

    const inputHandlers = (event) => {
        
        setUserData({
            ...userData,
            [ event.target.name ]: event.target.value
        });

        setErrors(validate(
            {
                ...userData
            })
            )};

    const submitHandler = (event) => {
        event.preventDefault();

        login(userData);
    }

    const handlerDisplay = (e) => {

        e.preventDefault();

     if(display === true){
        setDisplay(false)
     }else {
        setDisplay(true)
     }
     console.log(display);
    }


    return(
        <div className={styles.divPadre}>
        <div className={styles.divUno}>
            <img className={styles.logo} src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png" alt="logo" />

            <div className={styles.titulo}>
            <h1 className={styles.title}>Formula 1</h1>
            <h3 className={styles.subtitle}>¡Descubre todas las escuderias y conductores!</h3>
            <hr/>
            
            <form onSubmit={submitHandler} className={styles.login}>
            <div className={styles.userAndPass}>
            <h5 className={styles.userAndPass}>Usuario:</h5>
            <input type='text' className={styles.inputs} name='email' value={userData.email} onChange={inputHandlers} placeholder='  usuario@email.com'/>
            { errors.email && <p className={styles.warning}> {errors.email}</p>}

            <br/>
            
            <h5 className={styles.userAndPass}>Password:</h5>
            <input type='password' className={styles.inputs} name='password' value={userData.password} onChange={inputHandlers} placeholder='  contraseña'/>
            { errors.password && <p className={styles.warning}>{errors.password}</p>}
            
            <br/>
             <div className={styles.botonera}>
            <button type='submit' className={styles.button}><span className={styles.botonLogin}>LOGIN!</span></button>
            <button  className={styles.button} onClick={handlerDisplay}><span className={styles.boton}>REGISTRARME</span></button>
            </div>
            </div>
            </form>
            </div>
        </div>

        <div className={styles.divDos}>
        </div>
     <FormNewUser display={display} handlerDisplay={handlerDisplay}/>
    </div>
    )
}