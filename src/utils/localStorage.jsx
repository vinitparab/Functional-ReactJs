
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create initial homepage layout",
        date: "2025-07-12",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve collapsing menu issue",
        date: "2025-07-10",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write CSS for Login Page",
        description: "Style login form and make responsive",
        date: "2025-07-08",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Implement JWT Auth",
        description: "Add JWT for user login system",
        date: "2025-07-09",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor Footer",
        description: "Move to reusable component",
        date: "2025-07-11",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Setup MongoDB",
        description: "Connect to Atlas cluster",
        date: "2025-07-08",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Fix Profile Picture Upload",
        description: "File type validation bug",
        date: "2025-07-12",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Dashboard Charts",
        description: "Integrate with Chart.js",
        date: "2025-07-12",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Debug API Error",
        description: "500 error on POST /register",
        date: "2025-07-10",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Add Unit Tests",
        description: "Write tests for user service",
        date: "2025-07-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Landing Page",
        description: "Design and code landing section",
        date: "2025-07-07",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Logout Issue",
        description: "Session not clearing on logout",
        date: "2025-07-09",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review PR #42",
        date: "2025-07-11",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Email Template Design",
        description: "Create welcome email design",
        date: "2025-07-12",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Vivaan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Setup CI/CD",
        description: "Configure GitHub Actions",
        date: "2025-07-08",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Toast Notifications",
        description: "Messages not auto-closing",
        date: "2025-07-09",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Contact Form",
        description: "Add phone number field",
        date: "2025-07-10",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Dark Mode Theme",
        description: "Implement toggle support",
        date: "2025-07-11",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Reset Password Flow",
        description: "Bug in email token handling",
        date: "2025-07-12",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    }
  }
];

  const admin= [{
    "id": 100,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
 
 const admin = JSON.parse(localStorage.getItem('admin'))
 const employees = JSON.parse(localStorage.getItem('employees'))
return{employees,admin}
}
