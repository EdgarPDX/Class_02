const Schedule = require('./Schedule.js');
const Order = require('./Order.js');

describe('Schedule class', () => {
  it('manipulates a schedule', () => {
    const pizzaSchedule = new Schedule();

    const nextOpen = pizzaSchedule.nextOpenMinute();

    expect(nextOpen).toEqual(0);

  });

  it('adds order to the schedule', () => {
    const pizzaSchedule = new Schedule();
    const order = new Order('Tony', 30, 10);
    pizzaSchedule.addOrder(order);

    expect(pizzaSchedule.nextOpenMinute()).toEqual(31);
  });
});
