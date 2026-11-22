import type { Question, Choice, RawQuestion } from './types';

export function transformRawQuestions(raw: RawQuestion[]): Question[] {
  return raw.map((r) => {
    // Already transformed guard
    if (r.choices) return { ...r, id: r.id.toString(), choices: r.choices };

    const choices: Choice[] = (r.options ?? []).map((opt) => {
      // e.g. "ア: ディープフェイク" -> label: "ア", text: "ディープフェイク"
      const match = opt.match(/^([アイウエA-D]):\s*(.+)$/);
      if (match) {
        return { label: match[1], text: match[2] };
      }
      return { label: '?', text: opt };
    });

    return {
      id: r.id.toString(),
      category: r.category,
      middleCategory: r.middleCategory,
      question: r.question,
      choices,
      answer: r.answer,
      explanation: r.explanation,
      keyword: r.keyword,
      syllabusRef: r.syllabusRef,
      role: r.role || 'general',
      difficulty: r.difficulty || 'beginner',
    };
  });
}
