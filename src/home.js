const loadHome = () => {
    const main = document.createElement("div");
    main.classList.add("homeMain");

    const title = document.createElement("div");
    title.classList.add("homeTitle");
    title.textContent = "An uninspired culinary experience";
    main.appendChild(title);

    const card = document.createElement("div");
    card.classList.add("homeCard");
    card.innerHTML = "When it comes to mealtime, there are always <em>so</em> many choices and <em>so</em> many potential mistakes. <b>Chicken & Broccoli</b> eliminates the unnecessary hassle in your life by providing you with only the essential ingredients to make healthy, lean, undeniable <em><b>gains</b></em>.";
    main.appendChild(card);

    return main;
}

export { loadHome };