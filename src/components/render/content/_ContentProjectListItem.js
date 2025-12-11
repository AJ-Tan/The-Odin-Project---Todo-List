import { todoData } from "../../../classes/TodoData";
import EditProjectList from "../../modals/contentHeader/EditProjectList";
import _ContentTodo from "./_ContentTodo";
import renderContentBody from "./renderContentBody";

const _ContentProjectListItem = (projectList) => {
  const {projectListID, projectListName, theme: {r,g,b}, todoList} = projectList;

  const projectListItemNode = document.createElement("li");
  projectListItemNode.classList.add("content-project-list-item");
  projectListItemNode.dataset.id = projectListID;
  projectListItemNode.style.backgroundColor = `rgba(${r},${g},${b},0.2)`;

  const projectItemHeaderNode = document.createElement("header");
  projectItemHeaderNode.classList.add("content-project-list__header");
  projectListItemNode.appendChild(projectItemHeaderNode);

  const projectItemTitleContainer = document.createElement("div");
  projectItemTitleContainer.classList.add("title-container");
  projectItemHeaderNode.appendChild(projectItemTitleContainer);

  const projectItemTitleNode = document.createElement("h2");
  projectItemTitleNode.classList.add("content-project-list-item__title");
  projectItemTitleNode.textContent = projectListName;
  projectItemTitleNode.style.color = `rgb(${r},${g},${b})`;
  projectItemTitleContainer.appendChild(projectItemTitleNode);

  const projectItemEditNode = document.createElement("button");
  projectItemEditNode.setAttribute("type", "button");
  projectItemEditNode.classList.add("btn-project-list-edit");
  projectItemEditNode.addEventListener("click", () => {
    EditProjectList(projectList);
  })
  projectItemTitleContainer.appendChild(projectItemEditNode);

  const editSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit list</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>`,"image/svg+xml").documentElement;
  editSVG.style.fill = `rgb(${r},${g},${b})`;
  projectItemEditNode.appendChild(editSVG);

  const btnDeleteListNode = document.createElement("button");
  btnDeleteListNode.setAttribute("type", "button");
  btnDeleteListNode.classList.add("btn-delete-list");
  btnDeleteListNode.addEventListener("click", () => {
    todoData.deleteList(todoData.currentProject, projectListID);
    renderContentBody();
  })
  projectItemHeaderNode.appendChild(btnDeleteListNode);

  const closeSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete list</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`, "image/svg+xml").documentElement;
  closeSVG.style.fill = `rgb(${r},${g},${b})`;
  btnDeleteListNode.appendChild(closeSVG);

  const todoListNode = document.createElement("ul");
  todoListNode.classList.add("todo-list");
  projectListItemNode.appendChild(todoListNode);

  todoList?.forEach(todo => {
    todoListNode.appendChild(_ContentTodo(todo));
  })

  const addTodoNode = document.createElement("button");
  addTodoNode.classList.add("btn-add-todo");
  addTodoNode.textContent = "+ Add todo";
  addTodoNode.style.color = `rgb(${r},${g},${b})`;
  addTodoNode.style.borderColor = `rgb(${r},${g},${b})`;

  todoListNode.appendChild(addTodoNode);

  return projectListItemNode;
}

export default _ContentProjectListItem;