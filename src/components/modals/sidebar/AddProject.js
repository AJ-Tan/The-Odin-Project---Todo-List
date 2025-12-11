import { pubsub } from "../../../classes/PubSub";
import { todoData } from "../../../classes/TodoData";

const AddProject = () => {
  const modalNode = document.getElementById("modal");

  const modalFormNode = document.createElement("form");
  modalFormNode.classList.add("modal-form");
  modalNode.appendChild(modalFormNode);

  const modalHeaderContainerNode = document.createElement("header");
  modalHeaderContainerNode.classList.add("modal-header__container");
  modalFormNode.appendChild(modalHeaderContainerNode);

  const modalTitleNode = document.createElement("h2");
  modalTitleNode.id = "modal-header__title";
  modalTitleNode.textContent = "Add Project";
  modalHeaderContainerNode.appendChild(modalTitleNode);

  const modalCloseNode = document.createElement("button");
  modalCloseNode.setAttribute("type", "button");
  modalCloseNode.classList.add("modal-close");
  modalCloseNode.addEventListener("click", () => {
    modalNode.close();
  })
  modalHeaderContainerNode.appendChild(modalCloseNode);

  const closeSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`,"image/svg+xml").documentElement;
  modalCloseNode.appendChild(closeSVG);

  const modalInputContainerNode = document.createElement("div");
  modalInputContainerNode.classList.add("modal-input-container");
  modalFormNode.appendChild(modalInputContainerNode);

  // Project Name ========================================

  const projectNameFormGroup = document.createElement("div");
  projectNameFormGroup.classList.add("form-group");
  modalInputContainerNode.appendChild(projectNameFormGroup);

  const projectNameLabel = document.createElement("label");
  projectNameLabel.setAttribute("for", "project-name");
  projectNameLabel.textContent = "Project Name *";
  projectNameFormGroup.appendChild(projectNameLabel);

  const projectNameInput = document.createElement("input");
  projectNameInput.id = "project-name";
  projectNameInput.name = "projectName";
  projectNameInput.classList.add("form-input", "text");
  projectNameInput.maxLength = 25;
  projectNameInput.required = true;
  projectNameFormGroup.appendChild(projectNameInput);

  const projectNameError = document.createElement("span");
  projectNameError.classList.add("form-input__error");
  projectNameFormGroup.appendChild(projectNameError);

  // Project Priority ====================================
  const projectPriorityFormGroup = document.createElement("div");
  projectPriorityFormGroup.classList.add("form-group");
  modalInputContainerNode.appendChild(projectPriorityFormGroup);

  const projectPriorityLabel = document.createElement("label");
  projectPriorityLabel.setAttribute("for", "project-priority");
  projectPriorityLabel.textContent = "Project Priority *";
  projectPriorityFormGroup.appendChild(projectPriorityLabel);

  const projectPriorityInput = document.createElement("select");
  projectPriorityInput.id = "project-priority";
  projectPriorityInput.name = "projectPriority";
  projectPriorityInput.classList.add("form-input", "select");
  projectPriorityInput.required = true;
  projectPriorityFormGroup.appendChild(projectPriorityInput);

  const priorityOptions = {};
  priorityOptions.high = document.createElement("option");
  priorityOptions.high.value = "high";
  priorityOptions.high.textContent = "High";
  projectPriorityInput.appendChild(priorityOptions.high);

  priorityOptions.medium = document.createElement("option");
  priorityOptions.medium.value = "medium";
  priorityOptions.medium.textContent = "Medium";
  projectPriorityInput.appendChild(priorityOptions.medium);

  priorityOptions.low = document.createElement("option");
  priorityOptions.low.value = "low";
  priorityOptions.low.textContent = "Low";
  projectPriorityInput.appendChild(priorityOptions.low);
  priorityOptions.medium.selected = true;

  // Project Description =====================================

  const projectDescriptionFormGroup = document.createElement("div");
  projectDescriptionFormGroup.classList.add("form-group");
  modalInputContainerNode.appendChild(projectDescriptionFormGroup);

  const projectDescriptionLabel = document.createElement("label");
  projectDescriptionLabel.setAttribute("for", "project-name");
  projectDescriptionLabel.textContent = "Project Description";
  projectDescriptionFormGroup.appendChild(projectDescriptionLabel);

  const projectDescriptionInput = document.createElement("textarea");
  projectDescriptionInput.id = "project-description";
  projectDescriptionInput.name = "projectDescription";
  projectDescriptionInput.classList.add("form-input", "description");
  projectDescriptionInput.setAttribute("rows", "4");
  projectDescriptionFormGroup.appendChild(projectDescriptionInput);

  // Project Submit ===========================================

  const projectSubmit = document.createElement("button");
  projectSubmit.classList.add("form-button", "submit");
  projectSubmit.setAttribute("type", "submit");
  projectSubmit.textContent = "Add project";
  modalInputContainerNode.appendChild(projectSubmit);

  modalFormNode.addEventListener("submit", e => {
    e.preventDefault();
    const {projectName, projectDescription, projectPriority} = Object.fromEntries(new FormData(modalFormNode));

    const projectData = {
      projectID: crypto.randomUUID(),
      projectName,
      projectDescription,
      projectPriority
    }

    todoData.addProject(projectData);
    pubsub.publish("renderProjects", null);
    pubsub.publish("activeProject", todoData.currentProject);
    modal.close();
  })

  modalNode.showModal();
}

export default AddProject;