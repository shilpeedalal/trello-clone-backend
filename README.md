
Here's a sample `README.md` file for your Trello clone project. This file will include instructions on how to set up, run, and deploy the project, as well as a list of all the API routes.

---

# Trello Clone Backend

This project is a Trello clone that allows users to manage projects and tasks. The backend is built with Node.js, Express, and MongoDB, with authentication handled using JWT.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Routes](#api-routes)
- [Deployed Link](#deployed-link)

## Features
- User Registration and Login
- JWT Authentication
- CRUD Operations for Projects and Tasks
- Task Management with Status Categories (Backlog, In Progress, Done, etc.)
- Secure APIs with validation and error handling

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Joi for validation
- bcrypt for password hashing

## Installation

1. **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd trello-clone-backend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up MongoDB:**
   - Make sure MongoDB is installed and running on your system.
   - Create a new database for the project.

4. **Create a `.env` file in the root directory with the following content:**

    ```env
    MONGO_URI=mongodb://localhost:27017/trello_clone_db
    JWT_SECRET=your-secret-key
    PORT=5000
    ```

5. **Run the project:**
    ```bash
    npm start
    ```

   The server should now be running on `http://localhost:5000`.

## Environment Variables

- `MONGO_URI`: The MongoDB connection string.
- `JWT_SECRET`: Secret key used for signing JWT tokens.
- `PORT`: Port number on which the server will run.

## Running the Project

To run the project locally, use the following command:

```bash
npm start
```

This will start the server on `http://localhost:5000`.

## API Routes

### Authentication
- **POST** `/api/auth/register` - Register a new user
  - **Request Body:** `{ "email": "john@example.com", "password": "password123" }`
- **POST** `/api/auth/login` - Log in an existing user
  - **Request Body:** `{ "email": "john@example.com", "password": "password123" }`

### Projects
- **GET** `/api/projects` - Get all projects for the authenticated user
- **POST** `/api/projects` - Create a new project
  - **Request Body:** `{ "name": "Project Name", "description": "Project Description" }`
- **GET** `/api/projects/:id` - Get a specific project by ID
- **PUT** `/api/projects/:id` - Update a specific project by ID
  - **Request Body:** `{ "name": "Updated Project Name", "description": "Updated Description" }`
- **DELETE** `/api/projects/:id` - Delete a project by ID

### Tasks
- **GET** `/api/tasks` - Get all tasks across all projects for the authenticated user
- **POST** `/api/projects/:projectId/tasks` - Create a new task in a specific project
  - **Request Body:** `{ "name": "Task Name", "description": "Task Description", "status": "Backlog", "dueDate": "2024-09-01", "assignedUser": "user_id" }`
- **GET** `/api/projects/:projectId/tasks/:taskId` - Get a specific task by ID
- **PUT** `/api/projects/:projectId/tasks/:taskId` - Update a specific task by ID
  - **Request Body:** `{ "name": "Updated Task Name", "description": "Updated Description", "status": "In Progress", "dueDate": "2024-09-02", "assignedUser": "new_user_id" }`
- **DELETE** `/api/projects/:projectId/tasks/:taskId` - Delete a task by ID

### Middleware
- **`authenticateToken`** - Applied to all routes except login and registration to ensure the user is authenticated.

## Deployed Link

You can access the deployed project at:

[Deployed App Link](https://trello-clone-backend-tzd2.onrender.com/)

## License

This project is open-source and available under the MIT License.

---

By following these instructions, you should be able to set up, run, and deploy your Trello clone backend with ease. Make sure to update the placeholders with actual values specific to your project.

