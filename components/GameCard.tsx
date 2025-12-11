import Link from 'next/link'
import { GameCardContent } from '@/content/types'
import { useLanguage } from './LanguageProvider'

interface GameCardProps {
  game: GameCardContent
}

export default function GameCard({ game }: GameCardProps) {
  const { lang } = useLanguage()
  const cta = lang === 'de' ? 'Mehr erfahren →' : 'Learn more →'

  return (
    <Link href={`/${game.id}`}>
      <div className={`card bg-gradient-to-br ${game.color} text-white hover:scale-105 transition-transform duration-200 cursor-pointer h-full`}>
        <div className="flex flex-col h-full">
          <div className="text-6xl mb-4">{game.icon}</div>
          <h3 className="text-2xl font-bold mb-2">{game.name}</h3>
          <p className="text-white/90 flex-grow">{game.description}</p>
          <div className="mt-4 flex items-center text-white/80">
            <span className="text-sm font-semibold">{cta}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}




