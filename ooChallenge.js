class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Car extends Vehicle {
  constructor(make, model, year, numWheels) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
  constructor(make, model, year, numWheels) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!";
  }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(veh) {
    if (this.vehicles.length === this.capacity) {
      return "Sorry, we're full";
    } else if (veh instanceof Car) {
      this.vehicles.push("Car");
      return "Vehicle added!";
    } else if (veh instanceof Motorcycle) {
      this.vehicles.push("Motorcycle");
      return "Vehicle added!";
    } else {
      return "Only vehicles are allowed in here!";
    }
  }
}

let garage = new Garage(2);
