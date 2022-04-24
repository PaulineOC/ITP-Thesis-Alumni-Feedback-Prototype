import React from 'react';

import { BrowserRouter, Routes,  Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';

import Welcome from './pages/Welcome';
import ChooseObjects from './pages/ChooseObjects';
import MoreInfo from './pages/MoreInfo';
import RoomBuilderV1 from './pages/RoomBuilder-V1';
import RoomBuilder from './pages/RoomBuilder';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <div className="App">
          <Routes>
            <Route path = "/welcome" element={<Welcome/>}/>
            <Route path = "/choose-objects" element={<ChooseObjects/>}/>
            <Route path = "//more-info/:objectId" element={<MoreInfo/>}/>

            <Route path = "/room-builder-intro" element={<ChooseObjects/>}/>
            <Route path = "/room-builder-unity" element={<RoomBuilder/>}/>
            <Route path = "/room-builder" element={<RoomBuilderV1/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
