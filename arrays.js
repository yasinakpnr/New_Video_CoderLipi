

let a= ['Yasin', 4, 'Ed', 11, 12, 'Dawid'];

let b= [12, 45, 58, 62, 32];


console.log(a);
//console.log(typeof a);     => Object

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);

console.log(b.indexOf(12));
console.log(a.indexOf(12));

// change array element
a[0] = 0;
console.log(a);


const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);

const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person);
console.log(person.firstName);

cars.sort();
cars.length
console.log(cars);


// adding new element  =>  push
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Yasin");
console.log(fruits);

// remove last elemet => pop
fruits.pop();
console.log(fruits);

// define array or not
let boo = Array.isArray(fruits);
console.log(boo);
console.log(fruits instanceof Array);



