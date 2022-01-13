
// FOR loop

for (let i = 0; i < 10; i++) {

    console.log(i);
}


for (let i = 0; i < 5; i++) {
    let text = "";
    text += "The number is " + i;
    console.log(text);

}


let i = 5;
for (let i = 0; i < 10; i++) {
    // some statements
}

console.log(i);


// WHILE Loop

let x= 1;
while(x<10){
    console.log(x++);
}

console.log('*****************');
let a=0;

while (a< 10) {
    let text = "";
    text += "The number is " + a;
    console.log(text);
    a++;
  }

  console.log('*****************');


  //  FOR OF Loop
  let array= ['Yasin', 4, 'Ed', 11, 12, 'Dawid'];

  for (const it of array) {
      console.log(it);
  }

  console.log('***********************************************');

  // FOR In Loop
  for (const key in array) {
      console.log(array[key]);
  }