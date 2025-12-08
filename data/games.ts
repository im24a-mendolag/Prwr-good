export interface Game {
  id: string
  name: string
  description: string
  color: string
  icon: string
}

export const games: Game[] = [
  {
    id: 'league-of-legends',
    name: 'League of Legends',
    description: 'A multiplayer online battle arena (MOBA) game with a complex ranking system and seasonal rewards.',
    color: 'from-blue-600 to-cyan-500',
    icon: '⚔️',
  },
  {
    id: 'counter-strike-2',
    name: 'Counter-Strike 2',
    description: 'A tactical first-person shooter with a competitive ranking system and weapon skin economy.',
    color: 'from-orange-600 to-red-500',
    icon: '🎯',
  },
  {
    id: 'clash-royale',
    name: 'Clash Royale',
    description: 'A real-time strategy game combining card collection with tower defense mechanics.',
    color: 'from-purple-600 to-pink-500',
    icon: '👑',
  },
]
