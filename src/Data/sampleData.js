export const sampleData = [
  {
    projectID: "1p",
    projectName: "Marketing Campaign",
    projectDescription: "Social media and email strategy for upcoming product launch",
    projectPriority: "high",
    projectList: [
      {
        projectListID: "1pl",
        projectListName: "Social Media",
        theme: { r: "200", g: "30", b: "50" },
        todoList: [
          {
            todoID: "1td",
            todoTitle: "Create Ad Copy",
            todoDescription: "Draft Facebook and Instagram promotional captions",
            todoDeadline: "Jan 9, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "2td",
            todoTitle: "Design Banner Assets",
            todoDescription: "Produce hero images and story templates",
            todoDeadline: "Jan 11, 2026",
            todoPriority: "high"
          }
        ]
      },
      {
        projectListID: "2pl",
        projectListName: "Email Advertising",
        theme: { r: "255", g: "140", b: "0" },
        todoList: [
          {
            todoID: "3td",
            todoTitle: "Newsletter Layout",
            todoDescription: "Finalize CTA placement and branding",
            todoDeadline: "Jan 13, 2026",
            todoPriority: "low"
          }
        ]
      }
    ]
  },

  {
    projectID: "2p",
    projectName: "Software Deployment",
    projectDescription: "Coordinate build rollout for production environment",
    projectPriority: "medium",
    projectList: [
      {
        projectListID: "3pl",
        projectListName: "Testing",
        theme: { r: "0", g: "150", b: "180" },
        todoList: [
          {
            todoID: "4td",
            todoTitle: "Regression Test",
            todoDescription: "Run automated regression suite on new build",
            todoDeadline: "Feb 2, 2026",
            todoPriority: "high"
          },
          {
            todoID: "5td",
            todoTitle: "Unit Test Coverage",
            todoDescription: "Increase coverage to 85%",
            todoDeadline: "Feb 4, 2026",
            todoPriority: "medium"
          }
        ]
      },
      {
        projectListID: "4pl",
        projectListName: "Release Coordination",
        theme: { r: "50", g: "50", b: "200" },
        todoList: [
          {
            todoID: "6td",
            todoTitle: "Deployment Checklist",
            todoDescription: "Verify scripts, docker images, fallback plan",
            todoDeadline: "Feb 6, 2026",
            todoPriority: "low"
          }
        ]
      }
    ]
  },

  {
    projectID: "3p",
    projectName: "Office Renovation",
    projectDescription: "Full redesign of workspace for new year expansion",
    projectPriority: "low",
    projectList: [
      {
        projectListID: "5pl",
        projectListName: "Interior Design",
        theme: { r: "120", g: "200", b: "50" },
        todoList: [
          {
            todoID: "7td",
            todoTitle: "Furniture Layout",
            todoDescription: "Optimize seating capacity and team grouping",
            todoDeadline: "Mar 5, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "8td",
            todoTitle: "Color Palette Proposal",
            todoDescription: "Select and finalize color theme",
            todoDeadline: "Mar 8, 2026",
            todoPriority: "low"
          }
        ]
      },
      {
        projectListID: "6pl",
        projectListName: "Contractor Coordination",
        theme: { r: "255", g: "255", b: "0" },
        todoList: [
          {
            todoID: "9td",
            todoTitle: "Finalize Contracts",
            todoDescription: "Negotiate cost and finalize agreement",
            todoDeadline: "Mar 10, 2026",
            todoPriority: "high"
          }
        ]
      }
    ]
  }
]