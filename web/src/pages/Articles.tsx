import React from 'react';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Understanding the Foundations of Modern Nutrition',
    excerpt: 'Discover how macronutrients, hydration, and mindful eating habits interact to optimize daily metabolic performance.',
    category: 'Nutrition',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'The Science of Circadian Rhythms & Quality Sleep',
    excerpt: 'Learn the biochemical triggers that govern sleep stages, and how adjusting your light exposure can change your energy levels.',
    category: 'Sleep Science',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Cardiovascular Training: Strength vs. Endurance',
    excerpt: 'An evidence-based comparison of zone-2 training and high-intensity intervals for long-term health span.',
    category: 'Fitness',
    readTime: '6 min read',
  },
];

export const Articles: React.FC = () => {
  return (
    <div className="container page-wrapper">
      <div style={{ marginBottom: '2rem' }}>
        <h1>Health & Wellness Articles</h1>
        <p>Stay informed with the latest insights from clinical studies, wellness coaches, and health practitioners.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        {MOCK_ARTICLES.map((article) => (
          <div key={article.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'hsl(var(--accent))',
                backgroundColor: 'hsla(var(--accent), 0.1)',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '0.75rem'
              }}>
                {article.category}
              </span>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{article.title}</h2>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{article.excerpt}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
              <span style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>{article.readTime}</span>
              <Link to={`/article/${article.id}`} className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                Read More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
