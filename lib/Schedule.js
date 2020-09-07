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

}

module.exports = Schedule;
