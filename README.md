# Star_wars web app

This is a small React application that fetches data from The Star Wars API and displays it in a user-friendly interface using Vite and Material-UI components


## Features
- Fetches data from The Star Wars API
- Displays data in a styled list/grid format
- Provides basic interactivity (e.g., clicking on an item for more details)
- Implements error handling for API requests
- Uses Material-UI components for a user-friendly interface


## Prerequisites
Node.js (v18.x or higher)
npm (v6.x or higher)
# Installation

## Step 1
Clone the repository:

git clone 

## Step 2
cd star-wars-app

## Step 3
npm install
Step 4
npm run dev


# Folder Structure
star-wars-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── ItemList.jsx
│   │   └── ...
│   ├── api/
│   │   └── swapi.js
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
│
├── .eslintrc.js
├── package.json
└── README.md


# Built With
Vite - Frontend build tool (easier to configure and lightier than webpack )
React - JavaScript library for UI
Material-UI - React UI components library
(material-UI because it is easier to use especially for small projects)
Jest - most common and requires less configuration compared to Mocha etc.
Eslint - helps with identifying and reporting on patterns found in JavaScript code,

## Improvements 

- Search Functionality: Allow users to search for specific Star Wars characters, planets, etc., by implementing a search bar with live search capabilities.

- Filtering and Sorting: Add options for users to filter and sort the data based on different criteria such as name, date, category, etc.

- Pagination: Implement pagination to handle large datasets more efficiently and improve the user experience.
- Use of TypeScript to avoid common errors
- Favorites or Bookmarks: Allow users to mark items as favorites or add them to bookmarks for easy access later.