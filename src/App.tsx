// import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import News from './components/News'
import Filter from './components/Filter';
function App() {
  return (
    <div className=''>
    <Navbar/>
    <Header/>
    <News/>
    <Filter/>
    </div>
  );
}

export default App;
