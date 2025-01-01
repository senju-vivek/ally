import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/landing-page';
import Home from './Pages/voice-assistant';
import Dashboard from './Pages/dashboard-page';
import App1 from './Pages/App1';
import LiveTranscription from './Pages/socket';
import SpeechToText from './Pages/Trans';
import TranscriptionComponent from './Pages/Trans';
import GCP from './Pages/GCP';
 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/voice-assistant' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/agent/:agentId" element={<App1 />} />
          <Route path='/transcription' element={<LiveTranscription/>}/>
          <Route path='/trans' element={<TranscriptionComponent/>}/>
          <Route path='/gcp' element={<GCP/>}/>
          
        </Routes>
      </BrowserRouter>
       
    </div>
     
  );
}
export default App;