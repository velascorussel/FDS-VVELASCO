let groceryList = [];

function addItem(item){
    groceryList[groceryList.length] = item;
    console.log(item + " has been added to the list.");
}

addItem("Milk");
addItem("Eggs");
console.log(groceryList);

function getItemByIndex(index){
    if (index >= 0 && index < groceryList.length) {
        return groceryList[index];
    } else {
        return "Invalid index";
    }
}

let itemFound = getItemByIndex(1);
console.log(itemFound);

function deleteItem(){
    if (groceryList.length === 0) {
        return "No items to delete.";
    }
    let deletedItem = groceryList[groceryList.length - 1];
    groceryList.length--;  
    return deletedItem;
}

let deletedLastItem = deleteItem();
console.log(deletedLastItem); 
console.log(groceryList);  

function updateItemByIndex(index, newItem){
    if (index >= 0 && index < groceryList.length) {
        groceryList[index] = newItem;
    } else {
        console.log("Invalid index.");
    }
}


updateItemByIndex(0, "Whole Milk");  
console.log(groceryList);

function displayItems(){
    let numberedItems = [];
    for (let i = 0; i < groceryList.length; i++) {
        numberedItems.push(`${i + 1}. ${groceryList[i]}`);
    }
    return numberedItems;
}

let itemsFound = displayItems();
console.log("Grocery List:");
console.log(itemsFound);

function searchItem(itemName){
    let index = groceryList.indexOf(itemName); 
    if (index !== -1) {
        return "The item exists in the list."; 
    } else {
        return "The item is not in the list.";
    }
}

const isItemFound = searchItem("Whole Milk");
console.log(isItemFound); 


function removeElement(index){
    if (index < 0 || index >= groceryList.length) {
        return "Invalid index.";
    }
    for (let i = index; i < groceryList.length - 1; i++) {
        groceryList[i] = groceryList[i + 1];
    }
    groceryList.length--;
    return "Element removed successfully.";
}


const removedElement = removeElement(1);
console.log(removedElement); 
console.log(groceryList);  


function deleteAll(){
    groceryList.length = 0; 
}


deleteAll();
console.log(groceryList); 


function isEmpty(){
    return groceryList.length === 0;
}

const isUsersEmpty = isEmpty();
console.log(isUsersEmpty);
