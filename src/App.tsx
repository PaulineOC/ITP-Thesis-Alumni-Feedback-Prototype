import React from 'react';

import { BrowserRouter, Routes,  Route, Navigate } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';

import Welcome from './pages/Welcome';
import SignupConfirmation from './pages/SignupConfirmation';
import ChooseObjects from './pages/ChooseObjects';
import ObjectDetail from './pages/ObjectDetail';
import MoreInfo from './pages/MoreInfo';
import RoomBuilderV1 from './pages/RoomBuilder-V1';
import RoomBuilder from './pages/RoomBuilder';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <div className="App">
          <Routes>
            <Route
                path="/"
                element={<Navigate to="/welcome" replace />}
            />
            <Route path = "/welcome" element={<Welcome/>}/>
            <Route path = "/signup-confirmation" element={<SignupConfirmation/>}/>
            <Route path = "/choose-objects" element={<ChooseObjects/>}/>
            <Route path = "/more-info/:objectId" element={<ObjectDetail/>}/>

            <Route path = "/room-builder" element={<RoomBuilder/>}/>
            <Route path = "/room-builder-v1" element={<RoomBuilderV1/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
