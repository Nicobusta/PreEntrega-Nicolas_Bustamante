import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    const greeting ="Nuestros Diseños";

  return (
    <>
      <NavBar />

       <ItemListContainer greeting={greeting} /> 

      <ItemDetailContainer />
      
    </>
  )
}

export default App
