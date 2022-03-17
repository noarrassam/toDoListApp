var todo = [];

var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", todoList);

function todoList() {
  var items = document.createElement("li");
  var text = document.getElementById("text").value;
  items.innerHTML = text;

  todo.push(items.innerHTML);
  console.log(todo);
  localStorage.setItem("key", JSON.stringify(todo));
  location.reload();
}

function getStorage() {
  if (localStorage.getItem("key") == null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem("key"));
    todo.forEach((item) => {
      var li = document.createElement("li");
      var delt = document.createElement("button");
      delt.textContent = "Completed ";
      var text = document.createTextNode(item);
      li.appendChild(text);
      li.appendChild(delt);
      document.getElementById("items").appendChild(li);
    });
  }
}

getStorage();
