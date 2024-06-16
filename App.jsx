// App.jsx
import React from 'react';
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact';
import TemperaturConverter from './components/temperatur-converter';
import Footer from './components/footer'
import './App.css';



function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Contact/>
      <TemperaturConverter/>
      <Footer />
    </div>
  );
}

export default App;