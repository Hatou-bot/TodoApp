const taskList = [{'taskId': 101, 'Name':'Studying Javascript', 'Priority':'Urgent'},
            {'taskId': 102, 'Name':'Polishing the 4th wall', 'Priority': 'Daily'},
            {'taskId': 103, 'Name':'Dethroning unjust kings', 'Priority':'Weekly'},
            {'taskId': 104, 'Name':'Pondering on the meaning of life, the universe, and everything else', 'Priority':'Monthly'},
]

const taskBody = document.querySelector('.task-body')
const taskInput = document.querySelector('.add-task')
const clickTask = document.querySelector('.first-bar button')
const prioritySelect= document.querySelector('.first-bar select')
const searchInput = document.querySelector('.search-task')
const searchPriority = document.querySelector('.second-bar select')


function priorityToClassName(pPriority){
    
    return "priority-" + pPriority.toLowerCase()
}

function printTasks(pTasks){ //prints tasks in the body
    taskBody.innerHTML = ""

    for(const task of pTasks){
        taskBody.innerHTML += `<article class="${priorityToClassName(task.Priority)}">
        <div>
            <p>${task.Name}</p>
            
            <button class="delete">Eliminar</button>
        </div>
    </article>`
    }
    //class="${task.Priority.toLowerCase()}"
    //<p>${task.Priority}</p> this was going right after <p>${task.Name}</p> 
}
printTasks(taskList)
//printTasks(taskList)

clickTask.addEventListener('click', onSaveTask) //assigns onSaveTask function to button
var taskId = 0
function onSaveTask(){
    const task = {
        taskId: taskId,
        Name: taskInput.value,
        Priority: prioritySelect.value,
    }
    taskList.push(task)
    taskId++;
    taskInput.value = ""
    clickTask.disabled = true
    printTasks(taskList)
}

taskInput.addEventListener('input', onNoTextInput) //I know this whole thing was not on the guide but it just irked me and made me feel uncomfortable not to have it
function onNoTextInput(event){
    clickTask.disabled = taskInput !== "" ? false : true
}

searchInput.addEventListener('input', onSearchTask) //searches tasks by name

function onSearchTask(event){
    let filteredList = filterName(taskList, searchInput.value)
    printTasks (filteredList)
    
}

function filterName(pList, pTask){
    let filteredList = new Array()

    filteredList = pList.filter(task => {
        return task.Name.includes(pTask.toLowerCase())
    })
    return filteredList
}

searchPriority.addEventListener('change', onSearchPriority)

function onSearchPriority(event){
    if (searchPriority.value == "noFilter"){
        printTasks(taskList)
    } else {
        let filteredList = filterPriority(taskList, searchPriority.value)
        printTasks(filteredList)
    }
    
}

function filterPriority(pList, pValue){
    let filteredList = new Array()

    filteredList = pList.filter(task => task.Priority == pValue)

    return filteredList
}

