var todo = [];

var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", todoList);
function todoList() {
  var items = document.createElement("p");
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
    todo.forEach((item, index) => {
      var li = document.createElement("li");
      li.id = "li";
      var delt = document.createElement("button");
      delt.id = "deleteBtn";
      delt.textContent = "Completed ";
      var text = document.createTextNode(item);
      li.appendChild(text);
      li.appendChild(delt);
      document.getElementById("items").appendChild(li);
      delt.addEventListener("click", () => deleteTask(index));
    });
  }
}

function deleteTask(i) {
  todo.splice(i, 1);
  localStorage.setItem("key", JSON.stringify(todo));
  location.reload();
}

getStorage();
