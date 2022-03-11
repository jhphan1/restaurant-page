function loadPage() {
    const header = document.createElement("div");
    header.classList.add("header");
    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "Chicken<br>& Broccoli";
    const nav = document.createElement("ul");
    nav.classList.add("nav");
    const li1 = document.createElement("li");
    li1.textContent = "HOME";
    const li2 = document.createElement("li");
    li2.textContent = "HOME";
    const li3 = document.createElement("li");
    li3.textContent = "HOME";

    header.appendChild(logo);
    header.appendChild(nav);
    nav.appendChild(li1);
    nav.appendChild(li2);
    nav.appendChild(li3);

    return header;
}