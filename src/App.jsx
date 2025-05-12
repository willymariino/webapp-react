import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../Layouts/defaultLayout"

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route Component={DefaultLayout}>
            <Route index Component={Homepage} />



          </Route>



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
