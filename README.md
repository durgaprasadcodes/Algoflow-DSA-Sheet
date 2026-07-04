# 🚀 AlgoFlow — Modern DSA Practice Tracker

<p align="center">
  <strong>A modern, fully responsive React application for tracking your Data Structures & Algorithms journey.</strong>
</p>

<p align="center">
  Practice smarter • Track progress • Stay consistent
</p>

<p align="center">
  <a href="https://algoflow-dsa-sheet.vercel.app/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Project-blue?style=for-the-badge" />
  </a>
  <a href="https://github.com/durgaprasadcodes/Algoflow-DSA-Sheet">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" />
  </a>
</p>

---

# 📸 Preview

| Home Page | Problems Dashboard |
|------------|-------------------|
| <img src="https://github.com/user-attachments/assets/7c62eb3c-51e5-4dc9-9e87-d3b06ef4952c" width="100%"> | <img src="https://github.com/user-attachments/assets/bebd705f-2969-4c1f-ab05-36a069261b8f" width="100%"> |
| Profile Dashboard | Topic Problems |
| <img src="https://github.com/user-attachments/assets/94cf9e59-818d-4be1-8672-b20af082bae1" width="100%"> | <img width="400" height="220.5" alt="Image" src="https://github.com/user-attachments/assets/61eb322d-a6fa-4a8c-bea5-b70fe6cbfdff" /> |

---

# 🌐 Live Demo

### 🔗 https://algoflow-dsa-sheet.vercel.app/

---

# ✨ Features

### 🔐 Authentication (Mock)

- Login using username & email
- User session stored in LocalStorage
- Automatic login persistence

---

### 🛡 Protected Routes

Only authenticated users can access:

- Problems
- Topic Pages
- Profile Dashboard

Implemented using:

- React Router
- `<Outlet />`
- Route Guards

---

### 📚 15+ DSA Topics

Organized problem sheets including:

- Arrays
- Strings
- Linked List
- Stack
- Queue
- Trees
- Binary Search Trees
- Graphs
- Dynamic Programming
- Greedy
- Heap
- Sliding Window
- Two Pointers
- Binary Search
- Backtracking
- and more...

---

### 📈 Progress Tracking

Track every solved problem with:

- ✅ Checkbox persistence
- 📊 Live Progress Bar
- 💾 LocalStorage
- 📌 Completed counter
- 📄 Recent solved problems

---

### 🔍 Search

Instantly search problems inside every topic.

---

### 👤 Profile Dashboard

- Edit Profile
- View Progress
- Recent Activity
- Pagination
- Responsive Design

---

### 🎬 Scroll Reveal Animations

Built using the native

> IntersectionObserver API

No animation libraries required.

---

### 📱 Fully Responsive

Supports:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥 Desktop

---

### 🚫 Custom 404 Page

Gracefully handles invalid routes.

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React.js |
| Routing | React Router v6 |
| Notifications | React Toastify |
| Animation | DotLottie React |
| Storage | LocalStorage |
| Build Tool | Vite |
| Styling | CSS3 |

---

# 📁 Project Structure

```text
src/
│
├── App.jsx
├── main.jsx
├── Base.css
│
├── assets/
│
├── data/
│   ├── data.js
│   └── data_topics.js
│
└── components/
    ├── Home.jsx
    ├── Navbar.jsx
    ├── Login.jsx
    ├── Problems.jsx
    ├── ProblemType.jsx
    ├── Profile.jsx
    ├── Pagination.jsx
    ├── ProtectedRoute.jsx
    ├── Notfound.jsx
    └── all_css_codes/
```

---

# 🧭 Routing

| Route | Access |
|--------|--------|
| `/` | Public |
| `/login` | Public |
| `/problems` | Protected |
| `/problems/:slug` | Protected |
| `/profile` | Protected |
| `*` | Public |

---

# 🔐 Authentication Flow

1. User logs in.
2. User information is stored in LocalStorage.
3. ProtectedRoute checks authentication.
4. Unauthorized users are redirected to Login.
5. Navbar updates automatically.

> ⚠️ This is a frontend-only authentication simulation intended for demonstration purposes.

---

# 📊 Progress Tracking Logic

Each completed problem updates:

- ✅ Completed Count
- ✅ checkedProblems Array
- ✅ Topic-wise Completion Map
- ✅ Recent Activity

Everything is automatically persisted using LocalStorage.

---

# 🚀 Installation

```bash
git clone https://github.com/durgaprasadcodes/Algoflow-DSA-Sheet.git

cd Algoflow-DSA-Sheet

npm install

npm run dev
```

Open

```
http://localhost:5173
```

---


# 🤝 Contributing

Contributions, issues and feature requests are always welcome!

If you have an idea to improve AlgoFlow, feel free to fork the repository and submit a Pull Request.

---

# 📄 License

Licensed under the **MIT License**.

---

# 💙 Acknowledgements

AlgoFlow was built as a personal project to practice:

- React.js
- React Router
- State Management
- LocalStorage
- Responsive Design
- Component Architecture
- Building production-style frontend applications

If you found this project helpful, don't forget to ⭐ the repository!
