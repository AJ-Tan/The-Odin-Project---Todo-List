export const sample = [
  {
    projID: "1p",
    projectName: "Project 1",
    projectDescription: "This is a sample description",
    projectPriority: "high",
    projectList: [
      {
        projectListID: "1pl",
        projectListName: "List 1",
        theme: {
          r: "255",
          g: "0",
          b: "0"
        },
        todoList: [
          {
            todoID: "1td",
            todoTitle: "Project 1 Todo 1",
            todoDescription: "Sample Description Project 1 Todo 1",
            todoDeadline: "Dec 9, 2025"
          },
          {
            todoID: "2td",
            todoTitle: "Project 1 Todo 2",
            todoDescription: "Sample Description Project 1 Todo 2",
            todoDeadline: "Dec 10, 2025"
          }
        ]
      },
      {
        projectListID: "2pl",
        projectListName: "List 2",
        theme: {
          r: "0",
          g: "255",
          b: "0"
        },
        todoList: [
          {
            todoID: "3td",
            todoTitle: "Project 1 Todo 3",
            todoDescription: "Sample Description Project 1 Todo 3",
            todoDeadline: "Dec 11, 2025"
          }
        ]
      }
    ]
  },
  {
    projID: "2p",
    projectName: "Project 2",
    projectDescription: "This is a sample description",
    projectPriority: "medium",
    projectList: [
      {
        projectListID: "3pl",
        projectListName: "List 3",
        theme: {
          r: "0",
          g: "0",
          b: "255"
        },
        todoList: [
          {
            todoID: "4td",
            todoTitle: "Project 2 Todo 1",
            todoDescription: "Sample Description Project 2 Todo 1",
            todoDeadline: "Dec 12, 2025"
          },
          {
            todoID: "5td",
            todoTitle: "Project 2 Todo 2",
            todoDescription: "Sample Description Project 2 Todo 2",
            todoDeadline: "Dec 13, 2025"
          }
        ]
      }
    ]
  }
]