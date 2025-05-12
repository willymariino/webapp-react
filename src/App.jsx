import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../Layouts/defaultLayout"
import Homepage from "../pages/homepage"

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route Component={DefaultLayout}>
            <Route index Component={Homepage} />
            <Route path="/homepage" Component={Homepage} />




          </Route>



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
