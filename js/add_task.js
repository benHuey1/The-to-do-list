import * as AllVariables from "./variables_declaration.js";
export function addTask() {
    const section = document.createElement("section");
    section.setAttribute("class", "sectionCard");
    // AllVariables.article_card.appendChild(section);
    let article_card = document.getElementById("article_card");
    article_card.appendChild(section);

    let divInput = document.createElement("div");
    divInput.setAttribute("class", "divInput");
    section.appendChild(divInput);
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    // input.setAttribute("id", "checkbox");
    input.setAttribute("value", "myTask");
    input.setAttribute("class", "check");
    divInput.appendChild(input);

    let checkboxId = document.getElementById("checkbox");
    // this.mytask1;
    // this.checkbox1;

    let divContent = document.createElement("div");
    // divContent.setAttribute("id", "mycontent");
    divContent.setAttribute("class", "content");
    section.appendChild(divContent);

    let myContentId = document.getElementById("mycontent");

    let divTrash = document.createElement("div");
    divTrash.setAttribute("class", "trashBin");
    section.appendChild(divTrash);
    // divTrash.style.backgroundImage =
    //     "url(" + AllVariables.arrayIcon.picture +    ")";

    console.log("heyyy");
    // divCheckBox.append;
    divContent.textContent = "-Empty-";

    // let arrayCard = {
    //     idCard: "",
    //     nameTask: "",
    // };

    // divTrash.textContent = "X";

    // return divContent;
    // return checkbox1;
}
