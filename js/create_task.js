import * as AllVariables from "./variables_declaration.js";

export function createTask() {
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
    section.appendChild(divContent);
    // divContent.innerHTML = `<input class="inputUser" type="text" name="input" value="">`;
    let inputUser = document.createElement("input");
    inputUser.setAttribute("class", "inputUser");
    inputUser.placeholder = "Enter a task";
    divContent.appendChild(inputUser);

    let span = document.createElement("span");
    span.setAttribute("class", "spanTextTask");
    // span.style.cursor = "pointer";
    span.textContent = "-Empty-";
    divContent.appendChild(span);

    let divTrash = document.createElement("div");
    divTrash.setAttribute("class", "divTrashBin");
    section.appendChild(divTrash);
}
