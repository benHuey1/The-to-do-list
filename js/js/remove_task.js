export function removeTask(e) {
    // console.log(e);
    let trashBin = document.getElementsByClassName("divTrashBin");
    let sectionCard = document.getElementsByClassName("sectionCard");
    let button_trashBin = document.getElementsByClassName("button_trashBin");

    console.log(e.classList);
    if (e.classList == "divTrashBin") {
        let parentE = e.parentNode;
        // let grandParentE = parentE.parentNode;
        // let grandParentEClassValue = grandParentE.classList;
        // let grandParentEClassValue = grandParentE.classList.value;

        // console.log(parentE);
        // console.log(grandParentE);
        // console.log(grandParentE.classList);
        // console.log(grandParentE.classList.value);
        console.log(parentE);
        parentE.remove();
    }
}
