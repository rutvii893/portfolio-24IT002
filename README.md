# Portfolio - Practical 1: React & Component Architecture

**Course:** Advanced Web Development Frameworks (ITUE301)  
**Semester:** 5th  
**Practical -1:** Introduction to React and Component Architecture  


---

## 📋 Practical Objective

Build a React application using Vite with reusable, independently structured components for a student portfolio page.

## ✅ Requirements Met

- ✓ Created a React app using **Vite** as the build tool
- ✓ Built **6 components** (exceeds minimum of 4):
  - Header.jsx – Hero section with name and tagline
  - Navbar.jsx – Navigation bar with smooth scrolling
  - About.jsx – Bio and educational background
  - Skills.jsx – Skills organized by category
  - Projects.jsx – Featured projects showcase
  - Footer.jsx – Contact and copyright info
- ✓ All components are **independently structured and reusable**
- ✓ **Props** passed to components:
  - `name` prop to Header
  - `skillsByCategory` prop to Skills
  - `email` prop to Footer
  - `themeColor` prop to Header
- ✓ **No code duplication** – each component has a single responsibility
- ✓ Clean **.gitignore** with node_modules excluded
- ✓ Meaningful commit messages describing the work

## 🏗️ Component Architecture

```
App.jsx
├── Navbar.jsx
├── Header.jsx (receives: name, themeColor props)
├── About.jsx
├── Skills.jsx (receives: skillsByCategory prop)
├── Projects.jsx
└── Footer.jsx (receives: email prop)
```

## 🔑 Key Concepts Implemented

- **JSX Syntax** – JavaScript expressions embedded in markup
- **Functional Components** – Stateless, reusable functions returning UI
- **Props** – Data passed from parent to child components
- **Component Composition** – Building a complete UI from smaller pieces
- **Reusability** – Each component can be used independently with different props

## 💻 Technologies Used

- **React 19** – Component-based UI framework
- **Vite 8** – Fast build tool and dev server
- **CSS3** – Styling with Flexbox and Grid
- **Node.js & npm** – Development environment

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   └── Footer.jsx
├── App.jsx
├── index.css
├── main.jsx
└── ...
```

## 🎯 Learning Outcomes

- ✅ Set up React development environment with Vite
- ✅ Create reusable functional components
- ✅ Use props for data flow between components
- ✅ Compose a single-page layout from multiple components
- ✅ Manage component state and understand re-rendering

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Supplementary Tasks Completed

- ✅ Added Navbar component with navigation links
- ✅ Passed array of skills as props and rendered dynamically
- ✅ Added theme color prop to Header with inline styling
- ✅ Extended portfolio with additional Projects component

---

**Student:** Rutvi Arora  
**Roll No:** 24IT002  
**Email:** arorarutvi32@gmail.com
