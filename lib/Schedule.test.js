const Schedule = require('./Schedule.js');
const Order = require('./Order.js');

describe('Schedule class', () => {
  it('manipulates a schedule', () => {
    const pizzaSchedule = new Schedule();

    const nextOpen = pizzaSchedule.nextOpenMinute();

    expect(nextOpen).toEqual(0);

  });

  it('returns true if not busy', () => {
    const pizzaSchedule = new Schedule();
    const order = new Order('Tony', 30, 10);
    pizzaSchedule.addOrder(order);

    expect(pizzaSchedule.freeWindow(0, 31)).toBeFalsy();
    expect(pizzaSchedule.freeWindow(31, 60)).toBeTruthy();
  });

  it('adds order to the schedule', () => {
    const pizzaSchedule = new Schedule();
    const order = new Order('Tony', 30, 10);
    pizzaSchedule.addOrder(order);

    expect(pizzaSchedule.nextOpenMinute()).toEqual(31);
  });

  it('clears schedule', () => {
    const pizzaSchedule = new Schedule();
    const order = new Order('Tony', 30, 10);
    pizzaSchedule.addOrder(order);
    pizzaSchedule.clearSchedule();

    expect(pizzaSchedule.nextOpenMinute()).toEqual(0);
  });
});
