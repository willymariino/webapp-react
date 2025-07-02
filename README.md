# Full Stack Blog Platform – Frontend
[![Live Demo](https://img.shields.io/badge/live-demo-brightgreen)](https://webapp-frontend-react.netlify.app/movie-list)

## Project Overview
This project is the frontend of a full stack blog platform built with React, consuming a RESTful API developed in Node.js and backed by a MySQL database. 
It demonstrates core concepts in building a SPA that interacts with a real backend, including HTTP requests, dynamic rendering, and responsive UI.

> **Note:** The backend is not currently deployed online, so the live demo on Netlify will only display the static UI without loading dynamic data.

## Features
- **Home Page & Posts List**: Displays a list of blog posts fetched from the backend API.
- **Single Post Detail**: Dynamic routing to view individual post details.
- **Create Post**: Form to create new posts (when backend is connected).
- **Responsive Layout**: Works across desktop and mobile devices.
- **API Integration**: Built to consume data from a Node.js + Express + MySQL backend.

## Tech Stack
- **React** with React Router
- **Axios** for HTTP requests
- **CSS3** for styling
- **Node.js + Express + MySQL** (backend) [Backend Repo](https://github.com/willymariino/webapp-express.git)
- **Netlify** for client deployment

## Live Demo
[WebApp movies](https://webapp-frontend-react.netlify.app/movie-list)

## How to Run Locally
To run the full stack application on your machine:
1. Clone this repository and the [Backend repository](https://github.com/willymariino/webapp-express.git)
2. Install dependencies in each folder (`npm install`).
3. Start the backend (`npm run dev`) 
4. Start the frontend (`npm run dev`) 
5. Navigate to the front page with the url provided by vite (`http://localhost:5173/`)

## Folder Structure
```
webapp-react/
├── public/
│   └── _redirects
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── layouts/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
```