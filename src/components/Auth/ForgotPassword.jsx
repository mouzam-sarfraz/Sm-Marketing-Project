import React, { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    if (email) {
      setMessage(`Password reset link sent to ${email}`);
      setEmail('');
    } else {
      setMessage('Please enter your email');
    }
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
      <p>{message}</p>
    </form>
  );
}
