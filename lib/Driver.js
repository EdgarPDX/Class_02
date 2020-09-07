const Schedule = require('./Schedule.js');


class Driver {
    name;
    currentSchedule = new Schedule()

    constructor(name){
      this.name = name;
    }
}

module.exports = Driver;
