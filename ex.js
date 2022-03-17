let button = document.getElementById("taskButton");
button.addEventListener("click", taskList);

function taskList() {
  let item = document.getElementById("taskInput").value;
  let newTask = document.createElement("li");
  let deleteTaskButton = document.createElement("button");
  deleteTaskButton.textContent = "Delete " + item;
  newTask.innerText = item;
  document.getElementById("taskLister").appendChild(newTask);
  newTask.appendChild(deleteTaskButton); /* 1. ADD BUTTON TO LI */

  if (markTaskComplete) {
    newTask.addEventListener("click", (e) => markTaskComplete(e));
    deleteTaskButton.addEventListener("click", (i) => removeTask(i));
  }
}

function markTaskComplete(e) {
  let strikeThrough = e.target;
  strikeThrough.style.textDecoration = "line-through";
}

function removeTask(i) {
  /* 2. THE BUTTON IS NOW A CHILD OF THE LI, SO DELETE ITS PARENT */
  let deleteTask = i.target.parentElement;
  deleteTask.remove();
}
