let a, b, c, d, e;

const fruits = ["Banana", "Orange", "Apple", "Mango" , "Cheer"];

/*
[a, b, c, d, e] = fruits;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
*/


let others;

[a, b, ...others] = fruits;   // others array oldu. geri kalan elementler othersa eklendi

console.log(a);
console.log(b);
console.log(others);
console.log(others[0]);

let year, model;

({year , model}={
    make: 'BMW',
    model: "500",
    color: "white",
    year: 2010,
    value: 565656

});

console.log(year);
console.log(model);

