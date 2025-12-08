import { todoData } from "../../../classes/TodoData";
import _sidebarProjectItem from "./_sidebarProjectItem";

const renderSidebarProjects = () => {
  const projectListNode = document.querySelector(".project-list");
  const projectItems = document.createDocumentFragment();
  todoData.getData.forEach(data => {
    projectItems.appendChild(_sidebarProjectItem(data));
  })

  projectListNode.replaceChildren(projectItems);
}

export default renderSidebarProjects;