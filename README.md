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
3. Set up the MySQL database

- Make sure MySQL is installed and the MySQL server is running on your system
- Create a new database called `movie_db`
- Import the SQL file found in the backend folder:

You can import the database using either:

**Terminal:**
```bash
mysql -u root -p movie_db < backend/database/movies_db.sql
```
(Make sure to run this command from the root of the backend repository (webapp-express), or adjust the path accordingly.)

**Or via MySQL Workbench:**

**Option A — “Run SQL Script”**

- Open MySQL Workbench
- Make sure your local MySQL server is running and accessible
- Select the `movie_db` schema in the sidebar
- Go to **File > Run SQL Script...**
- Select `movies_db.sql` (from `backend/database/`)
- Click “Run”

**Option B — “Data Import / Restore”**

- Open MySQL Workbench
- Go to **Server > Data Import**
- Select **"Import from Self-Contained File"**
- Choose the file `movies_db.sql`
- Choose or create the schema `movie_db` as the target
- Click “Start Import”

4. **Configure environment variables**

Create a `.env` file inside the `webapp-express/backend/` directory with the following content:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=movie_db
PORT=3000
```

> Replace `your_mysql_password` with your actual MySQL root password.

5. Start the backend (`npm run dev`) 
6. Start the frontend (`npm run dev`) 
7. Navigate to the front page with the url provided by vite in the client App (`http://localhost:5173/`)

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