export type Language = 'en' | 'de'

export interface NavLinkContent {
  href: string
  label: string
}

export interface NavContent {
  brand: string
  links: NavLinkContent[]
}

export interface FooterContent {
  line1: string
  line2: string
}

export interface HeroContent {
  title: string
  description: string
  cta: string
}

export interface AboutContent {
  title: string
  paragraph1: string
  paragraph2: string
}

export interface GameCardContent {
  id: string
  name: string
  description: string
  color: string
  icon: string
}

export interface HomeContent {
  hero: HeroContent
  about: AboutContent
  games: GameCardContent[]
}

export interface GameSectionItem {
  name: string
  description: string
  examples?: string[]
  features?: string[]
  consequences?: string[]
  rewards?: string[]
  impact?: string[]
}

export interface GamePageSection {
  title: string
  description: string
  tiers?: string[]
  details?: string[]
  incentives?: string[]
  types?: GameSectionItem[]
  systems?: GameSectionItem[]
  mechanisms?: GameSectionItem[]
  levels?: GameSectionItem[]
}

export interface GamePageContent {
  name: string
  description: string
  rankingSystem: GamePageSection
  rewardStructures: GamePageSection
  progressionIncentives: GamePageSection
  playerBehaviorIncentives: GamePageSection
  competitiveEcosystem: GamePageSection
  monetization: GamePageSection
}

export interface ComparisonData {
  [category: string]: {
    [gameId: string]: string | string[]
  }
}

export interface ComparisonContent {
  title: string
  description: string
  ranking: ComparisonData
  rewards: ComparisonData
  progression: ComparisonData
  behavior: ComparisonData
  ecosystem: ComparisonData
  monetization: ComparisonData
  summary: {
    league: string
    cs2: string
    clash: string
  }
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface QuizContent {
  title: string
  description: string
  progress: {
    question: string
    of: string
    score: string
  }
  actions: {
    previous: string
    submit: string
    next: string
    finish: string
  }
  explanation: string
  completed: {
    title: string
    excellent: string
    good: string
    keepLearning: string
    restart: string
  }
  questions: QuizQuestion[]
}

export interface SiteContent {
  nav: NavContent
  footer: FooterContent
  home: HomeContent
  games: Record<string, GameCardContent>
  pages: {
    leagueOfLegends: GamePageContent
    counterStrike2: GamePageContent
    clashRoyale: GamePageContent
  }
  comparison: ComparisonContent
  quiz: QuizContent
}


