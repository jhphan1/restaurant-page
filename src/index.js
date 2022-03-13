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
content.insertBefore(loadMenu(), footer);
