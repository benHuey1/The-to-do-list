import * as AllVariables from "./variables_declaration.js";

export function createTask() {
    // function test() {
    //     console.log("test");
    // }
    const section = document.createElement("section");
    section.setAttribute("class", "sectionCard");
    // AllVariables.article_card.appendChild(section);
    let article_card = document.getElementById("article_card");
    article_card.appendChild(section);

    let divCheckbox = document.createElement("div");
    divCheckbox.setAttribute("class", "divCheckbox");
    section.appendChild(divCheckbox);
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("value", "myTask");
    input.setAttribute("class", "checkbox");
    divCheckbox.appendChild(input);

    let divContent = document.createElement("div");
    divContent.setAttribute("class", "content");
    `<button class="button_trashBin">X</button>`;
    section.appendChild(divContent);
    // divContent.innerHTML = `<input class="inputUser" type="text" name="input" value="">`;
    // divContent.insertAdjacentHTML(`<button class="button_trashBin">X</button>`);
    // divContent.appendChild(inputContent);

    let divTrash = document.createElement("div");
    // divTrash.setAttribute("onclick", "test()");
    divTrash.setAttribute("class", "divTrashBin");

    // divTrash.innerHTML = `<button class="button_trashBin">X</button>`;
    section.appendChild(divTrash);
    // divTrash.style.backgroundImage =
    //     "url(" + AllVariables.arrayIcon.picture +    ")";

    // console.log("heyyy");
    divContent.textContent = "-Empty-";
}
