# ⚡ SwiftTask: The Real-time Journey

![SwiftTask Preview](/public/images/Home.png)

## 🌟 Overview
**SwiftTask** is a modern, real-time task and productivity management application designed for speed and human-friendly feedback. It bridges the gap between thought and action, ensuring that your workflow is never interrupted by a page refresh.

SwiftTask is built with the "Humanity" principle—focusing on fluid animations, instant database syncing, and meaningful data visualization.

---

## 🚀 Key Features

- 🔄 **Real-time Sync** Task updates, status changes, and comments are synchronized instantly across all devices using **Supabase Postgres Changes**. No refresh required.

- ⚡ **Optimistic UI** Actions like deleting a task or updating a status happen instantly in the UI using React's `useOptimistic` hook, while the database syncs silently in the background.

- 📊 **Productivity Pulse** Interactive and animated bar charts powered by **Recharts** that visualize your rogress (To Do, In Progress, Completed).

- 🔐 **Secure Authentication** Full user lifecycle management (Signup, Login, Logout) powered by **Supabase Auth**.

- 🎨 **Fluid Motion** A dark-mode ready interface built with **Tailwind CSS** and physics-based animations using **Framer Motion**.

---

## 🖼️ Screenshots

### Dashboard Preview
![Dashboard Preview](/public/images/dashboard.png)
*Real-time statistics and productivity charts.*

### Task List Preview
![Task List Preview](/public/images/tasks.png)
*Interactive task management with color-coded status pills.*

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 19**: A JavaScript library for building user interfaces.
- 🎨 **Tailwind CSS v4**: A utility-first CSS framework for rapid UI development.
- 📝 **React Hook Form**: A library for managing form state and validation in React.
- 📊**Recharts** (Data Visualization)
- 🎞️**Framer Motion** (Animations)
- 🧑🏽‍🦱**Lucide React** (Icons)

### Backend

- 🗄️ **Supabase**: An open-source backend-as-a-service (BaaS) that provides a scalable.

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/swifttask.git](https://github.com/Ahmed-abdisalaam-ahmed/TaskManger-project.git)
   cd swifttask
    ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Create a `.env` file in the root directory with your Supabase credentials**:
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Start the development server**:
   ```
   npm run dev
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📧 Contact

- 📧 Ahmed-Shehab - [shehabeldin70@gmail.com](mailto:shehabeldin70@gmail.com)


## 🙏 Conclusion
- Thanks to the Dugsiiye Team and especially our teacher Mc hoamuda

Made with ❤️ using React, Vite, and Supabase react-with-supabase