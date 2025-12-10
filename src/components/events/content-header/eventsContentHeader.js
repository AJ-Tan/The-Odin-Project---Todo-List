import { todoData } from "../../../classes/TodoData";
import { addDays, subDays, format } from "date-fns";
import { pubsub } from "../../../classes/PubSub";
import "./subContentHeader";

const eventsContentHeader = () => {
  const dateSelect = document.getElementById("date-select");

  const dateDisplay = document.getElementById("date-display");
  dateSelect.addEventListener("click", () => {
    dateSelect.showPicker();
  });

  dateSelect.addEventListener("change", () => {
    const date = new Date(dateSelect.value);
    pubsub.publish("changeHeaderDate", date);
  });

  const dateDecrease = document.getElementById("date-decrease");
  const dateIncrease = document.getElementById("date-increase");

  dateDecrease.addEventListener("click", () => {
    const date = subDays(new Date(dateSelect.value), 1);
    
    pubsub.publish("changeHeaderDate", date);
  })

  dateIncrease.addEventListener("click", () => {
    const date = addDays(new Date(dateSelect.value), 1);
    pubsub.publish("changeHeaderDate", date);
  })
}

export default eventsContentHeader;