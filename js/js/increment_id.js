export function increment_id(element) {
    for (let i = 0; i < element.length; i++) {
        // sectionCard[i].addEventListener("click", function () {
        element[i].setAttribute("id", `${i}`);
        // element2[i].setAttribute("id", `${i}`);
        // element3[i].setAttribute("id", `${i}`);
        // alert("yooo");
        // });
    }
}
// Attribution d'un id par element (task)
