// import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import News from './components/News'
import Filter from './components/Filter';
import Try from './components/Try'
import Newcommunities from './components/New_communities';
import Featuredcommunities from './components/Featured_communities';
function App() {
  return (
    <div className='contain-components'>
    <Navbar/>
    <Header/>
    <News/>
    <Filter/>
    <Newcommunities/>
    <Featuredcommunities/>
    </div>
  );
}

export default App;
