var todo = [];

var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", todoList);
var delt;
function todoList() {
  var items = document.createElement("li");
  var text = document.getElementById("text");
  if (text.value.trim() != 0) {
    items.innerHTML = text.value;
    todo.push(items.innerHTML);
    console.log(todo);
    localStorage.setItem("key", JSON.stringify(todo));
    location.reload();
  }
}

function getStorage() {
  if (localStorage.getItem("key") == null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem("key"));
    let count = document.getElementById("count");
    count.innerHTML = "Todo Count: " + todo.length;
    todo.forEach((item) => {
      var li = document.createElement("li");
      li.id = "li";
      delt = document.createElement("button");
      delt.id = "deleteBtn";
      delt.textContent = "Completed ";
      var text = document.createTextNode(item);
      li.appendChild(text);
      li.appendChild(delt);
      document.getElementById("items").appendChild(li);
      delt.addEventListener("click", (i) => deleteTask(i));
    });
  }
}

function deleteTask(i) {
  let localstrgs = localStorage.getItem("key");
  todo.splice(i, 1);
  localStorage.setItem("key", JSON.stringify(todo));
  location.reload();
}

getStorage();
