export const Card = ({ children }) => (
  <div style={{
    background: 'var(--ifm-card-background-color)',
    borderRadius: '16px',
    padding: '1.5rem',
    margin: '1rem 0',
    border: '1px solid var(--ifm-color-emphasis-200)',
  }}>
    {children}
  </div>
);

export const CardGrid = ({ children }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.2rem',
    margin: '1.5rem 0'
  }}>
    {children}
  </div>
);

export const Feature = ({ title, desc }) => (
  <div style={{
    padding: '1rem',
    borderRadius: '12px',
    background: 'var(--ifm-background-surface-color)',
    border: '1px solid var(--ifm-color-emphasis-200)'
  }}>
    <h4 style={{ marginBottom: '0.5rem' }}>{title}</h4>

    {/* ❌ 不用 <p>，避免 MDX 嵌套冲突 */}
    <div style={{ opacity: 0.75 }}>
      {desc}
    </div>
  </div>
);