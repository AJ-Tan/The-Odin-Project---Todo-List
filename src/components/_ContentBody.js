import "./css/contentBody.css";

export const _ContentBody = (() => {
  const contentBodyNode = document.createElement("section");
  contentBodyNode.classList.add("content-body");
  contentBodyNode.innerHTML = `
  <div class="content-body-container">
    
  </div>`
  return contentBodyNode;
})();