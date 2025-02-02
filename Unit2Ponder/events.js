let tasks = [];

function newTask() {
  const taskInput = document.querySelector("#todo");
  const taskValue = taskInput.value.trim();
  if (taskValue === "") return;

  tasks.push({ detail: taskValue, completed: false });
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.completed ? "strike" : "";

    li.innerHTML = `
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    `;

    listElement.appendChild(li);
  });
}

function removeTask(taskElement) {
  tasks = tasks.filter((task) => task.detail !== taskElement.querySelector("p").innerText);
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskText = taskElement.querySelector("p").innerText;
  const taskIndex = tasks.findIndex((task) => task.detail === taskText);
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle("strike");
}

function manageTasks(event) {
  const parentTask = event.target.closest("li");
  if (!parentTask) return;

  if (event.target.dataset.function === "delete") {
    removeTask(parentTask);
  } else if (event.target.dataset.function === "complete") {
    completeTask(parentTask);
  }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
