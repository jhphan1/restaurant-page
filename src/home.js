const loadPage = () => {
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

    return header;
}

export { loadPage };