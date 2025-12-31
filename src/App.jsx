import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './Pages/HomePage/HomePage';
import { ProductsPage } from './Pages/ProductsPage/ProductsPage';
import { ProductDetails } from './Pages/ProductsPage/ProductDetails';
import { ContactPage } from './Pages/ContactPage/ContactPage';
import AddProduct from './Pages/AddProduct/AddProduct';
import ProductTable from './Pages/ProductList/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/add-product/8217524980" element={<ProductTable />} />
      </Routes>
    </Router>
  );
}

export default App;
