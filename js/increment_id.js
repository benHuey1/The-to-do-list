import { addTask } from "./add_task.js";

export function increment() {
    addTask();
    for (let i = 0; i < sectionCard.length; i++) {
        // sectionCard[i].addEventListener("click", function () {
        sectionCard[i].setAttribute("id", '"' + i + '"');
        alert("yooo");
        // });
    }
}
