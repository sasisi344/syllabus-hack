import type { APIRoute } from 'astro';
import masterQuestions from '~/data/master/questions-it-passport.json';
import strategyQuestions from '~/data/quiz/it-passport/strategy.json';
import managementQuestions from '~/data/quiz/it-passport/management.json';
import technologyQuestions from '~/data/quiz/it-passport/technology.json';
import predictedQuestions from '~/data/quiz/it-passport/predicted.json';
import generativeAiQuestions from '~/data/quiz/it-passport/generative-ai.json';
import { transformRawQuestions } from '~/apps/it-passport-quiz/transformQuestions';

export const GET: APIRoute = () => {
  const raw = [
    ...masterQuestions,
    ...strategyQuestions,
    ...managementQuestions,
    ...technologyQuestions,
    ...predictedQuestions,
    ...generativeAiQuestions,
  ];
  const questions = transformRawQuestions(raw);
  return new Response(JSON.stringify(questions), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
