import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<div>Cart</div>} />
          <Route path="/checkout" element={<div>Checkout</div>} />

          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/blog/:id" element={<div>Blog Post</div>} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/:rest*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
