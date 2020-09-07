class Schedule  {
MINUTES_IN_WORK_DAY = 60 * 8;
#schedule = Array(this.MINUTES_IN_WORK_DAY).fill(false);

nextOpenMinute(){

  return this.#schedule.findIndex(element => element === false);
}

freeWindow(startMinute, endMinute) {
  return this.#schedule
    .slice(startMinute, endMinute)
    .every(minute => !minute);
}

addOrder(order) {
  for(let i = order.startMinute; i <= order.deliveryMinute; i++) {
    this.#schedule[i] = true;
  }
}

clearSchedule() {
  this.#schedule.fill(false);
}

printSchedule() {
  const schedule = this.#schedule.reduce((acc, minute, i) => {
    if(this.#schedule[i - 1] === minute) {
      acc[acc.length - 1] = { ...acc[acc.length - 1], end:i };
    } else {
      acc.push({ start: i, end: i, status: minute ? 'busy' : 'free' });
    }

    return acc;
  }, []);
  console.table(schedule);
}

}


module.exports = Schedule;
