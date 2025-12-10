import { pubsub } from "../../../classes/PubSub"
import renderSidebarProjects from "../../render/sidebar/renderSidebar";


pubsub.subscribe("activeProject", (projectData) => {
  if(!projectData) return;

  const updatedProjectButton = document.querySelectorAll(".project-item");
  updatedProjectButton.forEach(btn => {
    btn.classList.remove("active");
    if(btn.dataset.id === projectData.projectID) {
      btn.classList.add("active");
    }
  })
})

pubsub.subscribe("renderProjects", () => {
  renderSidebarProjects();
})