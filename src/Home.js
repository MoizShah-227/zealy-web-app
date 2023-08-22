import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
import App from './App'
import Login from './components/Login'
import ChangeLog from './components/Pages/ChangeLog';
import Navbar  from './components/Navbar';
import About from './components/Pages/About';
import Welcome from './components/Pages/Welcome';
import Zealy_Doc from './components/Pages/Zealy_Doc';
import What_is_Zealy from './components/Pages/What_is_Zealy';
import CreateYourCommunity from './components/Pages/CreateYourCommunity';
import CreateYourFirstQuest from './components/Pages/CreateYourFirstQuest';
import DocHome from './components/Pages/DocHome';
import Quests from './components/Pages/Quests';
import UnlockableQuests from './components/Pages/UnlockableQuests';
import LeaderBoard from './components/Pages/LeaderBoard';
import XPTable from './components/Pages/XPTable';
import OrganizeSprint from './components/Pages/OrganizeSprint';
import Reviews from './components/Pages/Reviews';
import ExportingHistory from './components/Pages/ExportingHistory';
import Integrations from './components/Pages/Integrations';
import DiscordActivation from './components/Pages/DiscordActivation';


const Home = () => {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/ChangeLog" element={<ChangeLog/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/Zealy_Doc" element={<Zealy_Doc/>}/>
         
          <Route path="/Zealy_Doc/what_is_zealy" element={<What_is_Zealy/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/Create_your_community" element={<CreateYourCommunity/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/CreateYourFirstQuest" element={<CreateYourFirstQuest/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/DocHome" element={<DocHome/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/Quests" element={<Quests/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/Quests/UnlockableQuests" element={<UnlockableQuests/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/LeaderBoard" element={<LeaderBoard/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/LeaderBoard/XPTable" element={<XPTable/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/LeaderBoard/OrganizeSprint" element={<OrganizeSprint/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/Reviews" element={<Reviews/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/Reviews/ExportingHistory" element={<ExportingHistory/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/Integrations" element={<Integrations/>}/>
          <Route path="/Zealy_Doc/what_is_zealy/Integrations/DiscordActivation" element={<DiscordActivation/>}/>





        </Routes>
      </Router>
    </div>
  )
}

export default Home
