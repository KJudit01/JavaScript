const tasks = [];

function renderTasks() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; 
    
    let completedCount = 0;
    
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.className = task.completed ? "completed-task" : "todo-task";
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            renderTasks();
        });
        
        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        todoList.appendChild(taskItem);
        
        if (task.completed) {
            completedCount++;
        }
    });
    
    const progressPercent = (completedCount / tasks.length) * 100;
    document.getElementById("progress-percent").textContent = progressPercent.toFixed(2) + "%";
}

function addTask(text) {
    tasks.push({ text, completed: false });
    renderTasks();
}

addTask("Cleaning");
addTask("Washing-up");
addTask("Hoovering");
addTask("Car Wash");
addTask("Cooking");
addTask("Washing the laundry")
