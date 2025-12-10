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
        theme: { r: 231, g: 76, b: 60 }, // Red
        todoList: [
          { todoID: "1td", todoTitle: "Create Ad Copy", todoDescription: "Draft Facebook and Instagram promotional captions", todoDeadline: "Dec 9, 2025", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "2td", todoTitle: "Design Banner Assets", todoDescription: "Produce hero images and story templates", todoDeadline: "Jan 11, 2026", todoPriority: "high", todoStatus: "completed" },
          { todoID: "10td", todoTitle: "Schedule Posts", todoDescription: "Prepare posting calendar for all platforms", todoDeadline: "Jan 12, 2026", todoPriority: "low", todoStatus: "cancelled" },
          { todoID: "11td", todoTitle: "Audience Research", todoDescription: "Identify target demographics and behaviors", todoDeadline: "Dec 10, 2025", todoPriority: "medium", todoStatus: "ongoing" }
        ]
      },
      {
        projectListID: "2pl",
        projectListName: "Email Advertising",
        theme: { r: 241, g: 196, b: 15 }, // Yellow
        todoList: [
          { todoID: "3td", todoTitle: "Newsletter Layout", todoDescription: "Finalize CTA placement and branding", todoDeadline: "Jan 13, 2026", todoPriority: "low", todoStatus: "ongoing" },
          { todoID: "12td", todoTitle: "Audience Segmentation", todoDescription: "Group email recipients based on past activity", todoDeadline: "Jan 14, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "13td", todoTitle: "A/B Testing Setup", todoDescription: "Prepare variants for subject lines and CTAs", todoDeadline: "Jan 15, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "14td", todoTitle: "Delivery Window Optimization", todoDescription: "Identify best send times per segment", todoDeadline: "Jan 16, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "15td", todoTitle: "Template Mobile Check", todoDescription: "Verify responsiveness for mobile devices", todoDeadline: "Jan 17, 2026", todoPriority: "low", todoStatus: "ongoing" }
        ]
      },
      {
        projectListID: "7pl",
        projectListName: "Landing Page",
        theme: { r: 46, g: 204, b: 113 }, // Green
        todoList: [
          { todoID: "16td", todoTitle: "Wireframe Draft", todoDescription: "Prepare wireframe for final review", todoDeadline: "Jan 18, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "17td", todoTitle: "Hero Section Copy", todoDescription: "Write compelling headline and subtext", todoDeadline: "Jan 19, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "18td", todoTitle: "CTA Button Styles", todoDescription: "Define shapes, colors, shadows", todoDeadline: "Jan 20, 2026", todoPriority: "low", todoStatus: "ongoing" },
          { todoID: "19td", todoTitle: "Finalize Graphics", todoDescription: "Prepare vector illustrations", todoDeadline: "Jan 21, 2026", todoPriority: "medium", todoStatus: "ongoing" }
        ]
      },
      {
        projectListID: "8pl",
        projectListName: "Analytics",
        theme: { r: 52, g: 152, b: 219 }, // Blue
        todoList: [
          { todoID: "20td", todoTitle: "Setup Tracking Events", todoDescription: "Add click and conversion events", todoDeadline: "Jan 22, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "21td", todoTitle: "Dashboard Layout", todoDescription: "Create realtime monitoring dashboard", todoDeadline: "Jan 23, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "22td", todoTitle: "Traffic Baseline Study", todoDescription: "Analyze current traffic patterns", todoDeadline: "Jan 24, 2026", todoPriority: "low", todoStatus: "ongoing" },
          { todoID: "23td", todoTitle: "UTM Setup", todoDescription: "Add UTMs to all campaign links", todoDeadline: "Jan 25, 2026", todoPriority: "medium", todoStatus: "ongoing" }
        ]
      },
      {
        projectListID: "9pl",
        projectListName: "Content Production",
        theme: { r: 155, g: 89, b: 182 }, // Purple
        todoList: [
          { todoID: "24td", todoTitle: "Storyboard Creation", todoDescription: "Plan short-form video structure", todoDeadline: "Jan 26, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "25td", todoTitle: "Voiceover Recording", todoDescription: "Record narration for campaign ads", todoDeadline: "Jan 27, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "26td", todoTitle: "Script Editing", todoDescription: "Refine lines for clarity and impact", todoDeadline: "Jan 28, 2026", todoPriority: "low", todoStatus: "ongoing" },
          { todoID: "27td", todoTitle: "Thumbnail Drafts", todoDescription: "Produce 3-5 thumbnail variations", todoDeadline: "Jan 29, 2026", todoPriority: "medium", todoStatus: "ongoing" }
        ]
      }
    ]
  },

  // ---------------- SECOND PROJECT ----------------

  {
    projectID: "2p",
    projectName: "Software Deployment",
    projectDescription: "Coordinate build rollout for production environment",
    projectPriority: "medium",
    projectList: [
      {
        projectListID: "3pl",
        projectListName: "Testing",
        theme: { r: 41, g: 128, b: 185 }, // Deep blue
        todoList: [
          { todoID: "4td", todoTitle: "Regression Test", todoDescription: "Run automated regression suite on new build", todoDeadline: "Feb 2, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "5td", todoTitle: "Unit Test Coverage", todoDescription: "Increase coverage to 85%", todoDeadline: "Feb 4, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "28td", todoTitle: "API Load Test", todoDescription: "Simulate heavy traffic on endpoints", todoDeadline: "Feb 5, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "29td", todoTitle: "Integration QA", todoDescription: "Check module compatibility", todoDeadline: "Feb 6, 2026", todoPriority: "medium", todoStatus: "ongoing" }
        ]
      },

      {
        projectListID: "4pl",
        projectListName: "Release Coordination",
        theme: { r: 142, g: 68, b: 173 }, // Purple
        todoList: [
          { todoID: "6td", todoTitle: "Deployment Checklist", todoDescription: "Verify scripts, docker images, fallback plan", todoDeadline: "Feb 6, 2026", todoPriority: "low", todoStatus: "ongoing" },
          { todoID: "30td", todoTitle: "Cloud Resource Prep", todoDescription: "Confirm VM availability and scaling rules", todoDeadline: "Feb 7, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "31td", todoTitle: "Rollback Plan", todoDescription: "Document procedures for reverting build", todoDeadline: "Feb 8, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "32td", todoTitle: "Stakeholder Scheduling", todoDescription: "Notify cross-teams about deployment window", todoDeadline: "Feb 9, 2026", todoPriority: "low", todoStatus: "ongoing" }
        ]
      },

      {
        projectListID: "10pl",
        projectListName: "Monitoring",
        theme: { r: 39, g: 174, b: 96 }, // Green
        todoList: [
          { todoID: "33td", todoTitle: "Setup Alerts", todoDescription: "Configure error rate threshold alerts", todoDeadline: "Feb 10, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "34td", todoTitle: "Expand Log Retention", todoDescription: "Increase retention policy from 7 to 30 days", todoDeadline: "Feb 11, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "35td", todoTitle: "Service Map Update", todoDescription: "Refresh inter-service dependencies map", todoDeadline: "Feb 12, 2026", todoPriority: "low", todoStatus: "ongoing" }
        ]
      },

      {
        projectListID: "11pl",
        projectListName: "Security",
        theme: { r: 192, g: 57, b: 43 }, // Red
        todoList: [
          { todoID: "36td", todoTitle: "Vulnerability Scan", todoDescription: "Run full system scan", todoDeadline: "Feb 13, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "37td", todoTitle: "Key Rotation", todoDescription: "Rotate all secrets and tokens", todoDeadline: "Feb 14, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "38td", todoTitle: "Audit Review", todoDescription: "Review last month's access logs", todoDeadline: "Feb 15, 2026", todoPriority: "low", todoStatus: "ongoing" },
          { todoID: "39td", todoTitle: "API Rate Limits", todoDescription: "Update per-endpoint throttling", todoDeadline: "Feb 16, 2026", todoPriority: "medium", todoStatus: "ongoing" }
        ]
      }
    ]
  },

  // ---------------- THIRD PROJECT ----------------

  {
    projectID: "3p",
    projectName: "Office Renovation",
    projectDescription: "Full redesign of workspace for new year expansion",
    projectPriority: "low",
    projectList: [
      {
        projectListID: "5pl",
        projectListName: "Interior Design",
        theme: { r: 241, g: 90, b: 34 }, // Orange
        todoList: [
          { todoID: "7td", todoTitle: "Furniture Layout", todoDescription: "Optimize seating capacity and team grouping", todoDeadline: "Mar 5, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "8td", todoTitle: "Color Palette Proposal", todoDescription: "Select and finalize color theme", todoDeadline: "Mar 8, 2026", todoPriority: "low", todoStatus: "ongoing" },
          { todoID: "40td", todoTitle: "Lighting Study", todoDescription: "Determine optimal brightness levels", todoDeadline: "Mar 9, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "41td", todoTitle: "Wall Material Options", todoDescription: "Compare drywall, panels, and acoustic boards", todoDeadline: "Mar 10, 2026", todoPriority: "low", todoStatus: "ongoing" }
        ]
      },

      {
        projectListID: "6pl",
        projectListName: "Contractor Coordination",
        theme: { r: 52, g: 73, b: 94 }, // Gray/Blue steel
        todoList: [
          { todoID: "9td", todoTitle: "Finalize Contracts", todoDescription: "Negotiate cost and finalize agreement", todoDeadline: "Mar 10, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "42td", todoTitle: "Material Procurement", todoDescription: "Confirm supplier orders", todoDeadline: "Mar 11, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "43td", todoTitle: "Schedule Work Hours", todoDescription: "Align with company operations", todoDeadline: "Mar 12, 2026", todoPriority: "low", todoStatus: "ongoing" },
          { todoID: "44td", todoTitle: "Safety Procedure Review", todoDescription: "Ensure OSHA compliance", todoDeadline: "Mar 13, 2026", todoPriority: "medium", todoStatus: "ongoing" }
        ]
      },

      {
        projectListID: "12pl",
        projectListName: "Furniture",
        theme: { r: 26, g: 188, b: 156 }, // Teal
        todoList: [
          { todoID: "45td", todoTitle: "Chair Selection", todoDescription: "Choose ergonomic models", todoDeadline: "Mar 14, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "46td", todoTitle: "Desk Models", todoDescription: "Decide between fixed and adjustable desks", todoDeadline: "Mar 15, 2026", todoPriority: "low", todoStatus: "ongoing" },
          { todoID: "47td", todoTitle: "Delivery Coordination", todoDescription: "Schedule bulk delivery", todoDeadline: "Mar 16, 2026", todoPriority: "medium", todoStatus: "ongoing" }
        ]
      },

      {
        projectListID: "13pl",
        projectListName: "IT Infrastructure",
        theme: { r: 52, g: 152, b: 219 }, // Light Blue
        todoList: [
          { todoID: "48td", todoTitle: "Cable Layout", todoDescription: "Define ethernet routing paths", todoDeadline: "Mar 17, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "49td", todoTitle: "WiFi Mesh Planning", todoDescription: "Place access points for coverage", todoDeadline: "Mar 18, 2026", todoPriority: "high", todoStatus: "ongoing" },
          { todoID: "50td", todoTitle: "Server Room Setup", todoDescription: "Prep temperature control", todoDeadline: "Mar 19, 2026", todoPriority: "medium", todoStatus: "ongoing" },
          { todoID: "51td", todoTitle: "Printer Stations", todoDescription: "Choose locations for printer hubs", todoDeadline: "Mar 20, 2026", todoPriority: "low", todoStatus: "ongoing" }
        ]
      }
    ]
  }
];
