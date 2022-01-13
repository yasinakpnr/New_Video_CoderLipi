/**
 * 
 * pop()        remove last element
 * push()       method adds a new element to an array (at the end)
 * shift()      method removes the first array element and "shifts" all other elements to a lower index. ilk elemani siler digerleri sola kayar
 * unshift()    method adds a new element to an array (at the beginning), and "unshifts" older elements: ilk siraya element ekler digerleri saga kayar
 * length       property provides an easy way to append a new element to an array
 * 
 * splice()     method can be used to add new items to an array:
 *              The first parameter (2) defines the position where new elements should be added (spliced in).
               The second parameter (0) defines how many elements should be removed.

 * concat()     method creates a new array by merging (concatenating) existing arrays

   slice()      method slices out a piece of an array into a new array.

   sort()       method sorts an array alphabetically: String icin

   reverse()     method reverses the elements in an array. String icin

 */
 



const fruits = ["Banana", "Orange", "Apple", "Mango"];

let fruit = fruits.pop();

console.log(fruits);
console.log(fruit);

fruits.shift();
console.log(fruits);

fruits.unshift("78");
console.log(fruits);

console.log(fruits.length);
fruits[fruits.length]= 89;   //fruits.push(89);   ikis ayni sey
 
console.log(fruits);


// delete element
//delete fruits[0];
console.log(fruits);

//splice()

fruits.splice(2,8, 55,66);
console.log(fruits);

// Using splice() to Remove Elements
fruits.splice(0,1);
console.log(fruits);


// Merging (Concatenating) Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

let concat=myGirls.concat(myBoys)
console.log(concat);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];


const allArray= arr1.concat(arr2, arr3);
console.log(allArray);

console.log(allArray.concat(125));


// slice() method slices out a piece of an array into a new array.
let sliceArray= allArray.slice(2);    // icine yazili indexten baslar ve sonrasini alir
console.log(sliceArray);

let sliceArrayWithNumber = sliceArray.slice(2,4);   // yani 2. elemeti alarak baslar 4. elemente kadar alir. Ama 4.elementi almaz
console.log(sliceArrayWithNumber);


//reverse() and sort() Array 
let a= ['Yasin', 'Hasan', 'Ed', 'Mark', 'Zell', 'Dawid'];

a.sort();
console.log(a);
a.reverse();
console.log(a);



