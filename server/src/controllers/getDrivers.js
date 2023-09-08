const axios = require('axios');
const { Driver } = require('../db');






const getDrivers = async(req, res) => {

    try{
const response = await axios.get('http://localhost:5000/drivers');
const { data } = response;

const driverDB = await Driver.findAll();

const totalDrivers = [...data, ...driverDB];


res.status(200).json(totalDrivers);
    } catch(error){
        res.status(400).json({error: error.message})
    }

};


module.exports = {
    getDrivers
}