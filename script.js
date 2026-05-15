// Bollean variable to track mode
let darkmode = false;

/* NEW FUNCTION: document.querySelector
lets you select any HTML element using its tag, class, or id */

// const (instead of let) because we're storing a REFERENCE to part of the HTML page 

const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");
const emoji = document.querySelector("#emoji");


//Review 
// q. Select the new element on the page (by id name)
const hackerBtn = document.querySelector("#hacker");
// 2. Attach click event listener to the button 
hackerBtn.addEventListener("click", setHacker);
// 3. Define the function that triggers when clicked 
function setHacker() {
    console.log("setting hacker theme...");
    body.style.background = "rgb(0,0,0)";
    body.style.color = "rgb(9,225,83)";
    body.style.fontFamily = "monospace";
    description.style.color ="rgb(9,225,83)";
    description.textContent = "YOU HAVE BEEN HACKED!"; 
    emoji.classList.add("animated");
}

const yankeesBtn = document.querySelector("#yankees");
// 2. Attach click event listener to the button 
yankeesBtn.addEventListener("click", setyankees);
// 3. Define the function that triggers when clicked 
function setyankees() {
    console.log("setting hacker theme...");
    body.style.background = "rgb(11, 58, 80)";
    body.style.color = "rgb(243, 244, 242)";
    body.style.fontFamily = "monospace";
    description.style.color ="rgb(245, 248, 246)";
    description.textContent = "BEN RICE IS WATCHING"; 
     image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/NewYorkYankees_caplogo.svg/1280px-NewYorkYankees_caplogo.svg.png";
     emoji.classList.remove("animated");
    
}

// TOGGLE between light and dark mode 
// 2. attach event listnener 
toggleBtn.addEventListener("click", toggleMode);
// 3. Define the function 
function toggleMode() {
    darkmode = !darkmode; //flipped the boolean
    console.log(darkmode);
    if (darkmode == true) {
        console.log("apply dark mode styles");
        body.style.background = "rgb(0,0,0)";
        heading.style.color = "lightgrey";
        description.style.color = "white";
        description.textContent = "Welcome to the dark side";
        toggleBtn.textContent = "switch to Light";
        image.src = "https://cache.bsnsports.com/comp/sls/get/43/8709?f=jpg&sid=8709&ts=1638206562";
        emoji.classList.remove("animated");

    }
    else {
        console.log("apply light mode styles");
        body.style.background = "white";
        heading.style.grey = "darkgrey";
        description.style.color = "black";
        description.textContent = "Welcome to the light";
        toggleBtn.textContent = "switch to Dark";
        image.src = "https://resources.finalsite.net/images/v1672130786/bwlorg/wfdmecjdcnthj1myevji/BWLlogoFINAL19161.svg";
        emoji.classList.remove("animated");
    }
}