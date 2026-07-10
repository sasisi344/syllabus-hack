import type { DiagnosisAnswers, CertRecommendation } from './types';

const CLF: CertRecommendation = {
  certId: 'clf',
  certName: 'AWS Certified Cloud Practitioner（CLF）',
  reason:
    'AWS未経験、またはクラウドの全体像をまず掴みたい段階には、非エンジニア職種でも受験できるCLFが最適な入口になる。料金体系・基本サービス・セキュリティの共通責任モデルなど、実務で誰と話す上でも土台になる知識が身につく。',
  articleSlug: '/method/aws-saa-beginner-reality/',
  articleTitle: 'AWS SAA、未経験でも本当に取れるか',
};

const SAA: CertRecommendation = {
  certId: 'saa',
  certName: 'AWS Certified Solutions Architect - Associate（SAA）',
  reason:
    '実務でAWS環境の設計・構築に関わる、またはこれから関わりたいなら、業界で最も評価されるSAAが本命になる。EC2・VPC・S3といった主要サービスを組み合わせてシステムを設計する力が問われ、転職市場でも認知度が高い。',
  articleSlug: '/method/aws-personalized-roadmap-hack/',
  articleTitle: 'AWS攻略：多すぎるサービスで迷子？AIに逆算ロードマップを作らせる',
};

const ANS: CertRecommendation = {
  certId: 'ans',
  certName: 'AWS Certified Advanced Networking - Specialty（ANS）',
  reason:
    'インフラ・ネットワーク領域で専門性を確立したい、すでにAWS運用経験がある人には、より高度な専門資格（Specialty系、まずはSAA取得後の次のステップとして）が武器になる。まずはSAAで土台を固めてから逆算ロードマップを立てるのが近道。',
  articleSlug: '/method/aws-hub/',
  articleTitle: 'AWS・CCNAクラスター完全ガイド',
};

/**
 * 3つの質問への回答から、おすすめのAWS資格を1つ判定する。
 * ルールベースの簡易診断（機械学習等は使わない、明示的な条件分岐）。
 */
export function diagnose(answers: DiagnosisAnswers): CertRecommendation {
  const { role, experience, goal } = answers;

  // 未経験・クラウド未経験は職種を問わずCLFから
  if (experience === 'none') {
    return CLF;
  }

  // 非エンジニア職種で実務要件がない場合はCLFで十分な立ち位置
  if (role === 'sales-nontech' && goal !== 'transfer') {
    return CLF;
  }

  // インフラ経験者かつ転職・専門性証明が目的ならANS方向（SAAを経由する前提の紹介）
  if ((role === 'infra' || role === 'manager') && experience === 'aws-some' && goal === 'inhouse-promotion') {
    return ANS;
  }

  // それ以外（オンプレ経験者・AWS初級者・開発者・転職目的等）は基本SAAを推奨
  return SAA;
}
