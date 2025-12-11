'use client'

import GameSection from '@/components/GameSection'
import { useContent } from '@/hooks/useContent'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function LeagueOfLegendsPage() {
  const { content, lang } = useContent()
  const leagueData = content.pages.leagueOfLegends
  const rankIncentiveLabel = lang === 'de' ? 'Ranganreize' : 'Rank Incentives'

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <ScrollAnimation>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            ⚔️ {leagueData.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {leagueData.description}
          </p>
        </div>
      </ScrollAnimation>

      {/* Ranking System */}
      <ScrollAnimation delay={50}>
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
      </ScrollAnimation>

      {/* Reward Structures */}
      <ScrollAnimation delay={100}>
        <GameSection
          title={leagueData.rewardStructures.title}
          description={leagueData.rewardStructures.description}
          items={leagueData.rewardStructures.types}
        />
      </ScrollAnimation>

      {/* Progression Incentives */}
      <ScrollAnimation delay={150}>
        <GameSection
          title={leagueData.progressionIncentives.title}
          description={leagueData.progressionIncentives.description}
          items={leagueData.progressionIncentives.systems}
        />
      </ScrollAnimation>

      {/* Player Behavior Incentives */}
      <ScrollAnimation delay={200}>
        <GameSection
          title={leagueData.playerBehaviorIncentives.title}
          description={leagueData.playerBehaviorIncentives.description}
          items={leagueData.playerBehaviorIncentives.mechanisms}
        />
      </ScrollAnimation>

      {/* Competitive Ecosystem */}
      <ScrollAnimation delay={250}>
        <GameSection
          title={leagueData.competitiveEcosystem.title}
          description={leagueData.competitiveEcosystem.description}
          items={leagueData.competitiveEcosystem.levels}
        />
      </ScrollAnimation>

      {/* Monetization & Revenue */}
      <ScrollAnimation delay={300}>
        <GameSection
          title={leagueData.monetization.title}
          description={leagueData.monetization.description}
          items={leagueData.monetization.types}
        />
      </ScrollAnimation>
    </div>
  )
}




