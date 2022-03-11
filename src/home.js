const loadHome = () => {
    const main = document.createElement("div");
    main.classList.add("main");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "An uninspired culinary experience";
    main.appendChild(title);

    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus perferendis saepe eum rem aspernatur perspiciatis, nobis hic ad voluptates ullam architecto. Quos et dolor nostrum sit cupiditate praesentium, placeat ratione?";
    main.appendChild(card);

    return main;
}

export { loadHome };