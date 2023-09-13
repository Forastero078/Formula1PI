const { User } = require('../db');





const createNewUser = (req, res) => {

    const { body } = req;

    try{
        const newUser = User.create({
            name: body.name,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
            nationality: body.nationality,
            birdthDate: body.birdthDate
        })

        res.status(200).json('Usuario creado con exito!')
    } catch(error) {
        res.status(400).json({error: error.message})
    }

};

module.exports = {
    createNewUser
}