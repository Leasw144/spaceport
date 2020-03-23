var validTypes = ["military"];


class Ship {
  constructor ({name, type, maxCrew}) {
    this.fuelCapacity = 10;
    this.maxCrew = 2;
    this.odometer = 0;
    this.name = name;
    this.type = type = validTypes ? type : undefined;
  }
  initFuel(fuelCapacity) {
    return (this.fuelCapacity + fuelCapacity)
  }
}



module.exports = Ship
