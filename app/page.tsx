'use client'

import Link from 'next/link'
import Image from 'next/image'
import GameCard from '@/components/GameCard'
import { useContent } from '@/hooks/useContent'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Home() {
  const { content } = useContent()
  const home = content.home

  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="text-center mb-16 overflow-visible pt-4 relative">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
            <Image
              src="/assets/images/hero.jpg"
              alt="Gaming incentives hero"
              fill
              className="object-cover opacity-20"
              priority
              unoptimized
              onError={(e) => {
                // Hide image if it fails to load, show gradient background instead
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent break-words leading-[1.3] pb-3 drop-shadow-lg">
                {home.hero.title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 max-w-3xl drop-shadow-md">
                {home.hero.description}
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Games Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {home.games.map((game, index) => (
          <ScrollAnimation key={game.id} delay={index * 50}>
            <GameCard game={game} />
          </ScrollAnimation>
        ))}
      </section>

      {/* Quick Overview */}
      <ScrollAnimation delay={150}>
        <section className="card mb-16 hover-lift hover-glow">
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
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation delay={200}>
        <section className="text-center">
          <Link
            href="/comparison"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            {home.hero.cta}
          </Link>
        </section>
      </ScrollAnimation>
    </div>
  )
}




