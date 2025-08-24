import React, { useState } from 'react';
import { createEvent } from './api';

const MOCK_USER_ID = '68a9f1670e122ef123a78a65'; // Demo user ObjectId from backend

export default function EventTriggerForm() {
  const [targetUserId, setTargetUserId] = useState('');
  const [type, setType] = useState('like');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent({ type, sourceUserId: MOCK_USER_ID, targetUserId });
    setMessage('Event triggered!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', background: '#f7fafc', padding: '1rem', borderRadius: 8, boxShadow: '0 1px 4px #eee' }}>
      <h2 style={{ color: '#2b6cb0', marginBottom: '1rem' }}>Trigger Event</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginRight: '1rem' }}>
          Event Type:
          <select value={type} onChange={e => setType(e.target.value)} style={{ marginLeft: '0.5rem' }}>
            <option value="like">Like</option>
            <option value="comment">Comment</option>
            <option value="follow">Follow</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Target User ID:
          <input value={targetUserId} onChange={e => setTargetUserId(e.target.value)} required style={{ marginLeft: '0.5rem', padding: '0.5rem', borderRadius: 4, border: '1px solid #cbd5e0' }} />
        </label>
      </div>
      <button type="submit" style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 1.5rem', cursor: 'pointer' }}>Trigger</button>
      <div style={{ color: '#38a169', marginTop: '1rem' }}>{message}</div>
    </form>
  );
}
