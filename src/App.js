import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import 'assets/scss/style.scss';

import LandingPage from 'pages/LandingPage';
import DetailPage from 'pages/DetailPage';

import Checkout from 'pages/Checkout';


function App() {
  return <div className='App'>

      <Router>
          <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/properties/:id" element={<DetailPage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
      </Router>
    </div>;
}

export default App;
