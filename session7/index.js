// non-mutator method

let countries = [ "US", "PH", "CAN", "SG", "TH", "PH", "FR", "DE"];

// indexOf()

let indexOf = countries.indexOf("PH");
console.log("indexOf: " + indexOf)

let indexOf2 = countries.indexOf("BR");
console.log("indexOf2: " + indexOf2)

// lastIndexof

let lastIndexof = countries.lastIndexOf("PH");
console.log("lastIndexOf: " + lastIndexof)

let lastIndexof2 = countries.lastIndexOf("PH", 6);
console.log("lastIndexOf2: " + lastIndexof2)

let lastIndexof3 = countries.lastIndexOf("PH", 3);
console.log("lastIndexOf3: " + lastIndexof3)

// slice

let sliceA = countries.slice(2);
console.log("result from SliceA")
console.log(sliceA)

let sliceB = countries.slice(2, 4);
console.log("result from B")
console.log(sliceB)

let sliceC = countries.slice(-3);
console.log("result from SliceC")
console.log(sliceC)

// concat()

let taskA = ["Drink hrml", "Eat  javaScript"]
let taskB = ["inhale css", "Breathe sass"]
let taskC = ["get git", "be node"]

let tasks = taskA.concat(taskB);
console.log(tasks)

let alltasks = taskA.concat(taskB, taskC);
console.log(alltasks)

let combinedTask = alltasks.concat("smell express", "throw react");
console.log(combinedTask)

// iteration method
//foreach()

alltasks.forEach(function(task){
    console.log(task);
})

let filteredTask = [];
alltasks.forEach(function(task){
    if(task.length > 10){
        filteredTask.push(task);
    }
})

console.log(filteredTask)

let numbers = [1, 2, 3, 4, 5]

//every()

let allValid = numbers.every(function(number){
    return number < 10
})

console.log(allValid);

//some()

let someValid = numbers.some(function(number){
    return number < 4
})

console.log(someValid)

//filter

let filterValid = numbers.filter(function(number){
    return number < 3
})

console.log(filterValid)

































































