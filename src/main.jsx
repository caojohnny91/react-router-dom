import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// To add React Router, the first step is installing the package.

// Begin by installing the react-router-dom package using npm:

// npm i react-router-dom
// Copy
// Setting up React Router
// With react-router-dom installed, the next step is to set it up in our project.

// We’ll start by importing BrowserRouter in our entry file, typically src/main.jsx. BrowserRouter is a component in React Router that enables navigation. It allows your app to update the URL and display different pages without reloading the whole page.

// Add the following to src/main.jsx:

// // src/main.jsx
// import { BrowserRouter } from 'react-router-dom';
// src/main.jsx
// Wrap App within <BrowserRouter> to enable routing:
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )
