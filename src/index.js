import "./titlescreen.css";
import "./popup.css";
import {makeAllTasks, makeCompleted, makeImportant, makeThisWeek, makeToday} from "./make_home_items_page";
import { generateTask, getPopUpInfo, popupManager } from "./make_page";
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
makeToday();
dropDownToggle();
makeThisWeek();
makeImportant();
const makeTasks = makeAllTasks();
makeTasks.classList.remove("hide");
popupManager(makeTasks);
getPopUpInfo();
makeCompleted();

