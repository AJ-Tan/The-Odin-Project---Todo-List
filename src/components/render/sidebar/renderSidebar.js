import { todoData } from "../../../classes/TodoData";
import eventsSidebar from "../../events/sidebar/eventsSidebar";
import _ProjectItem from "./_ProjectItem";

const renderSidebarProjects = () => {
  const projectListNode = document.querySelector(".project-list");
  const projectItems = document.createDocumentFragment();
  todoData.getData.forEach(data => {
    projectItems.appendChild(_ProjectItem(data));
  })

  projectListNode.replaceChildren(projectItems);
  eventsSidebar();
}

export default renderSidebarProjects;