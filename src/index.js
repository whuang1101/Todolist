import "./titlescreen.css";
import { format } from 'date-fns'; 
import { makeToday } from "./today";
import { makeThisWeek } from "./this_week";
import { makeImportant } from "./make_important";
import { addHighlight } from "./add_highlight";
import { makeMain } from "./add_main";
makeMain


function dropDownToggle() {
    const dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click",() => {
        const dropDownItems = document.querySelector(".drop-down-items");
        const mainContent = document.querySelector(".main-content");
        if(dropDownItems.classList.contains("hide")){
            dropDownItems.classList.remove("hide");
            mainContent.classList.remove("move-main-content");
        }
        else{
            dropDownItems.classList.add("hide");
            mainContent.classList.add("move-main-content");
        }
    })
}
//This contains all pages and ones to hide;
let allTasksPage = document.querySelector(".all-tasks-page");
makeToday();
dropDownToggle();
makeThisWeek();
makeImportant();

let allTasksButton = document.querySelector(".inbox");
allTasksButton.addEventListener("click", ()=> {
    addHighlight(".inbox");
    makeMain(".all-tasks-page");
})
