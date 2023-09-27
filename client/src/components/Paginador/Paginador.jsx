import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from './Paginador.module.css';
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filter, orderAlfabetico, orderEdad } from "../../redux/actions";




export default function Paginador(props) {

    const [teams, setTeams] = useState([]);

    const { driversDisplay, searchDisplay } = props;

    const globalState = useSelector((state) => state.onSearch);

    const dispatch = useDispatch();

    const handlerType = (e) => {
        dispatch(filter(e.target.value))
     };
    
     const handlerAlfabetico = (e) => {
        dispatch(orderAlfabetico(e.target.value));
     };
     
     const handlerEdad = (e) => {
        dispatch(orderEdad(e.target.value));
     };




    useEffect(() => {
        return async function () {
            const response = await axios.get('http://localhost:3001/teams');
            const { data } = response;

            data ? setTeams(() => data) : console.log('No data');
        }
    }, []);




    return (
        <div className={styles.cards}>

            <section className={styles.filters}>
                <select name='Team' className={styles.select} onChange={'handlerType'}>
                    <option value="Todos las escuderias">Todas las escuderias</option>
                    {teams && teams.map((element) => {
                        return <option value={element.name}>{element.name}</option>
                    })}
                </select>

                <select name='dbOrApi' className={styles.select} onChange={handlerType}>
                    <option value="Todos los conductores">Todos los conductores</option>
                    <option value="Base de datos">Base de datos</option>
                    <option value="Mis conductores">Mis conductores</option>
                </select>

                <select name='alfabetico' className={styles.select} onChange={handlerAlfabetico}>
                    <option value="orden alfabetico">Orden Alfabetico</option>
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                </select>

                <select name='edad' className={styles.select} onChange={handlerEdad}>
                    <option value="edad">Orden Edad</option>
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                </select>
            </section>


            {(driversDisplay && !globalState.length) && driversDisplay.map((element) => {
                let lastTeam = ' , '

                if (element.teams) {
                    lastTeam = element.teams.split(',')
                }
                if (element.isCreated) {

                    return <Card
                        id={element.id}
                        forename={element.name}
                        surname={element.lastName}
                        image={element.image}
                        isCreated={element.isCreated}

                    />

                }

                return <Card
                    id={element.id}
                    forename={element.name.forename}
                    surname={element.name.surname}
                    name={element.driverRef}
                    image={element.image.url ? element.image.url : "https://wallpapercave.com/wp/wp8757580.jpg"}
                    escuderia={lastTeam[lastTeam.length - 1].trim()}
                    number={element.number}
                />
            })}

            {(searchDisplay && globalState.length > 0) && searchDisplay.map((element) => {
                let lastTeam = ' , '

                if (element.teams) {
                    lastTeam = element.teams.split(',')
                }


                return <Card
                    id={element.id}
                    forename={element.name.forename}
                    surname={element.name.surname}
                    name={element.driverRef}
                    image={element.image.url ? element.image.url : "https://wallpapercave.com/wp/wp8757580.jpg"}
                    escuderia={lastTeam[lastTeam.length - 1].trim()}
                    number={element.number}
                />
            })}

        </div>
    )
}