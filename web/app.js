const http = require("http");
const Table = require("./src/utils/table");
const { getPokemons } = require("./src/controllers/pokemonsController");

const PORT = 3001;

http
  .createServer((req, res) => {
    const { url, method } = req;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;

    if (url === "/pokedex" && method === "GET") {
      const table = Table.generateTable(getPokemons());

      res.write("<h1>Pokedex:</h1>");
      res.write(table);
    } else if (url === "/" && method === "GET") {
      res.write("<h1>Home</h1>");
      res.write('<h3>Navegue para <a href="./pokedex">Pokedex</a></h3>');
    } else {
      res.statusCode = 404;
      res.write("<h1>Página não encontrada.</h1>");
    }

    res.end();
  })
  .listen(PORT, () => console.log(`Servidor rodando na porta :${PORT}`));
