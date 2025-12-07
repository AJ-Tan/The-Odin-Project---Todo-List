import "./css/contentSection.css";
import { _ContentHeader } from "./_ContentHeader";
import { _ContentBody } from "./_ContentBody";
import { app } from "../classes/App";

export const ContentSection = () => {
  const contentNode = document.createElement("section");
  contentNode.classList.add("content");
  contentNode.appendChild(_ContentHeader);
  contentNode.appendChild(_ContentBody);
  app.appendContent(contentNode);

  const dateSelect = document.getElementById("date-select");
  const dateDisplay = document.getElementById("date-display");
  dateSelect.addEventListener("click", () => {
    dateSelect.showPicker();
  });

  dateSelect.addEventListener("change", () => {
    const date = new Date(dateSelect.value);
    dateDisplay.textContent = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });
};