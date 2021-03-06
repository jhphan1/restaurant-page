import "./style.css";
import { loadHome } from "./home.js";
import { loadContact } from "./contact.js";
import { loadMenu } from "./menu.js";


const content = document.querySelector("#content");

// Header elements
const header = document.createElement("div");
header.classList.add("header");
const logo = document.createElement("div");
logo.classList.add("logo");
logo.innerHTML = "Chicken<br>& Broccoli";
const nav = document.createElement("ul");
nav.classList.add("nav");
const li1 = document.createElement("li");
li1.textContent = "HOME";
const li2 = document.createElement("li");
li2.textContent = "C&B MENU";
const li3 = document.createElement("li");
li3.textContent = "CONTACT & LOCATIONS";

header.appendChild(logo);
header.appendChild(nav);
nav.appendChild(li1);
nav.appendChild(li2);
nav.appendChild(li3);

content.appendChild(header);

li1.addEventListener("click", () => loadPage("home"));
li2.addEventListener("click", () => loadPage("menu"));
li3.addEventListener("click", () => loadPage("contact"));

function loadPage(page) {
    content.removeChild(content.childNodes[1]);

    if (page === "home") {
        content.insertBefore(loadHome(), footer);
        li1.style.textDecoration = "underline";
        li2.style.textDecoration = "none";
        li3.style.textDecoration = "none";
    } else if (page === "menu") {
        content.insertBefore(loadMenu(), footer);
        li1.style.textDecoration = "none";
        li2.style.textDecoration = "underline";
        li3.style.textDecoration = "none";
    } else if (page === "contact") {
        content.insertBefore(loadContact(), footer);
        li1.style.textDecoration = "none";
        li2.style.textDecoration = "none";
        li3.style.textDecoration = "underline";
    }
}

// Footer element
const footer = document.createElement("div");
footer.classList.add("footer");

const bgCredit = document.createElement("div");
bgCredit.textContent = "Meal background image by Pixabay on Pexels.com";
footer.appendChild(bgCredit);

const iconCredit = document.createElement("div");
iconCredit.textContent = "Hen and Broccoli icons made by Freepik from www.flaticon.com";
footer.appendChild(iconCredit);

content.appendChild(footer);

// Import main content
content.insertBefore(loadHome(), footer);
