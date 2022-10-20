// 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana
// Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60.

// Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino aos sábados em 120.

// Crie uma query que retorne o nome e vendasPorDia de todos os documentos.

db.produtos.updateMany(
  {},
  {
    $set:
    {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $inc:
    {
      "vendasPorDia.3": 60,
    },
  },
);

db.produtos.updateOne(
  { tags: { $elemMatch: { $eq: "bovino" } } },
  {
    $inc:
    {
      "vendasPorDia.6": 120,
    },
  },
);

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });