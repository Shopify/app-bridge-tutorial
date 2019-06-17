export function renderTodoItems(todoItems, todoList) {
  const listItems = document.createDocumentFragment();

  todoItems.forEach(function(todoItem) {
    const li = document.createElement("li");
    li.classList.add("todolist-item");

    const p = document.createElement("p");
    p.innerText = todoItem.name;
    li.appendChild(p);

    listItems.appendChild(li);
  });

  todoList.innerHTML = "";
  todoList.appendChild(listItems);
}
