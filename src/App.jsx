import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Dashboard from './components/Dashboard.jsx';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Signup.jsx';
import VerifyEmail from './components/Auth/VerifyEmail.jsx';
import SocialConnections from './components/SocialConnections.jsx';
import Analytics from './components/Analytics.jsx';
import PostScheduler from './components/PostSchedular.jsx';

import ForgotPassword from './components/Auth/ForgotPassword.jsx';


export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/"element={<Dashboard/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password"element={<ForgotPassword/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/social-connections" element={<SocialConnections/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/scheduler" element={<PostScheduler/>}/>
        
      </Routes>
    </Router>
  );
}
