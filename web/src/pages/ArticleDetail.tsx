import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface ArticleDetailContent {
  title: string;
  category: string;
  readTime: string;
  content: string[];
}

const ARTICLES_DATA: Record<string, ArticleDetailContent> = {
  '1': {
    title: 'Understanding the Foundations of Modern Nutrition',
    category: 'Nutrition',
    readTime: '5 min read',
    content: [
      'Nutrition is one of the most critical variables in overall human performance and long-term health span. The human body requires a fine balance of macronutrients (carbohydrates, proteins, and fats) and micronutrients (vitamins and minerals) to drive biological processes smoothly.',
      'Protein is essential for cellular repair and enzyme synthesis, while healthy fats (such as monounsaturated and polyunsaturated fatty acids) support cognitive function, hormone production, and heart health. Carbohydrates supply the main energetic current for muscle and brain function.',
      'Ultimately, shifting the focus from calorie counting to nutrient density is the key to sustained metabolic performance. Incorporating whole, minimally processed foods, staying fully hydrated, and matching carbohydrate intake with physical expenditure can significantly elevate everyday vitality.'
    ]
  },
  '2': {
    title: 'The Science of Circadian Rhythms & Quality Sleep',
    category: 'Sleep Science',
    readTime: '7 min read',
    content: [
      'Sleep is not a passive process; it is an active state of neurological restoration and systemic repair. Our bodies operate on a roughly 24-hour cycle known as the circadian rhythm, which coordinates sleepiness, alertness, core body temperature, and hormone levels.',
      'Exposure to bright, natural sunlight early in the morning sets our biological clock, halting melatonin production and triggering cortisol to wake us up. In contrast, artificial blue light from digital screens in the evening tricks the brain into thinking it is daytime, delaying restful sleep stages.',
      'Creating a cooler bedroom environment, maintaining consistent sleep schedules, and establishing a screen-free wind-down routine are actionable steps to increase deep and REM sleep, boosting recovery and immune response.'
    ]
  },
  '3': {
    title: 'Cardiovascular Training: Strength vs. Endurance',
    category: 'Fitness',
    readTime: '6 min read',
    content: [
      'A complete fitness protocol integrates both muscular strength and aerobic capacity. Understanding the differences between zone-2 aerobic conditioning and high-intensity interval training (HIIT) helps tailor physical activity to individual needs.',
      'Zone-2 cardio involves low-intensity exercise (like brisk walking, light cycling, or swimming) where conversation is easy. This level stimulates mitochondrial growth, teaching the body to burn fat efficiently as a primary fuel source.',
      'High-intensity interval training, on the other hand, stresses the cardiovascular limits in short bursts, driving VO2 max adaptations. Combining both approaches creates a robust athletic foundation and supports metabolic flexibility.'
    ]
  }
};

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? ARTICLES_DATA[id] : null;

  if (!article) {
    return (
      <div className="container page-wrapper" style={{ textAlign: 'center' }}>
        <div className="card" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto' }}>
          <h2>Article Not Found</h2>
          <p style={{ margin: '1rem 0 2rem' }}>The article you are looking for does not exist or may have been removed.</p>
          <Link to="/articles" className="btn btn-primary">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-wrapper" style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/articles" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.5rem', fontWeight: 600 }}>
          &larr; Back to Articles
        </Link>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'hsl(var(--accent))',
            backgroundColor: 'hsla(var(--accent), 0.1)',
            padding: '0.25rem 0.5rem',
            borderRadius: '4px'
          }}>
            {article.category}
          </span>
          <span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
            {article.readTime}
          </span>
        </div>
        <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>{article.title}</h1>
      </div>

      <article style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
        {article.content.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '1.5rem', color: 'hsl(var(--foreground))', opacity: 0.9 }}>
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  );
};

export default ArticleDetail;
