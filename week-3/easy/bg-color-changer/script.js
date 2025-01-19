// Default colors
let defaultColor = ["red", "blue", "black", "yellow"];

// Getting elements from the HTML
let colorContainer = document.getElementsByClassName("color-container")[0]; // Target the first container
let inputBox = document.getElementsByClassName("new-color")[0]; // Target the first input box
let addColorBtn = document.getElementsByClassName("add-color-btn")[0]; // Target the first button
let body = document.body; // Reference to the body for background changes

// Function to create a color button
function createColor(color) {
    if (!isValid(color)) return; // Validate the color

    let colorBtn = document.createElement("button");
    colorBtn.innerHTML = color;
    colorBtn.style.backgroundColor = color;

    // Append the button to the container
    colorContainer.appendChild(colorBtn);

    // Change body background color on button click
    colorBtn.addEventListener("click", () => {
        body.style.backgroundColor = colorBtn.style.backgroundColor;
    });
}


addColorBtn.addEventListener("click", ()=>{
    createColor.appendChild(inputBox)
})
// Function to check if a color is valid
function isValid(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
}

// Add default colors to the container
defaultColor.forEach((color) => {
    createColor(color);
});

// Add event listener to the "Add Color" button
addColorBtn.addEventListener("click", () => {
    const newColor = inputBox.value.trim();
    if (newColor) {
        createColor(newColor);
        inputBox.value = ""; // Clear the input box
    } else {
        alert("Please enter a color!");
    }
});
