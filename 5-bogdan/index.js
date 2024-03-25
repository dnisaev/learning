class Car {
    constructor(brand, color, owner, speed) {
        this.brand = brand;
        this.color = color;
        this.owner = owner;
        this.speed = speed;
    }

    startEngine(){
        console.log(`${this.brand} engine is started by owner ${this.owner}`)
    }

    showMaxSpeed(){
        console.log(`Max speed of ${this.brand} is ${this.speed} km/h`)
    }
}

const car1 = new Car('BMW', 'black', 'Alex', 200)

car1.startEngine()
car1.showMaxSpeed()

console.dir(car1)