import { createTask } from "./create_task.js";
export function edit_task(e) {
    // // return document.getElementsByClassName(target).value;
    // target.style.textDecoration = "line-through";
    // let checkbox = document.getElementsByClassName("checkbox");
    // let content = document.getElementsByClassName("content");
    // let divcontent = document.getElementsByClassName("content");

    console.log(e);
    if (e.classList == "content") {
        let section = e.parentNode;
        // let sectionId = section.id;
        let divCheckbox = section.firstChild;
        let checkbox = divCheckbox.firstChild;

        console.log(checkbox);
        // console.log(checkbox);
        if (checkbox.checked == true) {
            alert("coched");
        } else if (checkbox.checked == false) {
            // alert("uncoched");
            let inputContent = document.getElementsByName("inputUser");
            console.log(inputContent);
        }
    }
}
