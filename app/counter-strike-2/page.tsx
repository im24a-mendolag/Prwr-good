'use client'

import GameSection from '@/components/GameSection'
import { useContent } from '@/hooks/useContent'
import ScrollAnimation from '@/components/ScrollAnimation'
import { addImagesToItems } from '@/utils/imageUtils'
import { getContent } from '@/content'

export default function CounterStrike2Page() {
  const { content, lang } = useContent()
  const csData = content.pages.counterStrike2
  const englishData = getContent('en').pages.counterStrike2
  const rankIncentiveLabel = lang === 'de' ? 'Ranganreize' : 'Rank Incentives'
  const rankIncentiveDesc =
    lang === 'de' ? 'Vorteile beim Erreichen höherer Ränge' : 'Benefits of achieving higher ranks'

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <ScrollAnimation>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent leading-[1.3] pb-3">
            🎯 {csData.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {csData.description}
          </p>
        </div>
      </ScrollAnimation>

      {/* Ranking System */}
      <ScrollAnimation delay={50}>
        <GameSection
          title={csData.rankingSystem.title}
          description={csData.rankingSystem.description}
          tiers={csData.rankingSystem.tiers}
          details={csData.rankingSystem.details}
          items={addImagesToItems([
            {
              name: rankIncentiveLabel,
              description: rankIncentiveDesc,
              examples: csData.rankingSystem.incentives,
            },
          ], 'csgo', 'jpg', [{ name: 'Rank Incentives', description: '' }])}
        />
      </ScrollAnimation>

      {/* Reward Structures */}
      <ScrollAnimation delay={100}>
        <GameSection
          title={csData.rewardStructures.title}
          description={csData.rewardStructures.description}
          items={addImagesToItems(csData.rewardStructures.types, 'csgo', 'jpg', englishData.rewardStructures.types)}
          />
      </ScrollAnimation>

      {/* Progression Incentives */}
      <ScrollAnimation delay={150}>
        <GameSection
          title={csData.progressionIncentives.title}
          description={csData.progressionIncentives.description}
          items={addImagesToItems(csData.progressionIncentives.systems, 'csgo', 'jpg', englishData.progressionIncentives.systems)}
          />
      </ScrollAnimation>

      {/* Player Behavior Incentives */}
      <ScrollAnimation delay={200}>
        <GameSection
          title={csData.playerBehaviorIncentives.title}
          description={csData.playerBehaviorIncentives.description}
          items={addImagesToItems(csData.playerBehaviorIncentives.mechanisms, 'csgo', 'jpg', englishData.playerBehaviorIncentives.mechanisms)}
          />
      </ScrollAnimation>

      {/* Competitive Ecosystem */}
      <ScrollAnimation delay={250}>
        <GameSection
          title={csData.competitiveEcosystem.title}
          description={csData.competitiveEcosystem.description}
          items={addImagesToItems(csData.competitiveEcosystem.levels, 'csgo', 'jpg', englishData.competitiveEcosystem.levels)}
          />
      </ScrollAnimation>

      {/* Monetization & Revenue */}
      <ScrollAnimation delay={300}>
        <GameSection
          title={csData.monetization.title}
          description={csData.monetization.description}
          items={addImagesToItems(csData.monetization.types, 'csgo', 'jpg', englishData.monetization.types)}
        />
      </ScrollAnimation>
    </div>
  )
}




