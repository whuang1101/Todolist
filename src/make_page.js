import { addHighlight } from "./add_highlight";
import { makeMain } from "./add_main";
import { format, isBefore, isSameDay, parseISO } from 'date-fns'; 
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
    const tasks = document.createElement("div");
    tasks.classList.add("task-frame");
    tasks.classList.add(`${pageName}-frame`);
    frame.append(tasks);
    mainContent.append(frame)
    const task = document.querySelector(sideBarClick);
    task.addEventListener("click", ()=>{ 
        addHighlight(sideBarClick);
        makeMain(`.${pageName}`);
    })
    return frame;
}
function popupManager (makeTasks){
    const addTask = document.createElement("div");
    addTask.textContent = "+ ADD TASK";
    addTask.classList.add("add-tasks");
    makeTasks.append(addTask);
    const popup = document.querySelectorAll(".popup-hide");
    addTask.addEventListener("click", () => {
        popup.forEach(element => {
            element.classList.remove("popup-hide");
        });
    })
    const blur = document.querySelector(".blur");
    blur.addEventListener("click", ()=>{
        popup.forEach(element => {
            element.classList.add("popup-hide");
        });
    })
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") { 
            popup.forEach(element => {
                element.classList.add("popup-hide");
            });
        }
      });
}

function getPopUpInfo(){
    const submitButton = document.getElementById("submit");
    const popup = document.querySelector(".popup");
    const blur = document.querySelector(".blur");
    const title = document.getElementById("title");
    const details = document.getElementById("details");
    const important = document.getElementById("isImportant");
    const date = document.getElementById("date");
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        let titleInfo = title.value;
        let detailsInfo = details.value;
        let importantInfo = important.checked;
        let dateInfo = new Date(date.value);
        dateInfo.setDate(dateInfo.getDate()+1);
        let formattedDate = format(dateInfo, "yyyy-MM-dd");
        generateTask(titleInfo,detailsInfo,dateInfo,formattedDate,importantInfo);
        title.value = "";
        details.value = "";
        date.value = "";
        important.checked = false;
        date.value = "";
      });
}
function generateTask(tempTitle,tempDescription,tempDate,formattedDate,importantOrNot){
    const individualTask = document.createElement("div");
    const tasks = document.querySelector(".all-tasks-page-frame")

    individualTask.classList.add("task");
    individualTask.classList.add(`${tempTitle}-task`);
    const firstLine = document.createElement("div");
    firstLine.classList.add("first-line");
    const titleLine = document.createElement("span");
    const completed = document.createElement("input");
    completed.classList.add("task-check");
    completed.classList.add(tempTitle);
    completed.type = "checkbox";
    titleLine.textContent = tempTitle;
    firstLine.append(completed)
    firstLine.append(titleLine);
    const description = document.createElement("div");
    description.textContent = tempDescription
    description.classList.add("description");
    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = formattedDate;
    let currentDate = new Date();
    let formattedCurrentDate = format(currentDate, "yyyy-MM-dd");
    let futureDate = new Date(currentDate);
    futureDate.setDate(futureDate.getDate() + 7);
    individualTask.append(firstLine);
    individualTask.append(description);
    individualTask.append(date);
    if (isBefore(tempDate, futureDate)) {
        const thisWeekTasks = document.querySelector(".this-week-page-frame");
        const newTaskClone = individualTask.cloneNode(true);
        
        thisWeekTasks.append(newTaskClone);
    }      
    if (importantOrNot) {
        const importantTasks = document.querySelector(".important-page-frame");
        const newTaskClone = individualTask.cloneNode(true);
        importantTasks.append(newTaskClone);
    }
    console.log(currentDate)
    console.log(tempDate);
    if (isSameDay(currentDate,tempDate)){
        const todayTasks = document.querySelector(".today-page-frame");
        const newTaskClone = individualTask.cloneNode(true);
        todayTasks.append(newTaskClone);
    }
    else{
        console.log("false");
    }
    tasks.append(individualTask);
    checkCompleted();
}
function checkCompleted() {
    console.log("hi");
    let checkedBoxes = document.querySelectorAll(".task-check");
    let checkedBoxesArray = Array.from(checkedBoxes);
    console.log(checkedBoxesArray);
    checkedBoxesArray.forEach(element => {
        element.addEventListener("click", ()=> {
            if(element.checked){
                const allTasksPage = document.querySelector(".all-tasks-page-frame");
                const completedPage = document.querySelector(".completed-page");
                const task = element.parentNode.parentNode;
                element.checked = false;
                let allTaskPageChildren = Array.from(allTasksPage.children);
                allTaskPageChildren.forEach(newElement => {
                    if(newElement.classList.contains(task.classList[1])){
                        console.log("yes");
                        newElement.children[0].children[0].checked = true;
                        newElement.id = "show";
                        completedPage.append(newElement);
                        
                    }
                });
                element.classList.forEach(newElement => {
                    console.log(newElement);
                    if (newElement !== "task-check"){
                        let allChecks = document.querySelectorAll(`.${newElement}-task`);
                        let newAllChecks = Array.from(allChecks);
                        newAllChecks.forEach(allNewElement => {
                            console.log(allNewElement);
                            allNewElement.classList.add("hide");
                        });
                    }
                });
            }
            else{
                let allTasks = document.querySelector(".all-tasks-page-frame");
                allTasks.append(element.parentNode.parentNode)
                                element.parentNode.parentNode.id = "show";
                element.classList.forEach(newElement => {
                    console.log(newElement);
                    if (newElement !== "task-check"){
                        let allChecks = document.querySelectorAll(`.${newElement}-task`);
                        let newAllChecks = Array.from(allChecks);
                        newAllChecks.forEach(allNewElement => {
                            console.log(allNewElement);
                            allNewElement.classList.remove("hide");
                        });
                    }
                });
            }
        })
    });
}
export {makePage,popupManager, generateTask,getPopUpInfo}