import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const Admin: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  if (user?.role !== 'admin') {
    return (
      <div className="container page-wrapper" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div className="card" style={{ maxWidth: '480px', padding: '2.5rem', textAlign: 'center' }}>
          <div style={{
            fontSize: '3rem',
            color: 'rgb(239, 68, 68)',
            marginBottom: '1rem'
          }}>
            &times;
          </div>
          <h2 style={{ marginBottom: '1rem' }}>Access Denied</h2>
          <p style={{ marginBottom: '2rem' }}>
            You do not have administrative privileges. Please log in with an administrator account to access this section.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/profile" className="btn btn-secondary">
              Go to Profile
            </Link>
            <Link to="/login" className="btn btn-primary">
              Log in as Admin
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-wrapper">
      <div style={{ marginBottom: '2.5rem' }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          color: 'hsl(var(--accent))',
          backgroundColor: 'hsla(var(--accent), 0.1)',
          padding: '0.25rem 0.5rem',
          borderRadius: '4px',
          display: 'inline-block',
          marginBottom: '0.5rem'
        }}>
          System Console
        </span>
        <h1>Admin Control Panel</h1>
        <p>Monitor patient registries, update curated articles, and configure system integrations.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginBottom: '3rem' }}>
        <div className="card">
          <h3 style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', fontWeight: 600 }}>Total Accounts</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 700, color: 'hsl(var(--primary))', margin: '0.5rem 0 0' }}>1,248</p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', fontWeight: 600 }}>Active Sessions</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 700, color: 'hsl(var(--accent))', margin: '0.5rem 0 0' }}>84</p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', fontWeight: 600 }}>API Success Rate</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#22c55e', margin: '0.5rem 0 0' }}>99.94%</p>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Recent Audit Logs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { id: 1, action: 'User login success', user: 'jane@example.com', ip: '192.168.1.45', time: '2 mins ago' },
            { id: 2, action: 'Updated Article #3', user: 'admin@ultimatehealth.com', ip: '10.0.4.12', time: '14 mins ago' },
            { id: 3, action: 'Token exchange completed', user: 'john@example.com', ip: '192.168.1.189', time: '1 hr ago' },
          ].map(log => (
            <div key={log.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.75rem',
              borderRadius: '6px',
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              fontSize: '0.85rem',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <div>
                <strong style={{ color: 'hsl(var(--foreground))' }}>{log.action}</strong>
                <span style={{ color: 'hsl(var(--muted-foreground))', marginLeft: '0.5rem' }}>by {log.user}</span>
              </div>
              <div style={{ color: 'hsl(var(--muted-foreground))' }}>
                <span>{log.ip}</span> &bull; <span>{log.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
