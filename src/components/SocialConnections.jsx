import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SocialConnections() {
  const [connections, setConnections] = useState({
    facebook: false,
    linkedin: false,
    twitter: false,
  });

  const navigate = useNavigate();

  const handleConnect = (platform) => {
    setConnections({ ...connections, [platform]: true });
    alert(`${platform.charAt(0).toUpperCase() + platform.slice(1)} connected!`);
  };

  const handleNext = () => {
    navigate('/analytics');
  };

  return (
    <div>
      <h2>Connect Your Social Media</h2>

      <button onClick={() => handleConnect('facebook')} disabled={connections.facebook}>
        {connections.facebook ? 'Facebook Connected' : 'Connect Facebook'}
      </button>

      <button onClick={() => handleConnect('linkedin')} disabled={connections.linkedin}>
        {connections.linkedin ? 'LinkedIn Connected' : 'Connect LinkedIn'}
      </button>

      <button onClick={() => handleConnect('twitter')} disabled={connections.twitter}>
        {connections.twitter ? 'Twitter Connected' : 'Connect Twitter'}
      </button>

      <br /><br />
      <button onClick={handleNext}>Go to Analytics</button>
    </div>
  );
}
