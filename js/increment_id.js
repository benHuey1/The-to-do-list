export function increment_id(element, element1, element2, element3) {
    for (let i = 0; i < element.length; i++) {
        // sectionCard[i].addEventListener("click", function () {
        element[i].setAttribute("id", `${i}`);
        element1[i].setAttribute("id", `0${i}`);
        element2[i].setAttribute("id", `00${i}`);
        element3[i].setAttribute("id", `000${i}`);
        // alert("yooo");
        // });
    }
}
// Attribution d'un id par element (task)
