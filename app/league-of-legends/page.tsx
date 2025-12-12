'use client'

import GameSection from '@/components/GameSection'
import { useContent } from '@/hooks/useContent'
import ScrollAnimation from '@/components/ScrollAnimation'
import { addImagesToItems } from '@/utils/imageUtils'
import { getContent } from '@/content'
import Link from 'next/link'

export default function LeagueOfLegendsPage() {
  const { content, lang } = useContent()
  const leagueData = content.pages.leagueOfLegends
  const englishData = getContent('en').pages.leagueOfLegends
  const rankIncentiveLabel = lang === 'de' ? 'Ranganreize' : 'Rank Incentives'

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <ScrollAnimation>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-[1.3] pb-3">
            ⚔️ {leagueData.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            {leagueData.description}
          </p>
          <Link
            href={leagueData.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
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
          title={leagueData.rankingSystem.title}
          description={leagueData.rankingSystem.description}
          tiers={leagueData.rankingSystem.tiers}
          details={leagueData.rankingSystem.details}
          items={addImagesToItems([
            {
              name: rankIncentiveLabel,
              description: leagueData.rankingSystem.description,
              examples: leagueData.rankingSystem.incentives,
            },
          ], 'lol', 'jpg', [{ name: 'Rank Incentives', description: '' }])}
        />
      </ScrollAnimation>

      {/* Reward Structures */}
      <ScrollAnimation delay={100}>
        <GameSection
          title={leagueData.rewardStructures.title}
          description={leagueData.rewardStructures.description}
          items={addImagesToItems(leagueData.rewardStructures.types, 'lol', 'jpg', englishData.rewardStructures.types)}
        />
      </ScrollAnimation>

      {/* Progression Incentives */}
      <ScrollAnimation delay={150}>
        <GameSection
          title={leagueData.progressionIncentives.title}
          description={leagueData.progressionIncentives.description}
          items={addImagesToItems(leagueData.progressionIncentives.systems, 'lol', 'jpg', englishData.progressionIncentives.systems)}
        />
      </ScrollAnimation>

      {/* Player Behavior Incentives */}
      <ScrollAnimation delay={200}>
        <GameSection
          title={leagueData.playerBehaviorIncentives.title}
          description={leagueData.playerBehaviorIncentives.description}
          items={addImagesToItems(leagueData.playerBehaviorIncentives.mechanisms, 'lol', 'jpg', englishData.playerBehaviorIncentives.mechanisms)}
        />
      </ScrollAnimation>

      {/* Competitive Ecosystem */}
      <ScrollAnimation delay={250}>
        <GameSection
          title={leagueData.competitiveEcosystem.title}
          description={leagueData.competitiveEcosystem.description}
          items={addImagesToItems(leagueData.competitiveEcosystem.levels, 'lol', 'jpg', englishData.competitiveEcosystem.levels)}
        />
      </ScrollAnimation>

      {/* Monetization & Revenue */}
      <ScrollAnimation delay={300}>
        <GameSection
          title={leagueData.monetization.title}
          description={leagueData.monetization.description}
          items={addImagesToItems(leagueData.monetization.types, 'lol', 'jpg', englishData.monetization.types)}
        />
      </ScrollAnimation>
    </div>
  )
}




