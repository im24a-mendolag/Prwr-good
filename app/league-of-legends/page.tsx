'use client'

import GameSection from '@/components/GameSection'
import { useContent } from '@/hooks/useContent'

export default function LeagueOfLegendsPage() {
  const { content, lang } = useContent()
  const leagueData = content.pages.leagueOfLegends
  const rankIncentiveLabel = lang === 'de' ? 'Ranganreize' : 'Rank Incentives'

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-[1.3] pb-3">
          ⚔️ {leagueData.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {leagueData.description}
        </p>
      </div>

      {/* Ranking System */}
      <GameSection
        title={leagueData.rankingSystem.title}
        description={leagueData.rankingSystem.description}
        tiers={leagueData.rankingSystem.tiers}
        details={leagueData.rankingSystem.details}
        items={[
          {
            name: rankIncentiveLabel,
            description: leagueData.rankingSystem.description,
            examples: leagueData.rankingSystem.incentives,
          },
        ]}
      />

      {/* Reward Structures */}
      <GameSection
        title={leagueData.rewardStructures.title}
        description={leagueData.rewardStructures.description}
        items={leagueData.rewardStructures.types}
      />

      {/* Progression Incentives */}
      <GameSection
        title={leagueData.progressionIncentives.title}
        description={leagueData.progressionIncentives.description}
        items={leagueData.progressionIncentives.systems}
      />

      {/* Player Behavior Incentives */}
      <GameSection
        title={leagueData.playerBehaviorIncentives.title}
        description={leagueData.playerBehaviorIncentives.description}
        items={leagueData.playerBehaviorIncentives.mechanisms}
      />

      {/* Competitive Ecosystem */}
      <GameSection
        title={leagueData.competitiveEcosystem.title}
        description={leagueData.competitiveEcosystem.description}
        items={leagueData.competitiveEcosystem.levels}
      />

      {/* Monetization & Revenue */}
      <GameSection
        title={leagueData.monetization.title}
        description={leagueData.monetization.description}
        items={leagueData.monetization.types}
      />
    </div>
  )
}




