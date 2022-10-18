// 5 - Retorne o nome, as curtidas e vendidos dos lanches que tiveram quantidade de curtidas igual a 36 ou tenham a quantidade de vendas igual a 85
db.produtos.find(
  {
    $or: [
      { curtidas: { $eq: 36 } },
      { vendidos: { $eq: 85 } },
    ],
  },
  { _id: 0, nome: 1, curtidas: 1, vendidos: 1 },
);
