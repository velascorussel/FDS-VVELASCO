//INTRO TO JavaScript

/*

HISTORY

Brendan Eich (NetScape)
Oldnames of JS: Mocha, LiveScript, JavaScript
Browser Name: NetScape Navigator

*/

// JS BASICS

console.log("hello world!");

// JS Variables and Data Types

//number
let age = 20;
console.log(age);

//string
let name = "john";
console.log(name);

//typeof -> to check the data type of the value

console.log(typeof age);
console.log(typeof name);

let temp = 38.5;
console.log(temp);
console.log(typeof temp);

// Boolean
let isOverloaded = true;
console.log(isOverloaded);
console.log(typeof isOverloaded);

// Array

let students = ["jane", "john", "joey"];
console.log(students);

// Objects
// Key-pair structure
let person = {
    name: "John Doe",
    age: 19,
    email: ["jdoe@,ail.com", "john@fb.com"]
}
console.log(person);

console.log("hello world!");

// Alert
alert("Hello Admin!");

//Initialization and Variables with no data
//let vs const

let num1 = 10;
console.log(num1);

//uninitialized
let num2;
console.log(num2); //undefined

num1 = 500;
console.log(num1);
console.log(num2);
console.log(num2);

num2 = 1000
console.log(num2);
// const -> constant variable
const height = 130;
console.log(height);


// with let variables, data can be updated

// height = 150;
// console.log(heigth);

const hourInADay = 24;
const pie = 3.14;
const numOfMonths = 12;


// JS Arithmetic Operators
let x = 10;
let y= 5;


// Addition
let sum = x + y;
console.log(sum);

// Substraction
let diff = x - y;
console.log(diff);

// Multiplication
let prod = x * y;
console.log(prod);

// Divition
let quo = x / y;
console.log(quo);

// Modulo
let mod = x % y;
console.log(mod);

// comparison operators
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// Logical Operators
// AND - &&
// OR - ||

let isMarried = true;
let isLegalAge = false;

console.log("Logical AND");
console.log(isMarried && isLegalAge);

console.log("Logical OR");
console.log(isMarried || isLegalAge);

// Equality Operators

let sample1 = 10;
let sample2 = "10";
let sample3 = "John";

// ==
console.log(sample1 == sample2);
console.log(sample3 == "John")

// Not Equal
console.log(sample1 != sample2);

// Strict Equality
console.log(sample1 === sample2);
console.log(sample3 === "John")

// Strictly Not Equal

console.log(sample1 !== sample2);

// User Input
let fullname = prompt("Please Enter Your Complete Name");
console.log(fullname);

// Dynamic Sum Opperation
let input1 = Number(prompt("Enter num1"));
let input2 = Number(prompt("Enter num2"));
let result = input1 + input2;
console.log(result);

console.log(typeof input1);

//concetenation

let concat1 = "jane";
let concat2 = 10;

console.log(concat1 = "is" + concat2 + "years old.");