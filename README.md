# 💡 NoteTrack: A Comprehensive MERN Stack Note-Taking Application

## 🎯 Project Overview

**NoteTrack** is a beginner-friendly, full-stack **note-taking application** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
This project demonstrates the creation and deployment of a **fully functional REST API** alongside a **modern, responsive web application**.

Users can **create, read, update, and delete (CRUD)** notes, each containing a title and description (content).  
The design is fully **responsive**, ensuring an excellent experience across all devices.

---

## 🛠️ Tech Stack & Key Technologies

| Category | Technology | Role / Detail |
|-----------|-------------|----------------|
| **Backend** | Node.js | JavaScript runtime environment. |
| **Web Framework** | Express (v4.x) | Handles routing, middleware, and server logic. |
| **Database** | MongoDB | NoSQL database for flexible document-based storage. |
| **Database ODM** | Mongoose | Connects to MongoDB, enforces schema validation. |
| **Frontend** | React (via Vite) | Modern frontend UI library for building components. |
| **Styling** | Tailwind CSS & Daisy UI | Utility-first CSS framework and component library for fast, themed design. |
| **HTTP Client** | Axios | Simplified and structured HTTP requests between client and server. |

---

## 🌟 Key Skills and Concepts Demonstrated

### 1. Robust API Development and Architecture
- **RESTful Design:** Built a functional REST API using HTTP methods (GET, POST, PUT, DELETE).
- **Endpoint & Status Codes:** Implemented and managed standard HTTP responses:
  - `200 OK`, `201 Created`, `404 Not Found`, `429 Too Many Requests`, `500 Internal Server Error`
- **Controller/Route Separation:** Followed clean architecture principles for maintainability.
- **Development Workflow:** Integrated `nodemon` for automatic server reload during development.

---

### 2. Security and Middleware Implementation
- **Rate Limiting:** Added rate-limiting using **Upstash/Redis** to mitigate abuse and prevent DDoS.
  - Uses status code `429 Too Many Requests` when limits are exceeded.
- **Environment Security:** Managed secret keys and MongoDB URIs via `.env` files using `dotenv`.
- **Custom Middleware:** Implemented reusable middleware for logging, validation, and error handling.
- **CORS Management:** Configured proper CORS to allow safe cross-domain communication between client and server.

---

### 3. Data Modeling and Database Connection
- **Mongoose Schema Validation:** Defined strict schemas requiring `title` and `content`.
- **Timestamps:** Automatically included `createdAt` and `updatedAt` for lifecycle tracking.
- **NoSQL Expertise:** Showcased understanding of MongoDB’s flexibility and schema-less structure.
- **Connection Handling:** Ensured Express server only starts after a successful MongoDB connection, preventing runtime failures.

---

### 4. Deployment and Production Readiness
- **Single-Domain Deployment:** Served the optimized React build from the Express backend for unified hosting.
- **Build Automation:** Created root-level scripts to automate install/build/start for both backend and frontend.
- **Dynamic API URLs:** Managed environment-specific Axios base URLs via Vite’s `import.meta.env`.
- **Deployment Platform:** Deployed to [Render.com](https://render.com) with continuous integration setup.

---

## 💻 Local Installation & Setup

### Prerequisites
- Node.js (LTS version recommended)
- MongoDB (Atlas or local)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/VSV24/NoteTrack-MERN.git

