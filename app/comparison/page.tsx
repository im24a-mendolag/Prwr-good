import ComparisonTable from '@/components/ComparisonTable'
import leagueData from '@/data/league-of-legends.json'
import csData from '@/data/counter-strike-2.json'
import clashData from '@/data/clash-royale.json'

export default function ComparisonPage() {
  // Ranking System Comparison
  const rankingComparison = {
    'Rank Structure': {
      'league-of-legends': '10 tiers (Iron to Challenger) with 4 divisions each',
      'counter-strike-2': '18 ranks (Silver I to Global Elite) + Premier CS Rating',
      'clash-royale': 'Trophy-based with arenas and leagues (17+ tiers)',
    },
    'Progression Method': {
      'league-of-legends': 'League Points (LP) with promotion series',
      'counter-strike-2': 'Hidden MMR with win/loss tracking',
      'clash-royale': 'Trophy gains/losses per match',
    },
    'Season Reset': {
      'league-of-legends': 'Full reset with placement matches',
      'counter-strike-2': 'Rank decay after inactivity',
      'clash-royale': 'Partial reset maintaining progress',
    },
    'Top Rank': {
      'league-of-legends': 'Challenger',
      'counter-strike-2': 'Global Elite / High CS Rating',
      'clash-royale': 'Ultimate Champion',
    },
  }

  // Reward Structures Comparison
  const rewardComparison = {
    'Primary Rewards': {
      'league-of-legends': ['Victorious skins', 'Ranked borders', 'Hextech crafting', 'Battle passes'],
      'counter-strike-2': ['Weapon skins', 'Cases', 'Operation passes', 'Souvenir packages'],
      'clash-royale': ['Chests', 'Cards', 'Gold', 'Gems', 'Emotes'],
    },
    'Daily Rewards': {
      'league-of-legends': 'Daily missions with Blue Essence and XP',
      'counter-strike-2': 'Weekly drops after matches',
      'clash-royale': 'Crown chest (10 crowns daily)',
    },
    'Premium Pass': {
      'league-of-legends': 'Event passes with exclusive skins',
      'counter-strike-2': 'Operation passes with missions',
      'clash-royale': 'Pass Royale with tower skins and emotes',
    },
    'Economy': {
      'league-of-legends': 'Free-to-play with optional purchases',
      'counter-strike-2': 'Steam marketplace economy',
      'clash-royale': 'In-game currency (Gold, Gems)',
    },
  }

  // Progression Incentives Comparison
  const progressionComparison = {
    'Account Progression': {
      'league-of-legends': 'Summoner level (uncapped)',
      'counter-strike-2': 'Service medals (yearly)',
      'clash-royale': 'King Tower level via XP',
    },
    'Character/Unit Progression': {
      'league-of-legends': 'Champion mastery (levels 1-7)',
      'counter-strike-2': 'StatTrak weapon kill counters',
      'clash-royale': 'Card levels (upgrade system)',
    },
    'Collection Element': {
      'league-of-legends': 'Champion and skin collection',
      'counter-strike-2': 'Weapon skin collection',
      'clash-royale': 'Card collection and upgrades',
    },
    'Long-term Goals': {
      'league-of-legends': ['Reach Challenger', 'Master all champions', 'Collect all skins'],
      'counter-strike-2': ['Achieve Global Elite', 'Collect rare skins', 'Complete operations'],
      'clash-royale': ['Reach Ultimate Champion', 'Max all cards', 'Complete masteries'],
    },
  }

  // Player Behavior Comparison
  const behaviorComparison = {
    'Positive Behavior System': {
      'league-of-legends': 'Honor system (levels 0-5) with rewards',
      'counter-strike-2': 'Trust Factor for better matchmaking',
      'clash-royale': 'Limited communication (emotes only)',
    },
    'Reporting System': {
      'league-of-legends': 'In-game reporting with instant feedback',
      'counter-strike-2': 'Overwatch community review system',
      'clash-royale': 'Report system for inappropriate behavior',
    },
    'Punishments': {
      'league-of-legends': ['Chat restrictions', 'Ranked restrictions', 'Bans'],
      'counter-strike-2': ['Cooldowns', 'Trust Factor reduction', 'VAC bans'],
      'clash-royale': ['Warnings', 'Temporary bans', 'Permanent bans'],
    },
    'Anti-Cheat': {
      'league-of-legends': 'Vanguard anti-cheat system',
      'counter-strike-2': 'VAC + Overwatch + Trust Factor',
      'clash-royale': 'Server-side validation',
    },
  }

  // Competitive Ecosystem Comparison
  const ecosystemComparison = {
    'Ranked Play': {
      'league-of-legends': 'Solo/Duo queue + Flex queue',
      'counter-strike-2': 'Competitive matchmaking + Premier mode',
      'clash-royale': 'Ladder (trophy-based)',
    },
    'Team Play': {
      'league-of-legends': 'Clash tournaments (monthly)',
      'counter-strike-2': '5v5 competitive matches',
      'clash-royale': 'Clan Wars (team battles)',
    },
    'Tournament Mode': {
      'league-of-legends': 'Clash tournaments',
      'counter-strike-2': 'Faceit/ESEA third-party platforms',
      'clash-royale': 'Challenges and Global Tournaments',
    },
    'Professional Scene': {
      'league-of-legends': 'Regional leagues (LCS, LEC, LCK, LPL) + Worlds',
      'counter-strike-2': 'Majors, BLAST, ESL Pro League, IEM',
      'clash-royale': 'CRL (Clash Royale League) + World Finals',
    },
  }

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Comparison
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Side-by-side comparison of incentive mechanisms across all three games
        </p>
      </div>

      {/* Ranking System Comparison */}
      <ComparisonTable data={rankingComparison} title="Ranking Systems" />

      {/* Reward Structures Comparison */}
      <ComparisonTable data={rewardComparison} title="Reward Structures" />

      {/* Progression Incentives Comparison */}
      <ComparisonTable data={progressionComparison} title="Progression Incentives" />

      {/* Player Behavior Comparison */}
      <ComparisonTable data={behaviorComparison} title="Player Behavior Incentives" />

      {/* Competitive Ecosystem Comparison */}
      <ComparisonTable data={ecosystemComparison} title="Competitive Ecosystems" />

      {/* Summary Section */}
      <div className="card mt-12">
        <h2 className="subsection-title mb-6">Key Takeaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-blue-900 dark:text-blue-200">
              League of Legends
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Focuses on seasonal progression with clear tier divisions, honor systems, and 
              comprehensive competitive structure from solo queue to professional leagues.
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-orange-900 dark:text-orange-200">
              Counter-Strike 2
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Emphasizes skill-based ranking with a strong skin economy, Trust Factor system, 
              and integration with third-party competitive platforms.
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-purple-900 dark:text-purple-200">
              Clash Royale
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Uses trophy-based progression with card collection mechanics, daily rewards, 
              and a mobile-friendly competitive structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
