

function getResult(age) {
    return age * 10;
}

function sayHello(name, age) {

    return function () {
        console.log('howdy ' + name + ' ' + getResult(age));
    }
}


sayHello('yasinakpinar', 54)();

let bob = sayHello('bob', 21);
let matk = sayHello('matk', 32);
let karl = sayHello('karl', 42);

bob();
matk();
karl();



