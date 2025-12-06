import "./css/sidebar.css";

export const Sidebar = (() => {
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
    <button id="btn-add-project" type="button"><span>X</span> Add Project</button>
    <ul class="project-list">
      <li class="project-item">
        <button type="button"><span>X</span> Project 1</button>
      </li>
      <li class="project-item">
        <button type="button"><span>X</span> Project 2</button>
      </li>
      <li class="project-item">
        <button type="button"><span>X</span> Project 3</button>
      </li>
    </ul>
  </section>
  <footer class="sidebar-user">
    <div class="user-container">
      <div id="user-img-container">X</div>
      <span id="user-name">AJ Tan</span>
    </div>
  </footer>`;
  return sidebarNode;
})();