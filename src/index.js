import "./style.css";
import { loadHome } from "./home.js";


const content = document.querySelector("#content");
content.appendChild(loadHome());
