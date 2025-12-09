export const sampleData = [
  // ======================================================================
  // PROJECT 1 — Marketing Campaign
  // ======================================================================
  {
    projectID: "1p",
    projectName: "Marketing Campaign",
    projectDescription: "Social media and email strategy for upcoming product launch",
    projectPriority: "high",
    projectList: [
      // ---------------------- LIST 1 (5 TODOS) ----------------------
      {
        projectListID: "1pl",
        projectListName: "Social Media",
        theme: { r: "200", g: "30", b: "50" },
        todoList: [
          {
            todoID: "1td",
            todoTitle: "Create Ad Copy",
            todoDescription: "Draft promotional captions for Facebook and Instagram",
            todoDeadline: "Jan 9, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "2td",
            todoTitle: "Design Carousel Templates",
            todoDescription: "Create templates for multi-image ads",
            todoDeadline: "Jan 10, 2026",
            todoPriority: "high"
          },
          {
            todoID: "3td",
            todoTitle: "Schedule Post Calendar",
            todoDescription: "Prepare 10-day scheduling matrix",
            todoDeadline: "Jan 11, 2026",
            todoPriority: "low"
          },
          {
            todoID: "4td",
            todoTitle: "Engagement Strategy",
            todoDescription: "Outline comment response and community engagement",
            todoDeadline: "Jan 12, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "5td",
            todoTitle: "Influencer Outreach",
            todoDescription: "Contact micro-influencers for collaboration",
            todoDeadline: "Jan 13, 2026",
            todoPriority: "medium"
          }
        ]
      },

      // ---------------------- LIST 2 (7 TODOS) ----------------------
      {
        projectListID: "2pl",
        projectListName: "Email Advertising",
        theme: { r: "255", g: "140", b: "0" },
        todoList: [
          {
            todoID: "6td",
            todoTitle: "Newsletter Layout",
            todoDescription: "Finalize CTA placement and branding",
            todoDeadline: "Jan 13, 2026",
            todoPriority: "low"
          },
          {
            todoID: "7td",
            todoTitle: "Audience Segmentation",
            todoDescription: "Group leads by engagement level",
            todoDeadline: "Jan 14, 2026",
            todoPriority: "high"
          },
          {
            todoID: "8td",
            todoTitle: "Automation Setup",
            todoDescription: "Configure drip campaign",
            todoDeadline: "Jan 15, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "9td",
            todoTitle: "Link Tracking",
            todoDescription: "Add UTM parameters for analytics",
            todoDeadline: "Jan 16, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "10td",
            todoTitle: "Mobile Optimization",
            todoDescription: "Ensure email format is responsive",
            todoDeadline: "Jan 17, 2026",
            todoPriority: "high"
          },
          {
            todoID: "11td",
            todoTitle: "Spam Test",
            todoDescription: "Check deliverability and spam score",
            todoDeadline: "Jan 18, 2026",
            todoPriority: "low"
          },
          {
            todoID: "12td",
            todoTitle: "Final QA Review",
            todoDescription: "Verify links and formatting",
            todoDeadline: "Jan 19, 2026",
            todoPriority: "medium"
          }
        ]
      },

      // ---------------------- LIST 3 (4 TODOS) ----------------------
      {
        projectListID: "3pl",
        projectListName: "Design & Branding",
        theme: { r: "180", g: "70", b: "20" },
        todoList: [
          {
            todoID: "13td",
            todoTitle: "Logo Variants",
            todoDescription: "Create monochrome and vertical logo versions",
            todoDeadline: "Jan 11, 2026",
            todoPriority: "low"
          },
          {
            todoID: "14td",
            todoTitle: "Brand Style Sheet",
            todoDescription: "Update typography and spacing policies",
            todoDeadline: "Jan 12, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "15td",
            todoTitle: "Campaign Graphics",
            todoDescription: "Design 3 hero banners",
            todoDeadline: "Jan 14, 2026",
            todoPriority: "high"
          },
          {
            todoID: "16td",
            todoTitle: "Print Material Mockups",
            todoDescription: "Create brochures and posters",
            todoDeadline: "Jan 16, 2026",
            todoPriority: "medium"
          }
        ]
      },

      // ---------------------- LIST 4 (6 TODOS) ----------------------
      {
        projectListID: "4pl",
        projectListName: "Analytics Setup",
        theme: { r: "50", g: "50", b: "50" },
        todoList: [
          {
            todoID: "17td",
            todoTitle: "Install Tracking Pixel",
            todoDescription: "Verify Facebook Pixel event triggers",
            todoDeadline: "Jan 14, 2026",
            todoPriority: "high"
          },
          {
            todoID: "18td",
            todoTitle: "Google Analytics Setup",
            todoDescription: "Create filters and reports",
            todoDeadline: "Jan 15, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "19td",
            todoTitle: "Traffic Dashboard",
            todoDescription: "Add custom KPIs to dashboard",
            todoDeadline: "Jan 16, 2026",
            todoPriority: "low"
          },
          {
            todoID: "20td",
            todoTitle: "Email Metrics Integration",
            todoDescription: "Sync with email automation platform",
            todoDeadline: "Jan 17, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "21td",
            todoTitle: "Audience Report",
            todoDescription: "Summarize demographics and behaviors",
            todoDeadline: "Jan 18, 2026",
            todoPriority: "low"
          },
          {
            todoID: "22td",
            todoTitle: "Bug Fixes",
            todoDescription: "Resolve missing UTM tags",
            todoDeadline: "Jan 19, 2026",
            todoPriority: "medium"
          }
        ]
      },

      // ---------------------- LIST 5 (5 TODOS) ----------------------
      {
        projectListID: "5pl",
        projectListName: "Market Research",
        theme: { r: "90", g: "50", b: "150" },
        todoList: [
          {
            todoID: "23td",
            todoTitle: "Competitor Scan",
            todoDescription: "Review competing ad creatives",
            todoDeadline: "Jan 9, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "24td",
            todoTitle: "Audience Survey",
            todoDescription: "Distribute questionnaires to sample group",
            todoDeadline: "Jan 10, 2026",
            todoPriority: "high"
          },
          {
            todoID: "25td",
            todoTitle: "Trend Analysis",
            todoDescription: "Identify emerging industry trends",
            todoDeadline: "Jan 11, 2026",
            todoPriority: "low"
          },
          {
            todoID: "26td",
            todoTitle: "Insights Presentation",
            todoDescription: "Share findings with team",
            todoDeadline: "Jan 13, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "27td",
            todoTitle: "Persona Updates",
            todoDescription: "Revise audience profiles",
            todoDeadline: "Jan 14, 2026",
            todoPriority: "medium"
          }
        ]
      }
    ]
  },

  // ======================================================================
  // PROJECT 2 — Software Deployment
  // ======================================================================
  {
    projectID: "2p",
    projectName: "Software Deployment",
    projectDescription: "Coordinate build rollout for production environment",
    projectPriority: "medium",
    projectList: [
      // ---------------------- LIST 1 (4 TODOS) ----------------------
      {
        projectListID: "6pl",
        projectListName: "Testing",
        theme: { r: "0", g: "150", b: "180" },
        todoList: [
          {
            todoID: "28td",
            todoTitle: "Regression Test",
            todoDescription: "Run regression suite on latest build",
            todoDeadline: "Feb 2, 2026",
            todoPriority: "high"
          },
          {
            todoID: "29td",
            todoTitle: "Coverage Review",
            todoDescription: "Increase unit test coverage to 85%",
            todoDeadline: "Feb 4, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "30td",
            todoTitle: "Performance Test",
            todoDescription: "Load test critical endpoints",
            todoDeadline: "Feb 5, 2026",
            todoPriority: "high"
          },
          {
            todoID: "31td",
            todoTitle: "Bug Classification",
            todoDescription: "Tag issues by severity",
            todoDeadline: "Feb 6, 2026",
            todoPriority: "medium"
          }
        ]
      },

      // ---------------------- LIST 2 (6 TODOS) ----------------------
      {
        projectListID: "7pl",
        projectListName: "Release Coordination",
        theme: { r: "50", g: "50", b: "200" },
        todoList: [
          {
            todoID: "32td",
            todoTitle: "Finalize Checklist",
            todoDescription: "Verify scripts and rollbacks",
            todoDeadline: "Feb 6, 2026",
            todoPriority: "low"
          },
          {
            todoID: "33td",
            todoTitle: "Release Notes",
            todoDescription: "Compile changes for the update",
            todoDeadline: "Feb 7, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "34td",
            todoTitle: "Ops Sync Call",
            todoDescription: "Brief operations team before release",
            todoDeadline: "Feb 8, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "35td",
            todoTitle: "Version Tagging",
            todoDescription: "Tag stable build versions",
            todoDeadline: "Feb 9, 2026",
            todoPriority: "high"
          },
          {
            todoID: "36td",
            todoTitle: "Rollback Verification",
            todoDescription: "Test rollback flow",
            todoDeadline: "Feb 10, 2026",
            todoPriority: "high"
          },
          {
            todoID: "37td",
            todoTitle: "Green-Light Approval",
            todoDescription: "Secure PM approval for production release",
            todoDeadline: "Feb 11, 2026",
            todoPriority: "medium"
          }
        ]
      },

      // ---------------------- LIST 3 (7 TODOS) ----------------------
      {
        projectListID: "8pl",
        projectListName: "Infrastructure",
        theme: { r: "100", g: "50", b: "0" },
        todoList: [
          {
            todoID: "38td",
            todoTitle: "Server Deployment",
            todoDescription: "Provision new VM instances",
            todoDeadline: "Feb 10, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "39td",
            todoTitle: "Load Balancer Rules",
            todoDescription: "Configure blue-green deployment rules",
            todoDeadline: "Feb 11, 2026",
            todoPriority: "high"
          },
          {
            todoID: "40td",
            todoTitle: "Firewall Review",
            todoDescription: "Update inbound/outbound policies",
            todoDeadline: "Feb 12, 2026",
            todoPriority: "high"
          },
          {
            todoID: "41td",
            todoTitle: "CDN Cache Setup",
            todoDescription: "Enable caching rules for static assets",
            todoDeadline: "Feb 13, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "42td",
            todoTitle: "SSL Certificate Update",
            todoDescription: "Renew and apply SSL certs",
            todoDeadline: "Feb 14, 2026",
            todoPriority: "high"
          },
          {
            todoID: "43td",
            todoTitle: "DNS Propagation Test",
            todoDescription: "Verify new DNS configurations",
            todoDeadline: "Feb 15, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "44td",
            todoTitle: "System Hardening",
            todoDescription: "Run security hardening script",
            todoDeadline: "Feb 16, 2026",
            todoPriority: "low"
          }
        ]
      },

      // ---------------------- LIST 4 (4 TODOS) ----------------------
      {
        projectListID: "9pl",
        projectListName: "Monitoring & Alerts",
        theme: { r: "150", g: "80", b: "80" },
        todoList: [
          {
            todoID: "45td",
            todoTitle: "Update Dashboards",
            todoDescription: "Add error rate and latency charts",
            todoDeadline: "Feb 18, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "46td",
            todoTitle: "Set Alert Policies",
            todoDescription: "Configure CPU and memory alerts",
            todoDeadline: "Feb 19, 2026",
            todoPriority: "high"
          },
          {
            todoID: "47td",
            todoTitle: "Incident Simulation",
            todoDescription: "Run mock outage scenario",
            todoDeadline: "Feb 20, 2026",
            todoPriority: "high"
          },
          {
            todoID: "48td",
            todoTitle: "Log Rotation Check",
            todoDescription: "Verify log retention policies",
            todoDeadline: "Feb 21, 2026",
            todoPriority: "low"
          }
        ]
      },

      // ---------------------- LIST 5 (6 TODOS) ----------------------
      {
        projectListID: "10pl",
        projectListName: "DevOps Automation",
        theme: { r: "40", g: "160", b: "60" },
        todoList: [
          {
            todoID: "49td",
            todoTitle: "Pipeline Cleanup",
            todoDescription: "Remove deprecated stages",
            todoDeadline: "Feb 22, 2026",
            todoPriority: "low"
          },
          {
            todoID: "50td",
            todoTitle: "Auto Deployment",
            todoDescription: "Enable automated prod build trigger",
            todoDeadline: "Feb 23, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "51td",
            todoTitle: "Secret Manager Config",
            todoDescription: "Rotate API credentials",
            todoDeadline: "Feb 24, 2026",
            todoPriority: "high"
          },
          {
            todoID: "52td",
            todoTitle: "Container Security",
            todoDescription: "Scan Docker images for vulnerabilities",
            todoDeadline: "Feb 25, 2026",
            todoPriority: "high"
          },
          {
            todoID: "53td",
            todoTitle: "Artifact Cleanup",
            todoDescription: "Remove old registry images",
            todoDeadline: "Feb 26, 2026",
            todoPriority: "low"
          },
          {
            todoID: "54td",
            todoTitle: "Build Speed Optimization",
            todoDescription: "Cache dependencies for faster CI",
            todoDeadline: "Feb 27, 2026",
            todoPriority: "medium"
          }
        ]
      }
    ]
  },

  // ======================================================================
  // PROJECT 3 — Office Renovation
  // ======================================================================
  {
    projectID: "3p",
    projectName: "Office Renovation",
    projectDescription: "Full redesign of workspace for new year expansion",
    projectPriority: "low",
    projectList: [
      // ---------------------- LIST 1 (7 TODOS) ----------------------
      {
        projectListID: "11pl",
        projectListName: "Interior Design",
        theme: { r: "120", g: "200", b: "50" },
        todoList: [
          {
            todoID: "55td",
            todoTitle: "Furniture Layout Plan",
            todoDescription: "Optimize seating and spacing",
            todoDeadline: "Mar 5, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "56td",
            todoTitle: "Color Scheme Draft",
            todoDescription: "Propose a palette for wall and accents",
            todoDeadline: "Mar 6, 2026",
            todoPriority: "low"
          },
          {
            todoID: "57td",
            todoTitle: "Lighting Placement",
            todoDescription: "Determine LED and ambient lighting areas",
            todoDeadline: "Mar 7, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "58td",
            todoTitle: "Material Samples",
            todoDescription: "Gather wood, tile, and paint samples",
            todoDeadline: "Mar 8, 2026",
            todoPriority: "low"
          },
          {
            todoID: "59td",
            todoTitle: "3D Render Draft",
            todoDescription: "Produce initial design renders",
            todoDeadline: "Mar 10, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "60td",
            todoTitle: "Design Revisions",
            todoDescription: "Apply feedback to render updates",
            todoDeadline: "Mar 11, 2026",
            todoPriority: "low"
          },
          {
            todoID: "61td",
            todoTitle: "Final Proposal",
            todoDescription: "Deliver final interior design package",
            todoDeadline: "Mar 12, 2026",
            todoPriority: "high"
          }
        ]
      },

      // ---------------------- LIST 2 (4 TODOS) ----------------------
      {
        projectListID: "12pl",
        projectListName: "Contractor Coordination",
        theme: { r: "255", g: "255", b: "0" },
        todoList: [
          {
            todoID: "62td",
            todoTitle: "Contract Finalization",
            todoDescription: "Review and sign contractor agreements",
            todoDeadline: "Mar 10, 2026",
            todoPriority: "high"
          },
          {
            todoID: "63td",
            todoTitle: "Site Visit Scheduling",
            todoDescription: "Arrange weekly contractor check-ins",
            todoDeadline: "Mar 11, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "64td",
            todoTitle: "Permit Application",
            todoDescription: "Submit renovation paperwork",
            todoDeadline: "Mar 12, 2026",
            todoPriority: "high"
          },
          {
            todoID: "65td",
            todoTitle: "Compliance Check",
            todoDescription: "Ensure all guidelines are met",
            todoDeadline: "Mar 13, 2026",
            todoPriority: "medium"
          }
        ]
      },

      // ---------------------- LIST 3 (5 TODOS) ----------------------
      {
        projectListID: "13pl",
        projectListName: "Purchasing & Procurement",
        theme: { r: "0", g: "130", b: "70" },
        todoList: [
          {
            todoID: "66td",
            todoTitle: "Quotation Gathering",
            todoDescription: "Request quotes from 5 suppliers",
            todoDeadline: "Mar 11, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "67td",
            todoTitle: "Purchase Order Draft",
            todoDescription: "Prepare PO for materials",
            todoDeadline: "Mar 12, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "68td",
            todoTitle: "Shipping Schedule",
            todoDescription: "Coordinate delivery timings",
            todoDeadline: "Mar 13, 2026",
            todoPriority: "low"
          },
          {
            todoID: "69td",
            todoTitle: "Item Inspection",
            todoDescription: "Check delivered items for defects",
            todoDeadline: "Mar 14, 2026",
            todoPriority: "high"
          },
          {
            todoID: "70td",
            todoTitle: "Inventory Logging",
            todoDescription: "Update procurement database",
            todoDeadline: "Mar 15, 2026",
            todoPriority: "low"
          }
        ]
      },

      // ---------------------- LIST 4 (6 TODOS) ----------------------
      {
        projectListID: "14pl",
        projectListName: "Workspace Layout",
        theme: { r: "200", g: "100", b: "50" },
        todoList: [
          {
            todoID: "71td",
            todoTitle: "Team Seating Plan",
            todoDescription: "Assign new seating arrangement",
            todoDeadline: "Mar 10, 2026",
            todoPriority: "low"
          },
          {
            todoID: "72td",
            todoTitle: "Desk Layout",
            todoDescription: "Design workstation placement",
            todoDeadline: "Mar 11, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "73td",
            todoTitle: "Meeting Room Allocation",
            todoDescription: "Assign conference room uses",
            todoDeadline: "Mar 12, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "74td",
            todoTitle: "Storage Zones",
            todoDescription: "Plan storage area distribution",
            todoDeadline: "Mar 13, 2026",
            todoPriority: "low"
          },
          {
            todoID: "75td",
            todoTitle: "Accessibility Check",
            todoDescription: "Ensure layout meets guidelines",
            todoDeadline: "Mar 14, 2026",
            todoPriority: "high"
          },
          {
            todoID: "76td",
            todoTitle: "Floor Map Draft",
            todoDescription: "Produce the updated layout map",
            todoDeadline: "Mar 15, 2026",
            todoPriority: "medium"
          }
        ]
      },

      // ---------------------- LIST 5 (4 TODOS) ----------------------
      {
        projectListID: "15pl",
        projectListName: "IT Infrastructure",
        theme: { r: "0", g: "0", b: "150" },
        todoList: [
          {
            todoID: "77td",
            todoTitle: "Network Plan",
            todoDescription: "Determine wiring routes",
            todoDeadline: "Mar 8, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "78td",
            todoTitle: "Server Setup",
            todoDescription: "Prepare new server rack",
            todoDeadline: "Mar 9, 2026",
            todoPriority: "high"
          },
          {
            todoID: "79td",
            todoTitle: "WiFi Optimization",
            todoDescription: "Create heatmap for signal coverage",
            todoDeadline: "Mar 10, 2026",
            todoPriority: "medium"
          },
          {
            todoID: "80td",
            todoTitle: "Workstation Installation",
            todoDescription: "Install PCs and monitors",
            todoDeadline: "Mar 11, 2026",
            todoPriority: "low"
          }
        ]
      }
    ]
  }
];
