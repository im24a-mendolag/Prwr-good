import GameSection from '@/components/GameSection'
import clashData from '@/data/clash-royale.json'

export default function ClashRoyalePage() {
  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          👑 {clashData.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {clashData.description}
        </p>
      </div>

      {/* Ranking System */}
      <GameSection
        title={clashData.rankingSystem.title}
        description={clashData.rankingSystem.description}
        tiers={clashData.rankingSystem.tiers}
        details={clashData.rankingSystem.details}
        items={[
          {
            name: 'Rank Incentives',
            description: 'Rewards for progressing through arenas and leagues',
            examples: clashData.rankingSystem.incentives,
          },
        ]}
      />

      {/* Reward Structures */}
      <GameSection
        title={clashData.rewardStructures.title}
        description={clashData.rewardStructures.description}
        items={clashData.rewardStructures.types}
      />

      {/* Progression Incentives */}
      <GameSection
        title={clashData.progressionIncentives.title}
        description={clashData.progressionIncentives.description}
        items={clashData.progressionIncentives.systems}
      />

      {/* Player Behavior Incentives */}
      <GameSection
        title={clashData.playerBehaviorIncentives.title}
        description={clashData.playerBehaviorIncentives.description}
        items={clashData.playerBehaviorIncentives.mechanisms}
      />

      {/* Competitive Ecosystem */}
      <GameSection
        title={clashData.competitiveEcosystem.title}
        description={clashData.competitiveEcosystem.description}
        items={clashData.competitiveEcosystem.levels}
      />
    </div>
  )
}
