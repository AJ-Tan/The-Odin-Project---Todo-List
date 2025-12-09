import { isDate, format } from "date-fns";
import { pubsub } from "../../../classes/PubSub";
import { ErrorLogger } from "../../../classes/ErrorLogger";
import renderContentBody from "../../render/content/renderContentBody";

pubsub.subscribe("changeHeaderDate", (date) => {
  if(!isDate(date)) {
    ErrorLogger.throwError(`${date} is not a valid date`);
    return;
  };
  const dateDisplay = document.getElementById("date-display");

  dateDisplay.textContent = format(date, "MMM dd, yyyy");
})

pubsub.subscribe("activeProject", ({projectName}) => {
  const headerTitleNode = document.querySelector(".header-title");
  headerTitleNode.textContent = projectName;
})

pubsub.subscribe("activeProject", () => {
  renderContentBody();
})