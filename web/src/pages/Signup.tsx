import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const setUser = useAuthStore((state) => state.setUser);
  const setTokens = useAuthStore((state) => state.setTokens);
  
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Mock successful signup
    const mockUser = {
      id: 'user-789',
      name: name,
      email: email,
      role: 'user',
    };

    setUser(mockUser);
    setTokens('mock-access-token-xyz', 'mock-refresh-token-abc');
    
    // Redirect to profile
    navigate('/profile', { replace: true });
  };

  return (
    <div className="container page-wrapper" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="card" style={{ width: '100%', maxWidth: '420px', padding: '2.5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Create Account</h2>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Join UltimateHealth today
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

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

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

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            Register
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '0.875rem', marginTop: '1.5rem', marginBottom: 0 }}>
          Already have an account? <Link to="/login" style={{ fontWeight: 600 }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
