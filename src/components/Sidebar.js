import "./css/sidebar.css";
import userImg from "../assets/sidebar/user-img.avif";
import { app } from "../classes/App";
import renderSidebarProjects from "./render/sidebar/renderSidebar";
import eventsSidebar from "./events/sidebar/eventsSidebar";



export const Sidebar = () => {
  const sidebarNode = document.createElement("aside");
  sidebarNode.classList.add("sidebar");
  sidebarNode.innerHTML = `
  <header class="sidebar-header">
    <div class="sidebar-header-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Taskmaster</title><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.3 13H11V7H12.5V9.7L14 7.1L15.3 7.9L12.3 13Z" />
      </svg>
      <h1>Todo List</h1>
    </div>
  </header>
  <section class="sidebar-projects">
    <button id="btn-add-project" class="btn-project" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg> Add Project</button>
    <ul class="project-list">
      <!-- Project Items Here -->
    </ul>
  </section>
  <footer class="sidebar-user">
    <div class="user-container">
      <div class="user-img-container"><img src=${userImg}></div>
      <span class="user-name">AJ Tan</span>
    </div>
  </footer>`;

  app.appendContent(sidebarNode);
  renderSidebarProjects();
  eventsSidebar();
};