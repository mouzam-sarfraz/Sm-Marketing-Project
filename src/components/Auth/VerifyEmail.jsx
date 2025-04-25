import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
  const navigate = useNavigate();

  const handleContinue = () => {
    alert('Email verified successfully!');
    navigate('/social-connections');
  };

  return (
    <div>
      <h2>Verify Your Email</h2>
      <p>Please check your email and click the verification link.</p>
      <button onClick={handleContinue}>I have verified my email</button>
    </div>
  );
}
