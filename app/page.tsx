'use client'

import Link from 'next/link'
import GameCard from '@/components/GameCard'
import { useContent } from '@/hooks/useContent'

export default function Home() {
  const { content } = useContent()
  const home = content.home

  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 overflow-visible pt-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent break-words overflow-visible leading-[1.3] pb-3">
          {home.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {home.hero.description}
        </p>
      </section>

      {/* Games Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {home.games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>

      {/* Quick Overview */}
      <section className="card mb-16">
        <h2 className="section-title">{home.about.title}</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {home.about.paragraph1}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {home.about.paragraph2}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Link 
          href="/comparison"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
        >
          {home.hero.cta}
        </Link>
      </section>
    </div>
  )
}




