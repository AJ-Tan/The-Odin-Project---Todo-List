const Modal = () => {
  const modalNode = document.getElementById("modal");

  const modalFormNode = document.createElement("form");
  modalFormNode.classList.add("modal-form");
  modalNode.appendChild(modalFormNode);

  const modalHeaderContainerNode = document.createElement("header");
  modalHeaderContainerNode.classList.add("modal-header__container");
  modalNode.appendChild(modalHeaderContainerNode);

  const modalTitleNode = document.createElement("h2");
  modalTitleNode.classList.add("modal-header__title");
  modalTitleNode.textContent = "Add Project";
  modalHeaderContainerNode.appendChild(modalTitleNode);

  const closeSVG = new DOMParser()
    .parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`,"image/svg+xml").documentElement;
  modalHeaderContainerNode.appendChild(closeSVG);

  modalFormNode.addEventListener("submit", e => {
    e.preventDefault();
  })
  
  modalNode.showModal();
}