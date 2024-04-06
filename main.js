const inputElement = document.querySelector("#input-item");
const addButton = document.querySelector(".create");
const taskContainer = document.querySelector("#tasks");

let listElements = [];

// Function to create a new list item
function createListItem(listItemObject) {
  const listItem = document.createElement("li");
  const deleteIcon = document.createElement("i");
  const editIcon = document.createElement("i");

  // Add classes to icons
  deleteIcon.classList.add("bx", "bx-trash");
  editIcon.classList.add("bx", "bx-edit");

  // Set text content for list item
  listItem.innerText = listItemObject.text;

  // Append delete and edit icons to list item
  listItem.appendChild(editIcon);
  listItem.appendChild(deleteIcon);

  // Append the list item to the container
  taskContainer.appendChild(listItem);

  // Add event listener to delete icon
  deleteIcon.addEventListener("click", () => {
    deleteItem(listItemObject.id);
  });

  // Add event listener to edit icon
  editIcon.addEventListener("click", () => {
    editItem(listItemObject.id);
  });
}

// Function to render all list items
function renderListItems() {
  taskContainer.innerHTML = ""; // Clear the container first (optional)
  listElements.forEach((listItemObject) => {
    createListItem(listItemObject);
  });
}

// Function to add new item
function addItem() {
  if (inputElement.value.trim() === "") return;

  const newListItem = {
    id: Date.now(),
    text: inputElement.value,
  };

  // Push the new item to the array
  listElements.push(newListItem);

  // Render all list items
  renderListItems();

  // Empty the input field
  inputElement.value = "";
}

// Function to delete item
function deleteItem(itemId) {
  // Filter out the item with the specified id
  listElements = listElements.filter((item) => item.id !== itemId);

  // Render all list items
  renderListItems();
}

// Function to edit item
function editItem(itemId) {
  const itemToEdit = listElements.find((item) => item.id === itemId);
  if (!itemToEdit) return;

  const newText = inputElement.value;
  if (newText !== null && newText.trim() !== "") {
    itemToEdit.text = newText.trim();
    // Render all list items
    renderListItems();
  }
}

// Event listener for add button
addButton.addEventListener("click", addItem);

// Initial rendering of list items
renderListItems();
