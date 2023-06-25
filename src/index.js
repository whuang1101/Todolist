import "./titlescreen.css";
import { format } from 'date-fns'; 
import { today } from "./today";
import { addHighlight } from "./add_highlight";
import { makeMain } from "./add_main";

function taskMaker(name, date,description, important) {

    this.name = name;
    this.date = date;
    this.important = important;
  
    // Add methods
    this.sayInfo = function() {
     console.log(name,date,description,important)
    };
  }

let newerTask = new taskMaker("hello","3/4/2023","Tired",true);
//This contains all pages and ones to hide;
let allTasksPage = document.querySelector(".all-tasks-page");
let hideMain = [allTasksPage];
today(hideMain);

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

let allTasksButton = document.querySelector(".inbox");
allTasksButton.addEventListener("click", ()=> {
    addHighlight(".inbox");
    makeMain(".all-tasks-page");
})
