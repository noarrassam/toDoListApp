var todo = [];
function todoList() {
  var text = document.getElementById("text");
  text.placeholder = "I need to...";

  var items = document.getElementById("items");
  var addBtn = document.getElementById("addBtn");

  var count = 0;

  addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    items.innerHTML = text.value;
    todo.push(items.innerHTML);
    console.log(todo);
    localStorage.setItem("key", JSON.stringify(todo));
    count++;
  });

  //for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key("key");
    if (localStorage.getItem(key) == null) {
      todo = [];
    } else {
      todo = JSON.parse(localStorage.getItem("key"));
      items.innerHTML += `${todo}<br />`;
    }
  //}
}

todoList();
