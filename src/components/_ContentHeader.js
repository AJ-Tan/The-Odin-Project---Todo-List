import "./css/contentHeader.css";
import { format } from "date-fns";
import eventsContentHeader from "./events/content-header/eventsContentHeader";

export const _ContentHeader = (ContentNode) => {
  const contentHeaderNode = document.createElement("header");
  contentHeaderNode.classList.add("content-header");
  contentHeaderNode.innerHTML = `
  <div class="content-header-container">
    <h2 class="header-title">...</h2>
    <div class="input-container">
      <div class="header-date-container">
        <button type="button" id="date-decrease">&lt;</button>
        <div class="date-display-container">
          <span id="date-display">${format(new Date(), "MMM dd, yyyy")}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-range</title><path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" /></svg>
          <input type="date" name="dateSelect" id="date-select" />
        </div>
        <button type="button" id="date-increase">&gt;</button>
      </div>
      <button type="button" id="add-list">+ Add list</button>
    </div>
  </div>`
  
  ContentNode.appendChild(contentHeaderNode);
  eventsContentHeader();
};