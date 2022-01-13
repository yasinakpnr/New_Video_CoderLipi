
let pattern = /xyz/;
console.log(pattern);
console.log(typeof pattern);

let value = 'This is xyz a test.';

console.log(pattern.test(value));  // test() bu method yani pattern value nin icinde varmi/yokmu. contain method gibi

console.log(value.replace(pattern, 'Just'));
//value = value.replace(pattern, 'Just');
console.log(value);
console.log(value.match(pattern));

var match = value.match(pattern);
console.log(match.index);

