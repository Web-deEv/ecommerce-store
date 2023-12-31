import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';


// Import your Shop, Product, Cart, and LoginSignup components
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import ShopCategory from './pages/ShopCategory';


import men_banner from  './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'





function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar/>
        
        
        <Routes>
        {/* <Route
          path="/"
          element={<Navigate to="/Shop" />} />
          For the main shop page */}


          
           <Route path="/" element={<Shop />} />
           <Route path="/shop" element={<Shop />} />
          {/* For shop categories */}
          <Route path="/mens" element={<ShopCategory banner = {men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory  banner = {women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner = {kid_banner} category="kid" />} />

          {/* For product */}
          <Route path="product/:productId" element={<Product />} />

          {/* For cart */}
          <Route path="/cart" element={<Cart />} />

          {/* For login/signup */}
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        
        {/* Display the footer for all routes */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
