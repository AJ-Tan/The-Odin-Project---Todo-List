import "./css/contentSection.css";
import { _ContentHeader } from "./_ContentHeader";
import { _ContentBody } from "./_ContentBody";
import { app } from "../classes/App";

export const ContentSection = () => {
  const contentNode = document.createElement("section");
  contentNode.classList.add("content");
  app.appendContent(contentNode);

  _ContentHeader(contentNode);
  _ContentBody(contentNode);
};