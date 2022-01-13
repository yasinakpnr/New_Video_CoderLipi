/*
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  */


/*

  function Person( firstNmae , lastName, age, eyeColor){
      this.firstNmae = firstNmae;
      this.lastName = lastName;
      this.age = age;
      this.eyeColor = eyeColor;

  }

  let myPerson = new Person('yasin' , 'akpinar', 23, 'blue');

 // myPerson.firstNmae= 'Nur';    // bu sekilde icindekileri tekrar degistireblilirsin
  console.log(myPerson);

  */

function MyFunction() {
    console.log('I am a simple function');
}

let myFunction = new MyFunction();
console.log(typeof myFunction);

console.log('************************************************************');


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

//  Adding a Property to an Object

myFather.nationality = 'Turkey';
console.log(myFather);

// Adding a Method to an Object
myFather.name = function () {
    return this.firstName + ' ' + this.lastName;
}
console.log(myFather);
console.log(myFather.name());

