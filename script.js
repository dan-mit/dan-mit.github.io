//References to the HTML List and Input elements
const inputBox = document.getElementById("inputBox")
const taskList = document.getElementById("taskList")
//Allows for
function addTask(){
    if(inputBox.value == ''){
        alert("Task cannot be empty.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        //the following allows for an x to be placed at the end of the task
        let cross = document.createElement("cross");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross)
    }
    inputBox.value = "";
    saveData();
}
/* The following checks where on the task row the user has clicked
and either checks the task off or removes if clicked on cross */
taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "CROSS"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
//The following listener checks for the enter ket to be pressed to append task to list
inputBox.addEventListener("keypress", function(enter){
    if(enter.key === "Enter"){
        enter.preventDefault();
        addTask();
    }
});
/* The following fuctions are responsible for saving the data passed
to the list, as well as displaying the saved content on page load */
function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showList(){
    taskList.innerHTML = localStorage.getItem("data");
}

showList();