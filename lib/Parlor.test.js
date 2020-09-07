const Parlor = require('./Parlor.js');
const Driver = require('./Driver.js');
const Order = require('./Order.js');

describe('Parlor class', () => {
  it('add Drivers', () => {
    const parlor = new Parlor();
    const driver = new Driver('Mark');

    parlor.addDriver(driver);
  });

  it('add orders', () => {
    const parlor = new Parlor();
    const newOrder = new Order('Tony', 30, 10);

    parlor.addOrder(newOrder);
  });

  it('prints schedule', () => {
    console.table = jest.fn();
    const parlor = new Parlor();

    const newOrder1 = new Order('Tony', 30, 10);
    parlor.addOrder(newOrder1);

    const newOrder2 = new Order('Jessica', 60, 15);
    parlor.addOrder(newOrder2);

    const newOrder3 = new Order('Toby', 80, 20);
    parlor.addOrder(newOrder3);

    const Mark = new Driver('Mark');
    parlor.addDriver(Mark);

    const Karen = new Driver('Karen');
    parlor.addDriver(Karen);

    parlor.printSchedule();

    

  });
});
