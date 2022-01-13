
let hi = () => {
    console.log('hi');
}
hi();


let hi2 = (name) => {
    console.log(`howdy ${name}`);
}

hi2('Bob');


let add = (a, b) => {
    return a+b;
}
console.log(add(7,4));


// burasi guzel yazilmis
let names= ['Yasin', 4, 'Ed', 11, 12, 'Dawid'];
names.map((name) => {console.log(`howdy ${name}!`);})


let i = 0;
names.map((name) => {i++ ; console.log(`howdy ${name} ${i}!`);});


var transformed = names.map((name) => {return `howdy ${name}!`});
console.log(transformed);