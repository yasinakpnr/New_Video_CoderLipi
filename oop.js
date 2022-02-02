function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2 , myCallback) {
    var sum = num1 +num2 ;
    myDisplayer(sum)
  }
  
  myCalculator(5,8, myDisplayer);
  