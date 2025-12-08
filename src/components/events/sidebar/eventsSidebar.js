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
}

export default eventsSidebar;