import { todoData } from "../../Data/todoData";
import _sidebarProjectItem from "./_sidebarProjectItem";

const renderSidebarProjects = () => {
  const projectListNode = document.querySelector(".project-list");

  const projectItems = document.createDocumentFragment();
  todoData.forEach(data => {
    projectItems.appendChild(_sidebarProjectItem(data));
  })

  projectListNode.replaceChildren(projectItems);
}

export default renderSidebarProjects;