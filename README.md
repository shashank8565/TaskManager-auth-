# Task Management API with session authentication 

A simple **Task Management API** built using **Node.js**, **Express.js**, and **MongoDB**. It allows users to **sign up, log in, add, update, and delete tasks** while maintaining authentication via sessions.

## Features

- User authentication (Sign Up & Login)
- Add tasks with a title and description
- Retrieve all tasks
- Update existing tasks
- Delete tasks
- Middleware for authentication

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Express-session
- dotenv

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your **MongoDB connection string**:
   ```env
   DB_URL=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Authentication Routes (`/auth`)

#### **Sign Up**
```http
POST /auth/signup
```
**Request Body:**
```json
{
  "username": "exampleUser",
  "password": "securePassword"
}
```

#### **Login**
```http
POST /auth/login
```
**Request Body:**
```json
{
  "username": "exampleUser",
  "password": "securePassword"
}
```

---
### Task Routes (`/tasks`)

#### **Get All Tasks**
```http
GET /tasks/all
```
**Response:**
```json
[
  {
    "_id": "task_id",
    "taskTitle": "Task 1",
    "taskDescription": "Description of Task 1"
  }
]
```

#### **Add Task**
```http
POST /tasks/add
```
**Request Body:**
```json
{
  "taskTitle": "New Task",
  "taskDescription": "Task details"
}
```

#### **Edit Task**
```http
PATCH /tasks/edit/:taskId
```
**Request Body:**
```json
{
  "taskTitle": "Updated Title",
  "taskDescription": "Updated Description"
}
```

#### **Delete Task**
```http
DELETE /tasks/remove/:taskId
```

## Contributing

Contributions are welcome! Feel free to submit a **pull request** or open an **issue**.

