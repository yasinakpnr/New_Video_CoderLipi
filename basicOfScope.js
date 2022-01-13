
/*
const numbers = [45, 4, 9, 16, 25];

for (const each of numbers) {
    console.log(each);
}
*/

let a = 'first';

function scopeTest() {

    console.log(a);
    a = 'changed';
    let b = 'second';
    if (a != '') {
        console.log(a);
        console.log('inside of : ' + b);
        let c = 'third';
    }
   /// console.log(c);

   
}

scopeTest();
//console.log(b);
console.log(a);