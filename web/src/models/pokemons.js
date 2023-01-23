const fs = require("fs");
const pokedexFile = require("../utils/constants/files");

const fileData = fs.readFileSync(pokedexFile, "utf8");
const { pokemons } = JSON.parse(fileData);

// Pega todos os dados de todos os Pokémons do arquivo
const findAll = () => pokemons;

module.exports = {
  findAll,
};
