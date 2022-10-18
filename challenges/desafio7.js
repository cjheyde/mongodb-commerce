// 7 - Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista
db.produtos.find(
  {
    $and: [
      { vendidos: { $ne: 50 } },
      { tags: { $exists: false } },
    ],
  },
  { _id: 0, nome: 1, vendidos: 1 },
);