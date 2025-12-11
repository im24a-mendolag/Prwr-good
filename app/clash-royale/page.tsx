'use client'

import GameSection from '@/components/GameSection'
import { useContent } from '@/hooks/useContent'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function ClashRoyalePage() {
  const { content, lang } = useContent()
  const clashData = content.pages.clashRoyale
  const rankLabel = lang === 'de' ? 'Ranganreize' : 'Rank Incentives'
  const rankDesc =
    lang === 'de' ? 'Belohnungen für Fortschritt in Arenen und Ligen' : 'Rewards for progressing through arenas and leagues'

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <ScrollAnimation>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent leading-[1.3] pb-3">
            👑 {clashData.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {clashData.description}
          </p>
        </div>
      </ScrollAnimation>

      {/* Ranking System */}
      <ScrollAnimation delay={50}>
        <GameSection
          title={clashData.rankingSystem.title}
          description={clashData.rankingSystem.description}
          tiers={clashData.rankingSystem.tiers}
          details={clashData.rankingSystem.details}
          items={[
            {
              name: rankLabel,
              description: rankDesc,
              examples: clashData.rankingSystem.incentives,
            },
          ]}
        />
      </ScrollAnimation>

      {/* Reward Structures */}
      <ScrollAnimation delay={100}>
        <GameSection
          title={clashData.rewardStructures.title}
          description={clashData.rewardStructures.description}
          items={clashData.rewardStructures.types}
        />
      </ScrollAnimation>

      {/* Progression Incentives */}
      <ScrollAnimation delay={150}>
        <GameSection
          title={clashData.progressionIncentives.title}
          description={clashData.progressionIncentives.description}
          items={clashData.progressionIncentives.systems}
        />
      </ScrollAnimation>

      {/* Player Behavior Incentives */}
      <ScrollAnimation delay={200}>
        <GameSection
          title={clashData.playerBehaviorIncentives.title}
          description={clashData.playerBehaviorIncentives.description}
          items={clashData.playerBehaviorIncentives.mechanisms}
        />
      </ScrollAnimation>

      {/* Competitive Ecosystem */}
      <ScrollAnimation delay={250}>
        <GameSection
          title={clashData.competitiveEcosystem.title}
          description={clashData.competitiveEcosystem.description}
          items={clashData.competitiveEcosystem.levels}
        />
      </ScrollAnimation>

      {/* Monetization & Revenue */}
      <ScrollAnimation delay={300}>
        <GameSection
          title={clashData.monetization.title}
          description={clashData.monetization.description}
          items={clashData.monetization.types}
        />
      </ScrollAnimation>
    </div>
  )
}




