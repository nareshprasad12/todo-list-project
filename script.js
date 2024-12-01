const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText) {
        const listItem = createTodoItem(taskText);
        todoList.appendChild(listItem);
        todoInput.value = "";
    } else {
        alert("Please enter a task! Task should not be empty");
    }
}

// Function to create a task item element
function createTodoItem(taskText) {
    const listItem = document.createElement("li");
    listItem.className = "todo-item fade-in";

    const textElement = document.createElement("span");
    textElement.className = "todo-text";
    textElement.textContent = taskText;
    listItem.appendChild(textElement);

    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.innerHTML = "✏️";
    editButton.onclick = () => editTask(textElement);
    listItem.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.innerHTML = "❌";
    deleteButton.onclick = () => deleteTask(listItem);
    listItem.appendChild(deleteButton);

    return listItem;
}

// Function to delete a task with animation
function deleteTask(taskItem) {
    taskItem.classList.add("fade-out");
    taskItem.addEventListener("animationend", () => {
        taskItem.remove();
    });
}

// Function to edit an existing task
function editTask(taskElement) {
    const newTaskText = prompt("Edit your TO-DO list:", taskElement.textContent);
    if (newTaskText !== null) {
        taskElement.textContent = newTaskText;
    }
}
