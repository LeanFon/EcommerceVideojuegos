import ItemDetailComponent from "./components/ItemDetailComponent"
import './App.css'
import "./components/NavBar.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={"🙋‍♀️¡Bienvenido!🙋‍♂️"}/>}/>
          <Route exact path='/item/:id' element={<ItemDetailComponent/>}/>
          <Route exact path="/category/:category"  element={<ItemListContainer greeting={"🙋‍♀️¡Bienvenido!🙋‍♂️"}/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
