import { DevRelInitiative } from './types';

export const INITIAL_INITIATIVES: DevRelInitiative[] = [
  {
    id: '1',
    name: 'Release Meetups',
    description: 'Focused workshops on new product versions driving immediate adoption.',
    reach: 45,
    closeness: 60,
    happiness: 75,
    effort: 65,
    category: 'Event',
    icon: ''
  },
  {
    id: '2',
    name: 'Education Workshops',
    description: 'Foundational sessions onboarding developers into the ecosystem.',
    reach: 65,
    closeness: 55,
    happiness: 80,
    effort: 70,
    category: 'Event',
    icon: ''
  },
  {
    id: '3',
    name: 'Community Collabs',
    description: 'Partnering with grassroots groups to expand presence and trust.',
    reach: 70,
    closeness: 45,
    happiness: 85,
    effort: 40,
    category: 'Community',
    icon: ''
  },
  {
    id: '4',
    name: 'Conference Booths',
    description: 'High-volume discovery at major industry events.',
    reach: 95,
    closeness: 15,
    happiness: 45,
    effort: 90,
    category: 'Event',
    icon: ''
  },
  {
    id: '5',
    name: 'Office Hours',
    description: 'Personalized deep-dives into specific developer roadblocks.',
    reach: 10,
    closeness: 98,
    happiness: 95,
    effort: 35,
    category: 'Support',
    icon: ''
  },
  {
    id: '6',
    name: 'Sales Shadowing',
    description: 'Joining solutions engineers to bridge technical and business gaps.',
    reach: 5,
    closeness: 85,
    happiness: 65,
    effort: 25,
    category: 'Product',
    icon: ''
  },
  {
    id: '7',
    name: 'Tech Blog',
    description: 'In-depth engineering insights shared publicly via company blog.',
    reach: 85,
    closeness: 30,
    happiness: 70,
    effort: 55,
    category: 'Content',
    icon: ''
  },
  {
    id: '8',
    name: 'Open Source',
    description: 'Leading and contributing to key public repositories.',
    reach: 60,
    closeness: 75,
    happiness: 90,
    effort: 80,
    category: 'Community',
    icon: ''
  },
  {
    id: '9',
    name: 'Advisory Board',
    description: 'Curated group of elite users influencing product roadmap.',
    reach: 15,
    closeness: 92,
    happiness: 88,
    effort: 45,
    category: 'Product',
    icon: ''
  },
  {
    id: '10',
    name: 'MVP Program',
    description: 'Scaling advocacy through verified community leaders.',
    reach: 55,
    closeness: 80,
    happiness: 92,
    effort: 60,
    category: 'Community',
    icon: ''
  },
  {
    id: '11',
    name: 'API Docs',
    description: 'Self-serve closeness via executable documentation.',
    reach: 90,
    closeness: 50,
    happiness: 78,
    effort: 75,
    category: 'Content',
    icon: ''
  },
  {
    id: '12',
    name: 'Discord Server',
    description: 'Real-time community engagement and support channel.',
    reach: 75,
    closeness: 65,
    happiness: 88,
    effort: 50,
    category: 'Community',
    icon: ''
  },
  {
    id: '13',
    name: 'YouTube Series',
    description: 'Video tutorials and technical deep-dives for async learning.',
    reach: 88,
    closeness: 25,
    happiness: 72,
    effort: 85,
    category: 'Content',
    icon: ''
  },
  {
    id: '14',
    name: 'Hackathons',
    description: 'Competitive events fostering innovation and engagement.',
    reach: 50,
    closeness: 70,
    happiness: 94,
    effort: 88,
    category: 'Event',
    icon: ''
  },
  {
    id: '15',
    name: 'SDK Development',
    description: 'Building and maintaining language-specific client libraries.',
    reach: 80,
    closeness: 88,
    happiness: 82,
    effort: 95,
    category: 'Product',
    icon: ''
  },
  {
    id: '16',
    name: 'Newsletter',
    description: 'Weekly digest of updates, tips, and community highlights.',
    reach: 70,
    closeness: 20,
    happiness: 65,
    effort: 30,
    category: 'Content',
    icon: ''
  },
  {
    id: '17',
    name: 'Bug Triage',
    description: 'Internal process of reviewing and prioritizing reported issues.',
    reach: 8,
    closeness: 25,
    happiness: 40,
    effort: 45,
    category: 'Support',
    icon: ''
  },
  {
    id: '18',
    name: 'Internal Docs',
    description: 'Documentation for internal teams, rarely public-facing.',
    reach: 5,
    closeness: 15,
    happiness: 35,
    effort: 40,
    category: 'Content',
    icon: ''
  },
  {
    id: '19',
    name: 'Swag Distribution',
    description: 'Sending branded merchandise to community members.',
    reach: 25,
    closeness: 10,
    happiness: 55,
    effort: 35,
    category: 'Community',
    icon: ''
  },
  {
    id: '20',
    name: 'Roadmap Reviews',
    description: 'Periodic internal reviews with limited external visibility.',
    reach: 12,
    closeness: 30,
    happiness: 50,
    effort: 20,
    category: 'Product',
    icon: ''
  },
  {
    id: '21',
    name: 'Email Support',
    description: 'Traditional support channel with slower response times.',
    reach: 20,
    closeness: 35,
    happiness: 45,
    effort: 55,
    category: 'Support',
    icon: ''
  },
  {
    id: '22',
    name: 'Social Media',
    description: 'Broadcasting updates and engaging on social platforms.',
    reach: 85,
    closeness: 8,
    happiness: 50,
    effort: 40,
    category: 'Content',
    icon: ''
  },
  {
    id: '23',
    name: 'Code Reviews',
    description: 'Reviewing community PRs and contributions.',
    reach: 15,
    closeness: 95,
    happiness: 85,
    effort: 60,
    category: 'Support',
    icon: ''
  },
  {
    id: '24',
    name: 'Podcast Guest',
    description: 'Appearing on industry podcasts to share insights.',
    reach: 60,
    closeness: 12,
    happiness: 60,
    effort: 20,
    category: 'Content',
    icon: ''
  }
];

