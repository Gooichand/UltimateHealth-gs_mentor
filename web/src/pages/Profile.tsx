import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const Profile: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container page-wrapper">
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            fontWeight: 700
          }}>
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{user?.name}</h1>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'hsl(var(--accent))',
              backgroundColor: 'hsla(var(--accent), 0.1)',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px'
            }}>
              {user?.role || 'User'}
            </span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontWeight: 600, color: 'hsl(var(--muted-foreground))' }}>Email Address:</span>
            <span>{user?.email}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontWeight: 600, color: 'hsl(var(--muted-foreground))' }}>User ID:</span>
            <code style={{ fontSize: '0.9rem', color: 'hsl(var(--accent))' }}>{user?.id}</code>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontWeight: 600, color: 'hsl(var(--muted-foreground))' }}>Account Status:</span>
            <span style={{ color: '#22c55e', fontWeight: 600 }}>Active</span>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            Back to Home
          </button>
          <button className="btn btn-primary" style={{ backgroundColor: 'rgb(239, 68, 68)', color: 'white' }} onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
