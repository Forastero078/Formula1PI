const axios = require('axios');
const { Team } = require('../db');




const cargarTeamsAdB = async() => {


    try{
        const response = await axios.get('http://localhost:5000/drivers');
        const { data } = response;

        const mapeo = data.map((element) => {
            return element.teams
        });
        
        const segundoMapeo = mapeo.map((element) => {
            if(element){
            const elements = element.replace(/\s/g, '').split(',')
            return elements
            }
        })

        const arrayUnidos = [].concat(...segundoMapeo);

        let elementosUnicos = {};
        let arraySinDuplicados = [];

        for(let i = 0; i < arrayUnidos.length; i++){
            let element = arrayUnidos[i]
            elementosUnicos[element] = true
        };

        for (var elementoUnico in elementosUnicos) {
            arraySinDuplicados.push(elementoUnico);
          }
        
          arraySinDuplicados.map((element) => {
            return Team.create({
                name: element
            })
          });

          console.log('Todos los teams han sido cargados a la DB')

    } catch (error) {
        console.log({error: error.message});
    }
};


module.exports = {
    cargarTeamsAdB
}