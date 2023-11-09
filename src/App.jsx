import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/inicio/Home';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/ShoppingCartContext';
import Cart from './components/Cart';
import { Footer } from './components/footer';



function App() {
    const greeting ="Nuestros Diseños";

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/diseno' element={<ItemListContainer greeting={greeting} />}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/contacto' element={<Contacto/>}/>
            <Route exact path='/diseno/:id' element={<ItemDetailContainer />}/>
            <Route exact path='/categoria/:categoria' element={<ItemListContainer greeting={greeting} />}/>
        </Routes>
        <Footer/>
     </CartProvider>
    </BrowserRouter> 
    
    </>
  )
}

export default App
