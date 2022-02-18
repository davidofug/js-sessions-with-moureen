/**
* A variable is unit of data storage
* It is made up of three things;- the Identifier, the Operator and the Value.
* The Identifier is the name of the variable.
* In JavaScript the value determines the Data type of the variable.
* Similar to other programming languages, JavaScript allows to Declare, Initialise or assign to variables.
* Syntaxes
* 1.Declaring a variable
* keyword followed by the Identifier
* We can use either var or let or const during declaration, and initialisation of variables.
* let and const are recommended.
*/

let country; //Declaring a variable
country = "Uganda"; //Assigning to a variable

const city = "Kampala"; //Declaring and assigning to a variable or initializing a variable

console.log(country); //Printing the value of a variable to browser console

document.write(city); //Printing the value of a variable to the browser page

//Data Types
// 1.String: A string is a sequence of characters. Strings are enclosed in double quotes or single quotes or backticks

let first_name = 'David' //Single quotes
let last_name = "Wampamba" //Double quotes
let middle_name = `Melbourn` //Backticks
console.log(typeof last_name);

// 2.Number: A number is a sequence of digits.

let age = 32; //Number || Integer
let income = 750.95; //Number || Float
let height = 5.0; //Number || Float

console.log(typeof age);
console.log(typeof income);
console.log(typeof height);

// 3.Boolean
let is_married = false; //Boolean
let has_seen = true; //Boolean
console.log(typeof has_seen);

// 4.Undefined
let is_undefined; //Undefined
console.log(typeof is_undefined);

// 5.Object
let is_null = null; //Null value object data type
console.log(typeof is_null);

let is_object = {} //Object value and data type
console.log(typeof is_object);

let is_array = [] //Array value and object data type
console.log(typeof is_array);

let is_array_2 = new Array() //Array value and object data type
console.log(typeof is_array_2);

let is_function = () => { }; //Function value and data type
console.log(typeof is_function);
function is_function_2() { }; //Function value and data type
console.log(typeof is_function_2);

let is_function_3 = function () { }; //Function value and data type
console.log(typeof is_function_3);

// Practice
let number1 = "50"
let number2 = 100

console.log(number1 > number2) //false

console.log(typeof number1) //String
console.log(typeof number2) //Number
console.log(typeof +number1) //Number
console.log(typeof parseInt(number1)) //Number
console.log(typeof Number(number1)) //Number. most recommended







