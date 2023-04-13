
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Font from 'react-font';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/entrance/login';
import Register from './pages/entrance/Register';
import Home from './pages/Home';
function App() {
  return (
    <Font family='Poppins' weight={400}>
      <BrowserRouter>
        <Routes>
            <Route path='/login'element={<Login />}/>
            <Route path='/register'element={<Register />}/>
            <Route path='/cart'element={<Cart />}/>
            <Route path='/shop'element={<Shop />}/>
            <Route path='/'element={<Home />}/>
            
        </Routes>
      </BrowserRouter>
      </Font>
  );
}

export default App;
