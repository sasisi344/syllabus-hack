export type Role = 'infra' | 'dev' | 'sales-nontech' | 'manager';
export type Experience = 'none' | 'onpremise' | 'aws-some';
export type Goal = 'transfer' | 'inhouse-promotion' | 'skill-proof' | 'career-start';

export interface DiagnosisAnswers {
  role: Role | null;
  experience: Experience | null;
  goal: Goal | null;
}

export interface CertRecommendation {
  certId: 'clf' | 'saa' | 'ans';
  certName: string;
  reason: string;
  articleSlug: string;
  articleTitle: string;
}

export interface DiagnosisResult {
  recommendation: CertRecommendation;
  answeredAt: number;
}
