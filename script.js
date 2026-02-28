const taskList = document.querySelector('.task-list');

function enterkey(event){
    if(event.key == 'Enter'){
        addTodo();
    }
}

loadTodo();
function loadTodo(){
    const taskStorage = localStorage.getItem('taskStorage');
    if(taskStorage != null){
    taskList.insertAdjacentHTML('beforeend', taskStorage)
    countPendingTasks()
    }
}
function addTodo(){
    const inputTodo = document.getElementById('inputTodo');
     
    if(inputTodo.value != ''){
    const element = `
              <div class="task">
                    <button onclick="checkBtn(this)"class="check-btn">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <span onclick="checkBtn(this)">${inputTodo.value}</span>
                    <button onclick="deleteBtn(this)"class="delete-btn">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            `
    taskList.insertAdjacentHTML('afterbegin', element)
     
    saveTodo();
    countPendingTasks()

    inputTodo.value = '';
        
    }else{
        alert('Plase enter a task! 😒')
    }
}

function checkBtn(element){
    const task = element.parentElement;
    task.classList.toggle('true');

    saveTodo();
    countPendingTasks()

}

function deleteBtn(element){
     const task = element.parentElement;

     task.remove();

     saveTodo();
     countPendingTasks()
}

function countPendingTasks(){
    const countPendingTasks = document.getElementById('countPendingTasks');
    countPendingTasks.textContent = document.querySelectorAll('.task:not(.true)').length;
}

function clearAll(){
    if(confirm('Clear all task 👋 ')){
    taskList.innerHTML = '';
    setItem();
    }
}
function saveTodo(){
    localStorage.setItem('taskStorage', taskList.innerHTML)
}