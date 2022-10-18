// 8 - Delete os lanches com menos de 50 curtidas e retorne o nome dos lanches que restaram no banco
db.produtos.deleteMany({
  curtidas: {
    $lt: 50,
  },
});

db.produtos.find({}, { nome: 1, _id: 0 });