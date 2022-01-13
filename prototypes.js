
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let newPerson = Object.create(person);

  console.log(newPerson.firstName);

  console.log(Object.getPrototypeOf(newPerson));


  let myPrototype = Object.getPrototypeOf(newPerson);
  console.log(myPrototype.age);

  person.nationality = 'Turkey';
  //newPerson.nationality = 'Turkey';
  console.log(newPerson.nationality);
  //console.log(myPrototype.nationality);

  console.log(person.hasOwnProperty('nationality'));
  console.log(newPerson.hasOwnProperty('nationality'));

