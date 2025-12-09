import { todoData } from "../../../classes/TodoData";
import { pubsub } from "../../../classes/PubSub";
import "./subSidebar";


const eventsSidebar = () => {
  const projectButtons = document.querySelectorAll(".project-item-button");
  projectButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const selectedProjectID = e.currentTarget.parentNode.dataset.id;

      todoData.currentProject = selectedProjectID;
      pubsub.publish("activeProject", todoData.currentProject);
    })
  })

  const optionsOverlayNode = document.querySelectorAll(".options-overlay");
  optionsOverlayNode.forEach(overlay => {
    overlay.addEventListener("mouseleave", () => {
    overlay.classList.remove("active");
  })
  })

  const displayOptionNode = document.querySelectorAll(".display-option");
  displayOptionNode.forEach(displayBtn => {
    displayBtn.addEventListener("click", (e) => {
      e.currentTarget.parentNode.nextElementSibling.classList.add("active");
    })
  })
}

export default eventsSidebar;