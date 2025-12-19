export interface DevRelInitiative {
  id: string;
  name: string;
  description: string;
  reach: number; // 0-100 (Scale/Discovery)
  closeness: number; // 0-100 (Bridge Closeness/Intimacy)
  happiness: number; // 0-100 (Developer Sentiment)
  effort: number; // 0-100 (Resources/Time Required) - Lower is better
  category: 'Event' | 'Community' | 'Support' | 'Product' | 'Content';
  icon: string;
}

export interface AnalysisResult {
  strategy: string;
  recommendations: string[];
}
