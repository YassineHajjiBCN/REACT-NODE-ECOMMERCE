import React from 'react';
import './App.css';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (  
    <BrowserRouter>
  <div className="grid-container">
  <header className="header">
    <div className="brand">
      <Link to="/">The Laden</Link>
      
    </div>
   <div className="header-links">
   <a href="cart.html">Cart</a>
   <a href="singin.html">Sign In</a>
   </div>
 
  </header>
  <main className="main">
    <div className="content">
    <Route path="/products/:id"  component={ProductScreen} />
      <Route path="/" exact={true} component={HomeScreen} />
      
    </div>
  </main>

<footer className="footer"> All right reserved </footer>
</div>
</BrowserRouter>
  );
}

export default App;
