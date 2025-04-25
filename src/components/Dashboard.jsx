import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Select a module to navigate:</p>
<ul>
 <button onClick={() => navigate('/login')}>Login</button></ul>
     <ul> <button onClick={() => navigate('/signup')}>Sign Up</button></ul>
     <ul>   <button onClick={() => navigate('/forgot-password')}>Forgot Password</button></ul>
     <ul> <button onClick={() => navigate('/verify-email')}>Verify Email</button></ul>
     <ul>  <button onClick={() => navigate('/social-connections')}>Social Connections</button></ul>
     <ul> <button onClick={() => navigate('/analytics')}>Analytics</button></ul>
   <ul>   <button onClick={() => navigate('/scheduler')}>Post Scheduler</button>
      </ul>   </div>
  );
}
