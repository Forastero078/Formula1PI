const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { cargarTeamsAdB } = require('./src/utils/cargarTeamsAdB');
const PORT = 3001;

const syncDB = async() => {

await conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error));

cargarTeamsAdB();

}

syncDB();
