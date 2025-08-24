import React, { useEffect, useState } from 'react';
import { fetchNotifications } from './api';

const MOCK_USER_ID = '68a9f1670e122ef123a78a65'; // Demo user ObjectId from backend

export default function NotificationList() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const poll = () => {
      fetchNotifications(MOCK_USER_ID).then(setNotifications);
    };
    poll();
    const interval = setInterval(poll, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2 style={{ color: '#3182ce', marginBottom: '1rem' }}>Notifications</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notifications.length === 0 && <li style={{ color: '#888' }}>No notifications yet.</li>}
        {notifications.map(n => (
          <li key={n._id} style={{ background: n.status === 'unread' ? '#ebf8ff' : '#f7fafc', border: '1px solid #e2e8f0', borderRadius: 8, marginBottom: 12, padding: '1rem' }}>
            <div style={{ fontWeight: 'bold', color: '#2b6cb0' }}>{n.type.charAt(0).toUpperCase() + n.type.slice(1)}</div>
            <div style={{ margin: '0.5rem 0' }}>{n.content}</div>
            <div style={{ fontSize: 12, color: '#718096' }}>{new Date(n.timestamp).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
