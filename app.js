'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  
  var theSum = a + b;
  
  var theMessage = 'The sum of ' + a + ' and ' + b + ' is ' +theSum + '.';

  return [theSum, theMessage];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  var theProduct = a * b;
  
  var message = 'The product of ' + a + ' and ' + b + ' is ' + theProduct + '.';
  
  return [theProduct, message];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  var firstAdding = sum(a,b);
  
  var finalSum= sum(firstAdding[0],c);
  
  var questionTwo = multiply(a,b);
  
  var finalProduct = multiply(questionTwo[0],c);
  
  var sumAnswer = a + ' and ' + b + ' and ' + c + ' sum to ' + finalSum[0] + '.';
  
  var multiplyingAnswer = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + finalProduct[0] + '.';
  // console.log(finalProduct[0]);
  // console.log ([finalSum,finalProduct,sumAnswer,multiplyingAnswer]);
  
  return [finalSum[0],finalProduct[0],sumAnswer,multiplyingAnswer];

}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  var firstTwoNumbers = sum(testArray[0],testArray[1]);
  
  var allNumbers = sum(firstTwoNumbers[0],testArray[2]);
  
  var comment = testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + allNumbers[0] + ' is their sum.';
  console.log (allNumbers);
  
  return [allNumbers[0], comment];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
var numberToMultiply = [2,3,4];//eslint-disable-line

function multiplyArray(multArr) { //eslint-disable-line
  
  var twoArrayNums = multiply(numberToMultiply[0],numberToMultiply[1]);
  
  var arrayAnswer = multiply(twoArrayNums[0], numberToMultiply[2]);
  
  var someComment = 'The numbers ' + numberToMultiply[0] + ',' +numberToMultiply[1] + ',' + numberToMultiply[2] + ' have a product of ' + arrayAnswer[0] + '.';
  console.log(arrayAnswer[0]);
  
  return [arrayAnswer[0],someComment];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line
  
  var firstGo = multiply(testDynamicArray[0],testDynamicArray[1]);
  console.log('firstGo:', firstGo);
  
  var secondGo = multiply(firstGo[0],testDynamicArray[2]);
  console.log('secondGo:', secondGo);
  
  var thirdGo = multiply(secondGo[0],testDynamicArray[3]);
  console.log('thirdGo:', thirdGo);
  
  var finalGo = multiply(thirdGo[0],testDynamicArray[4]);
  console.log('finalGo:', finalGo);
  
  var result = 'The numbers ' + testDynamicArray[0] + ',' + testDynamicArray[1] + ',' + testDynamicArray[2] + ',' + testDynamicArray[3] + ',' + testDynamicArray[4] + ' have a product of ' + finalGo[0] + '.';

  return [finalGo[0], result];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.