exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here
  
  var i = 0;
  var j = 1;
  for (i = 0; i < 40; i++) {
    j = i;
    x = i + j;
    y = j + x;

    console.log(i);
    console.log(j);
    console.log(x);
    console.log(y);
  }

  //function for finding even numbers in sequence
  for (sumOfTwoPrevious = 0; n < 4000000; n++) {
    if (sumOfTwoPrevious % 2 == 0) {
      var newSum = sum + n;
    }
  }

  //function for adding the even numbers in sequence



  return sum;
};