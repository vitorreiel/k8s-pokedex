const { getPokemons } = require("./src/controllers/pokemonsController");

const data = getPokemons();

console.table(data);
