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

  saveLocalStorage() {
    localStorage.setItem("todoData", JSON.stringify(this.#data));
  }

  addProject(projectData) {
    this.#data.push(projectData);
    this.#currentProject = this.#data[this.#data.length - 1];
    this.saveLocalStorage();
  }

  updateProject(projectObject, {projectName, projectPriority, projectDescription}) {
    projectObject.projectName = projectName;
    projectObject.projectPriority = projectPriority;
    projectObject.projectDescription = projectDescription;
    this.saveLocalStorage();
  }

  deleteProject(projectID) {
    const getIndex = this.#data.findIndex(data => data.projectID === projectID);
    if(getIndex < 0) return;

    this.#data.splice(getIndex, 1);
    this.#currentProject = this.#data[0];
    this.saveLocalStorage();
  }

  addList(projectObject, listData) {
    if(!projectObject.projectList) {
      projectObject.projectList = [];
    }
    projectObject.projectList.push(listData);
    this.saveLocalStorage();
  }

  updateList(projectListObject, {projectListName, theme}) {
    projectListObject.projectListName = projectListName;
    projectListObject.theme = theme;
    this.saveLocalStorage();
  }

  deleteList(projectObject, projectListID) {
    const getIndex = projectObject.projectList.findIndex(item => item.projectListID === projectListID);
    if(getIndex < 0) return;
    projectObject.projectList.splice(getIndex, 1);
    this.saveLocalStorage();
  }

  addTodo(projectListObject, todoData) {
    if(!projectListObject.todoList) {
      projectListObject.todoList = [];
    }
    projectListObject.todoList.push(todoData);
    this.saveLocalStorage();
  }

  updateTodo(todoObject, {todoTitle, todoPriority, todoDeadline, todoStatus, todoDescription}) {
    todoObject.todoTitle = todoTitle;
    todoObject.todoPriority = todoPriority;
    todoObject.todoDeadline = todoDeadline;
    todoObject.todoStatus = todoStatus;
    todoObject.todoDescription = todoDescription;
    this.saveLocalStorage();
  }

  deleteTodo(todoListObject, todoID) {
    const getIndex = todoListObject.findIndex(todo => todo.todoID === todoID);
    if(getIndex < 0) return;
    todoListObject.splice(getIndex, 1);
    this.saveLocalStorage();
  }
}

export const todoData = new TodoData(todoDataAPI);