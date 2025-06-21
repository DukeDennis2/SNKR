// function to searching shoes 
function searchFunction() {
    // Get the search query from the input field
    const query = document.getElementById("search-input").value.toLowerCase();
    
    // Get all elements with the 'box' class (your sneaker boxes)
    const boxes = document.querySelectorAll(".box2, .box3, .box4, .box5, .box6, .box7, .box8, .box9, .box10, .box11, .box12, .box13 ");

    // Loop through all boxes and hide those that don't match the search query
    boxes.forEach(box => {
        const boxText = box.innerText.toLowerCase(); // Get the text content of the box
        if (boxText.includes(query)) {
            box.style.display = "block"; // Show the box if it contains the query
        } else {
            box.style.display = "none"; // Hide the box if it doesn't contain the query
        }
    });
}


// function to clear search function 
function resetSearch() {
    // Clear the search input
    const searchInput = document.getElementById("search-input");
    searchInput.value = "";

    // Show all boxes (reset layout)
    const boxes = document.querySelectorAll(".box2, .box3, .box4, .box5, .box6, .box7, .box8, .box9, .box10, .box11, .box12, .box13 ");
    boxes.forEach(box => {
        box.style.display = "block"; // Reset display to show all elements
    });

    // Show hidden links
    const links = document.querySelectorAll(".link");
    links.forEach(link => {
        link.style.display = "block"; // Show links
    });
}

function checkIfEmpty() {
    const searchInput = document.getElementById("search-input");
    const searchValue = searchInput.value.trim(); // Trim to remove any extra spaces

    if (searchValue === "") {
        resetSearch(); // Call the reset function when the input is empty
    }
}