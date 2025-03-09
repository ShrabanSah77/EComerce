# Project Name

A brief description of your project.

## **Table of Contents**

- [Project Setup Guide](#project-setup-guide)
- [Git Commands](#git-commands)
- [Create React App Setup](#create-react-app-setup)
- [Install Tailwind CSS](#install-tailwind-css)
- [Install React Router](#install-react-router)
- [Create Layouts and Pages](#create-layouts-and-pages)
- [Start the Project](#start-the-project)

---

## **Project Setup Guide**

### **Step 1: Create a GitHub Repository**

- Go to [GitHub](https://github.com/) and create a new repository.
- Copy the repository URL (e.g., `https://github.com/username/project-name.git`).

### **Step 2: Initialize Git in the Project**

Once your repository is created on GitHub, run the following commands in your project directory:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/username/project-name.git
git push -u origin main
```
if any changes made on the project 
```bash 
git add .
git commit -m "commit message"
git push
```
create new react project
```bash 
npx create-react-app projectname
cd projectname
code .
npm start


```
Install Tailwind CSS

```bash 
npm install -D tailwindcss@3
npx tailwindcss init
```
make changes on the tailwind.config.js

```bash 

 module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
make changes  onthe index.css
```bash 

@tailwind base;
@tailwind components;
@tailwind utilities;


```
Install React Router

```bash 
 npm install react-router-dom

```
Create Layouts and Pages

```bash 
 src/layouts/MainLayout.jsx
 src/pages/Home.jsx
 src/pages/Login.jsx

 ```
 Step 8: Set Up Routing in App.js
```bash 
 src/App.js
```
Step 9: Start the Project

```bash 
 npm start

```