## 🚀 Project Features

This is a Node.js + Express + MongoDB RESTful API project that includes the following features:

### ✅ Project Setup

1. **Initialize Express Project**  
   - Use `npm init` to initialize  
   - Install Express with `npm install express`

2. **Create Express Server**  
   - Set up a basic server and routes

3. **Thunder Client Setup** *(optional)*  
   - Use the Thunder Client VS Code extension for API testing

4. **Modular Express Router**  
   - Use `express.Router()` to structure routes cleanly

---

### ⚙️ Middleware & Error Handling

5. **Error Handling & Async Handler**  
   - Implement error handling in Express and using the async handler  `express-async-handler`

6. **Express Middleware**  

---

### 🗃️ MongoDB & Mongoose

7. **MongoDB Connection Setup**  
   - Connect to MongoDB Atlas or local instance using Mongoose

8. **Mongoose Schema Definition**  
   - Define models like `User` and `Contact`

---

### ✏️ Contact CRUD Functionality

9. **Contact API Implementation**  
   - Create  
   - Read  
   - Update  
   - Delete

---

### 🔐 Authentication & Authorization

10. **User Registration & Login**

11. **JWT Authentication**  
    - Use `jsonwebtoken` to sign and verify tokens

12. **Controllers & DB Operations**  
    - Communicating with database for different operations

13. **Password Hashing & Comparison**  
    - Use `bcrypt` to hash and verify user passwords

14. **Sign & Verify JWT Tokens**  
    - Issue tokens on login, verify on protected routes

15. **Handle Relationships**  
    - Link contacts to users using `user_id`

16. **Protected Routes**  
    - Restrict access to authenticated users only

17. **User Authorization**  
    - Ensure users can only access their own data

---

### 🧪 API Testing

18. **Test APIs Using Thunder Client or Postman**

---

## 🛠️ How to Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
