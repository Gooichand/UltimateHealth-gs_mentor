import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState<'user' | 'admin'>('user');
  
  const setUser = useAuthStore((state) => state.setUser);
  const setTokens = useAuthStore((state) => state.setTokens);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve origin URL if redirected by ProtectedRoute, otherwise go to /profile
  const from = (location.state as any)?.from?.pathname || '/profile';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Mock successful authentication
    const mockUser = {
      id: role === 'admin' ? 'admin-123' : 'user-456',
      name: role === 'admin' ? 'Dr. Elizabeth Thorne' : 'Jane Doe',
      email: email,
      role: role,
    };

    setUser(mockUser);
    setTokens('mock-access-token-xyz', 'mock-refresh-token-abc');
    
    // Redirect back to original destination
    navigate(from, { replace: true });
  };

  const handleQuickLogin = (selectedRole: 'user' | 'admin') => {
    const mockEmail = selectedRole === 'admin' ? 'admin@ultimatehealth.com' : 'user@ultimatehealth.com';
    setEmail(mockEmail);
    setPassword('password123');
    setRole(selectedRole);
  };

  return (
    <div className="container page-wrapper" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="card" style={{ width: '100%', maxWidth: '420px', padding: '2.5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Sign In</h2>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Access your personalized health records
        </p>

        {error && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgb(239, 68, 68)',
            color: 'rgb(239, 68, 68)',
            padding: '0.75rem',
            borderRadius: 'var(--radius)',
            fontSize: '0.875rem',
            marginBottom: '1.5rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Role Type
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value as 'user' | 'admin')}>
              <option value="user">Regular User</option>
              <option value="admin">Administrator / Doctor</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            Sign In
          </button>
        </form>

        <div style={{ margin: '1.5rem 0', textAlign: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))' }}>Or quick sign-in:</span>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', justifyContent: 'center' }}>
            <button type="button" className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={() => handleQuickLogin('user')}>
              Demo User
            </button>
            <button type="button" className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={() => handleQuickLogin('admin')}>
              Demo Admin
            </button>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.875rem', marginTop: '1.5rem', marginBottom: 0 }}>
          Don't have an account? <Link to="/signup" style={{ fontWeight: 600 }}>Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
