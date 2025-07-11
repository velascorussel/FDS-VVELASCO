//Preparation of Express Server
const express = require("express");

// Create the server and store in a variable
const app = express();

// Port number
const port = 5000;

// Middlewares
// To converts incoming and outgoing data to JS object
app.use(express.json());
// Allows users to input data in a form
// Reads/fetch data from a form
app.use(express.urlencoded({extended: true}));

// Server Routes
app.get("/hello", (req, res) => {
    res.status(200).send("Hello World!")
});

let friends = [];

// get all friends
app.get("/friends/list", (req, res) => {
    if(friends.length <= 0){
        res.status(404).send("You don't have friends at this moment.")
    }else{
        res.status(200).send(friends);
    }
});

// Getting an input from postman
app.get("/input", (req, res) => {
    res.send(`Hello, ${req.body.name}`);
});

// Add Friend
app.post("/friends/add", (req, res) => {
    let friend = req.body.name;

    let checkFriend = friends.includes(friend);

    if(checkFriend){
        res.send(`You are already friends with ${friend}`);
    }else{
        friends.push(friend);
        res.status(200).send(`You are now friends with ${friend}.`);
    }
});

//ACTIVITY
//unfriend
app.delete("/friends/unfriend", (req, res) => {
    let friend = req.body.name;
    
    // Check if the friend exists in the list
    let index = friends.indexOf(friend);
    
    if(index === -1) {
        res.status(404).send(`You are not friends with ${friend}.`);
    } else {
        // Remove friend from the array
        friends.splice(index, 1);
        res.status(200).send(`You are no longer friends with ${friend}.`);
    }
});






// Port Listening
app.listen(port, () => console.log(`Server is now up and running at port ${port}`));