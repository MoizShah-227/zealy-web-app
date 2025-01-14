import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import News from './components/News'
import Filter from './components/Filter';
import Try from './components/Try'
import Newcommunities from './components/New_communities';
import Featuredcommunities from './components/Featured_communities';
import Browse from "./components/Browse";
import TrendyCommunities from "./components/Trendy_communities";
import UpcomingCommunities from "./components/Upcoming_communities";
import Future from "./components/Future";
import Footer from "./components/Footer";
import Login from './components/Login';


function App() {
  return (

    <div className='contain-components'>  
    <Navbar/>
    <Header/>
    <News/>
    <Filter/>
    <Newcommunities/>
    <Featuredcommunities/>
    <Browse/>
    <TrendyCommunities/>
    <UpcomingCommunities/>
    <Future/>
    <Footer/>
    </div>
    
  );
}

export default App;
