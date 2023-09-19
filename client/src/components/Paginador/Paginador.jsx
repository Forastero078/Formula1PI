import React from "react";
import styles from './Paginador.module.css';
import Card from "../Card/Card";




export default function Paginador(props) {

    const { driversDisplay } = props;




    return (
        <div className={styles.cards}>
            {driversDisplay && driversDisplay.map((element) => {
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