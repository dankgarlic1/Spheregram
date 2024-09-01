

# 🌐 SphereGram

**SphereGram** is a social media platform that allows users to share images and connect with friends in a secure and modern environment. This project consists of a backend built with Node.js and Express, and a frontend developed with React.js and Material-UI.



## 📂 Project Structure

This project is divided into two main parts:

1. **Backend** - Handles user authentication, image storage, and serves the RESTful API.
2. **Frontend** - Provides a user interface for interacting with the SphereGram platform.

### Backend

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **GridFS** (for image storage)
- **JSON Web Tokens** (for authentication)

### Frontend

- **React.js**
- **Material-UI**
- **Redux Toolkit** (for state management)
- **Formik & Yup** (for form validation)



## 🚀 Getting Started

### Prerequisites

- **Node.js** (v20.15.1)
- **MongoDB**
- **NPM** (or Yarn)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dankgarlic1/Spheregram.git
   cd Spheregram
   ```

2. **Backend Setup:**

   - Navigate to the `backend` directory:

     ```bash
     cd backend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file based on the `.env.example` file and add your environment variables:

     ```bash
     touch .env
     ```

   - Start the backend server:

     ```bash
     npm start
     ```

3. **Frontend Setup:**

   - Navigate to the `frontend` directory:

     ```bash
     cd ../frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the frontend development server:

     ```bash
     npm start
     ```


## 🌟 Features

- **User Authentication**: Secure sign-up and login using JSON Web Tokens (JWT).
- **Image Upload & Display**: Users can upload and view images stored in GridFS.
- **Responsive UI**: Frontend built with React and Material-UI, ensuring a smooth user experience on all devices.
- **State Management**: Utilizes Redux Toolkit for efficient state management.
- **Form Validation**: Forms are validated using Formik and Yup.


## 📜 Scripts

### Backend Scripts

- **`npm start`**: Starts the production server.
- **`npm run dev`**: Starts the development server with live reloading using Nodemon.

### Frontend Scripts

- **`npm start`**: Starts the React development server.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Runs tests.
- **`npm run eject`**: Ejects the app from Create React App (use with caution).


## 🔒 Environment Variables

The following environment variables need to be configured in the `.env` file:

### Backend

```plaintext
MONGO_URI=mongodb://localhost:27017/spheregram
JWT_SECRET=your_jwt_secret
PORT=5000
```

## 🛠️ Dependencies

### Backend

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mongoose**: Elegant MongoDB object modeling for Node.js.
- **bcrypt**: Library to help you hash passwords.
- **jsonwebtoken**: An implementation of JSON Web Tokens.
- **multer**: Middleware for handling `multipart/form-data`.
- **gridfs-stream**: Storage engine for MongoDB GridFS.

### Frontend

- **react**: A JavaScript library for building user interfaces.
- **redux**: A Predictable State Container for JS Apps.
- **formik**: Build forms in React, without the tears.
- **material-ui**: React components for faster and easier web development.


## 📄 License

This project is licensed under the **ISC License**.

