import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    const greeting ="Nuestros Diseños";

  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/diseno' element={<ItemListContainer greeting={greeting} />}/>
          <Route exact path='/contacto' element={<Contacto/>}/>
          <Route exact path='/diseno/:id' element={<ItemDetailContainer />}/>
          <Route exact path='/categoria/:categoria' element={<ItemListContainer greeting={greeting} />}/>



      </Routes>
    </BrowserRouter>
      

      
      
    </>
  )
}

export default App
