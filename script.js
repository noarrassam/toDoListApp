function todoList() {
  var todo = [
    {
      item: "",
    },
  ];

  var add = document.getElementById("add");
  add.placeholder = "I need to...";

  var items = document.getElementById("items");

  var delt = document.getElementById("delete");
  delt.innerHTML = "Complete";

  add.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      items.innerHTML = add.value;
      todo.push({ item: items.innerHTML });
      console.log(todo);
      let todoList = JSON.stringify(todo);
      console.log(todoList);
      localStorage.setItem("key", todoList);
      let getItem = localStorage.getItem("key");
      console.log(getItem);
      let parsedObj = JSON.parse(getItem);
      console.log(parsedObj);
    }

    for (const [key, value] of Object.entries(localStorage)) {
      console.log(key, value);
    }
  });
}

todoList();
