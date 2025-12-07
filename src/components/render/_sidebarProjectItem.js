const _sidebarProjectItem = ({projectID, projectName, projectPriority}) => {
  const projectItemNode = document.createElement("li");
  projectItemNode.classList.add("project-item");

  const projectButtonNode = document.createElement("button");
  projectButtonNode.setAttribute("type", "button");
  projectButtonNode.dataset["id"] = projectID;
  projectButtonNode.classList.add(projectPriority);
  projectButtonNode.textContent = projectName;
  projectItemNode.appendChild(projectButtonNode);
  
  const folderSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>folder</title><path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg>`, "image/svg+xml")
    .documentElement;
  projectButtonNode.prepend(folderSVG);

  return projectItemNode;
}

export default _sidebarProjectItem;