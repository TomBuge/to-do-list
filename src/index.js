import "./styles.css"; 
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

loadHomePage();

console.log("We're connected and running!");


const div = document.querySelector('.nav');
div.addEventListener('click', (e) =>{
    const button = e.target.id;

    if (button === "menu") loadMenuPage();
    if (button === "home") loadHomePage();
    if (button === "about") loadAboutPage();
});
