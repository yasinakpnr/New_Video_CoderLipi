
// Burada functionu variableye atamayi yapiyoruz

var myVariables = 'I am at the global scope';

var myFunction= function ( name ){
    console.log('me too!' + name);
}

myFunction(myVariables);
myFunction();


function one(){
    return 'one';
}

let value = one;         // let value = one();

console.log(value());    //console.log(value);


function two() {
    return function(){
        console.log('two');
    }
}

let myfunction2 = two();
myfunction2();


function three(){

    return function(){
        return 'three';
    }
}

console.log(three()());    // ic ice functionu bole yazdirirsin
//let myFunction3 = three();
//console.log(myFunction3());