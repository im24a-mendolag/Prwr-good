'use client'

import Image from 'next/image'
import ComparisonTable from '@/components/ComparisonTable'
import { useContent } from '@/hooks/useContent'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function ComparisonPage() {
  const { content, lang } = useContent()
  const comparison = content.comparison
  const labels = lang === 'de'
    ? {
        ranking: 'Rangsysteme',
        rewards: 'Belohnungsstrukturen',
        progression: 'Fortschrittsanreize',
        behavior: 'Anreize für Spielerverhalten',
        ecosystem: 'Wettbewerbsökosysteme',
        monetization: 'Monetarisierung & Umsatz',
        takeaways: 'Wichtigste Erkenntnisse',
      }
    : {
        ranking: 'Ranking Systems',
        rewards: 'Reward Structures',
        progression: 'Progression Incentives',
        behavior: 'Player Behavior Incentives',
        ecosystem: 'Competitive Ecosystems',
        monetization: 'Monetization & Revenue',
        takeaways: 'Key Takeaways',
      }

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <ScrollAnimation>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-3">
            {comparison.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {comparison.description}
          </p>
        </div>
      </ScrollAnimation>

      {/* Ranking System Comparison */}
      <ScrollAnimation delay={50}>
        <ComparisonTable data={comparison.ranking} title={labels.ranking} />
      </ScrollAnimation>

      {/* Reward Structures Comparison */}
      <ScrollAnimation delay={100}>
        <ComparisonTable data={comparison.rewards} title={labels.rewards} />
      </ScrollAnimation>

      {/* Progression Incentives Comparison */}
      <ScrollAnimation delay={150}>
        <ComparisonTable data={comparison.progression} title={labels.progression} />
      </ScrollAnimation>

      {/* Player Behavior Comparison */}
      <ScrollAnimation delay={200}>
        <ComparisonTable data={comparison.behavior} title={labels.behavior} />
      </ScrollAnimation>

      {/* Competitive Ecosystem Comparison */}
      <ScrollAnimation delay={250}>
        <ComparisonTable data={comparison.ecosystem} title={labels.ecosystem} />
      </ScrollAnimation>

      {/* Monetization Comparison */}
      <ScrollAnimation delay={300}>
        <ComparisonTable data={comparison.monetization} title={labels.monetization} />
      </ScrollAnimation>

      {/* Summary Section */}
      <ScrollAnimation delay={350}>
        <div className="card mt-12">
        <h2 className="subsection-title mb-6">{labels.takeaways}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="relative w-16 h-16 mb-3">
              <Image
                src="/assets/images/logo_lol.png"
                alt="League of Legends logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900 dark:text-blue-200">
              League of Legends
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {comparison.summary.league}
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <div className="relative w-16 h-16 mb-3">
              <Image
                src="/assets/images/logo_csgo.png"
                alt="Counter-Strike 2 logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-orange-900 dark:text-orange-200">
              Counter-Strike 2
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {comparison.summary.cs2}
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="relative w-16 h-16 mb-3">
              <Image
                src="/assets/images/logo_cr.png"
                alt="Clash Royale logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-purple-900 dark:text-purple-200">
              Clash Royale
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {comparison.summary.clash}
            </p>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  )
}




