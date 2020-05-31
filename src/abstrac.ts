abstract class Kendaraan {
    abstract wheels: number;

    start(): void {
        console.log("brummm")
    }
}

class Car extends Kendaraan {
    wheels: number = 4;
}

class Motor extends Kendaraan {
    wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start()

let motor = new Motor();
console.log(motor.wheels);
motor.start()