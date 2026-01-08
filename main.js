let items = [
    "Item1",
    "Item2"
];

let listItems = [];

let listContainer = document.getElementById("list-container");


items.forEach((listElementText) => {
    // Create new element
    let newListElement = document.createElement("div");
    // Create checkbox
    let checkButton = document.createElement("input");
    checkButton.type = "checkbox";
    checkButton.style.display = "none";

    newListElement.append(checkButton);
    

    let completeButton = document.createElement("img");
    checkButton.src = "./check.svg";

    newListElement.append(completeButton);


    // Add title
    let title = document.createElement("p");
    // Add text content from list
    title.textContent = listElementText;
    newListElement.append(title);
    

    // Add class
    newListElement.classList.add("list-item");
    

    // Append this element to the list container
    listContainer.append(newListElement);
    

    // Add click events
    newListElement.addEventListener("click", function (e) {
	if (this.classList.contains("selectable")) {
	    newListElement.classList.toggle("selected");
	}
    });


    // Add double click events
    newListElement.addEventListener("dblclick", function (e) {
	newListElement.classList.toggle("complete");
	
    });
    

    // Store element
    listItems.push(newListElement);
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
let selectableButton = document.createElement("input");
selectableButton.textContent = "Select";
selectableButton.type = "checkbox";
selectableButton.addEventListener("click", function (e) {
    listItems.forEach((el) => {
	el.classList.toggle("selectable");
    });
});

document.body.append(selectableButton);
