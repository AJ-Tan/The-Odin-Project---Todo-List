import { todoData } from "../../Data/todoData";
import { pubsub } from "../../classes/PubSub";

const eventsSidebar = () => {
  const projectButtons = document.querySelectorAll(".project-item button");

  projectButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const updatedProjectButton = document.querySelectorAll(".project-item button");

      updatedProjectButton.forEach(btn => {
        btn.classList.remove("active");
      })

      e.currentTarget.classList.add("active");
      pubsub.publish("activeProject", todoData.find(data => data.projectID === e.currentTarget.dataset.id));
    })
  })
}

export default eventsSidebar;