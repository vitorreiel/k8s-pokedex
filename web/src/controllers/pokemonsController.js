const Pokemons = require("../models/pokemons");

// Função para pegar os Pokémons e filtrar os dados necessários para visualização
const getPokemons = () => {
  const filteredData = [];
  const data = Pokemons.findAll();

  Object.values(data).forEach(({ id, name, stats, sprites }) => {
    filteredData.push({
      id,
      nome: name,
      pvMax: stats[0].base_stat,
      ataque: stats[1].base_stat,
      defesa: stats[2].base_stat,
      ataque_especial: stats[3].base_stat,
      defesa_especial: stats[4].base_stat,
      velocidade: stats[5].base_stat,
      imagem: sprites.front_default,
    });
  });

  return filteredData;
};

module.exports = {
  getPokemons,
};
