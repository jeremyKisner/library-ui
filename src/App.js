import './App.css';
import { useReducer } from "react";
import Navbar from './components/NavBar';
import AddBook from './pages/AddBook';
import Cart from './pages/Cart';
import { cartReducer, initialCartState } from './reducers/cartReducer';
import DeleteBook from './pages/DeleteBook';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home cart={cart} dispatch={dispatch} />}/>
          <Route exact path="/addBook" element={<AddBook />}/>
          <Route exact path="/deleteBook" element={<DeleteBook />}/>
          <Route exact path="/cart" element={<Cart cart={cart} />}/>
          <Route path="*" element={<Home cart={cart} dispatch={dispatch} />}/>
        </Routes>
    </Router>
  )
}

export default App;
