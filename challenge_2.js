exports.sumOfEvenFibonacciNumbers = function(n){
//   var sum = 0;
//   // do your work here
  
//   var i = 0;
//   var j = 1;
//   for (i = 0; i < 40; i++) {
//     j = i;
//     x = i + j;
//     y = j + x;

//     console.log(i);
//     console.log(j);
//     console.log(x);
//     console.log(y);
//   }

//   //function for finding even numbers in sequence
//   for (sumOfTwoPrevious = 0; n < 4000000; n++) {
//     if (sumOfTwoPrevious % 2 == 0) {
//       var newSum = sum + n;
//     }
//   }

//   //function for adding the even numbers in sequence



//   return sum;
// };
// #######################


// var fibs = 0; //actual found fib
// var fib1 = 0;
// var fib2 = 1;
// var evenFibs = 0;

// while(true){
//   //if(i++ )
    
//   //break out of loop condition
//   if (fib1+fib2 >n) {
//     break;
//   }//else

//   fib = fib1 + fib2;

//   //incrementing
//   fib1 = fib2;
//   fib2 =  fibs;
// }

// if(fibs % 2 == 0) {
//   evenFibs += fibs;
// }

// return evenfibs


//get fibs nums up to n
var fibs = 0; //actual found fib
var fib1 = 0;
var fib2 = 1;
var evenFibs = 0;

for (
    fibs;                 //current fib sequence
    fibs <= 4000000;           //count up to n
    fibs = fib1 + fib2    //updating current fib
    )

{
  //incrementing
  fib1 = fib2;
  fib2 = fibs;

  if (fibs % 2 == 0) {
    evenFibs += fibs;
  }

}
console.log(evenFibs);
return evenFibs;

};