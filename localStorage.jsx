
const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Submit weekly report",
        description: "Complete and submit the weekly progress report.",
        date: "2025-06-07",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Attend standup meeting",
        description: "Daily standup with the team.",
        date: "2025-06-06",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix login bug",
        description: "Resolve login issue reported by QA.",
        date: "2025-06-05",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design new logo",
        description: "Create a fresh logo for the internal portal.",
        date: "2025-06-07",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update landing page",
        description: "Push new content to the landing page.",
        date: "2025-06-06",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix CSS issues",
        description: "Align footer for all screen sizes.",
        date: "2025-06-05",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize images",
        description: "Reduce image sizes to improve load time.",
        date: "2025-06-04",
        category: "Optimization"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write API docs",
        description: "Document all available API endpoints.",
        date: "2025-06-07",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Refactor code",
        description: "Clean and refactor service layer.",
        date: "2025-06-06",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Configure CI/CD",
        description: "Integrate GitHub Actions for deployment.",
        date: "2025-06-05",
        category: "DevOps"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Analyze feedback",
        description: "Review customer feedback on recent updates.",
        date: "2025-06-07",
        category: "Analysis"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare report",
        description: "Summarize sprint outcomes and KPIs.",
        date: "2025-06-06",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Run tests",
        description: "Execute regression tests on new release.",
        date: "2025-06-05",
        category: "QA"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create onboarding guide",
        description: "Prepare guide for new hires.",
        date: "2025-06-07",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team intro",
        description: "Introduce new team members in Slack.",
        date: "2025-06-06",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Review resume pipeline",
        description: "Sort applicants by skill relevance.",
        date: "2025-06-05",
        category: "Recruitment"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
  
      localStorage.setItem("employees",JSON.stringify(employees));
       localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return {employees,admin}
}