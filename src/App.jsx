import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    const greeting ="Hello World";

  return (
    <>
      <NavBar />

      <ItemListContainer greeting={greeting} />
      
    </>
  )
}

export default App
