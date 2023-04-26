import * as AllVariables from "./variables_declaration.js";

console.log(AllVariables.article_card);

// Create a section card by clicking on the Add button
import { addTask } from "./add_task.js";
AllVariables.button_add_card.addEventListener("click", addTask);

addTask();

import { test } from "./task_structure";
let test1 = test(mycontent);

console.log(test1);
// test.addEventListener("click", function content1(test) {
// import { addTask } from "./add_task.js";
// addTask(myContent);
// test.style.color = "blue";
// });
// Delete a section by clicking on the trashBin
// function removeCard() {
//     // console.log("helloooo");
//     addEvent.call(section);
// }

// import { removeCard } from "./removeCard_event.js";
// removeCard(addTask.call(section));

// AllVariables.article.addEventListener("click", removeCard);

// function card() {
//     AllVariables.array.forEach[i];
// }

// Enregistrer le panier dans le stockage local
// let card = JSON.parse(localStorage.getItem("card")) || []; // Pour conserver les card lorsque l'on rafraichit la page
// function keepCard() {
//     localStorage.setItem("card", JSON.stringify(card));
// }
