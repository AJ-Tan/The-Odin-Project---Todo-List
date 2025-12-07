import { isDate, format } from "date-fns";
import { pubsub } from "../../../classes/PubSub";
import { ErrorLogger } from "../../../classes/ErrorLogger";

pubsub.subscribe("changeHeaderDate", (date) => {
  if(!isDate(date)) {
    ErrorLogger.throwError(`${date} is not a valid date`);
    return;
  };
  const dateDisplay = document.getElementById("date-display");

  dateDisplay.textContent = format(date, "MMM dd, yyyy");
})