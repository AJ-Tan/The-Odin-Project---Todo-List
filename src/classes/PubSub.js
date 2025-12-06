import { ErrorLogger } from "./ErrorLogger";

class PubSub {
  constructor() {
    this.events = {}
  }

  subscribe(eventName, callback) {
    if(!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  publish(eventName, data) {
    if(!this.events[eventName]) {
      ErrorLogger.throwError("Event name does not exist");
      return;
    }
    this.events[eventName].forEach(callback => callback(data));
  }
}

export const pubsub = new PubSub();