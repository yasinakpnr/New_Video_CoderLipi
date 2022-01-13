

class Car {

    constructor(name, year, make) {
        this.name = name;
        this.year = year;
        this.make = make;
    }

    print() {
        console.log(`${this.make} ${this.name} (${this.year})`);
    }
}

let myCar = new Car('BMW', 2010, '457i');
console.log(myCar);
myCar.print();


class SportsCar extends Car {

    revEngine() {
        console.log('Vrrrrrrr the ' + this.make);

    }

}

let mySportsCar = new SportsCar('Ford', 2011, '1.4TD');
console.log(mySportsCar);
mySportsCar.print();
mySportsCar.revEngine();


