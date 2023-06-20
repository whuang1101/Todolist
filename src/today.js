import "./titlescreen.css";
function today(hideMain){
    const mainContent = document.querySelector(".main-content");
    const todayFrame = document.createElement("div");
    todayFrame.classList.add("format");
    const todayTitle = document.createElement("div");
    todayTitle.textContent = "Today";
    todayTitle.classList.add("main-title");
    todayTitle.classList.add("hide");
    todayFrame.append(todayTitle);
    mainContent.append(todayFrame)
    const todayTask = document.querySelector(".today");
    //checks if hideMain has it if not adds the page to hideMain
    const index = hideMain.indexOf(todayTitle);

    if (index === -1){
        hideMain.push(todayTitle);
    }
    else{
        hideMain.splice(index,1);
    }
    todayTask.addEventListener("click", ()=>{
        todayTitle.classList.remove("hide");
        const todayHighlight = document.querySelector(".today");
        todayHighlight.classList.add("highlight");
        for (let i = 0; i < hideMain.length; i ++){
            hideMain[i].classList.add("hide");
        }
    })
}
export {today}