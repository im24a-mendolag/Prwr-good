'use client'

import GameSection from '@/components/GameSection'
import { useContent } from '@/hooks/useContent'

export default function CounterStrike2Page() {
  const { content, lang } = useContent()
  const csData = content.pages.counterStrike2
  const rankIncentiveLabel = lang === 'de' ? 'Ranganreize' : 'Rank Incentives'
  const rankIncentiveDesc =
    lang === 'de' ? 'Vorteile beim Erreichen höherer Ränge' : 'Benefits of achieving higher ranks'

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
          🎯 {csData.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {csData.description}
        </p>
      </div>

      {/* Ranking System */}
      <GameSection
        title={csData.rankingSystem.title}
        description={csData.rankingSystem.description}
        tiers={csData.rankingSystem.tiers}
        details={csData.rankingSystem.details}
        items={[
          {
            name: rankIncentiveLabel,
            description: rankIncentiveDesc,
            examples: csData.rankingSystem.incentives,
          },
        ]}
      />

      {/* Reward Structures */}
      <GameSection
        title={csData.rewardStructures.title}
        description={csData.rewardStructures.description}
        items={csData.rewardStructures.types}
      />

      {/* Progression Incentives */}
      <GameSection
        title={csData.progressionIncentives.title}
        description={csData.progressionIncentives.description}
        items={csData.progressionIncentives.systems}
      />

      {/* Player Behavior Incentives */}
      <GameSection
        title={csData.playerBehaviorIncentives.title}
        description={csData.playerBehaviorIncentives.description}
        items={csData.playerBehaviorIncentives.mechanisms}
      />

      {/* Competitive Ecosystem */}
      <GameSection
        title={csData.competitiveEcosystem.title}
        description={csData.competitiveEcosystem.description}
        items={csData.competitiveEcosystem.levels}
      />

      {/* Monetization & Revenue */}
      <GameSection
        title={csData.monetization.title}
        description={csData.monetization.description}
        items={csData.monetization.types}
      />
    </div>
  )
}




