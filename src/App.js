import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Homepage />} />
        {/* Route for the product page with all sub-routes */}
        <Route path="/product/*" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
