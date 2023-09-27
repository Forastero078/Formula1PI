const axios = require('axios');
const { Driver } = require('../db');
const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');



const getDriverByQuery = async(req, res) => {

    const { name } = req.query;

    try{

        const response = await axios.get('http://localhost:5000/drivers');
        const { data } = response;

        const driversDB = await Driver.findAll({
            where: {
              [Op.or]: [
                { 'name': { 
                [Op.like]: name 
                }
            },
            { 'lastName': { 
                [Op.like]: name 
                }
            },
              ],
            },
          });


        const filter = data.filter((element) => {
            const { forename, surname } = element.name;

            return forename.toLowerCase().includes(name.toLowerCase()) || surname.toLowerCase().includes(name.toLowerCase());  
              
        });

        const arrayResponse = [...filter, ...driversDB];

        if(arrayResponse.length > 0) {
            res.status(200).json(arrayResponse);
        } else {
            res.status(400).json({error: 'No se encuentra conductor con ese nombre'})
        }
    } catch(error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = {
    getDriverByQuery
}