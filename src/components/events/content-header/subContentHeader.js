import { isDate, format } from "date-fns";
import { pubsub } from "../../../classes/PubSub";
import { ErrorLogger } from "../../../classes/ErrorLogger";
import renderContentBody from "../../render/content/renderContentBody";

pubsub.subscribe("changeHeaderDate", (date) => {
  if(!isDate(date)) {
    ErrorLogger.throwError(`${date} is not a valid date`);
    return;
  };
  const dateSelect = document.getElementById("date-select");
  const dateDisplay = document.getElementById("date-display");
  date.setHours(0,0,0,0);
  dateDisplay.textContent = format(date, "MMM dd, yyyy");
  dateSelect.value = format(date, "yyyy-MM-dd");
})

pubsub.subscribe("activeProject", (projectData) => {
  if(!projectData) return;
  const headerTitleNode = document.querySelector(".header-title");
  headerTitleNode.textContent = projectData.projectName;
})