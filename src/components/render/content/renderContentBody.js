import _ContentProjectList from "./_ContentProjectList";

const renderContentBody = () => {
  const contentBodyContainerNode = document.querySelector(".content-body-container");
  contentBodyContainerNode.replaceChildren(_ContentProjectList());
}

export default renderContentBody;