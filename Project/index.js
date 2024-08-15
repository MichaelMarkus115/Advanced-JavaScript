document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Load tasks from local storage
  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => createTaskElement(task));
  };

  // Save tasks to local storage
  const saveTasks = () => {
    const tasks = Array.from(taskList.children).map((li) => ({
      text: li.querySelector("span").textContent,
      completed: li.classList.contains("completed"),
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Create a task element
  const createTaskElement = (task) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;

    const completeButton = document.createElement("button");
    completeButton.textContent = "✓";
    completeButton.classList.add("complete");
    completeButton.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✗";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
      li.remove();
      saveTasks();
    });

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  };

  // Add a new task
  addTaskButton.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text) {
      createTaskElement({ text });
      taskInput.value = "";
      saveTasks();
    }
  });

  // Load tasks on page load
  loadTasks();
});
