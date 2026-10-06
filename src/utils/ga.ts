type GaParams = Record<string, string | number | boolean | undefined>;

/** GA4 カスタムイベント送信。gtag.js 未ロード時も dataLayer に積むだけなので安全（partytown: false 前提） */
export const trackEvent = (name: string, params: GaParams = {}): void => {
  if (typeof window === 'undefined') return;
  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    // gtag コマンドは Arguments オブジェクトで push する必要がある（配列だと無視される）
    (function gtag(..._args: unknown[]) {
      w.dataLayer!.push(arguments);
    })('event', name, params);
  } catch {
    // 計測失敗でUIを止めない
  }
};

/** 現在のURLから course_id を取得（/course/{examId}/...） */
export const getCourseIdFromPath = (): string | undefined => {
  if (typeof window === 'undefined') return undefined;
  return window.location.pathname.match(/^\/course\/([^/]+)/)?.[1];
};
