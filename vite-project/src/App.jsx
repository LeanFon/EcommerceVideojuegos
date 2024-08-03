
import './App.css'
import "./components/NavBar.css"
import NavBar from './components/NavBar'
import TitleComponent from './components/TitleComponent'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"🙋‍♀️¡Bienvenido!🙋‍♂️"}/>
    </>
  )
}

export default App
