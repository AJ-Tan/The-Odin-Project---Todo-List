import { todoData } from "../../../classes/TodoData";
import renderContentBody from "../../render/content/renderContentBody";
import convert from "color-convert";

const EditProjectList = (projectListObject) => {
  const {projectListName, theme: {r,g,b}} = projectListObject;
  const modalNode = document.getElementById("modal");

  const modalFormNode = document.createElement("form");
  modalFormNode.classList.add("modal-form");
  modalNode.replaceChildren(modalFormNode);

  const modalHeaderContainerNode = document.createElement("header");
  modalHeaderContainerNode.classList.add("modal-header__container");
  modalFormNode.appendChild(modalHeaderContainerNode);

  const modalTitleNode = document.createElement("h2");
  modalTitleNode.id = "modal-header__title";
  modalTitleNode.textContent = "Edit Project List";
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

  // Project List ========================================

  const projectListFormGroup = document.createElement("div");
  projectListFormGroup.classList.add("form-group");
  modalInputContainerNode.appendChild(projectListFormGroup);

  const projectListLabel = document.createElement("label");
  projectListLabel.setAttribute("for", "project-list");
  projectListLabel.textContent = "Project List *";
  projectListFormGroup.appendChild(projectListLabel);

  const projectListInput = document.createElement("input");
  projectListInput.id = "project-list";
  projectListInput.name = "projectList";
  projectListInput.classList.add("form-input", "text");
  projectListInput.value = projectListName;
  projectListInput.maxLength = 20;
  projectListInput.required = true;
  projectListFormGroup.appendChild(projectListInput);

  // List Theme ====================================
  
  const listThemeFormGroup = document.createElement("div");
  listThemeFormGroup.classList.add("form-group", "theme");
  modalInputContainerNode.appendChild(listThemeFormGroup);

  const listThemeLabel = document.createElement("label");
  listThemeLabel.setAttribute("for", "list-theme");
  listThemeLabel.textContent = "Theme: ";
  listThemeFormGroup.appendChild(listThemeLabel);

  const listThemeInput = document.createElement("input");
  listThemeInput.setAttribute("type", "color");
  listThemeInput.id = "list-theme";
  listThemeInput.name = "listTheme";
  listThemeInput.classList.add("form-input", "color");
  listThemeInput.value = `#${convert.rgb.hex([r,g,b])}`;
  listThemeInput.required = true;
  listThemeFormGroup.appendChild(listThemeInput);

  // Project Submit ===========================================

  const projectSubmit = document.createElement("button");
  projectSubmit.classList.add("form-button", "submit");
  projectSubmit.setAttribute("type", "submit");
  projectSubmit.textContent = "Update";
  modalInputContainerNode.appendChild(projectSubmit);

  modalFormNode.addEventListener("submit", e => {
    e.preventDefault();
    const {projectList, listTheme} = Object.fromEntries(new FormData(modalFormNode));
    const rgbColor = {
      r: parseInt(listTheme.slice(1).slice(0,2), 16),
      g: parseInt(listTheme.slice(1).slice(2,4), 16),
      b: parseInt(listTheme.slice(1).slice(4,6), 16)
    }
    
    todoData.updateList(projectListObject, {
      projectListName: projectList,
      theme: rgbColor,
    });

    renderContentBody();
    modalNode.close();
  })

  modalNode.showModal();
}

export default EditProjectList;