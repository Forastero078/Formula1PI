const { User } = require('../db');
const { Op } = require('sequelize');




const login = (req, res) => {

    const { body } = req;


    try{
        const login = 
        User.findOne({
          where: {
            [Op.and]: [
              { email: body.email },
              { password: body.password }
            ]
          }
        }).then((user) => user ? res.status(200).json(true) : res.status(400).json(false))
        

         
    } catch(error){
        res.status(400).json({error: error.message})
    }
};



module.exports = {
    login
}