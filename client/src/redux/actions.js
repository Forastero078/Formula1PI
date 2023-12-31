import axios from 'axios';

export const ALL_DRIVERS = 'ALL_DRIVERS';
export const CREATE_DRIVER = 'CREATE_DRIVER';
export const DELETE_DRIVER = 'DELETE_DRIVER';
export const FILTER = 'FILTER'
export const ORDER_ALFABETICO = 'ORDER_ALFABETICO';
export const ORDER_EDAD = 'ORDER_EDAD';
export const ON_SEARCH = 'ON_SEARCH';

export const allDrivers = () => {
   
   return async(dispatch) => {
        const response = await axios.get(`http://localhost:3001/drivers/`);
        const { data } = response;

               

   
      return dispatch({
         type: ALL_DRIVERS,
      payload: data
     })  
   
 }
 }

export const createDriver = (driverData) => {
    const endpoint = 'http://localhost:3001/drivers/';
    return async(dispatch) => {
      try{ 
      await axios.post(endpoint, {...driverData}).then((data) => {
         
          return dispatch({
             type: CREATE_DRIVER,
             payload: data,
          });
       });
    } catch(error){
      console.log({error: error.message});
    }
 };
}

 export const deleteDriver = (id) => {
    const endpoint = `http://localhost:3001/mypokemons/${id}`;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETE_DRIVER,
             payload: data,
       });
       });
    };
 };

 export const filter = (payload) => {
    return {
        type: FILTER,
        payload: payload
    }
};



export const orderAlfabetico = (type) => {


    return {
        type: ORDER_ALFABETICO,
        payload: type
    }
};

export const orderEdad = (type) => {

   
   return {
       type: ORDER_EDAD,
       payload: type
   }
};

export const onSearchDriver = (data) => {

   return {
      type: ON_SEARCH,
      payload: data
   }
};