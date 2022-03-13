const loadContact = () => {
    const main = document.createElement("div");
    main.classList.add("main");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Get in touch with us today";
    main.appendChild(title);

    const card = document.createElement("div");
    card.classList.add("card");
    const address = document.createElement("div");
    address.innerHTML = "651 Protein Way<br>Gainsville, IN 51625";
    card.appendChild(address);
    const contact = document.createElement("div");
    contact.innerHTML = "(877) 150-0123<br>CandBrestaurant@fakemail.com";
    card.appendChild(contact);

    main.appendChild(card);

    return main;
}

export { loadContact };