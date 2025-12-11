import Link from 'next/link'
import Image from 'next/image'
import { GameCardContent } from '@/content/types'
import { useLanguage } from './LanguageProvider'

interface GameCardProps {
  game: GameCardContent
}

// Map game IDs to logo image paths
const gameLogos: Record<string, string> = {
  'league-of-legends': '/assets/images/logo_lol.png',
  'counter-strike-2': '/assets/images/logo_csgo.png',
  'clash-royale': '/assets/images/logo_cr.png',
}

export default function GameCard({ game }: GameCardProps) {
  const { lang } = useLanguage()
  const cta = lang === 'de' ? 'Mehr erfahren →' : 'Learn more →'
  const logoPath = gameLogos[game.id]

  return (
    <Link href={`/${game.id}`}>
      <div className={`card bg-gradient-to-br ${game.color} text-white hover:scale-105 transition-all duration-300 cursor-pointer h-full hover:shadow-2xl group relative overflow-hidden`}>
        <div className="flex flex-col h-full relative z-10">
          <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center min-h-32 md:min-h-40 relative">
            {logoPath ? (
              <div className="relative w-full h-full max-h-40 md:max-h-48">
                <Image
                  src={logoPath}
                  alt={`${game.name} logo`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ) : (
              <div className="text-6xl md:text-8xl">{game.icon}</div>
            )}
          </div>
          <h3 className="text-2xl font-bold mb-2">{game.name}</h3>
          <p className="text-white/90 flex-grow">{game.description}</p>
          <div className="mt-4 flex items-center text-white/80 group-hover:text-white transition-colors">
            <span className="text-sm font-semibold">{cta}</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}




