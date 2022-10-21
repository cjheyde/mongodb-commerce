// 28 - Conte quantos produtos têm 4 ingredientes
db.produtos.countDocuments({ ingredientes: { $size: 4 } }, {});