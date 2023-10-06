//References to the HTML List and Input elements
const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");
const appContainer = document.querySelector('.app');
//Handles the event of any empty task being added
function addTask(){
    if(inputBox.value == ''){
        alert("Task cannot be empty.");
        return;
    }

        let li = document.createElement("li");
        //creates a span to allow for editing
        let taskSpan = document.createElement("span");
        taskSpan.classList.add("task");
        taskSpan.innerHTML = inputBox.value;
        li.appendChild(taskSpan);
        //the following allows for an edit button with edit functionality
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("edit-button");
        li.appendChild(editBtn);
        //the following allows for an x to be placed at the end of the task
        let cross = document.createElement("cross");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
        //adds a date picker to the task, allowing to set due dates for specific tasks
        let dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.classList.add("due-date");
        li.appendChild(dateInput);
        //adds a priiority selector which changes the color of the bubble based on the selected color
        let prioritySelector = createPrioritySelector();
        li.appendChild(prioritySelector);
    
        taskList.appendChild(li);
    inputBox.value = "";
    saveData();
}
/* The following checks where on the task row the user has clicked
and either checks the task off or removes if clicked on cross */
taskList.addEventListener("click", function(n){
    if(n.target.tagName === "LI" && !n.target.hasAttribute('data-editing')){
        n.target.classList.toggle("checked");
        saveData();
    }
    else if(n.target.tagName === "CROSS"){
        n.target.parentElement.remove();
        saveData();
    }
    /*The following code allows for the edit button to work in-line rather
    rather than prmpting in the browser*/
    else if(n.target.innerHTML === "Edit"){
        let taskSpan = n.target.previousSibling;
        let currentTask = taskSpan.innerText;
        //The code works by replacing the span element of the task with an editable text
        let inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = currentTask;
        let spanWidth = taskSpan.offsetWidth;
        inputField.style.width = (spanWidth - 300) + "px"
        taskSpan.parentElement.replaceChild(inputField, taskSpan);

        inputField.focus();
        inputField.select();
        /*This event listener will wait for the enter key being pressed or for 
        the textbox to lose focus in order to save the textbox back to a span*/    
        inputField.addEventListener("blur", saveInlineEdit);
        inputField.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                saveInlineEdit.call(inputField); // Use call to ensure 'this' refers to inputField
            }
        n.target.parentElement.setAttribute('data-editing','true');
        });
        //This is the old way of editing the task, by prompting
        /* let newTask = prompt("Edit Task: ", taskSpan.innerHTML)
        if(newTask) taskSpan.innerHTML = newTask;
        saveData(); */
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
//This function takes the text box of the edited element and reconverts the text back to a span
function saveInlineEdit(){
    let newText = this.value;
    let newTaskSpan = document.createElement("span");

    newTaskSpan.classList.add("task");
    newTaskSpan.innerText = newText;
    this.parentElement.replaceChild(newTaskSpan, this);
    this.parentElement.removeAttribute('data-editing');

    saveData();
}
//This function will create a priority selector to append to the the task bubble
function createPrioritySelector(){
    let select = document.createElement("select");
    select.classList.add("priority-selector");

    let priorities = ["Select Priority","High","Medium","Low"];
    priorities.forEach(priority => {
        let option = document.createElement("option");
        option.value = priority.toLowerCase();
        option.innerText = priority;
        select.appendChild(option);
    });
    //Event listener to change the color
    select.addEventListener("change", function() {
        changeTaskColor(this);
    });

    return select;
}
//This function assigns colors to the task bubble based on chosen priority
function changeTaskColor(selector) {
    const priority = selector.value;
    const taskItem = selector.closest("li");

    switch(priority) {
        case "high":
            taskItem.style.backgroundColor = "#ff8f87";
            break;
        case "medium":
            taskItem.style.backgroundColor = "#fffb87";
            break;
        case "low":
            taskItem.style.backgroundColor = "#a9ff87";
            break;
        default:
            taskItem.style.backgroundColor = "";
    }
}
showList();