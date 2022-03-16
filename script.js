var todo = [];
function todoList() {
  var text = document.getElementById("text");
  text.placeholder = "I need to...";

  var items = document.getElementById("items");
  var addBtn = document.getElementById("addBtn");

  addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    items.innerHTML = text.value + `<br/>`;
    todo.push(items.innerHTML);
    console.log(todo);
    localStorage.setItem("key", JSON.stringify(todo));
  });

  if (localStorage.getItem("key") == null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem("key"));
    items.innerHTML += `${todo} <br />`;
    console.log(items);
  }
}

todoList();
