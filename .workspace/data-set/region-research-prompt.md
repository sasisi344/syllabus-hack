# 都道府県別シラバスハック・リサーチプロンプト

あなたは、特定の「都道府県（県庁所在地中心）」におけるIT資格試験（ITパスポート、基本情報等）の受験環境を調査する専門リサーチャーです。
以下の前提条件を元に、Deep Researchを実行し、指定されたJSONフォーマットで出力してください。

## ターゲット

- **都道府県**: [ここに都道府県名を入力]
- **県庁所在地**: [ここに県庁所在地を入力]

## 調査項目

1. **通勤・通学インフラ（県庁所在地中心の統計）**
   - 自動車通勤の割合（高ければ「聴く学習」の需要大）
   - 電車通勤の質（満員か、座れるか、平均時間）
   - 1日の平均移動時間（往復）

2. **CBT試験会場の状況**
   - 県庁所在地内の主要な試験会場（CBT-Center、プロメトリック等）の数
   - 会場の密度感と予約の取りやすさ

3. **試験勉強に適したサードプレイス**
   - 電源・Wi-Fi完備のカフェ（大手チェーン、または地元で人気のスポット）
   - コワーキングスペースや自習室の有無と価格帯

4. **地元のITキャリア需要**
   - 当該県内の主要産業（製造、サービス、農業IT、観光DX等）
   - IT資格（IP/SG/FE/AP）を評価している地元の大手企業・公共機関の例
   - 未経験者向けのIT求人の活発さ（有効求人倍率など）

## 出力フォーマット (JSON)

以下の構造で、厳密なJSONのみを出力してください。

```json
{
  "infrastructure": {
    "commute": {
      "car_ratio_percent": number,
      "train_ratio_percent": number,
      "average_time_minutes": number,
      "main_method": "car" | "train" | "bus",
      "audio_learning_suitability": "high" | "medium" | "low",
      "visual_learning_suitability": "high" | "medium" | "low"
    },
    "cbt_center_stats": {
      "density_level": "high" | "medium" | "low",
      "major_city_centers": ["会場名 or エリア名"]
    },
    "third_places": {
      "cafe_availability": "high" | "medium" | "low",
      "coworking_spaces": "high" | "medium" | "low",
      "public_libraries_with_wifi": "high" | "medium" | "low"
    }
  },
  "career_trends": {
    "job_opening_ratio": number,
    "it_market_growth": "high" | "medium" | "low",
    "target_industries": ["業界名"],
    "high_demand_certs": ["ip", "sg", "fe", "ap"],
    "salary_boost_potential": "high" | "medium" | "low"
  },
  "hack_ideas": [
    {
      "title": "地域名ハック案タイトル",
      "method": "手法名",
      "description": "具体的なハック方法の説明"
    }
  ]
}
```

## 注意点

- 不明な数値がある場合は、国勢調査等の周辺データから推計した概算値を入れ、その旨をJSON外で付記してください。
- ハックアイデアは、単なる一般論ではなく、その県の受験生が「なるほど」と思う地元の地名やインフラ事情を絡めてください。
