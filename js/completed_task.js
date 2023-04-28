export function cross_out_completed_task(e) {
    let sectionCard = document.getElementsByClassName("sectionCard");
    let divCheckbox = document.getElementsByClassName("divCheckbox");
    let checkbox = document.getElementsByClassName("checkbox");

    if (e.classList == "checkbox") {
        let divCheckboxChecked = e.parentNode;
        let sectionCardChecked = divCheckboxChecked.parentNode;
        let sectionCardClassCheckedValue = sectionCardChecked.classList;

        let textTask = sectionCardChecked.children[1];

        if (e.checked == true) {
            textTask.style.textDecoration = "line-through";
            textTask.style.textDecorationThickness = "2px";
            sectionCardChecked.style.backgroundColor =
                "rgba(100, 100, 100, 0.5)";
            textTask.style.backgroundImage = "none";
            ("rgba(100, 100, 100, 0.5)");
        } else if (e.checked == false) {
            textTask.style.textDecoration = "none";
            sectionCardChecked.style.backgroundColor =
                "rgba(255, 255, 255, 0.5)";
            textTask.style.backgroundImage = "";
        }
        // console.log(e);
        // console.log(divCheckboxChecked);
        // console.log(sectionCardChecked);
        // console.log(sectionCardChecked.classList);
        // console.log(sectionCardChecked.classList.value);
        // console.log(e.checked);
    }
}
