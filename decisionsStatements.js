

var count = 3;

if (count == 4) {
    console.log('Count is 4');
} else if (count > 4) {
    console.log('Count is greater than 4');
} else if (count < 4) {
    console.log('count is less than 4');
} else {
    console.log('Count is not 4');
}





function getName(name) {

    switch (name.toLowerCase()) {
        case 'superman':
            console.log("superman");
            break;
        case 'batman':
            console.log('Batman');
            break;
        case 'Yasin':
            console.log("YASIN");
            break;
        default:
            console.log('Nothing');

    }

}
getName('Yasin');


//  ternary operators

let a = 1; let b = "1";
let result= (a===b) ? 'equal' : 'inequal';
console.log(result);



let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(new Date().getDay());
  console.log(day);