import _ProjectItemOptions from "./_ProjectItemOptions";

const _ProjectItem = ({projectID, projectName, projectPriority}) => {
  // Project - List Item ====================================================
  const projectItemNode = document.createElement("li");
  projectItemNode.dataset["id"] = projectID;
  projectItemNode.classList.add("project-item", projectPriority);

  // Project - Button =======================================================
  const projectButtonNode = document.createElement("button");
  projectButtonNode.setAttribute("type", "button");
  projectButtonNode.classList.add("project-item-button", "btn-project");
  projectItemNode.appendChild(projectButtonNode);

  // Project - Text =========================================================
  const buttonTextNode = document.createElement("span");
  buttonTextNode.textContent = projectName;
  projectButtonNode.appendChild(buttonTextNode);
  
  // Project - Icon =========================================================
  const folderSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>${projectPriority[0].toUpperCase() + projectPriority.slice(1)} priority</title><path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg>`, "image/svg+xml")
    .documentElement;
  projectButtonNode.prepend(folderSVG);
  
  // Project - Option Button ================================================
  const optionsButtonNode = document.createElement("button");
  optionsButtonNode.classList.add("display-option");
  projectButtonNode.appendChild(optionsButtonNode);

  // Project - Option Icon ==================================================
  const horizontalDotsSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Options</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>`, "image/svg+xml")
    .documentElement;
  optionsButtonNode.appendChild(horizontalDotsSVG);

  projectItemNode.appendChild(_ProjectItemOptions());

  return projectItemNode;
}

export default _ProjectItem;