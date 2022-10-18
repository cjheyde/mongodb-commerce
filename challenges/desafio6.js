// 6 - Retorne o nome e as curtidas dos lanches que tiveram curtidas maiores que 10 e menores que 100
db.produtos.find(
  {
    $and: [
      { curtidas: { $gt: 10 } },
      { curtidas: { $lt: 100 } },
    ],
  },
  { _id: 0, nome: 1, curtidas: 1 },
);
