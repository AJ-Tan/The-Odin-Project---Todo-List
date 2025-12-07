import "./css/contentBody.css";

export const _ContentBody = (ContentNode) => {
  const contentBodyNode = document.createElement("section");
  contentBodyNode.classList.add("content-body");
  contentBodyNode.innerHTML = `
  <div class="content-body-container">
    
  </div>`
  ContentNode.appendChild(contentBodyNode);
};