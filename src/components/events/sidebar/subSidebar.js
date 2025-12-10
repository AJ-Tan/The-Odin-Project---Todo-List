import { pubsub } from "../../../classes/PubSub"


pubsub.subscribe("activeProject", ({projectID}) => {
  const updatedProjectButton = document.querySelectorAll(".project-item");
  updatedProjectButton.forEach(btn => {
    btn.classList.remove("active");
    
    if(btn.dataset.id === projectID) {
      btn.classList.add("active");
    }
  })
})