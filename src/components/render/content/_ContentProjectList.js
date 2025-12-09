import { todoData } from "../../../classes/TodoData";
import _ContentProjectListItem from "./_ContentProjectListItem";

const _ContentProjectList = () => {
  const projectListNode = document.createElement("ul");
  projectListNode.classList.add("content-project-list");
  
  todoData.currentProject?.
    projectList?.forEach(projectListData => {
      projectListNode.appendChild(_ContentProjectListItem(projectListData));
    })

  return projectListNode;
}

export default _ContentProjectList;