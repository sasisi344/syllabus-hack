/** @jsxImportSource preact */

interface CategorySelectorProps {
  categories: string[];
  rawCards: any[];
  onSelect: (category: string) => void;
  onBack: () => void;
}

export default function CategorySelector({ categories, rawCards, onSelect, onBack }: CategorySelectorProps) {
  return (
    <div class="deck-selector animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <button 
          onClick={onBack}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f8fafc',
            cursor: 'pointer',
            marginRight: '1rem',
            transition: 'all 0.2s'
          }}
          aria-label="戻る"
        >
          ←
        </button>
        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>分野を選択</h2>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        <button 
          class="control-btn" 
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            justifyContent: 'space-between',
            padding: '1.2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onClick={() => onSelect('ALL')}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.05rem' }}>全分野からランダム</span>
            <span style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem' }}>バランスよく学習（最大100枚）</span>
          </div>
          <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>{rawCards.length}</span>
        </button>

        <div style={{ 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', 
          margin: '0.5rem 0' 
        }}></div>

        {categories.map(cat => {
          const count = rawCards.filter(c => c.largeCategory === cat).length;
          return (
            <button 
              key={cat}
              class="control-btn" 
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                justifyContent: 'space-between',
                padding: '1.1rem',
                transition: 'all 0.2s'
              }}
              onClick={() => onSelect(cat)}
            >
              <span style={{ fontWeight: '600' }}>{cat}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{count} cards</span>
                <span style={{ color: '#334155' }}>›</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
