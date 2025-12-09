import { todoData } from "../../../classes/TodoData";
import _ProjectItem from "./_ProjectItem";

const renderSidebarProjects = () => {
  const projectListNode = document.querySelector(".project-list");
  const projectItems = document.createDocumentFragment();
  todoData.getData.forEach(data => {
    projectItems.appendChild(_ProjectItem(data));
  })

  projectListNode.replaceChildren(projectItems);
}

export default renderSidebarProjects;