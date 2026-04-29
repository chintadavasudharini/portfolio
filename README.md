<div align="center">
  
# 🚀 Chintada Vasudharini | Personal Portfolio

**A high-performance, theme-aware professional portfolio built with modern React.**

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

<br />

## 📖 Overview

A premium, highly-interactive personal portfolio designed to showcase my journey, skills, and full-stack projects. Built from the ground up to be blazingly fast and fully responsive, it features a custom **Dark/Sky-Blue Light** theme engine, fluid micro-animations, and a modern glassmorphism aesthetic.

This repository serves as both my digital resume and a demonstration of modern frontend engineering practices.

## ✨ Key Features

- **🌓 Dynamic Theme Architecture:** Seamless transition between an immersive Dark Mode and a crisp, high-contrast Sky-Blue Light Mode.
- **🪄 Cinematic Animations:** Powered by `framer-motion`, featuring scroll-triggered reveals, staggered list animations, and interactive hover states.
- **💎 Glassmorphism UI:** Custom CSS properties rendering frosted glass effects (`backdrop-filter`) overlaid on ambient, dynamic mesh gradients.
- **⚡ Next-Gen Performance:** Bundled with Vite 6 and React 19, achieving near-instant load times.
- **📱 Fully Responsive:** Carefully crafted breakpoints using Tailwind CSS to ensure a native-app feel across mobile, tablet, and desktop devices.
- **✉️ Integrated Contact Flow:** Direct email routing via `EmailJS` without requiring a backend relay.

## 🛠️ Technology Stack

### Core
- **[React 19](https://react.dev/):** UI Component Architecture
- **[Vite 6](https://vitejs.dev/):** Lightning-fast build tooling
- **[React Router DOM 7](https://reactrouter.com/):** Client-side routing

### Styling & Animation
- **[Tailwind CSS v4](https://tailwindcss.com/):** Utility-first styling engine
- **[Framer Motion](https://framer.com/motion):** Physics-based animation library
- **Vanilla CSS:** Custom design tokens, scrollbars, and mesh gradient layers

### Integrations
- **[EmailJS](https://www.emailjs.com/):** Client-side email handling
- **[React Icons](https://react-icons.github.io/react-icons/):** Scalable vector iconography

## 🎯 Featured Work Highlighted

This portfolio acts as the central hub for my technical projects. Some notable systems showcased within:

1. **AI Image Captioning System:** Hugging Face BLIP model integrated via Streamlit.
2. **AWS Cloud Storage Manager:** Secure, presigned-URL S3 bucket management with Flask & Boto3.
3. **Enterprise Inventory Trackers:** Production-ready CRUD web apps built with Flask, SQLite/MySQL, and JWT Authentication.

## 🚀 Local Development

Want to run this portfolio locally? Follow these steps:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chintadavasudharini/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:5173`.*

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Hero, Navbar, Projects, Skills)
├── assets/           # Static assets, images, and global icons
├── App.jsx           # Root layout and theme provider injection
├── index.css         # Global stylesheets, custom properties, and animations
└── main.jsx          # React DOM entry point
```

## 🤝 Let's Connect

Feel free to reach out if you want to collaborate on a project, or just say hi!

<p align="left">
  <a href="https://github.com/chintadavasudharini"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></a>
  <a href="https://linkedin.com/in/chintada-vasudharini"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
</p>

---

<div align="center">
  <p>Designed & Engineered with ❤️ by Chintada Vasudharini</p>
</div>
