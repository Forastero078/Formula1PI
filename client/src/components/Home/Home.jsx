import React, { useState, useEffect } from "react";
import styles from './Home.module.css';
import Card from "../Card/Card";
import { drivers } from '../../dbTest.js';
import { useSelector } from "react-redux";
import F1 from '../../assets/allDrivers.jpeg';
import create from '../../assets/createDriver.jpeg';
import about from '../../assets/about.jpeg';
import logo from '../../assets/logo.jpeg';
import wiki from '../../assets/wiki.jpeg';




export default function Home() {

    const [someDrivers, setSomeDrivers] = useState([]);

    const globalState = useSelector((state) => state);

    useEffect(() => {

        const some = globalState.allDrivers.slice(0, 9)

        setSomeDrivers([...some])

    }, [setSomeDrivers, globalState]);




    return (
        <div className={styles.home}>
            <section className={styles.header}>
                <h1 className={styles.h1}>¡Bienvenido a Formula 1 App!</h1>
                
                <h4 className={styles.h4}>"Descubre a los pilotos legendarios y contemporáneos, explora sus equipos, conoce sus historias y, ¿por qué no?, crea tu propio piloto en la sección 'crear'."</h4>
            <hr style={{width: '90%'}}/>
                <br />

                <button style={{ display: 'none' }} onClick={() => console.log(globalState)}>LOGGG!!!</button>
            </section>


            <section className={styles.showFirst}>

                <main className={styles.main}>

                    <div className={styles.links}>

                    <div className={styles.img1}>
                            <div className={styles.text}>
                                Pagina Oficial Formula 1
                            </div>
                            <img src={logo} alt="F1" className={styles.img} />
                        </div>

                    <div className={styles.img1}>
                            <div className={styles.text}>
                                Pagina Oficial "FIA"
                            </div>
                            <img src='https://www.fia.com/sites/default/files/page/top_image/07110801_052_5.jpg' alt="F1" className={styles.img} />
                        </div>

                    <div className={styles.img1}>
                            <div className={styles.text}>
                                Wikipedia
                            </div>
                            <img src={wiki} alt="F1" className={styles.img} />
                        </div>


                    </div>

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
                <aside className={styles.aside}>
                    <section className={styles.aside_section}>
                        <div className={styles.img1}>
                            <div className={styles.text}>
                                Todos los conductores
                            </div>
                            <img src={F1} alt="F1Aside" className={styles.img} />
                        </div>


                        <div className={styles.img1}>
                            <div className={styles.text}>
                                Crea tu piloto
                            </div>
                        <img src={create} alt="F1Aside" className={styles.img} />
                           
                        </div>


                        <div className={styles.img1}>
                            <div className={styles.text}>
                                About
                            </div>
                        <img src={about} alt="F1Aside" className={styles.img} />
                           
                        </div>


                    </section>
                </aside>
            </section>
        </div>
    )
}