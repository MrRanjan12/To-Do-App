const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const viewTodo = document.getElementById('view-todo');
const backBtn = document.getElementById('back-btn');

// Function to create a new todo item
function createTodoItem(task) {
    const list = document.createElement('li');
    list.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = task;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit';
    editBtn.addEventListener('click', () => editTask(list, span));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(list));

    const viewBtn = document.createElement('button');
    viewBtn.textContent = 'View';
    viewBtn.className = "view";
    viewBtn.addEventListener('click', () => viewTask(list, span));

    list.appendChild(span);
    list.appendChild(editBtn);
    list.appendChild(deleteBtn);
    list.appendChild(viewBtn);
    todoList.appendChild(list);
}

// Add Task
addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task) {
        createTodoItem(task);
        todoInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Edit Task
function editTask(li, span) {
    const newTask = prompt('Edit your task:', span.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        span.textContent = newTask.trim();
    }
}

// Delete Task
function deleteTask(li) {
    if (confirm('Are you sure you want to delete this task?')) {
        todoList.removeChild(li);
    }
}

// View Task
function viewTask(list, span) {
    const task = span.textContent;
    if (task.trim() !== "") {  
        viewTodo.innerHTML = `<li>${task}</li>`;
        viewTodo.style.display = 'flex';
        backBtn.style.display = 'block'; // Show the back button
    }

}
backBtn.addEventListener('click', () => {
    viewTodo.style.display = 'none'; // Hide the current task view
    backBtn.style.display = 'none';
});