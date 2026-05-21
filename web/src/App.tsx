import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { useAuthStore } from './store/authStore';
import ProtectedRoute from './components/ProtectedRoute';

// Import Pages
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

const NavigationHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem', color: 'hsl(var(--foreground))' }}>
          <span style={{ color: 'hsl(var(--primary))' }}>✦</span> UltimateHealth
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link to="/" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Home</Link>
          <Link to="/articles" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Articles</Link>
          {user && (
            <>
              <Link to="/profile" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Profile</Link>
              <Link to="/admin" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Admin</Link>
            </>
          )}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme} 
            className="btn btn-secondary" 
            style={{ padding: '0.5rem', borderRadius: '50%', width: '36px', height: '36px', minWidth: '36px' }}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', display: 'inline-block' }}>
                Hi, <strong>{user.name.split(' ')[0]}</strong>
              </span>
              <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavigationHeader />
        
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>

        <footer style={{ borderTop: '1px solid hsl(var(--border))', padding: '1.5rem 0', backgroundColor: 'hsl(var(--card))' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))' }}>
              &copy; {new Date().getFullYear()} UltimateHealth. All rights reserved.
            </span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))' }}>Privacy Policy</a>
              <a href="#" style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))' }}>Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
