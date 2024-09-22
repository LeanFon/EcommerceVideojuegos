import ItemDetailComponent from "./components/ItemDetailComponent"
import './App.css'
import "./components/NavBar.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartProvider from "./components/CartContext"
import CartView from "./components/CartView"
import GameProvider from "./components/GameContext"
import CheckoutComponent from "./components/CheckoutComponent"

function App() {
  return (
    <>
    <BrowserRouter>
    <GameProvider>
    <CartProvider>
      <NavBar/>
      <Routes>
            <Route exact path='/' element={<ItemListContainer greeting={"🙋‍♀️¡Bienvenido!🙋‍♂️"}/>}/>
            <Route exact path='/item/:id' element={<ItemDetailComponent/>}/>
            <Route exact path="/category/:category"  element={<ItemListContainer greeting={"🙋‍♀️¡Bienvenido!🙋‍♂️"}/>}/>
            <Route exact path='/cart/' element={<CartView/>}/>
            <Route exact path="/checkout/" element={<CheckoutComponent/>}/>
          </Routes>
    </CartProvider>
    </GameProvider>
    </BrowserRouter>
    </>
  )
}

export default App
