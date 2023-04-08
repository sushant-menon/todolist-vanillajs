const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  //Validate input
  if (newItem === "") {
    alert("Input field empty , add item!!!");
    return;
  }
}

// Event Listener
itemForm.addEventListener("submit", addItem);
