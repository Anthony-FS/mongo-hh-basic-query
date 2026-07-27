db.pizzaOrders.find({
    quantity: { $lt: 5 },
    credit_card_type: "Mastercard"
  })


  db.pizzaOrders.find({
    size: "small",
    quantity: { $gte: 1, $lte: 5 }
  })

  db.pizzaOrders.find({
    quantity: { $gt: 10 },
    credit_card_type: null
  })