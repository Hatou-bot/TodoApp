const taskList = [{'taskId': 101, 'Name':'Studying Javascript', 'Priority':'Urgent'},
            {'taskId': 102, 'Name':'Polishing the 4th wall', 'Priority': 'Daily'},
            {'taskId': 103, 'Name':'Dethroning unjust kings', 'Priority':'Weekly'},
            {'taskId': 104, 'Name':'Pondering on the meaning of life, the universe, and everything else', 'Priority':'Monthly'},
]

const taskBody = document.querySelector('.task-body')
const taskInput = document.querySelector('.add-task')
const clickTask = document.querySelector('.first-bar button')
const priority = document.querySelector('.first-bar select')

function printTasks(pTasks){ //prints tasks in the body
    taskBody.innerHTML = ""

    for(const task of pTasks){
        taskBody.innerHTML += `<article>
        <p>${task.Name}</p>
        <p>${task.Priority}</p>
        <button class="delete">Eliminar</button>
    </article>`
    }
}
printTasks(taskList)
//printTasks(taskList)

clickTask.addEventListener('click', onSaveTask) //assigns onSaveTask function to button
var taskId = 0
function onSaveTask(){
    const task = {
        taskId: taskId,
        Name: taskInput.value,
        Priority: priority.value,
    }
    taskList.push(task)
    taskId++;
    taskInput.value = ""
    printTasks(taskList)
}
