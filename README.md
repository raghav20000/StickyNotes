# 📝 stickyNotes - Sticky Notes Replacement (MERN Stack Project)

stickyNotes is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to replace the traditional sticky notes system used by employees. It features role-based access control, secure authentication, note management, and user settings — all optimized for desktop but also responsive on mobile devices.

---

## 🚀 Features & User Stories

### ✅ Core Functionality
- [x] Replace the current sticky note system
- [x] Add a public-facing page with basic contact info
- [x] Add an employee login to the notes app
- [x] Provide a welcome page after login
- [x] Provide easy navigation through the dashboard
- [x] Display the current user and their assigned role
- [x] Provide a logout option

### ✅ Authentication & Access Control
- [x] Require users to login at least once per week (token expiry/session policy)
- [x] Provide a way to remove user access ASAP (user deactivation)
- [x] Employees can only view and edit their assigned notes
- [x] Managers and Admins can view, edit, and delete all notes
- [x] Only Managers and Admins can access User Settings
- [x] Only Managers and Admins can create new users

### ✅ Notes System
- [x] Notes are assigned to specific users
- [x] Notes have a ticket number, title, body, created and updated timestamps
- [x] Notes are either marked as OPEN or COMPLETED
- [x] Anyone can create a note (e.g. customer check-in)
- [x] Notes can only be deleted by Managers or Admins

### ✅ Design & Responsiveness
- [x] Optimized for Desktop (priority)
- [x] Fully responsive on mobile devices

---

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, React Router DOM, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **API Interaction**: RTK Query
- **State Management**: Redux Toolkit
- **Icons**: Font Awesome

---

## 🧩 Project Structure