const _ContentTodo = ({todoID, todoTitle, todoDeadline, todoPriority}) => {
  const todoItemNode = document.createElement("li");
  todoItemNode.classList.add("todo-item");
  todoItemNode.dataset.id = todoID;

  const todoHeaderNode = document.createElement("header");
  todoHeaderNode.classList.add("todo-item__header");
  todoItemNode.appendChild(todoHeaderNode);

  const todoTitleNode = document.createElement("h3");
  todoTitleNode.classList.add("todo-item__title");
  todoTitleNode.textContent = todoTitle;
  todoHeaderNode.appendChild(todoTitleNode);

  const todoOptionsNode = document.createElement("button");
  todoOptionsNode.setAttribute("type", "button");
  todoOptionsNode.classList.add("btn-todo-options");
  todoHeaderNode.appendChild(todoOptionsNode);

  const optionsSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Todo options</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>`,"image/svg+xml").documentElement;
  todoOptionsNode.appendChild(optionsSVG);

  const todoPriorityNode = document.createElement("span");
  todoPriorityNode.classList.add("todo-item__priority");
  todoPriorityNode.dataset.priority = todoPriority;
  todoPriorityNode.textContent = todoPriority;
  todoItemNode.appendChild(todoPriorityNode);

  const todoFooterNode = document.createElement("footer");
  todoFooterNode.classList.add("todo-item__footer");
  todoItemNode.appendChild(todoFooterNode);

  const todoDeadlineNode = document.createElement("span");
  todoDeadlineNode.classList.add("todo-item__deadline");
  todoDeadlineNode.textContent = todoDeadline;
  todoFooterNode.appendChild(todoDeadlineNode);

  const todoNotificationNode = document.createElement("span");
  todoNotificationNode.classList.add("todo-item__notification");
  todoNotificationNode.textContent = "Message!"
  todoFooterNode.appendChild(todoNotificationNode);

  return todoItemNode;
}

export default _ContentTodo;