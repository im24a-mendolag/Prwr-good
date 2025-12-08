import Link from 'next/link'
import GameCard from '@/components/GameCard'
import { games } from '@/data/games'

export default function Home() {
  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Gaming Incentives Comparison
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore how League of Legends, Counter-Strike 2, and Clash Royale 
          use different incentive mechanisms to engage and retain players.
        </p>
      </section>

      {/* Games Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>

      {/* Quick Overview */}
      <section className="card mb-16">
        <h2 className="section-title">About This Comparison</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This website provides an in-depth analysis of incentive mechanisms across three 
            popular competitive games. Each game employs unique strategies to motivate players, 
            from ranking systems to reward structures, progression paths, and competitive ecosystems.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Navigate through each game&apos;s dedicated page to learn about their specific 
            incentive systems, or jump to the comparison section to see how they differ side-by-side.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Link 
          href="/comparison"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
        >
          View Full Comparison →
        </Link>
      </section>
    </div>
  )
}
