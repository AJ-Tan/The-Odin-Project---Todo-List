import { todoDataAPI } from "../Data/todoData";

class TodoData {
  #data = [];
  #currentProject = {};
  constructor(data) {
    if(Array.isArray(data)) {
      this.#data = data;
      this.#currentProject = data[0];
    }
  }

  get getData() {
    return [...this.#data];
  }

  get currentProject() {
    return this.#currentProject;
  }

  set currentProject(projectID) {
    this.#currentProject = this.#data.find((data) => data.projectID === projectID);
  }
}

export const todoData = new TodoData(todoDataAPI);