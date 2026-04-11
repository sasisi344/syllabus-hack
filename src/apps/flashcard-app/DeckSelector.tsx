/** @jsxImportSource preact */

interface Deck {
  id: string;
  name: string;
  count: number;
}

export default function DeckSelector({ onSelect }: { onSelect: (id: string) => void }) {
  const commonDecks: Deck[] = [
    { id: 'ip', name: 'ITパスポート全シラバス', count: 1300 },
    { id: 'fe', name: '基本情報全シラバス', count: 3200 },
    { id: 'ap', name: '応用情報全シラバス', count: 600 },
    { id: 'genai-ethics', name: '生成AI・AI倫理', count: 20 },
  ];

  const advancedDecks: Deck[] = [
    { id: 'sc', name: 'SC重要用語（支援士）', count: 16 },
    { id: 'db', name: 'DB重要用語（スペシャリスト）', count: 7 },
    { id: 'sa', name: 'SA重要用語（アーキテクト）', count: 7 },
    { id: 'pm', name: 'PM重要用語（プロマネ）', count: 7 },
    { id: 'sm', name: 'SM重要用語（サービスマネ）', count: 6 },
    { id: 'au', name: 'AU重要用語（監査）', count: 5 },
    { id: 'st', name: 'ST重要用語（ストラテジスト）', count: 5 },
  ];

  const renderDeckButtons = (deckList: Deck[]) => (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
      {deckList.map(deck => (
        <button 
          class="control-btn" 
          style={{
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '1.2rem',
            textAlign: 'left',
             transition: 'transform 0.2s ease, background 0.2s ease'
          }}
          onClick={() => onSelect(deck.id)}
        >
          <span style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.4rem', color: '#f8fafc'}}>{deck.name}</span>
          <span style={{color: '#94a3b8', fontSize: '0.85rem'}}>{deck.count} cards</span>
        </button>
      ))}
    </div>
  );

  return (
    <div class="deck-selector">
      <h2 style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem', fontWeight: '800'}}>暗記デッキを選択</h2>
      
      <h3 style={{fontSize: '1rem', color: '#3b82f6', marginBottom: '1rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.8rem'}}>基本・共通試験</h3>
      {renderDeckButtons(commonDecks)}

      <h3 style={{fontSize: '1rem', color: '#3b82f6', marginBottom: '1rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.8rem'}}>高度試験（トレンド・頻出用語）</h3>
      {renderDeckButtons(advancedDecks)}
    </div>
  );
}

