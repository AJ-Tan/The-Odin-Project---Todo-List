import { format } from "date-fns";
import { todoData } from "../../../classes/TodoData";
import renderContentBody from "../../render/content/renderContentBody";

const EditTodo = (todoObject) => {
  const {todoTitle, todoPriority, todoDeadline, todoStatus, todoDescription} = todoObject;
  const modalNode = document.getElementById("modal");

  const modalFormNode = document.createElement("form");
  modalFormNode.classList.add("modal-form");
  modalNode.replaceChildren(modalFormNode);

  const modalHeaderContainerNode = document.createElement("header");
  modalHeaderContainerNode.classList.add("modal-header__container");
  modalFormNode.appendChild(modalHeaderContainerNode);

  // Modal Title =====================================================
  const modalTitleNode = document.createElement("h2");
  modalTitleNode.id = "modal-header__title";
  modalTitleNode.textContent = "Todo Details";
  modalHeaderContainerNode.appendChild(modalTitleNode);

  // Modal Close =====================================================
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

  // Todo Title ========================================================
  const todoTitleFormGroup = document.createElement("div");
  todoTitleFormGroup.classList.add("form-group");
  modalInputContainerNode.appendChild(todoTitleFormGroup);

  const todoTitleLabel = document.createElement("label");
  todoTitleLabel.setAttribute("for", "todo-title");
  todoTitleLabel.textContent = "Todo Title *";
  todoTitleFormGroup.appendChild(todoTitleLabel);

  const todoTitleInput = document.createElement("input");
  todoTitleInput.id = "todo-title";
  todoTitleInput.name = "todoTitle";
  todoTitleInput.classList.add("form-input", "text");
  todoTitleInput.maxLength = 30;
  todoTitleInput.required = true;
  todoTitleInput.value = todoTitle;
  todoTitleFormGroup.appendChild(todoTitleInput);

  // Todo Priority =======================================================
  const todoPriorityFormGroup = document.createElement("div");
  todoPriorityFormGroup.classList.add("form-group");
  modalInputContainerNode.appendChild(todoPriorityFormGroup);

  const todoPriorityLabel = document.createElement("label");
  todoPriorityLabel.setAttribute("for", "todo-priority");
  todoPriorityLabel.textContent = "Todo Priority *";
  todoPriorityFormGroup.appendChild(todoPriorityLabel);

  const todoPriorityInput = document.createElement("select");
  todoPriorityInput.id = "todo-priority";
  todoPriorityInput.name = "todoPriority";
  todoPriorityInput.classList.add("form-input", "select");
  todoPriorityInput.required = true;
  todoPriorityFormGroup.appendChild(todoPriorityInput);

  const priorityOptions = {};
  priorityOptions.high = document.createElement("option");
  priorityOptions.high.value = "high";
  priorityOptions.high.textContent = "High";
  todoPriorityInput.appendChild(priorityOptions.high);

  priorityOptions.medium = document.createElement("option");
  priorityOptions.medium.value = "medium";
  priorityOptions.medium.textContent = "Medium";
  todoPriorityInput.appendChild(priorityOptions.medium);

  priorityOptions.low = document.createElement("option");
  priorityOptions.low.value = "low";
  priorityOptions.low.textContent = "Low";
  todoPriorityInput.appendChild(priorityOptions.low);
  priorityOptions[todoPriority].selected = true;

  // Todo Form Row for deadline and status ================================
  const formGroupRowNode = document.createElement("div");
  formGroupRowNode.classList.add("form-group-row");
  modalInputContainerNode.appendChild(formGroupRowNode);

  // Todo Deadline ========================================================
  const todoDeadlineFormGroup = document.createElement("div");
  todoDeadlineFormGroup.classList.add("form-group");
  formGroupRowNode.appendChild(todoDeadlineFormGroup);

  const todoDeadlineLabel = document.createElement("label");
  todoDeadlineLabel.setAttribute("for", "todo-deadline");
  todoDeadlineLabel.textContent = "Todo Deadline *";
  todoDeadlineFormGroup.appendChild(todoDeadlineLabel);

  const todoDeadlineInput = document.createElement("input");
  todoDeadlineInput.setAttribute("type", "date");
  todoDeadlineInput.id = "todo-deadline";
  todoDeadlineInput.name = "todoDeadline";
  todoDeadlineInput.classList.add("form-input", "date");
  todoDeadlineInput.value = format(new Date(todoDeadline), "yyyy-MM-dd");
  todoDeadlineInput.required = true;
  todoDeadlineFormGroup.appendChild(todoDeadlineInput);

  // Todo Status ====================================
  const todoStatusFormGroup = document.createElement("div");
  todoStatusFormGroup.classList.add("form-group");
  formGroupRowNode.appendChild(todoStatusFormGroup);

  const todoStatusLabel = document.createElement("label");
  todoStatusLabel.setAttribute("for", "todo-status");
  todoStatusLabel.textContent = "Todo Status *";
  todoStatusFormGroup.appendChild(todoStatusLabel);

  const todoStatusInput = document.createElement("select");
  todoStatusInput.id = "todo-status";
  todoStatusInput.name = "todoStatus";
  todoStatusInput.classList.add("form-input", "select");
  todoStatusInput.required = true;
  todoStatusFormGroup.appendChild(todoStatusInput);

  const statusOptions = {};
  statusOptions.ongoing = document.createElement("option");
  statusOptions.ongoing.value = "ongoing";
  statusOptions.ongoing.textContent = "Ongoing";
  todoStatusInput.appendChild(statusOptions.ongoing);

  statusOptions.completed = document.createElement("option");
  statusOptions.completed.value = "completed";
  statusOptions.completed.textContent = "Completed";
  todoStatusInput.appendChild(statusOptions.completed);

  statusOptions.cancelled = document.createElement("option");
  statusOptions.cancelled.value = "cancelled";
  statusOptions.cancelled.textContent = "Cancelled";
  todoStatusInput.appendChild(statusOptions.cancelled);
  statusOptions[todoStatus].selected = true;

  // Project Description =====================================

  const todoDescriptionFormGroup = document.createElement("div");
  todoDescriptionFormGroup.classList.add("form-group");
  modalInputContainerNode.appendChild(todoDescriptionFormGroup);

  const todoDescriptionLabel = document.createElement("label");
  todoDescriptionLabel.setAttribute("for", "todo-description");
  todoDescriptionLabel.textContent = "Todo Description";
  todoDescriptionFormGroup.appendChild(todoDescriptionLabel);

  const todoDescriptionInput = document.createElement("textarea");
  todoDescriptionInput.id = "todo-description";
  todoDescriptionInput.name = "todoDescription";
  todoDescriptionInput.classList.add("form-input", "description");
  todoDescriptionInput.setAttribute("rows", "4");
  todoDescriptionInput.value = todoDescription;
  todoDescriptionFormGroup.appendChild(todoDescriptionInput);

  // Project Submit ===========================================

  const projectSubmit = document.createElement("button");
  projectSubmit.classList.add("form-button", "submit");
  projectSubmit.setAttribute("type", "submit");
  projectSubmit.textContent = "Update";
  modalInputContainerNode.appendChild(projectSubmit);

  modalFormNode.addEventListener("submit", e => {
    e.preventDefault();
    const {todoTitle, todoPriority, todoDeadline, todoDescription, todoStatus} = Object.fromEntries(new FormData(modalFormNode));

    const todo = {
      todoTitle,
      todoDeadline: format(new Date(todoDeadline), "MMM dd, yyyy"),
      todoDescription,
      todoPriority,
      todoStatus
    }

    todoData.updateTodo(todoObject, todo);
    renderContentBody();
    modalNode.close();
  })

  modalNode.showModal();
}

export default EditTodo;