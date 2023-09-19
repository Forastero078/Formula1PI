import React, { useState, useEffect } from "react";
import styles from './Home.module.css';
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import OficialLinks from "../OficialLiks/OficialLinks";
import AsideLinks from "../AsideLinks/AsideLinks";




export default function Home() {

    const [someDrivers, setSomeDrivers] = useState([]);

    const globalState = useSelector((state) => state);

    useEffect(() => {

        const some = globalState.allDrivers.slice(0, 12)

        setSomeDrivers([...some])

    }, [setSomeDrivers, globalState]);




    return (
        <div className={styles.home}>
            <section className={styles.header}>
                <br />
                <h1 className={styles.h1}>¡Bienvenido a Formula 1 App!</h1>

                <h4 className={styles.h4}>"Descubre a los pilotos legendarios y contemporáneos, explora sus equipos, conoce sus historias y, ¿por qué no?, crea tu propio piloto en la sección 'crear'."</h4>
                <hr style={{ width: '90%' }} />
                <br />

            </section>


            <section className={styles.showFirst}>

                <main className={styles.main}>

                    <div className={styles.cards}>
                        {someDrivers && someDrivers.map((element) => {

                            const lastTeam = element.teams.split(',')

                            return <Card
                                forename={element.name.forename}
                                surname={element.name.surname}
                                name={element.driverRef}
                                image={element.image.url}
                                escuderia={lastTeam[lastTeam.length - 1].trim()}
                                number={element.number}
                            />
                        })}

                    </div>
                </main>

                <AsideLinks />
            </section>

            <OficialLinks />


            <Footer />

        </div>
    )
}