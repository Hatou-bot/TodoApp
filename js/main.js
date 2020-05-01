const taskList = [{'taskId': 0, 'Name':'Studying Javascript', 'Priority':'Urgent'},
            {'taskId': 1, 'Name':'Polishing the 4th wall', 'Priority': 'Daily'},
            {'taskId': 2, 'Name':'Dethroning unjust kings', 'Priority:':'Weekly'},
            {'taskId': 3, 'Name':'Pondering on the meaning of life, the universe, and everything else', 'Priority':'Monthly'},
]

const taskBody = document.querySelector('.task-body')

function printTasks(pTasks){
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