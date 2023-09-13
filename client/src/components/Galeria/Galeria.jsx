import React, { useEffect, useState } from "react";
import styles from './Galeria.module.css';
import { useSelector } from "react-redux";




export default function Galeria(){

const [ drivers, setDrivers ] = useState([]);

const globalState = useSelector((state) => state)


useEffect(() => {

    
    setDrivers(globalState.allDrivers)
    
}, [setDrivers, globalState]);



    return(
        <div className={styles.drivers}>
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
         <button onClick={() => console.log(drivers)}>LOGGG!!!</button>

        </div>
    )
}