import "./css/sidebar.css";
import userImg from "../assets/sidebar/user-img.avif";
import { app } from "../classes/App";


export const Sidebar = () => {
  const sidebarNode = document.createElement("aside");
  sidebarNode.classList.add("sidebar");
  sidebarNode.innerHTML = `
  <header class="sidebar-header">
    <div class="sidebar-header-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-time-one</title><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.3 13H11V7H12.5V9.7L14 7.1L15.3 7.9L12.3 13Z" />
      </svg>
      <h1>TaskMaster</h1>
    </div>
  </header>
  <section class="sidebar-projects">
    <button id="btn-add-project" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg> Add Project</button>
    <ul class="project-list">
      <li class="project-item">
        <button class="high" type="button" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>folder</title><path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg> Project 1 Of the World that is in it and that is in that</button>
      </li>
      <li class="project-item">
        <button class="active medium" type="button" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>folder</title><path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg> Project 2</button>
      </li>
      <li class="project-item">
        <button class="low" type="button" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>folder</title><path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg> Project 3</button>
      </li>
      
    </ul>
  </section>
  <footer class="sidebar-user">
    <div class="user-container">
      <div class="user-img-container"><img src=${userImg}></div>
      <span class="user-name">AJ Tan</span>
    </div>
  </footer>`;
  app.appendContent(sidebarNode);
};