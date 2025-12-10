import { pubsub } from "../../../classes/PubSub";
import renderContentBody from "../../render/content/renderContentBody";

pubsub.subscribe("activeProject", () => {
  renderContentBody();
})