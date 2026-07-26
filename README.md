# Portfolio - Practical 1, 2 & 3: React, Routing & API Integration

**Course:** Advanced Web Development Frameworks (ITUE301)  
**Semester:** 5th  

---

## Practical Objectives

This project is a progressive student portfolio built with React and Vite. It covers three main practicals:
1. **Component Architecture**: Building a responsive layout with independent, reusable components.
2. **State Management & Routing**: Creating a multi-route application (Home, Projects, Contact).
3. **API Integration (New!)**: Consuming a public REST API and handling asynchronous data with loading and error states.

## Practical 3: API Integration & Async Data

In this phase, we took the static Projects page and made it dynamic by hooking it up to a real backend server!

### What's New?
- **Live Data**: The Projects page now automatically fetches my actual public repositories straight from the **GitHub REST API** (`https://api.github.com/users/rutvii893/repos`).
- **Loading State**: Since fetching data from the internet takes time, I added a friendly `<Spinner />` component that shows up while the app is waiting for the data to arrive.
- **Error Handling**: Sometimes the internet breaks! If the API call fails, the app catches the error and displays a custom `<ErrorMessage />` component, complete with a "Try Again" button so the user doesn't get stuck.
- **Smart Searching**: I added a real-time search bar that filters the fetched repositories by their name instantly.

### Technical Highlights
- Used React's `useEffect` hook with an empty dependency array `[]` to ensure the API is only called once when the component first loads.
- Used the `fetch()` Promise API with `.then()`, `.catch()`, and `.finally()` blocks for clean, readable asynchronous logic.
- Kept the UI looking sharp by mapping the live data directly into the existing CSS grid classes from Practical 1.

## How to Run

1. Make sure you have Node.js installed.
2. Clone this repository to your local machine.
3. Open your terminal in the project folder and run:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Navigate to the **Projects** tab to see the live API integration in action! No API keys or extra configuration needed.

---

**Student:** Rutvi Arora  
**Roll No:** 24IT002  
**Email:** arorarutvi32@gmail.com
