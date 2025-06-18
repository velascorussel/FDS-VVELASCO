// console.log("hehehe")

// Array Traversal

let student1 = "UA-001"
let student2 = "UA-002"
let student3 = "UA-003"
let student4 = "UA-004"
let student5 = "UA-005"

let studentNmubers = ["UA-001", "UA-002", "UA-003", "UA-004", "UA-005"];

// common example of arrays
let grades = [98.5, 94.3, 89.2, 90.1];
console.log(grades);

let computerBrands = ["Acer", "Asus", "Lenovo", "Toshiba", "Apple"];
console.log(computerBrands);

// Possible Use of Array but not recommended
let mixedArray = [12, "john", true, null, 16, 90, "hehe", "bangbong", 21212121312312312313, "okay"]; 
console.log(mixedArray)

//creating an array with values from another variable
let city1 = "Quezon City"
let city2 = "Mabalacat City"
let city3 = "San Fernando City"
// Nested array -> an array inside an array
let city4and5 = ["Baguio City", "Caloocan City"]

let Cities = [city1, city2, city3, city4and5]
console.log(Cities)

// If we will be using .lenght using string var, it wwill count the number of characters  including the white spaces.
// .lenght when using array, it will count the number of values stored in it.
console.log(Cities.length)

// accessing an array value
console.log(grades[0]); //98.5
console.log(grades[3]); //90.1
console.log(grades[10]); //undefined -> lata, walang laman, parang utak ko ubos na laman.

let lakersLegend = ["kobe", "shaq", "leBrong", "Magic", "Kareem"];
console.log(lakersLegend[1]); //Shaq
console.log(lakersLegend[3]); //Magic

console.log("Array Before Reassignment");
console.log(lakersLegend)
lakersLegend[2] = "Gasol";
console.log("Array After The Reassignment")
console.log(lakersLegend);

let bullsLegend = ["Jordan", "Rose", "Rodman"];
let lastIndex = bullsLegend.lenght - 1;
console.log(bullsLegend[lastIndex]);

// adding an item in an array
let newArray = [];
console.log(newArray);

newArray[0] = "Cloud Strife"
console.log(newArray)

newArray[newArray.length] = "Tifa Lockhart";
console.log(newArray);

// looping statement with array
for(let index = 0; index < newArray.length; index++){
    console.log("LOOP:" + newArray[index]);
}

let numArray = [5, 12, 30, 46, 40];

for(let index = 0; index < numArray.length; index++){
    if(numArray[index] % 5 == 0){
        console.log(numArray[index] + " is divisible by 5.")
    }else{
        console.log(numArray[index] + " is not divisible by 5.")
    }
}

// Functions and arrays 

let students = []

function displayStudents(){
    if(students.length == 0 || students == []){
        console.log("The array is empty");
    }else{
        for(let index = 0; index < student1.length; index++){
            console.log(index + ". " + students[index - 1]);
        }
    }        
}

function addStudents(name){
    students[students.length] = name;
    console.log(name + " is added to the list.");
}