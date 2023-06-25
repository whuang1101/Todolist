import "./titlescreen.css";
import { addHighlight } from "./add_highlight";
import { makeMain } from "./add_main";
function today(hideMain,highlighted){
    const mainContent = document.querySelector(".main-content");
    const todayFrame = document.createElement("div");
    todayFrame.classList.add("today-page")
    todayFrame.classList.add("format");
    todayFrame.classList.add("hide");
    const todayTitle = document.createElement("div");
    todayTitle.textContent = "Today";
    todayTitle.classList.add("main-title");
    todayFrame.append(todayTitle);
    mainContent.append(todayFrame)
    const todayTask = document.querySelector(".today");
    //checks if hideMain has it if not adds the page to hideMain

    todayTask.addEventListener("click", ()=>{   
        addHighlight(".today");
        makeMain(".today-page");
    })
}
export {today}