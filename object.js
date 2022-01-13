

// cogunlikla const ile yaratilir


let car = {
    make: 'BMW',
    model: "500",
    color: "white",
    year: 2010,
    getPrice: function () {
        return 50000;
    },

    pritDescription: function () {
        console.log(this.make + ' ' + this.model);
    }
};

//car.pritDescription();
//console.log(car.color);

console.log(car);

/*

// Degisiklik yapabiliyorum
car.make = 'Audi';
car.model = 'A3'
console.log(car);

*/

// bu sekilde yeni elementleri diserdan girersin
var anotherCar = {};
anotherCar.whatever = 'Bob';
console.log(anotherCar.whatever);
console.log(anotherCar);



// object inside object
var a = {

    myProperty : { b : 'Hi'}
};

console.log(a.myProperty.b);


var c = {
    myProperty : [
        { d : 'this'} , 
        { e : 'can'},
        { f : 'get'},
        { g : 'crazy'},
    ]
};

console.log( c.myProperty[0].d);

