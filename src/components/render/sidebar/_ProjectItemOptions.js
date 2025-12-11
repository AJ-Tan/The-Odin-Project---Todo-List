import { todoData } from "../../../classes/TodoData";
import { pubsub } from "../../../classes/PubSub";
import EditProject from "../../modals/sidebar/EditProject";
import ViewProject from "../../modals/sidebar/ViewProject";

const _ProjectItemOptions = () => {
  const optionsOverlayNode = document.createElement("div");
  optionsOverlayNode.classList.add("options-overlay");

  // Project Option - View Button ================================================
  const viewButtonNode = document.createElement("button");
  viewButtonNode.setAttribute("type", "button");
  viewButtonNode.classList.add("btn-project-option");
  viewButtonNode.id = "btn-project-view";
  viewButtonNode.addEventListener("click", () => {
    ViewProject();
  })
  optionsOverlayNode.appendChild(viewButtonNode);

  const viewTextNode = document.createElement("span");
  viewTextNode.textContent = "View";
  viewButtonNode.appendChild(viewTextNode);

  const viewSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>View</title><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>`, "image/svg+xml").documentElement;
  viewButtonNode.prepend(viewSVG);

  // Project Option - Edit Button =================================================
  const editButtonNode = document.createElement("button");
  editButtonNode.setAttribute("type", "button");
  editButtonNode.classList.add("btn-project-option");
  editButtonNode.id = "btn-project-edit";
  editButtonNode.addEventListener("click", () => {
    EditProject();
  })
  optionsOverlayNode.appendChild(editButtonNode);

  const editTextNode = document.createElement("span");
  editTextNode.textContent = "Edit";
  editButtonNode.appendChild(editTextNode);

  const editSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit</title><path d="M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35C16.92,9.14 16.92,8.79 16.7,8.58L15.42,7.3C15.21,7.08 14.86,7.08 14.65,7.3L13.65,8.3L15.7,10.35L16.7,9.35M7,14.94V17H9.06L15.12,10.94L13.06,8.88L7,14.94Z" /></svg>`, "image/svg+xml").documentElement;
  editButtonNode.prepend(editSVG);

  // Project Option - Delete Button ==============================================
  const deleteButtonNode = document.createElement("button");
  deleteButtonNode.setAttribute("type", "button");
  deleteButtonNode.classList.add("btn-project-option");
  deleteButtonNode.id = "btn-project-delete";
  deleteButtonNode.addEventListener("click", () => {
    todoData.deleteProject(todoData.currentProject.projectID);
    pubsub.publish("renderProjects", null);
    pubsub.publish("activeProject", todoData.currentProject);
  })
  optionsOverlayNode.appendChild(deleteButtonNode);

  const deleteTextNode = document.createElement("span");
  deleteTextNode.textContent = "Delete";
  deleteButtonNode.appendChild(deleteTextNode);

  const deleteSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`, "image/svg+xml").documentElement;
  deleteButtonNode.prepend(deleteSVG);

  return optionsOverlayNode
}

export default _ProjectItemOptions;