import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
      <div className='app'>
        <Header/>
        <div className='content'>CONTENT</div>
        <Footer/>
      </div>

  );
}

export default App;
