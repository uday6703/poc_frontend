

import NotificationList from './NotificationList';
import EventTriggerForm from './EventTriggerForm';
import './App.css';

function App() {
  return (
    <div className="App" style={{ background: '#f6f8fa', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', color: '#2d3748' }}>Insyd Notification POC</h1>
        <EventTriggerForm />
        <NotificationList />
      </div>
    </div>
  );
}

export default App;
