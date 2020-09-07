const Order = require('./Order.js');

describe('Order class', () => {
  it('holds information of an order', () => {
    const pizzaOrder = new Order('Tony', 200, 20);

    // console.log(pizzaOrder);

    expect(pizzaOrder).toEqual({
      name: 'Tony',
      deliveryMinute: 200,
      startMinute: 160 });

  });
});
