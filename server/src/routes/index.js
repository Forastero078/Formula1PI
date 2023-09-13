const { Router } = require("express");
const { getDrivers } = require('../controllers/getDrivers');
const { getDriverByParams } = require('../controllers/getDriverByParams');
const { getDriverByQuery } = require('../controllers/getDriverByQuery');
const { createDriver } = require('../controllers/createDriver');
const { getTeams } = require('../controllers/getTeams');
const { createNewUser } = require("../controllers/createNewUser");
const { login } = require("../controllers/login");
const router = Router();

router.get('/drivers', (req, res) => {
    //Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
    return getDrivers(req, res);
});

router.get('/drivers/name?', (req, res) => {
//     Esta ruta debe obtener los primeros 15 drivers que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el driver, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.
    return getDriverByQuery(req, res);
});

router.get('/drivers/:idDriver', (req, res) => {
//     Esta ruta obtiene el detalle de un driver específico. Es decir que devuelve un objeto con la información pedida en el detalle de un driver.
// El driver es recibido por parámetro (ID).
// Tiene que incluir los datos del/los team/s del driver al que está asociado.
// Debe funcionar tanto para los drivers de la API como para los de la base de datos.
    return getDriverByParams(req, res);
});


router.post('/drivers', (req, res) => {
//     Esta ruta recibirá todos los datos necesarios para crear un driver y relacionarlo con sus teams solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un driver en la base de datos, y este debe estar relacionado con sus teams indicados (al menos uno).
   return createDriver(req, res);
});

router.get('/teams', (req, res) => {
//     Obtiene un arreglo con todos los teams existentes de la API.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
   return getTeams(req, res);
});

router.post('/user', (req, res) => {
    return createNewUser(req, res);
});

router.post('/login', (req, res) => {
    return login(req, res);
});



module.exports = router;
