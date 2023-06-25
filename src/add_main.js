function makeMain (toView){
    let allMain = document.querySelector(".main-content");
    let allMainChildren = Array.from(allMain.children);
    
    allMainChildren.forEach(element => {
        element.classList.add("hide");
    });
    let showElement = document.querySelector(toView);
    showElement.classList.remove("hide");
    console.log(showElement);
}
export {makeMain}