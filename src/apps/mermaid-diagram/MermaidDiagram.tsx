import { useEffect, useRef, useState } from 'preact/hooks';

export interface MermaidDiagramProps {
  chart: string;
  caption?: string;
}

let idCounter = 0;

function isDarkMode(): boolean {
  return typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
}

export default function MermaidDiagram({ chart, caption }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const idRef = useRef(`mermaid-${++idCounter}`);

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: isDarkMode() ? 'dark' : 'default',
          securityLevel: 'strict',
          fontFamily: 'inherit',
        });
        const { svg } = await mermaid.render(idRef.current, chart);
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'diagram render failed');
      }
    };

    render();

    // ダークモード切り替え（html.dark クラスのトグル）に追従して再描画する
    const observer = new MutationObserver(() => render());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [chart]);

  if (error) {
    return <p className="mermaid-diagram-error">図の描画に失敗しました（{error}）。</p>;
  }

  return (
    <figure className="mermaid-diagram">
      <div ref={containerRef} className="mermaid-diagram-canvas" aria-label={caption ?? '図解'} />
      {caption && <figcaption className="mermaid-diagram-caption">{caption}</figcaption>}
    </figure>
  );
}
