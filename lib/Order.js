class Order {
    name;
    deliveryMinute;
    #COOK_TIME = 20;
    #drivingDistanceMinutes;
    startMinute;

    constructor(name, deliveryMinute, drivingDistanceMinutes) {
      this.name = name;
      this.deliveryMinute = deliveryMinute;
      this.#drivingDistanceMinutes = drivingDistanceMinutes;
      this.startMinute = deliveryMinute - (this.#COOK_TIME + this.#drivingDistanceMinutes);
    }
}

module.exports = Order;


