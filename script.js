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
  if (localStorage.getItem("key") == null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem("key"));
    for (let i = 0; i < todo.length; i++) {
      items.innerHTML = todo[i];
      document.getElementById("items").appendChild(items);
    }
  }
}

if (localStorage.getItem("key") == null) {
  todo = [];
} else {
  todo = JSON.parse(localStorage.getItem("key"));
  todo.forEach((item) => {
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById("items").appendChild(li);
  });
}
