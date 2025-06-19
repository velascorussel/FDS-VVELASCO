
//array mutator  methods

let fruits = ["grapple", "orangetan", "kiwiwa", "dragonfried"]
console.log(fruits)
console.log("length; " + fruits.length)

//push() -> 
fruits.push("mangolia")
console.log("new set of data: ")
console.log(fruits)

fruits.push("avogado", "guapa")
console.log("new set of data: ")
console.log(fruits)

//function with array method
function addfruit(fruit){
    fruits.push(fruit);
    console.log(fruit + " is now added!")
}

function displayFruits(){
    console.log(fruits)
    return fruits;
}

addfruit("pineapple")
displayFruits()

// pop()
fruits.pop();
console.log("new set of data: ")
console.log(fruits)

function removeFruit(){
    let removed = fruits.pop();
    console.log(removed + " has been removed")
    // console.log(fruits[fruits.length -1] + " is  now removed")
    // fruits.pop();

}

removeFruit();
console.log("new set of data: ")
console.log(fruits)

fruits.unshift("lime", "banana")
console.log("new set of data: ")
console.log(fruits)

//function with array method
function unshiftFruit(fruit){
    fruits.unshift(fruit);
    console.log(fruit);     
}

unshiftFruit