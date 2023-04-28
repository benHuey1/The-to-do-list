import * as AllVariables from "./variables_declaration.js";
import { removeTask } from "./remove_task.js";
import { createTask } from "./create_task.js";
// import { lineThrough } from "./task_structure.js";
import { increment_id } from "./increment_id.js";
import { cross_out_completed_task } from "./completed_task.js";
import { edit_task } from "./edit_task.js";

let sectionCard = document.getElementsByClassName("sectionCard");
let content = document.getElementsByClassName("content");
let trashBin = document.getElementsByClassName("divTrashBin");
let checkbox = document.getElementsByClassName("divCheckbox");

/* Create a section card by clicking on the Add button */
AllVariables.button_add_card.addEventListener("click", function () {
    createTask();
    increment_id(sectionCard, checkbox, content, trashBin);
    // for (let i = 0; i < sectionCard.length; i++) {
    //     // sectionCard[i].addEventListener("click", function () {
    //     sectionCard[i].setAttribute("id", `${i}`);

    //     alert("yooo");
    //     // });
    // }
});

// let trashBin = document.getElementsByClassName("divTrashBin");

/* Remove a section card by clicking on the delete button */
document.addEventListener("click", (event) => {
    removeTask(event.target);
    increment_id(sectionCard, checkbox, content, trashBin);
});

/* Cross out the completed task */
document.addEventListener("click", (event) => {
    cross_out_completed_task(event.target);
    // increment_id(sectionCard);
});
/* Edit the task */
document.addEventListener("click", (event) => {
    edit_task(event.target);
});

/* Enregistrer le panier dans le stockage local */
// let card = JSON.parse(localStorage.getItem("card")) || []; // Pour conserver les card lorsque l'on rafraichit la page
// function keepCard() {
//     localStorage.setItem("card", JSON.stringify(card));
// }
