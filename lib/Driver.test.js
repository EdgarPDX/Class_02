const Driver = require('./Driver.js');
const Schedule = require('./Schedule.js');

describe('Driver class', () => {
  it('creates driver and a current schedule', () => {
    const driver = new Driver('Mark');
    
    expect(driver.name).toEqual('Mark');
    expect(driver.currentSchedule).toEqual(expect.any(Schedule));
  });
});
