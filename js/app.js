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
  
  /*Define a function, as a function expression, 
  maxOfThree that takes three numbers as arguments and 
  returns the largest of them. Again, the Math.max method is not allowed.*/ 


  function maxOfThree(num1, num2, num3){
let input = [num1, num2, num3];
let max=input[0]
input.forEach(function(number){
    if(number>max){
        max=number;
    }
});

return max
  }


let x=maxOfThree(8,2,9)
  console.log(x)


  // 3.

  /*Define a function, as a function declaration, 
  isCharAVowel that takes a character as an argument and 
  returns true if it is a vowel, false otherwise. */

 

  function isCharAVowel(character){

    let upperChar= character.toUpperCase();

    let vowels= "AEIOU"
    if(upperChar.length===1 && vowels.includes(upperChar)){
        return true;
    } else {
        return false;
    }
  }
 
  console.log(isCharAVowel('p'))


  // 4. 

  /*Define a function, as a function expression, sumArray that takes
   an array of numbers and returns the sum of those numbers.
    For example, sumArray([2, 4, 5]); would return 11.*/

let num = [2,4,1]

    function sumArray(num){
let sum=0;
num.forEach(function(val){
    sum+=val;
})

return sum
    }

    sumArray(num)