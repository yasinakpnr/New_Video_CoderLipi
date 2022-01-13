
let name= 'Bob';

console.log(name);
console.log(`Hi ${name}`);  

/*
let sentence = `You can learn more details about 
           Iterables in the
            chapter JS Object Iterables.`;

console.log(sentence);       // oldugu gibi yazdirir     

*/

function getReasonCount(){
    return 2;
}

let interpolation = `Give me ${(getReasonCount() == 1 ? 'one good reason' : 'a few reasons')} to try this`;
console.log(interpolation);

