// target the Elements
const inputElement = document.querySelector("#input-item");
const addButton = document.querySelector(".create");
const taskContainer = document.querySelector("#tasks");

// create a delete icon 
let deleteIcon = document.createElement("i");

// create an edit icon
let editIcon = document.createElement("i");

// create new list element
let listItem = document.createElement("li");
//console.log(listItem);

let listElements = [];

// create a function that creates new list elements
function createListElements(){
    if(inputElement.value !== "") {
        // 
    listElements.push(listItem);
    listElements.forEach((listElement) => {
        // Add a list item to the list Element
        listItem.innerText = inputElement.value;
    
        // Add a class to the delete Icon element
        // Append the delete Icon to list element
        deleteIcon.classList.add("bx", "bx-trash");
    
        listItem.appendChild(deleteIcon);
    
        // Add a class to the edit icon element
        // Append the editIcon to the list element
        editIcon.classList.add("bx", "bx-edit");
    
        listItem.appendChild(editIcon);
            // Append the list Element to the task container
        taskContainer.appendChild(listElement);
        console.log(listElement)
    })
    //console.log(listElements);
        // empty the input field after the list item is displayed
        inputElement.value = "";
        
        }
}
addButton.addEventListener("click", () => {
    createListElements();
})


// delete function
function deleteItem(){
    // Implement the delete and the edit functionality
    listItem.remove();
}
// Add an event Listener to the delete icon
deleteIcon.addEventListener("click", () => {
    deleteIcon();
    })


// edit function
const editItem = () => {
     // create a prompt to edit the list item
     let newText = listItem.textContent.trim();
     inputElement.value = newText;

     let edit = addButton.classList.add("edit");
     addButton.classList.remove("create");
     // use the if statement
     if(edit) {
         // use an if statement to check for null and empty string conditions
     if(newText !== null && newText.trim() !== ""){
         listItem.textContent = newText.trim();
     }
     }
}

// Add an event Listener to the editicon
editIcon.addEventListener("click", () => {
       editItem();                   
})

//editItem();
//createListElements();
//deleteItem();


