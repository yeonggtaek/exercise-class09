/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */


/**
 * Question 5 - concat two different arrays by using .concat() method
 * initialise the variable called `numberOne` to an array containing the values:
 * 1,2,3
 * initialise the variable called `numberTwo` to an array containing the values:
 * 4,5,6
 * concat two different arrays 'numberThree'
 * console 'numberThree' 
 */
var numberOne = [1, 2, 3];
var numberTwo = [4, 5, 6];
var numberThree = numberOne.concat(numberTwo);
console.log(numberThree);

/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * column[0]   column[1]      column[2]       column[3]
 * Yeongtaek  like              playing            game
 * game          is              my              hobby
 * 
 * then use console.table() to showcase the information in a table. 
 * console Yeongtaek like play game
 */
var me= [
    ['Yeongtaek','like','playing','game'],
    ['game','is','my','hobby'],
];
var sentence= me[0][0] + ' ' + me[0][1] + ' ' + me[0][2] + ' ' + me[0][3];
console.log(sentence);
console.table(me);
