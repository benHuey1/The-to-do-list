import * as AllVariables from "./variables_declaration.js";

console.log(AllVariables.article_card);

// Create a section card by clicking on the Add button
import { addTask } from "./add_task.js";
import { lineThrough } from "./task_structure.js";
// import { increment } from "./increment_id.js";

// let arr = {
//     idCard: "",
//     nameTask: "",
// };
// Attribution d'un id par task
let sectionCard = document.getElementsByClassName("sectionCard");
AllVariables.button_add_card.addEventListener("click", function () {
    addTask();
    for (let i = 0; i < sectionCard.length; i++) {
        // sectionCard[i].addEventListener("click", function () {
        sectionCard[i].setAttribute("id", '"' + i + '"');
        alert("yooo");
        // });
    }
});

// Remove the task if button pushed
let sectionId = document.getElementById("id");
let check = document.getElementsByClassName("check");
let content = document.getElementsByClassName("content");
let trashBin = document.getElementsByClassName("trashBin");

// let elemIsclicked = false;
function clickRemove() {
    // if (sectionCard.addEventListener) {
    //     sectionCard.addEventListener(
    //         "click",
    //         function () {
    //             alert("it s the section");
    //         },
    //         false
    //     );
    //     // if (trashBin.addEventListener) {
    //     //     alert("ok");
    //     // } else {
    //     //     alert("nope");
    //     // }
    // } else {
    //     sectionCard.attachEvent("onclick"),
    //         function () {
    //             alert("it s the section too");
    //         };
    // }
    alert("oh");
    // elemIsclicked = true;
}
sectionId.addEventListener("click", clickRemove);

// addTask();

// let check = document.getElementsByClassName("check");
// let contents = document.getElementsByClassName("content");
// let arrayCard1 = arrayCard;
// console.log(lineThrough);

// for (let content of contents) {
//     content.addEventListener("click", lineThrough(content));

//     // for each
//     // content.id =
// }

// AllVariables.button_add_card.addEventListener("click", function () {
//     console.log(arrayCard);
// });

// for (let i = 0; i < sectionCard.length; i++) {
//     sectionCard[i].addEventListener("click", function () {
//         sectionCard[i].setAttribute("id", '"' + i + '"');
//         alert("yooo");
//     });
// }

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
