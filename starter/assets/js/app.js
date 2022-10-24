/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

let ToDo = document.getElementById("to-do-tasks");
let InProgress = document.getElementById("in-progress-tasks");
let Done = document.getElementById("done-tasks");

reloadTasks();





function createTask() {
    let newTask =
    {
        'title': document.querySelector('#title').value,
        'type': document.querySelector('#type:checked').value,
        'priority': document.querySelector('#Priority').value,
        'status': document.querySelector('#status').value,
        'date': document.querySelector('#date').value,
        'description': document.querySelector('#description').value,
    };

    tasks.push(newTask);
    reloadTasks();
    $("#staticBackdrop").modal('hide');

    // initialiser task form
    initTaskForm()
    // Afficher le boutton save

    // Ouvrir modal form
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks

}

function editTask(i) {

    // Initialisez task form
    title.value = tasks[i].title;
    priority.value = tasks[i].priority
    $('#staticBackdrop').modal('show');
    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask(i) {
    // Get index of task in the array
    tasks.splice(i, 1);
    // Remove task from array by index splice function

    // close modal form

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
                                            <div class="fw-light">${tasks[i].date}</div>
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
        }
        if (tasks[i].status === "In Progress") {
            InProgress.innerHTML += ` <button class="d-flex list-group-item w-100 text-start">
                                        <div class="">
                                            <i class="spinner-border spinner-border-sm text-success m-1"></i>
                                        </div>
                                        <div class="">
                                            <div class="fw-bolder">${tasks[i].title}</div>
                                            <div class="">
                                                <div class="fw-light">${tasks[i].date}</div>
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
        }
        if (tasks[i].status === "Done") {
            Done.innerHTML += `<button class="d-flex list-group-item w-100 text-start">
                                    <div class="">
                                        <i class="fa-regular fa-circle-check text-success m-1"></i>
                                    </div>
                                    <div class="">
                                        <div class="fw-bolder ">${tasks[i].title}</div>
                                        <div class="">
                                            <div class="fw-light">${tasks[i].date}</div>
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
        }

    }

}