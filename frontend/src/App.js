import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import Checkout from './Components/Checkout/Checkout';
import men_banner from './Components/Assest/banner_mens.png'
import women_banner from './Components/Assest/banner_women.png'
import kids_banner from './Components/Assest/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route exact path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route exact path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route exact path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route exact path='/product' element={<Product />}>
            <Route exact path=':productId' element={<Product />} />
          </Route>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/login' element={<LoginSignUp />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
