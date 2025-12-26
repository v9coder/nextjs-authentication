# 🔐 Next.js Authentication System

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=mongodb"/>
  <img src="https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel"/>
</p>

---

## 🚀 Project Overview

A **production-ready full stack authentication system** built using **Next.js App Router**, supporting secure login, signup, email verification, and password reset.

> 🔥 Designed to be **reusable**, **scalable**, and **interview-ready**

🌐 **Live Demo:**  
👉 https://authentication-system-v9.vercel.app

---

## ✨ Features

✅ User Registration & Login  
✅ Secure Password Hashing  
✅ Email Verification (Mailtrap)  
✅ Forgot & Reset Password  
✅ JWT Authentication  
✅ Protected Routes  
✅ Environment-based Configuration  
✅ Clean Architecture  
✅ Production Deployment  

---

## 🛠 Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | Next.js (App Router) |
| Backend | Next.js API Routes |
| Auth | JWT |
| Database | MongoDB |
| Email | Mailtrap |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Deployment | Vercel |

---

## 📁 Folder Structure
```
nextjs-authentication/
│
├── public/ # Static assets
│
├── src/
│ ├── app/
│ │ ├── login/ # Login UI
│ │ ├── signup/ # Signup UI
│ │ ├── reset-password/ # Password reset UI
│ │ ├── api/
│ │ │ ├── auth/ # Auth APIs
│ │ │ ├── forgot-password/
│ │ │ └── reset-password/
│
│ ├── lib/
│ │ ├── db.ts # MongoDB connection
│ │ ├── auth.ts # Auth utilities
│ │ ├── mailer.ts # Email service
│
│ ├── models/
│ │ └── User.ts # User schema
│
├── .env.example
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md

```
---

## 🔐 Authentication Flow

### 🧾 Signup
- User registers
- Password is hashed
- Verification email sent

### 🔑 Login
- Credentials verified
- JWT token generated
- Session created

### 🔁 Forgot Password
- Email submitted
- Secure token sent

### 🔄 Reset Password
- Token validated
- Password updated securely

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

EMAIL_USER=your_mailtrap_username
EMAIL_PASS=your_mailtrap_password
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
```

🚀 Getting Started
1️⃣ Clone the Repository
    git clone https://github.com/v9coder/nextjs-authentication.git
    cd nextjs-authentication

2️⃣ Install Dependencies
    npm install

3️⃣ Setup Environment Variables

    Create a .env file and add the required values.

4️⃣ Run the Application
    npm run dev


📍 Open in browser:

    http://localhost:3000

🧪 Tested Features

    ✔ User Signup
    ✔ Login Authentication
    ✔ Email Verification
    ✔ Forgot Password
    ✔ Reset Password
    ✔ JWT Token Validation
    ✔ MongoDB Integration

🌍 Deployment

    This project is deployed using Vercel.
    
    vercel


Supports:

    CI/CD pipeline

    Environment variables

    Serverless APIs

🚀 Future Enhancements

    🔐 Role-Based Authentication (Admin / User)

    🔑 OAuth (Google / GitHub)

    🔄 Refresh Tokens

    📊 Admin Dashboard

    🔒 Two-Factor Authentication (2FA)

    📦 Convert into NPM Package

👨‍💻 Author
    
        Vinay Pawar
    🚀 Full Stack Developer
    💻 Passionate about building scalable applications
    🌐 GitHub: https://github.com/v9coder

⭐ Support

If you like this project:

    ⭐ Star the repository
    🍴 Fork it
    📢 Share it
