// Utilitário para geração de table string com base em um objeto

const Table = {
  headerVar: "%header%",
  bodyVar: "%body%",

  generateTable: (data) => {
    const tableTemplate = `<table border="1"><thead><tr>${Table.headerVar}</tr></thead><tbody>${Table.bodyVar}</tbody></table>`;

    const tdBody = [];

    for (let i = 0; i < data.length; i++) {
      let el = data[i];
      let tds = "";

      Object.entries(el).forEach(([key, element]) => {
        let img = key === "imagem" ? `<img src="${element}" />` : "";

        tds += `<td align="center">${img || element}</td>`;
      });

      tdBody.push(tds);
    }

    let h = "";
    Object.keys(data[0]).forEach((key) => {
      h += `<th>${key}</th>`;
    });

    let b = tdBody.map((element) => `<tr>${element}</tr>`).join("");

    return tableTemplate.replace(Table.headerVar, h).replace(Table.bodyVar, b);
  },
};

module.exports = Table;
