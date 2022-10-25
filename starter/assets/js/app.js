/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

let ToDo = document.getElementById("to-do-tasks");
let InProgress = document.getElementById("in-progress-tasks");
let Done = document.getElementById("done-tasks");

reloadTasks();


function displayButtons() {
    document.getElementById('buttonSaveID').style.display = "block";
    document.getElementById('buttonUpdateID').style.display = "none";
}



function createTask() {

    let FeatureOrBug;

    if (typeFeature.checked) FeatureOrBug = "Feature";
    else FeatureOrBug = "Bug";

    let newTask =
    {
        'title': document.querySelector('#title').value,
        'type': FeatureOrBug,
        'priority': document.querySelector('#Priority').value,
        'status': document.querySelector('#status').value,
        'date': document.querySelector('#date').value,
        'description': document.querySelector('#description').value,
    };

    tasks.push(newTask);
    reloadTasks();
    $("#staticBackdrop").modal('hide');

    // initialiser task form
    initTaskForm();
    

  
}


let taskClickedIndex;

function editTask(i) {

    document.getElementById('buttonSaveID').style.display = "none";
    document.getElementById('buttonUpdateID').style.display = "block";
    taskClickedIndex = i;



    // Affichez updates
    if (tasks[i].type == "Feature") typeFeature.checked = true;
    else typeBug.checked = true;

    title.value = tasks[i].title;
    document.getElementById('Priority').value = tasks[i].priority;
    document.getElementById('status').value = tasks[i].status;
    date.value = tasks[i].date;
    description.value = tasks[i].description;


    // Ouvrir Modal form
    $('#staticBackdrop').modal('show');
}

function updateTask() {
    // Créez task object
    let FeatureOrBug;

    if (typeFeature.checked) FeatureOrBug = "Feature";
    else FeatureOrBug = "Bug";

    let newTask =
    {
        'title': document.querySelector('#title').value,
        'type': FeatureOrBug,
        'priority': document.querySelector('#Priority').value,
        'status': document.querySelector('#status').value,
        'date': document.querySelector('#date').value,
        'description': document.querySelector('#description').value,
    };


    // Remplacer ancienne task par nouvelle task
    tasks[taskClickedIndex] = newTask;

    // Fermer Modal form

    $("#staticBackdrop").modal('hide');

    // Refresh tasks

    reloadTasks();

}

function deleteTask(i) {
    // Get index of task in the array
    tasks.splice(i, 1);

    // refresh tasks
    reloadTasks();
}

function initTaskForm() {
    // Clear task form from data

    staticBackdrop.reset();

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
    document.getElementById("to-do-tasks").innerHTML = "";
    document.getElementById("in-progress-tasks").innerHTML = "";
    document.getElementById("done-tasks").innerHTML = "";
        let counterDate=0;
        let counterToDo=0, counterInProgress=0, counterDone=0; //Counters for the header of each card
    // Set Task count
    for (var i = 0; i < tasks.length; i++) {
        
        if (tasks[i].status === "To Do") {
            ToDo.innerHTML += `<button class="d-flex list-group-item w-100 text-start">
                                    <div class="">
                                        <i class="fa-regular fa-circle-question text-success m-1"></i>
                                    </div>
                                    <div class="">
                                        <div class="fw-bolder">${tasks[i].title}</div>
                                        <div class="">
                                            <div class="fw-light">#${counterDate+1} ${tasks[i].date}</div>
                                            <div class="fs-6 text-truncate"style="max-width: 15rem;">${tasks[i].description}</div>
                                        </div>
                                        <div class="text-start ">
                                            <span class="btn btn-primary py-1 btn-sm ">${tasks[i].priority}</span>
                                            <span class="btn btn-secondary py-1 btn-sm btn-sm btn-sm ">${tasks[i].type}</span>
                                            </div>
                                            <div class="d-flex">   
                                                <span class="btn " onclick="deleteTask(${i})"><i class="fa fa-trash"></i></span>
                                                <span class="btn " onclick=editTask(${i})><i class="fa-solid fa-pen-to-square"></i>                                                
                                            </div>
                                    </div>
                                    
                                </button>  `
                                counterToDo++;
                                console.log('counterToDo');
        }
        if (tasks[i].status === "In Progress") {
            InProgress.innerHTML += ` <button class="d-flex list-group-item w-100 text-start">
                                        <div class="">
                                            <i class="spinner-border spinner-border-sm text-success m-1"></i>
                                        </div>
                                        <div class="">
                                            <div class="fw-bolder">${tasks[i].title}</div>
                                            <div class="">
                                                <div class="fw-light">#${counterDate+1} ${tasks[i].date}</div>
                                                <div class="text-truncate"style="max-width: 15rem;">${tasks[i].description}</div>
                                            </div>
                                            <div class="text-start">
                                                <span class="btn btn-primary py-1 btn-sm ">${tasks[i].priority}</span>
                                                <span class="btn btn-secondary py-1 btn-sm ">${tasks[i].type}</span>

                                                </div>
                                                <div class="d-flex">   
                                                <span class="btn " onclick="deleteTask(${i})"><i class="fa fa-trash"></i></span>
                                                <span class="btn " onclick=editTask(${i})><i class="fa-solid fa-pen-to-square"></i>                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </button> `
                                    counterInProgress++;
                                    console.log('counterInProgress');
        }
        if (tasks[i].status === "Done") {
            Done.innerHTML += `<button class="d-flex list-group-item w-100 text-start">
                                    <div class="">
                                        <i class="fa-regular fa-circle-check text-success m-1"></i>
                                    </div>
                                    <div class="">
                                        <div class="fw-bolder ">${tasks[i].title}</div>
                                        <div class="">
                                            <div class="fw-light">#${counterDate+1} ${tasks[i].date}</div>
                                            <div class="text-truncate"style="max-width: 15rem;">${tasks[i].description}</div>
                                        </div>
                                        <div class="text-start">
                                            <span class="btn btn-primary py-1 btn-sm ">${tasks[i].priority}</span>
                                            <span class="btn btn-secondary py-1 btn-sm btn-sm">${tasks[i].type}</span>
                                            
                                        </div>
                                        <div class="d-flex">   
                                                <span class="btn " onclick="deleteTask(${i})"><i class="fa fa-trash"></i></span>
                                                <span class="btn " onclick=editTask(${i})><i class="fa-solid fa-pen-to-square"></i>                                                
                                            </div>
                                    </div>
                                </button>`
                                counterDone++;
                                
                                
        }
        counterDate++;
    }
document.getElementById('to-do-tasks-count').innerText= counterToDo;
document.getElementById('in-progress-tasks-count').innerText=counterInProgress;
document.getElementById('done-tasks-count').innerText=counterDone;
}


