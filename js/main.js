const taskList = [{'taskId': 0, 'Name':'Studying Javascript', 'Priority':'Urgent'},
            {'taskId': 1, 'Name':'Polishing the 4th wall', 'Priority': 'Daily'},
            {'taskId': 2, 'Name':'Dethroning unjust kings', 'Priority:':'Weekly'},
            {'taskId': 3, 'Name':'Pondering on the meaning of life, the universe, and everything else', 'Priority':'Monthly'},
]

const taskBody = document.querySelector('.task-body')
const taskInput = document.querySelector('.add-task')
const clickTask = document.querySelector('.first-bar button')

function printTasks(pTasks){ //prints tasks in the body
    taskBody.innerHTML = ""

    for(const task of pTasks){
        taskBody.innerHTML += `<article>
        <p>${task.Name}</p>
        <button class="delete">Eliminar</button>
    </article>`
    }
}
printTasks(taskList)
//printTasks(taskList)

clickTask.addEventListener('click', onSaveTask)
var taskId = 0
function onSaveTask(){
    const task = {
        taskId: taskId,
        Name: taskInput.value,
        Priority: "Daily",
    }
    taskList.push(task)
    taskId++;
    printTasks(taskList)
}
