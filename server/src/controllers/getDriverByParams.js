const axios = require('axios');
const { Driver } = require('../db');
const { Sequelize } = require('sequelize');





const getDriverByParams = async(req, res) => {

    const { idDriver } = req.params;

    try {
        if(!isNaN(idDriver)){
        const response = await axios.get(`http://localhost:5000/drivers/${idDriver}`);
        const { data } = response;

        const driverDB = await Driver.findOne({
            where: {id : Number(idDriver) }
        });

        const arrayResponse = [{...data}];

        driverDB ? arrayResponse.push(driverDB) : null;

        res.status(200).json(arrayResponse);
        } else {
            const response = await axios.get(`http://localhost:5000/drivers`);
            const { data } = response;

            const driverDB = await Driver.findOne({
                where: {
                  [Sequelize.Op.or]: [
                    { 'name': idDriver },
                    { 'lastName': idDriver }
                  ]
                }
              });
    
            const arrayResponse = [...data]

            driverDB ? arrayResponse.push(driverDB) : null;

            const filter = arrayResponse.filter((element) => {
                const { forename, surname } = element.name;
                return forename.toLowerCase() === idDriver.toLowerCase() || surname.toLowerCase() === idDriver.toLowerCase()
            })
            if(filter.length > 0){  
            res.status(200).json(filter);
            } else {
                res.status(400).json({error: 'No hay conductor con ese nombre'})
            }
        }

    } catch(error){
        res.status(400).json({error: error.message})
    }
};


module.exports = {
    getDriverByParams
}