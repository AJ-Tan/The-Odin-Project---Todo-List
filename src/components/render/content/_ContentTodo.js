import { isAfter, isEqual } from "date-fns";
import { pubsub } from "../../../classes/PubSub";

const transformStatus = (todoStatus, todoDeadline) => {
  if(todoStatus !== "ongoing") return todoStatus;

  const dateSelect = document.getElementById("date-select");
  let currentDate = new Date().setHours(0,0,0,0);
  if(dateSelect.value) {
    currentDate = new Date(dateSelect.value).setHours(0,0,0,0);
  }
  
  const todoDeadlineDate = new Date(todoDeadline);
  if(isEqual(currentDate, todoDeadlineDate)) {
    return "deadline";
  } else if(isAfter(currentDate, todoDeadlineDate)) {
    return "overdue";
  } else {
    return "ongoing";
  }
}

const _ContentTodo = ({todoID, todoTitle, todoDeadline, todoPriority, todoStatus}) => {
  const todoItemNode = document.createElement("li");
  const currentTodoStatus = transformStatus(todoStatus, todoDeadline);

  todoItemNode.classList.add("todo-item");
  todoItemNode.dataset.id = todoID;
  todoItemNode.dataset.status = currentTodoStatus;
  
  const todoHeaderNode = document.createElement("header");
  todoHeaderNode.classList.add("todo-item__header");
  todoItemNode.appendChild(todoHeaderNode);

  const todoTitleNode = document.createElement("h3");
  todoTitleNode.classList.add("todo-item__title");
  todoTitleNode.textContent = todoTitle;
  todoHeaderNode.appendChild(todoTitleNode);

  const todoCloseNode = document.createElement("button");
  todoCloseNode.setAttribute("type", "button");
  todoCloseNode.classList.add("btn-todo-close");
  todoHeaderNode.appendChild(todoCloseNode);

  const closeSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete todo</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`, "image/svg+xml").documentElement;
  todoCloseNode.appendChild(closeSVG);

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
  todoNotificationNode.classList.add("todo-item__status");
  todoNotificationNode.textContent = currentTodoStatus;
  todoFooterNode.appendChild(todoNotificationNode);

  const renderTodoStatus = headerDateValue => {
    if(todoStatus !== "ongoing") return;
    const todoDeadlineDate = new Date(todoDeadline);
    if(isEqual(headerDateValue, todoDeadlineDate)) {
      todoItemNode.dataset.status = "deadline";
      todoNotificationNode.textContent = "deadline";
    } else if(isAfter(headerDateValue, todoDeadlineDate)) {
      todoItemNode.dataset.status = "overdue";
      todoNotificationNode.textContent = "overdue";
    } else {
      todoItemNode.dataset.status = "ongoing";
      todoNotificationNode.textContent = "ongoing";
    }
  }

  pubsub.subscribe("changeHeaderDate", renderTodoStatus);

  return todoItemNode;
}

export default _ContentTodo;