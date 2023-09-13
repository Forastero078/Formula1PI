import {
    ALL_DRIVERS,
    CREATE_DRIVER,
    DELETE_DRIVER,
    FILTERXTEAM,
    FILTERXDB,
    ORDER_ALFABETICO,
    ORDER_EDAD
} from "./actions";



const initialState = {

    allDrivers: [],
    allDriversBackUp: [],

}



export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ALL_DRIVERS:
            return {
                ...state,
                allDrivers: [...payload],
                allDriversBackUp: [...payload]
            }
        case CREATE_DRIVER:
            return {
                ...state,
                allDrivers: [...allDriverBackUp, payload],
                allDriversBackUp: [...allDriverBackUp, payload]
            }

        case DELETE_DRIVER:

            const filtrado = state.allDriverBackUp.filter((element) => element.id !== payload.id)
            return {
                ...state,
                allDrivers: filtrado,
                allDriversBackUp : filtrado

            }

        case FILTERXTEAM:
            const { allDriversBackUp } = state;
            console.log({ payload: payload })

            if (payload === 'Todos los conductores') {
                return {
                    ...state,
                    allDrivers: [...state.allDriversBackUp]
                }
            }

            let filter = allPokemonsBUp.filter((element) => {
                return element.pokeTypes[0].type.name === payload
            })



            return {
                ...state,
                allPokemons: [...filter]
            }

            case FILTERXDB:
                return{}

        case ORDER_ALFABETICO:

            let charSort;
            if (payload === 'orden alfabetico') {
                return { ...state }
            }

            if (payload === 'ascendente') {
                let { allPokemons } = state;
                charSort = allPokemons.sort((a, b) => a.name.localeCompare(b.nombre))
            } else if (payload === 'descendente') {
                let { allPokemons } = state;
                charSort = allPokemons.sort((a, b) => b.name.localeCompare(a.name));
            }

            return {
                ...state,
                allPokemons: [...charSort]
            };
        case ORDER_EDAD:

            let charsSort;

            if (payload === 'ascendente') {
                let { allPokemons } = state;
                charsSort = allPokemons.sort((a, b) => a.stats[1].base_stat - b.stats[1].base_stat)
            } else if (payload === 'descendente') {
                let { allPokemons } = state;
                charsSort = allPokemons.sort((a, b) => b.stats[1].base_stat - a.stats[1].base_stat);
            }

            return {
                ...state,
                allPokemons: [...charsSort]
            };
        default:
            return state;
    }
}