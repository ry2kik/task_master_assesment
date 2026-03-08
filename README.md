# Task Master Assessment

A simple task management REST API built with Node.js, Express, and MongoDB. This project is part of an assessment and provides endpoints for creating and managing tasks, users, teams, and comments.

## Features

- Create, read, update and delete tasks
- Filter tasks by status
- Associate tasks with users and teams
- Basic validation of input data

## Project Structure

```
app.js
package.json
README.md
Controller/
    task.controller.js
    team.controller.js
    user.controller.js
middleware/
    auth.js
Model/
    comment.model.js
    task.model.js
    team.model.js
    user.model.js
Routes/
    app.routes.js
    task.routes.js
    team.routes.js
utils/
    validate.js
```

## Getting Started

### Prerequisites

- Node.js (>=14)
- npm or yarn
- MongoDB instance (local or hosted)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ry2kik/task_master_assesment.git
   cd task_master_assesment
   ```
2. Install dependencies:
   ```bash
   npm install
   # or yarn install
   ```
3. Create a `.env` file in the project root and set the following variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/taskmaster
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm start
   # or nodemon app.js for development
   ```

The API will be available at `http://localhost:3000` by default.

## Available Endpoints

### Tasks

- `POST /tasks` - Create a new task
- `GET /tasks` - Fetch all tasks
- `GET /tasks?status=<status>` - Filter tasks by status
- `GET /tasks/:id` - Fetch a task by ID
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

### Teams

- `POST /teams` - Create a new team
- `GET /teams` - List teams
- `GET /teams/:id` - Get team by ID
- `PUT /teams/:id` - Update team
- `DELETE /teams/:id` - Remove team

### Users

- `POST /users` - Create a new user
- `GET /users` - List users
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Authentication

Protected routes require a JWT in the `Authorization` header: `Bearer <token>`.

## Validation

Basic input validation is performed in `utils/validate.js` and within controller methods.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is available under the MIT License.