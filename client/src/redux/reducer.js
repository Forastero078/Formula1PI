import {
    ALL_DRIVERS,
    CREATE_DRIVER,
    DELETE_DRIVER,
    FILTER,
    ORDER_ALFABETICO,
    ORDER_EDAD,
    ON_SEARCH
} from "./actions";



const initialState = {

    allDrivers: [],
    allDriversBackUp: [],
    onSearch: []

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
                allDriversBackUp: filtrado

            }

        case FILTER:
            const { allDriversBackUp } = state;
            let filter
            console.log({ payload: payload })

            if (payload === 'Todos los conductores') {
                return {
                    ...state,
                    allDrivers: [...allDriversBackUp]
                }
            }

            if (payload === 'Base de datos') {

                filter = allDriversBackUp.filter((element) => {
                    return !element.hasOwnProperty('isCreated')
                })
            }

            if (payload === 'Mis conductores') {

                filter = allDriversBackUp.filter((element) => {
                    return element.hasOwnProperty('isCreated')
                })
            }



            return {
                ...state,
                allDrivers: [...filter]
            }


        case ORDER_ALFABETICO:

            let charSort;
            if (payload === 'orden alfabetico') {
                return { ...state }
            }

            if (payload === 'ascendente') {

                charSort = state.allDrivers.sort((a, b) => {
                    if (a.name.surname && b.name.surname) {
                        return a.name.surname.localeCompare(b.name.surname)
                    } else {
                        if(a.lastName && b.lastName){
                            return a.lastName.localeCompare(b.lastName)
                        }
                    }
                })
            } else if (payload === 'descendente') {
                
                charSort = state.allDrivers.sort((a, b) => {
                    if (a.name.surname && b.name.surname) {
                        return b.name.surname.localeCompare(a.name.surname)
                    } else {
                        if(b.lastName && a.lastName){
                            return b.lastName.localeCompare(a.lastName)
                        }
                    }
                })
            }

            return {
                ...state,
                allDrivers: [...charSort]
            };
        case ORDER_EDAD:

            let charsSort;

            if (payload === 'edad') {

               charSort = state.allDriversBackUp.sort((a, b) => {
                return a.id - b.id
               })
            }

            if (payload === 'ascendente') {
                
                charsSort = state.allDriversBackUp.sort((a, b) => {
                    const dateA = new Date(a.dob);
                    const dateB = new Date(b.dob)

                    return dateA - dateB
                });
            } else if (payload === 'descendente') {
                
                charsSort = state.allDriversBackUp.sort((a, b) => {
                    const dateA = new Date(a.dob);
                    const dateB = new Date(b.dob)

                    return dateB - dateA
                });
            }

            return {
                ...state,
                allDrivers: [...charsSort]
            };

        case ON_SEARCH:

            return {
                ...state,
                onSearch: payload
            }

        default:
            return state;
    }
}