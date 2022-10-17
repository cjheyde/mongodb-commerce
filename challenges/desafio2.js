// 2 - Ordene a coleção produtos pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o nome e a quantidade de lanches vendidos
db.produtos.find(
  {}, { nome: 1, vendidos: 1, _id: 0 },
  ).sort({ vendidos: 1 });
