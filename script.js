// script.js
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
      var taskList = document.getElementById("taskList");
      var taskItem = document.createElement("div");
      taskItem.className = "task";
      taskItem.innerHTML = taskText + '<button onclick="removeTask(this)">Remove</button>';
      taskList.appendChild(taskItem);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  
  function removeTask(taskElement) {
    taskElement.parentElement.remove();
  }
  