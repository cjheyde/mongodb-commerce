// 3 - Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido
db.produtos.find(
  {
    
  }, { nome: 1, vendidos: 1, _id: 0 },
).sort({ vendidos: -1 }).limit(1);
