import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with:\nEmail: ${email}\nPassword: ${password}`);
    navigate('/social-connections');
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <ul><input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /></ul>
      <button type="submit">Login</button>
    </form>
  );
}
