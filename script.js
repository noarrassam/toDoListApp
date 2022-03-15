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
        
    }
  });
}

todoList();

