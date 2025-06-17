//console.log("Hello world!");]

//repetition control structure
//while loop includes expression -> True

/**
SYNTAX

while(espression:true){
    code block
}

*/

let count = 10;

while(count !== 0){
    console.log("while: " + count);
    count --;
}

// do while loop

/**
SYNTAX:

do{
    code black
    iterator   
}while(expression:true)

 */

let number = Number(prompt("Please Enter A Number: "));

do{
    console.log("Do-While: " + number)
    number++;
}while(number <= 20);

// For Loop
/**

SYNTAX: 
for (initialization; expression; itraptor)


 */

for(let count = 0; count <= 20; count++){
    console.log("ForLoop: " + count)
}

let myString = "Alex";

// .lenght -> to check the lenght of a string or an array

console.log(myString.length);

console.log(myString[0]);
console.log(myString[3]);

for(let i = 0; i < myString.length; i++){
    console.log(myString[i]);
}

let myName = "AlEx";
for(let i = 0; i < myName.length; i++){
    if(
        myName[i].toLowerCase() == "a" ||
        myName[i].toLowerCase() == "e" ||
        myName[i].toLowerCase() == "i" ||
        myName[i].toLowerCase() == "o" ||
        myName[i].toLowerCase() == "u" 
    ){
        console.log(3);
    }else{
        console.log(myName[i]);
    }
}

// continue and break

for(let x = 0; x < 50; x++){
    if(x % 2 == 0){
        continue
    }else if(x == 35){
        break;
    }else{
        console.log(x);
    }
}