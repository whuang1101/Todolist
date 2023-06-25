function addHighlight(toHighlight){
    let highlighted = document.querySelectorAll(".highlight");
    highlighted.forEach(element => {
        element.classList.remove("highlight")
    });
    let highlightElement = document.querySelector(toHighlight);
    highlightElement.classList.add("highlight");

}
export {addHighlight}