let items = [
    "Item1",
    "Item2"
];

let listItems = [];

let listContainer = document.getElementById("list-container");
let inProgressListContainer = document.getElementById("inprogress-list-container");
let completeListContainer = document.getElementById("complete-list-container");


let moveItem = function(item) {
    if (item.classList.contains("complete"))
	completeListContainer.appendChild(item);
    else if (item.classList.contains("in-progress"))
	inProgressListContainer.appendChild(item);
    else 
	listContainer.appendChild(item);
}


let createItem = function(listElementText) {
    // Create new element for list item
    let newListElement = document.createElement("div");


    // Create checkbox
    let checkButton = document.createElement("input");
    checkButton.type = "checkbox";
    checkButton.style.display = "none";


    // Add completion button
    let completeButton = document.createElement("img");
    completeButton.src = "./check.svg";
    completeButton.style.width = "3vmin";
    completeButton.addEventListener("click", (event) => {
	newListElement.classList.toggle("complete");
	newListElement.classList.remove("in-progress");

	moveItem(newListElement);

    });
    // Add in-progress button
    let inProgressButton = document.createElement("div");
    inProgressButton.textContent = ">";
    inProgressButton.style.width = "3vmin";
    inProgressButton.addEventListener("click", (event) => {
	newListElement.classList.toggle("in-progress");
	newListElement.classList.remove("complete");

	moveItem(newListElement);
    });

    
    
    let statusButtonGroup = document.createElement("div");
    statusButtonGroup.classList.add("statusButtonGroup");
    statusButtonGroup.append(completeButton);
    statusButtonGroup.append(inProgressButton);



    // Add title
    let title = document.createElement("p");
    // Add text content from list
    title.textContent = listElementText;


    // Add children
    newListElement.append(checkButton);
    newListElement.append(title);
    newListElement.append(statusButtonGroup);
    

    // Add class
    newListElement.classList.add("list-item");
    

    // Append this list item element to the list container
    listContainer.prepend(newListElement);
    

    // Add click events
    newListElement.addEventListener("click", function (e) {
	if (this.classList.contains("selectable")) {
	    newListElement.classList.toggle("selected");
	}
    });


    // Add double click events
    newListElement.addEventListener("dblclick", function (e) {
	newListElement.classList.toggle("complete");
	moveItem(newListElement);
    });
    

    // Store element
    listItems.push(newListElement);
}

items.forEach((listElementText) => {
    createItem(listElementText);
});




/* --- SELECTION --- */


// Have invis divs between that expand when mouse down/hover
// document.body.addEventListener("mousedown", (event) => {
    
//});
// document.body.addEventListener("click", (event) => {
// 	document.body.style.backgroundColor = "red";
// });

// This needs to be updated to be an event where if any are selected 
// 	the others are selectable
// let selectableButton = document.createElement("input");
// selectableButton.textContent = "Select";
// selectableButton.type = "checkbox";
// selectableButton.addEventListener("click", function (e) {
//     listItems.forEach((el) => {
// 	el.classList.toggle("selectable");
//     });
// });
//
// document.body.append(selectableButton);



let itemInputContainer = document.createElement("div");
itemInputContainer.classList.add("item-input-container");

let inputListItem = document.createElement("input");
inputListItem.type = "text";

inputListItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
	e.preventDefault();
	createItem(inputListItem.value);
    }
});


let inputListItemSubmit = document.createElement("button");
inputListItemSubmit.textContent = "Submit";
inputListItemSubmit.addEventListener("click", function (e) {
    createItem(inputListItem.value);
});




itemInputContainer.append(inputListItem);
itemInputContainer.append(inputListItemSubmit);
document.body.prepend(itemInputContainer);
