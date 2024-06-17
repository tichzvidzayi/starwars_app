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

git clone https://github.com/tichzvidzayi/starwars_app.git

## Step 2
cd star-wars-app

## Step 3
npm install

## Step 4
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



### Description of the Chosen API

The Star Wars API (SWAPI) is a popular RESTful API that provides comprehensive data about the Star Wars universe, including information on characters (people), planets, starships, vehicles, species, and films. It is a free and open-source API that offers endpoints for retrieving various categories of data in JSON format. 

In this project, the SWAPI was used to fetch and display data for three specific categories: People, Planets, and Starships. The `axios` library was utilized to make HTTP GET requests to these endpoints:

- `https://swapi.dev/api/people/` for characters
- `https://swapi.dev/api/planets/` for planets
- `https://swapi.dev/api/starships/` for starships


### Assumptions Made During Development

1. **Basic Data Structure:** It was assumed that the structure of the data returned by the API would remain consistent, with fields such as `name` for characters and planets, and `name` or `title` for starships.
2. **Static Categories:** Only three categories (People, Planets, Starships) were chosen to keep the application focused and straightforward. Additional categories could be added similarly.
3. **Error Handling:** Basic error handling was implemented to log errors to the console. More sophisticated error handling and user feedback (like displaying error messages in the UI) could be added with more time.
4. **Initial State:** Users must select a category to fetch and display data.

### Trade-offs or Limitations Due to Time Constraints

1. **UI/UX Design:** The UI design was kept simple and functional due to time constraints. With more time, the UI could be enhanced with better styling, animations, and a more polished user experience.
2. **Comprehensive Error Handling:** Error handling was minimal, mainly logging errors to the console. In a production application, more robust error handling and user notifications would be necessary.
3. **Pagination and Loading State:** The SWAPI returns paginated data, but for simplicity, pagination handling was not implemented. Additionally, a loading indicator could be added to improve the user experience during data fetching.
4. **Testing:** Basic functionality was tested manually, but automated tests (unit tests, integration tests) were not included. Adding tests would be crucial for ensuring code reliability and maintainability.
5. **Advanced Data Manipulation:** The application displays raw data as fetched from the API. With more time, data manipulation and display enhancements (e.g., sorting, filtering) could be implemented.
6. **Performance Optimization:** The app was not optimized for performance. Techniques such as lazy loading and code splitting could be added to enhance performance.


## Improvements 

- Search Functionality: Allow users to search for specific Star Wars characters, planets, etc., by implementing a search bar with live search capabilities.

- Filtering and Sorting: Add options for users to filter and sort the data based on different criteria such as name, date, category, etc.

- Pagination: Implement pagination to handle large datasets more efficiently and improve the user experience.

- Use of TypeScript to avoid common errors

- Favorites or Bookmarks: Allow users to mark items as favorites or add them to bookmarks for easy access later.