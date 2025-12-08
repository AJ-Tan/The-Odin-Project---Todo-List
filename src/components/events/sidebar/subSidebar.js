import { pubsub } from "../../../classes/PubSub"
import { todoData } from "../../../classes/TodoData";


pubsub.subscribe("activeProject", () => {
  const updatedProjectButton = document.querySelectorAll(".project-item");
  updatedProjectButton.forEach(btn => {
    btn.classList.remove("active");
    
    if(btn.dataset.id === todoData.currentProject.projectID) {
      btn.classList.add("active");
    }
  })
})