export const METRIC_DEFINITIONS = {
  reach: {
    name: 'Reach',
    description: 'How many developers can this initiative potentially touch? Measures audience scale, discoverability, and broadcast potential.',
    low: 'Few developers affected',
    high: 'Massive audience potential'
  },
  closeness: {
    name: 'Closeness',
    description: 'How deeply does this connect developers to your product/engineering? Measures intimacy, integration depth, and relationship quality.',
    low: 'Surface-level awareness',
    high: 'Deep technical integration'
  },
  happiness: {
    name: 'Happiness',
    description: 'How satisfied are developers with this initiative? Measures sentiment, engagement quality, and community satisfaction.',
    low: 'Low satisfaction',
    high: 'High delight factor'
  },
  effort: {
    name: 'Effort',
    description: 'How much time, resources, and energy does this require? Includes planning, execution, and maintenance costs. Lower is more efficient.',
    low: 'Lightweight, easy to maintain',
    high: 'Resource-intensive investment'
  }
};

export type QuadrantType = 'scale-depth' | 'niche-deep' | 'low-impact' | 'broad-shallow';

export interface QuadrantAnalysis {
  name: string;
  description: string;
  reasoning: string;
  recommendation: string;
}

export function getQuadrant(reach: number, closeness: number): QuadrantType {
  if (reach > 50 && closeness > 50) return 'scale-depth';
  if (reach <= 50 && closeness > 50) return 'niche-deep';
  if (reach <= 50 && closeness <= 50) return 'low-impact';
  return 'broad-shallow';
}

export function getEfficiencyRating(initiative: DevRelInitiative): { rating: string; score: number; color: string } {
  // Calculate impact score (average of reach, closeness, happiness)
  const impact = (initiative.reach + initiative.closeness + initiative.happiness) / 3;
  // Efficiency = Impact relative to Effort
  const efficiency = impact / (initiative.effort || 1) * 50;
  
  if (efficiency > 100) return { rating: 'Excellent', score: Math.min(efficiency, 150), color: 'text-emerald-500' };
  if (efficiency > 70) return { rating: 'Good', score: efficiency, color: 'text-green-500' };
  if (efficiency > 50) return { rating: 'Moderate', score: efficiency, color: 'text-yellow-500' };
  if (efficiency > 30) return { rating: 'Low', score: efficiency, color: 'text-orange-500' };
  return { rating: 'Poor', score: efficiency, color: 'text-red-500' };
}

