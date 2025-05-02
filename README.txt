# Full-Stack User Management System

## Overview
This is a modern full-stack web application for user management, built with a clear separation between frontend and backend components. The application allows for creating, reading, updating, and deleting (CRUD) user information.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.11 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Backend Setup**
   ```bash
   cd backend
   
   # Create and activate virtual environment (Windows)
   python -m venv venv
   .\venv\Scripts\activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Create .env file
   echo "MONGO_URI=mongodb://localhost:27017" > .env
   echo "DB_NAME=user_management" >> .env
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   
   # Install dependencies
   npm install
   ```

### Running the Application

1. **Start MongoDB**
   - Make sure MongoDB is running locally or update the MONGO_URI in backend/.env

2. **Start Backend Server**
   ```bash
   cd backend
   uvicorn app.main:app --reload
   ```
   The backend will be available at http://localhost:8000

3. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will be available at http://localhost:5173

4. **Access the Application**
   - Open your browser and navigate to http://localhost:5173
   - You should see the user management interface

### Testing the Application
1. Create a new user using the "New User" button
2. View the list of users
3. Edit an existing user
4. Delete a user

### Troubleshooting
- If backend connection fails, check MongoDB connection
- If frontend fails to start, ensure all dependencies are installed
- Check console logs for any error messages

## Tech Stack

### Frontend
- Framework: React with TypeScript
- Build Tool: Vite
- UI Library: Material-UI (MUI)
- State Management: React Hooks
- Routing: React Router
- HTTP Client: Axios

### Backend
- Framework: FastAPI (Python)
- Database: MongoDB
- ORM: Motor (async MongoDB driver)
- Validation: Pydantic
- Environment: Python 3.11

## Architecture

### Frontend Structure
1. Components:
   - App.tsx: Main application with routing and theme setup
   - Layout.tsx: Consistent page layout wrapper
   - UserList.tsx: User listing and management interface
   - UserForm.tsx: Form for creating and editing users

2. Features:
   - Responsive design
   - Material-UI theming
   - Form validation
   - Error handling
   - Loading states
   - CRUD operations

### Backend Structure
1. Core Files:
   - main.py: FastAPI application and routes
   - models.py: Pydantic data models
   - crud.py: Database operations
   - database.py: MongoDB connection

2. API Endpoints:
   - POST /api/users: Create user
   - GET /api/users: Get all users
   - GET /api/users/{id}: Get specific user
   - PUT /api/users/{id}: Update user
   - DELETE /api/users/{id}: Delete user

## Data Model
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

## Key Features
1. User Management:
   - Create new users
   - View user list
   - Edit user details
   - Delete users

2. Frontend Features:
   - Modern, responsive UI
   - Real-time updates
   - Form validation
   - Error handling
   - Loading states

3. Backend Features:
   - Async operations
   - Data validation
   - Error handling
   - CORS support
   - MongoDB integration

## Development Setup
1. Frontend:
   cd frontend
   npm install
   npm run dev

2. Backend:
   cd backend
   pip install -r requirements.txt
   uvicorn app.main:app --reload

## Best Practices Implemented
1. Code Organization:
   - Clear separation of concerns
   - Modular component structure
   - Consistent file naming

2. Type Safety:
   - TypeScript in frontend
   - Pydantic in backend
   - Interface definitions

3. Error Handling:
   - Frontend error states
   - Backend error responses
   - User-friendly messages

4. Performance:
   - Async operations
   - Optimized builds
   - Efficient data fetching

## Security Features
- CORS configuration
- Input validation
- Secure database operations
- Environment variable management

This project demonstrates modern full-stack development practices, combining a robust backend with a responsive frontend, providing a complete user management solution with excellent developer experience and maintainability. 