import { Sidebar } from "./Sidebar";
import { ContentSection } from "./ContentSection.js";
import { pubsub } from "../classes/PubSub.js";
import { todoData } from "../classes/TodoData.js";

Sidebar();
ContentSection();

pubsub.publish("activeProject", todoData.currentProject);
pubsub.publish("changeHeaderDate", new Date());