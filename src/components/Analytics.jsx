import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Analytics() {
  const navigate = useNavigate();

  const dummyAnalytics = [
    { id: 1, platform: 'Facebook', views: 1200, likes: 300, shares: 45 },
    { id: 2, platform: 'LinkedIn', views: 850, likes: 200, shares: 30 },
    { id: 3, platform: 'Twitter', views: 600, likes: 150, shares: 20 },
  ];

  const goToScheduler = () => {
    navigate('/scheduler');
  };

  return (
    <div>
      <h2>Analytics</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Platform</th>
            <th>Views</th>
            <th>Likes</th>
            <th>Shares</th>
          </tr>
        </thead>
        <tbody>
          {dummyAnalytics.map((data) => (
            <tr key={data.id}>
              <td>{data.platform}</td>
              <td>{data.views}</td>
              <td>{data.likes}</td>
              <td>{data.shares}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <button onClick={goToScheduler}>Go to Post Scheduler</button>
    </div>
  );
}
