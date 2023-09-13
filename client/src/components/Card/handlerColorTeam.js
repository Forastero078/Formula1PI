import styles from './Card.module.css'


export default function handlerColorTeam(escuderia) {
    switch (escuderia) {
        case 'Mercedes':
            return styles.Mercedes

        case 'Ferrari':
            return styles.Ferrari

        case 'Red Bull':
            return styles.RedBull

        case 'Williams':
            return styles.Williams

        case 'Renault':
            return styles.Renault

        case 'Alfa Romeo':
            return styles.AlfaRomeo

        case 'Aston Martin':
            return styles.AstonMartin

        case 'Hass':
            return styles.Hass

        case 'McLaren':
            return styles.McLaren

        case 'Toro Rosso':
            return styles.ToroRosso

        case 'Alpine':
            return styles.Alpine

        default:
            return styles.default
    }
};