export function getInitiativeAnalysis(initiative: DevRelInitiative): QuadrantAnalysis {
  const quadrant = getQuadrant(initiative.reach, initiative.closeness);
  const { name, reach, closeness, happiness, effort, category } = initiative;
  const efficiency = getEfficiencyRating(initiative);
  
  const reachLevel = reach > 70 ? 'very high' : reach > 50 ? 'moderate-to-high' : reach > 30 ? 'moderate' : 'limited';
  const closenessLevel = closeness > 70 ? 'deep' : closeness > 50 ? 'meaningful' : closeness > 30 ? 'moderate' : 'surface-level';
  const happinessLevel = happiness > 80 ? 'exceptional' : happiness > 60 ? 'good' : happiness > 40 ? 'moderate' : 'concerning';
  const effortLevel = effort > 70 ? 'high-investment' : effort > 50 ? 'moderate-effort' : effort > 30 ? 'manageable' : 'lightweight';

  const effortInsight = effort > 70 
    ? `However, at ${effort}% effort, this is a resource-intensive initiative that requires significant investment to maintain.`
    : effort > 50 
    ? `With ${effort}% effort required, this needs consistent but manageable resources.`
    : `At only ${effort}% effort, this is relatively efficient to execute and maintain.`;

  const roiInsight = efficiency.rating === 'Excellent' || efficiency.rating === 'Good'
    ? `The ROI here is ${efficiency.rating.toLowerCase()}—you're getting strong results for the effort invested.`
    : efficiency.rating === 'Moderate'
    ? `ROI is moderate. Consider if there are ways to reduce effort or increase impact.`
    : `ROI needs attention. The effort invested isn't generating proportional returns.`;

  switch (quadrant) {
    case 'scale-depth':
      return {
        name: 'Scale + Depth',
        description: 'High Reach & High Closeness',
        reasoning: `${name} achieves the rare combination of reaching many developers (${reach}%) while maintaining deep connections (${closeness}%). This ${category.toLowerCase()} initiative creates meaningful touchpoints at scale. With ${happinessLevel} satisfaction (${happiness}%), developers are responding well. ${effortInsight} ${roiInsight}`,
        recommendation: effort > 70 
          ? `${name} is a strategic investment worth protecting despite high effort (${effort}%). Look for automation opportunities or ways to scale the team's impact. Document processes so others can contribute.`
          : `${name} is a high-efficiency powerhouse. Protect this initiative, expand it where possible, and use it as a model for other ${category.toLowerCase()} efforts.`
      };
    
    case 'niche-deep':
      return {
        name: 'Niche Deep',
        description: 'Lower Reach & High Closeness',
        reasoning: `${name} reaches a smaller audience (${reach}%) but creates ${closenessLevel} connections (${closeness}%). This ${effortLevel} ${category.toLowerCase()} initiative (${effort}% effort) builds passionate advocates. The ${happinessLevel} satisfaction (${happiness}%) shows the quality of relationships. ${roiInsight}`,
        recommendation: effort > 60
          ? `Consider if ${name}'s high effort (${effort}%) is justified by the depth of relationships it creates. These advocates can drive outsized impact through word-of-mouth. Track if participants become champions.`
          : `${name} is efficient for relationship-building. Don't try to scale it—instead, use it as a pipeline for identifying and nurturing your most engaged developers.`
      };
    
    case 'low-impact':
      return {
        name: 'Low Impact',
        description: 'Lower Reach & Lower Closeness',
        reasoning: `${name} has ${reachLevel} reach (${reach}%) and ${closenessLevel} connections (${closeness}%). As a ${effortLevel} ${category.toLowerCase()} initiative (${effort}% effort), it's ${effort > 50 ? 'consuming significant resources without proportional returns' : 'not demanding many resources, but also not delivering much value'}. Satisfaction is ${happinessLevel} (${happiness}%). ${roiInsight}`,
        recommendation: effort > 50
          ? `${name} is using ${effort}% effort for low returns. Strongly consider: 1) Transforming it to increase impact, 2) Automating to reduce effort, 3) Delegating outside DevRel, or 4) Sunsetting entirely.`
          : `${name} is low-effort but also low-impact. It might be worth keeping if it serves operational needs, but don't invest more here. Focus energy on higher-impact initiatives.`
      };
    
    case 'broad-shallow':
      return {
        name: 'Broad Shallow',
        description: 'High Reach & Lower Closeness',
        reasoning: `${name} reaches many developers (${reach}%) but creates ${closenessLevel} connections (${closeness}%). This ${effortLevel} ${category.toLowerCase()} initiative (${effort}% effort) is effective for awareness but may not convert to lasting relationships. Satisfaction is ${happinessLevel} (${happiness}%). ${roiInsight}`,
        recommendation: effort > 60
          ? `${name}'s high effort (${effort}%) for shallow engagement needs scrutiny. Either add depth (interactive elements, follow-up sequences) or reduce effort through automation. Don't just broadcast—create paths to deeper engagement.`
          : `${name} is an efficient awareness channel. Ensure it connects to deeper initiatives—every touchpoint should offer a clear next step toward higher-closeness engagement.`
      };
  }
}
