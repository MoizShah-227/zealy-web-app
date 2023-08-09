// import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import News from './components/News'
import Filter from './components/Filter';
import RightSilder from './components/RightSilder';
import Try from './components/Try'
import Newcommunities from './components/New_communities';
function App() {
  return (
    <div className='contain-components'>
    <Navbar/>
    <Header/>
    <News/>
    <Filter/>
    <Newcommunities/>
    </div>
  );
}

export default App;
