import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../Layouts/defaultLayout"
import Homepage from "../pages/homepage"
import About from "../pages/about"
import Movie_list from "../pages/movie-list"
import Movie_detail from "../pages/movie_detail"

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route Component={DefaultLayout}>
            <Route index Component={Homepage} />
            <Route path="/homepage" Component={Homepage} />
            <Route path="/about" Component={About} />
            <Route path="/movie-list" Component={Movie_list} />
            <Route path="/movie-list/movie-detail/:id" Component={Movie_detail} />
          </Route>



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
