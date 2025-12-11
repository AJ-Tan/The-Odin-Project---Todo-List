import { isAfter, isEqual, addDays, differenceInDays } from "date-fns";
import { pubsub } from "../../../classes/PubSub";
import { todoData } from "../../../classes/TodoData";
import renderContentBody from "./renderContentBody";

const transformStatus = (todoStatus, todoDeadline) => {
  if(todoStatus !== "ongoing") return [todoStatus, todoStatus];

  const dateSelect = document.getElementById("date-select");
  let currentDate = new Date().setHours(0,0,0,0);
  if(dateSelect.value) {
    currentDate = new Date(dateSelect.value).setHours(0,0,0,0);
  }
  
  const todoDeadlineDate = new Date(todoDeadline);
  if(isAfter(currentDate, todoDeadlineDate)) {
    return ["overdue", "overdue"];
  } else if(isAfter(addDays(currentDate, 8), todoDeadlineDate)) {
    
    if(isEqual(currentDate, todoDeadlineDate)) {
      return ["deadline", "deadline today"];
    } else {
      return ["deadline", `deadline: ${differenceInDays(todoDeadlineDate,currentDate)} day's`];
    }
  } else {
    return ["ongoing", "ongoing"];
  }
}

const _ContentTodo = (todoList, {todoID, todoTitle, todoDeadline, todoPriority, todoStatus}) => {
  const todoItemNode = document.createElement("li");
  const [currentTodoStatus, statusTextDisplay] = transformStatus(todoStatus, todoDeadline);

  // Todo Wrapper ======================================================
  todoItemNode.classList.add("todo-item");
  todoItemNode.dataset.id = todoID;
  todoItemNode.dataset.status = currentTodoStatus;
  
  // Todo Header Wrapper ===============================================
  const todoHeaderNode = document.createElement("header");
  todoHeaderNode.classList.add("todo-item__header");
  todoItemNode.appendChild(todoHeaderNode);

  // Todo Title Append Inside Header Wrapper ===========================
  const todoTitleNode = document.createElement("h3");
  todoTitleNode.classList.add("todo-item__title");
  todoTitleNode.textContent = todoTitle;
  todoHeaderNode.appendChild(todoTitleNode);

  // Todo Delete Append Inside Header Wrapper ===========================
  const todoDeleteNode = document.createElement("button");
  todoDeleteNode.setAttribute("type", "button");
  todoDeleteNode.classList.add("btn-todo-close");
  todoDeleteNode.addEventListener("click", () => {
    todoData.deleteTodo(todoList, todoID);
    renderContentBody();
  })
  todoHeaderNode.appendChild(todoDeleteNode);

  const closeSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete todo</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`, "image/svg+xml").documentElement;
  todoDeleteNode.appendChild(closeSVG);

  // Todo Priority =====================================================
  const todoPriorityNode = document.createElement("span");
  todoPriorityNode.classList.add("todo-item__priority");
  todoPriorityNode.dataset.priority = todoPriority;
  todoPriorityNode.textContent = todoPriority;
  todoItemNode.appendChild(todoPriorityNode);

  // Todo Footer Wrapper ===============================================
  const todoFooterNode = document.createElement("footer");
  todoFooterNode.classList.add("todo-item__footer");
  todoItemNode.appendChild(todoFooterNode);

  // Todo Deadline Append Inside Footer Wrapper ========================
  const todoDeadlineNode = document.createElement("span");
  todoDeadlineNode.classList.add("todo-item__deadline");
  todoDeadlineNode.textContent = todoDeadline;
  todoFooterNode.appendChild(todoDeadlineNode);

  // Todo Status Append Inside Footer Wrapper ==========================
  const todoStatusNode = document.createElement("span");
  todoStatusNode.classList.add("todo-item__status");
  todoStatusNode.textContent = statusTextDisplay;
  todoFooterNode.appendChild(todoStatusNode);

  // Rendering todo status upon changing header date ===================
  const renderTodoStatus = headerDateValue => {
    if(todoStatus !== "ongoing") return;
    const todoDeadlineDate = new Date(todoDeadline);
    if(isAfter(headerDateValue, todoDeadlineDate)) {
      todoItemNode.dataset.status = "overdue";
      todoStatusNode.textContent = "overdue";
    } else if(isAfter(addDays(headerDateValue, 8), todoDeadlineDate)) {
      todoItemNode.dataset.status = "deadline";
      if(isEqual(headerDateValue, todoDeadlineDate)) {
        todoStatusNode.textContent = "deadline today";
      } else {
        todoStatusNode.textContent = `deadline: ${differenceInDays(todoDeadlineDate,headerDateValue)} day's`;
      }
    } else {
      todoItemNode.dataset.status = "ongoing";
      todoStatusNode.textContent = "ongoing";
    }
  }
  pubsub.subscribe("changeHeaderDate", renderTodoStatus);

  return todoItemNode;
}

export default _ContentTodo;