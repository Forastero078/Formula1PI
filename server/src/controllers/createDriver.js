const { Driver } = require('../db');





const createDriver = (req, res) => {

    const { body } = req;

    try {

        const newDriver = Driver.create({
            name: body.name,
            lastName: body.lastName,
            description: body.description,
            image: body.image,
            nationality: body.nationality,
            birdthDate: body.birdthDate
        });

        res.status(200).json(newDriver);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    createDriver
}