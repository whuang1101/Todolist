import { addHighlight } from "./add_highlight";
import { makeMain } from "./add_main";

// The purpose of this function is to make each individual page;
function makePage(pageName,pageTitle,sideBarClick) {
    const mainContent = document.querySelector(".main-content");
    const frame = document.createElement("div");
    frame.classList.add(pageName)
    frame.classList.add("format");
    frame.classList.add("hide");
    const title = document.createElement("div");
    title.textContent = pageTitle;
    title.classList.add("main-title");
    frame.append(title);
    mainContent.append(frame)
    const task = document.querySelector(sideBarClick);
    //checks if hideMain has it if not adds the page to hideMain

    task.addEventListener("click", ()=>{ 
        addHighlight(sideBarClick);
        makeMain(`.${pageName}`);
    })
    return frame;
}
export {makePage}