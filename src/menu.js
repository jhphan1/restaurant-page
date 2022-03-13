const loadMenu = () => {
    const main = document.createElement("div");
    main.classList.add("menuMain");

    // sides
    const sides = document.createElement("div");
    sides.classList.add("menuCard");

    const sidesTitle = document.createElement("h2");
    sidesTitle.textContent = "SIDES";
    sides.appendChild(sidesTitle);

    // sides item1
    const item1 = document.createElement("div");
    item1.classList.add("item");

    const item1Top = document.createElement("div");
    item1Top.classList.add("itemTop");
    item1.appendChild(item1Top);

    const item1Name = document.createElement("div");
    item1Name.classList.add("itemName");
    item1Name.textContent = "Microwaved Broccoli";
    item1Top.appendChild(item1Name);

    const item1Price = document.createElement("div");
    item1Price.classList.add("itemPrice");
    item1Price.textContent = "1.00";
    item1Top.appendChild(item1Price);

    const item1Text = document.createElement("div");
    item1Text.classList.add("itemText");
    item1Text.textContent = "A C&B classic. Fresh broccoli cooked in the microwave to create our signature texture and flavor."
    item1.appendChild(item1Text);

    sides.appendChild(item1);

    // sides item2
    const item2 = document.createElement("div");
    item2.classList.add("item");

    const item2Top = document.createElement("div");
    item2Top.classList.add("itemTop");
    item2.appendChild(item2Top);

    const item2Name = document.createElement("div");
    item2Name.classList.add("itemName");
    item2Name.textContent = "Brown Quinoa";
    item2Top.appendChild(item2Name);

    const item2Price = document.createElement("div");
    item2Price.classList.add("itemPrice");
    item2Price.textContent = "2.00";
    item2Top.appendChild(item2Price);

    const item2Text = document.createElement("div");
    item2Text.classList.add("itemText");
    item2Text.textContent = "Organic brown quinoa from Peru. Cooked to perfection with chicken broth in our rice cooker."
    item2.appendChild(item2Text);

    sides.appendChild(item2);

    // entrees
    const entrees = document.createElement("div");
    entrees.classList.add("menuCard");

    const entreesTitle = document.createElement("h2");
    entreesTitle.textContent = "ENTREES";
    entrees.appendChild(entreesTitle);

    // entrees item1
    const item3 = document.createElement("div");
    item3.classList.add("item");

    const item3Top = document.createElement("div");
    item3Top.classList.add("itemTop");
    item3.appendChild(item3Top);

    const item3Name = document.createElement("div");
    item3Name.classList.add("itemName");
    item3Name.textContent = "Shredded Chicken";
    item3Top.appendChild(item3Name);

    const item3Price = document.createElement("div");
    item3Price.classList.add("itemPrice");
    item3Price.textContent = "3.00";
    item3Top.appendChild(item3Price);

    const item3Text = document.createElement("div");
    item3Text.classList.add("itemText");
    item3Text.textContent = "The chef's signature dish. Pressure cooked with filtered water and never enough spices."
    item3.appendChild(item3Text);

    entrees.appendChild(item3);

    // entrees item2
    const item4 = document.createElement("div");
    item4.classList.add("item");

    const item4Top = document.createElement("div");
    item4Top.classList.add("itemTop");
    item4.appendChild(item4Top);

    const item4Name = document.createElement("div");
    item4Name.classList.add("itemName");
    item4Name.textContent = "Grilled Chicken";
    item4Top.appendChild(item4Name);

    const item4Price = document.createElement("div");
    item4Price.classList.add("itemPrice");
    item4Price.textContent = "4.00";
    item4Top.appendChild(item4Price);

    const item4Text = document.createElement("div");
    item4Text.classList.add("itemText");
    item4Text.textContent = "Seared to perfection (and sometimes beyond) with smoked paprika and fresh ground black pepper."
    item4.appendChild(item4Text);

    entrees.appendChild(item4);

    // desserts
    const desserts = document.createElement("div");
    desserts.classList.add("menuCard");

    const dessertsTitle = document.createElement("h2");
    dessertsTitle.textContent = "DESSERTS";
    desserts.appendChild(dessertsTitle);

    // desserts item1
    const item5 = document.createElement("div");
    item5.classList.add("item", "itemText");
    item5.textContent = "None offered";
    desserts.appendChild(item5);

    const drinksTitle = document.createElement("h2");
    drinksTitle.textContent = "DRINKS";
    desserts.appendChild(drinksTitle);

    // desserts item2
    const item6 = document.createElement("div");
    item6.classList.add("item");

    const item6Top = document.createElement("div");
    item6Top.classList.add("itemTop");
    item6.appendChild(item6Top);

    const item6Name = document.createElement("div");
    item6Name.classList.add("itemName");
    item6Name.textContent = "Water";
    item6Top.appendChild(item6Name);

    const item6Price = document.createElement("div");
    item6Price.classList.add("itemPrice");
    item6Price.textContent = "0.00";
    item6Top.appendChild(item6Price);

    const item6Text = document.createElement("div");
    item6Text.classList.add("itemText");
    item6Text.textContent = "There's nothing as revitalizing as pure water! Our water is sourced from our city's tap."
    item6.appendChild(item6Text);

    desserts.appendChild(item6);

    main.appendChild(sides);
    main.appendChild(entrees);
    main.appendChild(desserts);

    return main;
}

export { loadMenu };