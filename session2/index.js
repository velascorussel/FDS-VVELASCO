//console.log("Hello world!")

//JS Basic Function

function sayHello(){
    console.log("Hello!");
}

// Function Calling // Invocation

sayHello();
sayHello(); 
sayHello(); 
sayHello(); 

function completeName(){
    let fullName = "Juan Dela Cruz"
    console.log(fullName);
}

completeName();
//console.log(fullName); -> Error Not defined

// Global And Local Scope Variables

let age = 20;

{
    const pi = 3.14;
    console.log(age);
}

// Accessing The Variable Inside The Curly Braces
//console.log(pi); -> Error Not defined

let studentName = "Mary Poppins";

function getName(){
    let age = 50;
    console.log(studentName + " age is " + age);

}
getName();

// Function With Alert

function helloAlert(){
    alert("Hello World!");
}

// it is not necessary to call a function in the js file. we can also call a function in the console panel.

// function prompt()

function enterName(){
    let inputName = prompt("Please enter your name.");
    console.log("Hello There, " + inputName + "!")
}