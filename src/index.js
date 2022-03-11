import "./style.css";
import { loadPage } from "./home.js";


const content = document.querySelector("#content");
content.appendChild(loadPage());
