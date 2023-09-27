/*

console.log(34)

// defining a function
// declaring a function
// creating the reusable block of code 
// to be used at a later time in the program
function sayHello (name){
// write the code to say hello here
console.log(`Hello ${name}`);

}



// execute
sayHello('Shavon');


function sayGoodBye(phrase,name){
    console.log(`${phrase} ${name}`)
}

sayGoodBye("Adios", "laura");

sayGoodBye("Chao", "Becky");

sayGoodBye("GoodBye", "Chad");

sayGoodBye("Peace", "Frankie");


function add(x, y){

    return x + y
}

console.log(add(4,5))
*/

///////////////////      Lab    ////////////


/*
(completed above) Define a function, as a function
 declaration, maxOfTwoNumbers that takes two numbers 
 as arguments and returns the largest of them. If they 
 are the same, return that number. Use the if-else 
 construct or a ternary expression - the Math.max method is not allowed.
*/

//   1. 


// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
  
  