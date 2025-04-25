import React, { useState } from 'react';

export default function PostScheduler() {
  const [postContent, setPostContent] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');

  const handleSchedule = (e) => {
    e.preventDefault();
    if (postContent && scheduleDate) {
      alert(`Post Scheduled!\n\nContent: ${postContent}\nDate: ${scheduleDate}`);
      setPostContent('');
      setScheduleDate('');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <form onSubmit={handleSchedule}>
      <h2>Schedule a Post</h2>

      <textarea
        placeholder="Write your post here..."
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        rows="4"
        cols="50"
        required
      />

      <br /><br />

      <input
        type="datetime-local"
        value={scheduleDate}
        onChange={(e) => setScheduleDate(e.target.value)}
        required
      />

      <br /><br />

      <button type="submit">Schedule Post</button>
    </form>
  );
}
