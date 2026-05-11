

// Bollean variable to track mode
let darkMode = false;

/* NEW FUNCTION: document.querySelector
lets you select any HTML element using its tag, class, or id 

*/

// const (instead of let) because we're storing a REFERENCE to part of the HTML page 
const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("main-heading");
const toggleBtn = document.querySelector("toggle");

// Now we can change styles and attributes for those elements
heading.style.color = "purple"; // JS wrote CSS code
heading.textContent = "Light Mode & Dark Mode Website";

//Review 
// q. Select the new element on the page (by id name)
const hackerBtn = document.querySelector("#hacker");
// 2. Attach click event listener to the button 
hackerBtn.addEventListener("click", setHacker);
// 3. Define the function that triggers when clicked 
function setHacker() {
    console.log("setting hacker theme...");
    body.style.background = "rbg(0,0,0)";
    body.style.color = "rgb(9,225, 83)";
    body.style.fontFamily = "monospace";
    description.textContent = "YOU HAVE BEEN HACKED!";  
}


// TOGGLE between light and dark mode 
// 2. attach event listnener 
toggleBtn.addEventListener("click", toggleMode);
// 3. Define the function 
function toggleMode() {
    darkMode = !darkMode; //flipped the boolean
    console.log(darkMode);
    if (darkmode == true) {
        console.log("apply dark mode styles");

    }
    else {
        console.log("apply light mode styles");

    }
}