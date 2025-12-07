class App {
  constructor() {
    this.appNode = document.getElementById("app");
  }

  appendContent(node) {
    this.appNode.appendChild(node);
  }
}

export const app = new App();