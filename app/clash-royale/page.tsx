'use client'

import GameSection from '@/components/GameSection'
import { useContent } from '@/hooks/useContent'
import ScrollAnimation from '@/components/ScrollAnimation'
import { addImagesToItems } from '@/utils/imageUtils'
import { getContent } from '@/content'
import Link from 'next/link'

export default function ClashRoyalePage() {
  const { content, lang } = useContent()
  const clashData = content.pages.clashRoyale
  const englishData = getContent('en').pages.clashRoyale
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            {clashData.description}
          </p>
          <Link
            href={clashData.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>{lang === 'de' ? 'Offizielle Website besuchen' : 'Visit Official Website'}</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>
      </ScrollAnimation>

      {/* Ranking System */}
      <ScrollAnimation delay={50}>
        <GameSection
          title={clashData.rankingSystem.title}
          description={clashData.rankingSystem.description}
          tiers={clashData.rankingSystem.tiers}
          details={clashData.rankingSystem.details}
          items={addImagesToItems([
            {
              name: rankLabel,
              description: rankDesc,
              examples: clashData.rankingSystem.incentives,
            },
          ], 'cr', 'jpg', [{ name: 'Rank Incentives', description: '' }])}
        />
      </ScrollAnimation>

      {/* Reward Structures */}
      <ScrollAnimation delay={100}>
        <GameSection
          title={clashData.rewardStructures.title}
          description={clashData.rewardStructures.description}
          items={addImagesToItems(clashData.rewardStructures.types, 'cr', 'jpg', englishData.rewardStructures.types)}
          />
      </ScrollAnimation>

      {/* Progression Incentives */}
      <ScrollAnimation delay={150}>
        <GameSection
          title={clashData.progressionIncentives.title}
          description={clashData.progressionIncentives.description}
          items={addImagesToItems(clashData.progressionIncentives.systems, 'cr', 'jpg', englishData.progressionIncentives.systems)}
          />
      </ScrollAnimation>

      {/* Player Behavior Incentives */}
      <ScrollAnimation delay={200}>
        <GameSection
          title={clashData.playerBehaviorIncentives.title}
          description={clashData.playerBehaviorIncentives.description}
          items={addImagesToItems(clashData.playerBehaviorIncentives.mechanisms, 'cr', 'jpg', englishData.playerBehaviorIncentives.mechanisms)}
          />
      </ScrollAnimation>

      {/* Competitive Ecosystem */}
      <ScrollAnimation delay={250}>
        <GameSection
          title={clashData.competitiveEcosystem.title}
          description={clashData.competitiveEcosystem.description}
          items={addImagesToItems(clashData.competitiveEcosystem.levels, 'cr', 'jpg', englishData.competitiveEcosystem.levels)}
          />
      </ScrollAnimation>

      {/* Monetization & Revenue */}
      <ScrollAnimation delay={300}>
        <GameSection
          title={clashData.monetization.title}
          description={clashData.monetization.description}
          items={addImagesToItems(clashData.monetization.types, 'cr', 'jpg', englishData.monetization.types)}
        />
      </ScrollAnimation>
    </div>
  )
}




