const { Team } = require('../db');





const getTeams = async(req, res) => {

    try {

        const response = await Team.findAll();

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


module.exports = {
    getTeams
}