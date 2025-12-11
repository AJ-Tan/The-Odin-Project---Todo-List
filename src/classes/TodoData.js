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

  setCurrentProject(projectID) {
    this.#currentProject = this.#data.find((data) => data.projectID === projectID);
  }

  addProject(projectData) {
    this.#data.push(projectData);
    this.#currentProject = this.#data[this.#data.length - 1];
  }

  updateProject(projectObject, {projectName, projectPriority, projectDescription}) {
    projectObject.projectName = projectName;
    projectObject.projectPriority = projectPriority;
    projectObject.projectDescription = projectDescription;
  }

  deleteProject(projectID) {
    const getIndex = this.#data.findIndex(data => data.projectID === projectID);
    if(getIndex < 0) return;

    this.#data.splice(getIndex, 1);
    this.#currentProject = this.#data[0];
  }

  addList(projectObject, listData) {
    if(!projectObject.projectList) {
      projectObject.projectList = [];
    }
    projectObject.projectList.push(listData);
  }

  updateList(projectListObject, {projectListName, theme}) {
    projectListObject.projectListName = projectListName;
    projectListObject.theme = theme;
  }

  deleteList(projectObject, projectListID) {
    const getIndex = projectObject.projectList.findIndex(item => item.projectListID === projectListID);
    if(getIndex < 0) return;
    projectObject.projectList.splice(getIndex, 1);
  }
}

export const todoData = new TodoData(todoDataAPI);