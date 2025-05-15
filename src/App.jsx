import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../Layouts/defaultLayout"
import Homepage from "../pages/homepage"
import About from "../pages/about"
import Movie_list from "../pages/movie-list"
import Movie_detail from "../pages/movie_detail"
import GlobalContext from "../context/globalCotext"
import { useState } from "react"


function App() {

  const [isLoading, setIsLoading] = useState(false)


  return (
    <>

      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
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

      </GlobalContext.Provider>

    </>
  )
}

export default App
