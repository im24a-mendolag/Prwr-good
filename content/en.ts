import { SiteContent } from './types'

export const enContent: SiteContent = {
  nav: {
    brand: 'Gaming Incentives',
    links: [
      { href: '/', label: 'Home' },
      { href: '/league-of-legends', label: 'League of Legends' },
      { href: '/counter-strike-2', label: 'Counter-Strike 2' },
      { href: '/clash-royale', label: 'Clash Royale' },
      { href: '/comparison', label: 'Comparison' },
      { href: '/quiz', label: 'Quiz' },
    ],
  },
  footer: {
    line1: 'Gaming Incentives Comparison - Educational Project',
    line2: 'Compare incentive mechanisms across League of Legends, Counter-Strike 2, and Clash Royale',
    line3: 'Screenshots were taken from in-game and YouTube thumbnails',
  },
  home: {
    hero: {
      title: 'Gaming Incentives Comparison',
      description:
        'Explore how League of Legends, Counter-Strike 2, and Clash Royale use different incentive mechanisms to engage and retain players.',
      cta: 'View Full Comparison →',
    },
    about: {
      title: 'About This Comparison',
      paragraph1:
        'This website provides an in-depth analysis of incentive mechanisms across three popular competitive games. Each game employs unique strategies to motivate players, from ranking systems to reward structures, progression paths, and competitive ecosystems.',
      paragraph2:
        "Navigate through each game's dedicated page to learn about their specific incentive systems, or jump to the comparison section to see how they differ side-by-side.",
    },
    games: [
      {
        id: 'league-of-legends',
        name: 'League of Legends',
        description:
          'A multiplayer online battle arena (MOBA) game with a complex ranking system and seasonal rewards.',
        color: 'from-blue-600 to-cyan-500',
        icon: '⚔️',
      },
      {
        id: 'counter-strike-2',
        name: 'Counter-Strike 2',
        description:
          'A tactical first-person shooter with a competitive ranking system and weapon skin economy.',
        color: 'from-orange-600 to-red-500',
        icon: '🎯',
      },
      {
        id: 'clash-royale',
        name: 'Clash Royale',
        description:
          'A real-time strategy game combining card collection with tower defense mechanics.',
        color: 'from-purple-600 to-pink-500',
        icon: '👑',
      },
    ],
  },
  games: {},
  pages: {
    leagueOfLegends: {
      name: 'League of Legends',
      description:
        'League of Legends is a multiplayer online battle arena (MOBA) game developed by Riot Games. It features a complex ranking system, seasonal rewards, and a thriving competitive ecosystem.',
      website: 'https://www.leagueoflegends.com/',
      rankingSystem: {
        title: 'Ranking System',
        description:
          'League of Legends uses a tiered ranking system called the League System, divided into multiple tiers and divisions.',
        tiers: [
          'Iron',
          'Bronze',
          'Silver',
          'Gold',
          'Platinum',
          'Emerald',
          'Diamond',
          'Master',
          'Grandmaster',
          'Challenger',
        ],
        details: [
          'Each tier (except Master+) is divided into 4 divisions (IV, III, II, I)',
          'Players earn League Points (LP) by winning ranked matches',
          'Promotion series required to advance between tiers',
          'Demotion protection prevents immediate rank drops',
          'Ranked seasons reset periodically, requiring players to climb again',
        ],
        incentives: [
          'End-of-season rewards based on highest rank achieved',
          'Ranked borders and loading screen badges',
          'Victorious skin for Gold+ players',
          'Ranked icons and emotes',
          'Exclusive chromas for higher ranks',
        ],
      },
      rewardStructures: {
        title: 'Reward Structures',
        description:
          'League of Legends offers various reward systems to keep players engaged throughout the season.',
        types: [
          {
            name: 'Ranked Rewards',
            description: 'End-of-season rewards based on rank achievement',
            examples: ['Victorious skins', 'Ranked borders', 'Summoner icons', 'Emotes'],
          },
          {
            name: 'Battle Pass',
            description: 'Event passes with exclusive rewards',
            examples: ['Champions', 'Skins', 'Chroma variants', 'Emotes', 'Wards'],
          },
          {
            name: 'Daily Missions',
            description: 'Daily quests providing Blue Essence and XP',
            examples: ['Win a match', 'Play 3 games', 'Deal damage', 'Earn takedowns'],
          },
          {
            name: 'Hextech Crafting',
            description: 'Loot system rewarding players with champion shards, skin shards, and more',
            examples: ['Champion capsules', 'Masterwork chests', 'Key fragments'],
          },
        ],
      },
      progressionIncentives: {
        title: 'Progression Incentives',
        description: 'Multiple progression systems encourage continuous play and improvement.',
        systems: [
          {
            name: 'Summoner Level',
            description: 'Account level system with no maximum cap',
            rewards: ['Blue Essence', 'Champion capsules', 'Level-up rewards'],
          },
          {
            name: 'Champion Mastery',
            description: 'Individual champion progression system',
            rewards: ['Mastery tokens', 'Mastery levels (1-7)', 'Champion-specific emotes'],
          },
          {
            name: 'Ranked Climb',
            description: 'Seasonal ranked progression',
            rewards: ['LP gains', 'Rank promotions', 'Seasonal rewards'],
          },
          {
            name: 'Event Passes',
            description: 'Time-limited progression tracks',
            rewards: ['Exclusive skins', 'Chroma variants', 'Icons', 'Emotes'],
          },
        ],
      },
      playerBehaviorIncentives: {
        title: 'Player Behavior Incentives',
        description: 'Systems designed to promote positive behavior and reduce toxicity.',
        mechanisms: [
          {
            name: 'Honor System',
            description: 'Players can honor teammates after matches',
            rewards: ['Honor levels (0-5)', 'Honor capsules', 'Exclusive rewards', 'Loading screen badges'],
          },
          {
            name: 'Behavioral Penalties',
            description: 'Punishments for negative behavior',
            consequences: ['Chat restrictions', 'Ranked restrictions', 'Temporary bans', 'Permanent bans'],
          },
          {
            name: 'Reporting System',
            description: 'Players can report toxic behavior',
            impact: ['Automated penalties', 'Instant feedback reports', 'Behavioral tracking'],
          },
          {
            name: 'Positive Reinforcement',
            description: 'Rewards for good sportsmanship',
            rewards: ['Honor points', 'Exclusive skins', 'Loading screen recognition'],
          },
        ],
      },
      competitiveEcosystem: {
        title: 'Competitive Ecosystem',
        description: 'A thriving competitive scene with multiple levels of play.',
        levels: [
          {
            name: 'Solo Queue',
            description: 'Individual ranked play',
            features: ['Solo/Duo queue', 'Flex queue', 'Ranked seasons'],
          },
          {
            name: 'Clash',
            description: 'Team-based tournament system',
            features: ['Monthly tournaments', 'Team formation', 'Brackets', 'Trophies'],
          },
          {
            name: 'Professional Scene',
            description: 'Regional and international competitions',
            features: ['LCS', 'LEC', 'LCK', 'LPL', 'Worlds Championship'],
          },
          {
            name: 'Amateur Tournaments',
            description: 'Community-organized competitions',
            features: ['Third-party platforms', 'Prize pools', 'Ranked requirements'],
          },
        ],
      },
      monetization: {
        title: 'Monetization & Revenue',
        description: 'League of Legends uses a free-to-play model with optional purchases, focusing on cosmetic items and convenience features.',
        types: [
          {
            name: 'Champion Purchases',
            description: 'Players can buy champions with Riot Points (RP) or Blue Essence',
            examples: ['New champions cost 975-9750 RP', 'Champion bundles', 'Champion shards for discounts'],
            impact: ['Creates urgency for new releases', 'Encourages regular play to earn Blue Essence', 'Premium currency drives direct purchases'],
          },
          {
            name: 'Skin Sales',
            description: 'Cosmetic skins are the primary revenue driver',
            examples: ['Epic skins (975 RP)', 'Legendary skins (1820 RP)', 'Ultimate skins (3250 RP)', 'Prestige skins', 'Event-exclusive skins'],
            impact: ['High profit margins on digital goods', 'Limited-time offers create FOMO', 'Collection completion drives repeat purchases'],
          },
          {
            name: 'Battle Passes',
            description: 'Event passes provide exclusive rewards for a fixed price',
            examples: ['Event passes ($10-15)', 'Premium tracks with exclusive skins', 'Time-limited progression'],
            impact: ['Recurring revenue stream', 'Increases player engagement during events', 'Creates urgency with time limits'],
          },
          {
            name: 'Hextech Crafting',
            description: 'Loot box system encouraging key purchases',
            examples: ['Masterwork chests', 'Key fragments', 'Gemstones for rare skins'],
            impact: ['Gambling mechanics drive spending', 'Rare items create desire', 'Free chests hook players into system'],
          },
          {
            name: 'Account Services',
            description: 'Convenience purchases for account management',
            examples: ['Name changes', 'Server transfers', 'XP boosts', 'Champion rentals'],
            impact: ['Low-cost convenience purchases', 'Recurring revenue from account services', 'Reduces friction for committed players'],
          },
        ],
      },
    },
    counterStrike2: {
      name: 'Counter-Strike 2',
      description:
        'Counter-Strike 2 is a tactical first-person shooter developed by Valve. It features a competitive ranking system, weapon skin economy, and a strong esports presence.',
      website: 'https://www.counter-strike.net/',
      rankingSystem: {
        title: 'Ranking System',
        description: 'Counter-Strike 2 uses a skill-based ranking system called Competitive Skill Groups (CS Rating).',
        tiers: [
          'Silver I',
          'Silver II',
          'Silver III',
          'Silver Elite',
          'Silver Elite Master',
          'Gold Nova I',
          'Gold Nova II',
          'Gold Nova III',
          'Gold Nova Master',
          'Master Guardian I',
          'Master Guardian II',
          'Master Guardian Elite',
          'Distinguished Master Guardian',
          'Legendary Eagle',
          'Legendary Eagle Master',
          'Supreme Master First Class',
          'Global Elite',
        ],
        details: [
          '17 distinct ranks from Silver I to Global Elite',
          'Hidden MMR (Matchmaking Rating) determines rank',
          'Wins and losses affect rank, with performance considered',
          'Rank decay occurs after inactivity',
          'Premier mode uses CS Rating (0-50,000+) instead of ranks',
        ],
        incentives: [
          'Rank badge displayed on profile',
          'Access to higher-skilled matches',
          'Prestige of achieving higher ranks',
          'Competitive matchmaking access',
          'Prime status benefits',
        ],
      },
      rewardStructures: {
        title: 'Reward Structures',
        description: 'Counter-Strike 2 offers rewards through drops, operations, and the Steam marketplace economy.',
        types: [
          {
            name: 'Weekly Drops',
            description: 'Random item drops after matches',
            examples: ['Weapon skins', 'Cases', 'Stickers', 'Graffiti'],
          },
          {
            name: 'Operation Passes',
            description: 'Limited-time operation events',
            examples: ['Operation missions', 'Exclusive skins', 'Coins', 'Stars'],
          },
          {
            name: 'Prime Status',
            description: 'Premium matchmaking with better rewards',
            examples: ['Prime-exclusive drops', 'Better matchmaking', 'Souvenir packages'],
          },
          {
            name: 'Souvenir Packages',
            description: 'Special drops from major tournaments',
            examples: ['Tournament stickers', 'Gold signatures', 'Special skins'],
          },
        ],
      },
      progressionIncentives: {
        title: 'Progression Incentives',
        description: 'Multiple progression systems keep players engaged.',
        systems: [
          {
            name: 'Rank Progression',
            description: 'Climbing the competitive ranks',
            rewards: ['Rank badges', 'Better matchmaking', 'Prestige'],
          },
          {
            name: 'Operation Stars',
            description: 'Progress through operation missions',
            rewards: ['Operation rewards', 'Exclusive items', 'Operation coin upgrades'],
          },
          {
            name: 'Service Medals',
            description: 'Yearly account progression',
            rewards: ['Service medals', 'Profile customization', 'Prestige'],
          },
          {
            name: 'StatTrak Weapons',
            description: 'Track kills on weapon skins',
            rewards: ['Kill counters', 'Personalized weapons', 'Collection value'],
          },
        ],
      },
      playerBehaviorIncentives: {
        title: 'Player Behavior Incentives',
        description: 'Systems to maintain competitive integrity and reduce cheating.',
        mechanisms: [
          {
            name: 'Trust Factor',
            description: 'Hidden behavioral score affecting matchmaking',
            rewards: ['Better teammates', 'Fewer cheaters', 'Higher quality matches'],
          },
          {
            name: 'Overwatch',
            description: 'Community-driven anti-cheat system',
            rewards: ['XP rewards', 'Community contribution', 'Better game quality'],
          },
          {
            name: 'Prime Status',
            description: 'Verified accounts with better matchmaking',
            rewards: ['Better teammates', 'Reduced cheating', 'Prime-exclusive drops'],
          },
          {
            name: 'Cooldowns',
            description: 'Temporary bans for leaving matches or griefing',
            consequences: ['30-minute cooldown', '2-hour cooldown', '24-hour cooldown', '7-day cooldown'],
          },
        ],
      },
      competitiveEcosystem: {
        title: 'Competitive Ecosystem',
        description: 'A robust competitive scene with multiple levels of play.',
        levels: [
          {
            name: 'Matchmaking',
            description: 'Ranked competitive play',
            features: ['5v5 matches', 'Rank-based matchmaking', 'Map selection'],
          },
          {
            name: 'Premier Mode',
            description: 'CS Rating-based competitive mode',
            features: ['Pick/ban system', 'CS Rating', 'Leaderboards', 'Map-specific ratings'],
          },
          {
            name: 'Faceit/ESEA',
            description: 'Third-party competitive platforms',
            features: ['Higher skill ceiling', '128-tick servers', 'Tournaments', 'Leagues'],
          },
          {
            name: 'Professional Scene',
            description: 'Major tournaments and leagues',
            features: ['Majors', 'BLAST', 'ESL Pro League', 'IEM', 'BLAST Premier'],
          },
        ],
      },
      monetization: {
        title: 'Monetization & Revenue',
        description: 'Counter-Strike 2 generates revenue through the Steam marketplace economy, operation passes, and Prime status subscriptions.',
        types: [
          {
            name: 'Weapon Skin Marketplace',
            description: 'Players buy and sell skins on Steam Community Market',
            examples: ['Skin prices range from $0.03 to thousands', 'Steam takes 15% transaction fee', 'Rare skins can cost $10,000+'],
            impact: ['Creates real-world value perception', 'Trading economy drives engagement', 'Steam marketplace fees generate revenue'],
          },
          {
            name: 'Case Opening',
            description: 'Loot box system for weapon skins and stickers',
            examples: ['Cases cost $2.50', 'Keys required to open cases', 'Rare items have low drop rates'],
            impact: ['Gambling mechanics drive high spending', 'Low probability creates addiction loop', 'Free cases hook players'],
          },
          {
            name: 'Operation Passes',
            description: 'Limited-time operation events with premium tracks',
            examples: ['Operation passes ($15)', 'Exclusive operation skins', 'Operation coins and stars'],
            impact: ['Recurring revenue every few months', 'FOMO drives purchases', 'Exclusive content creates value'],
          },
          {
            name: 'Prime Status',
            description: 'Premium subscription for better matchmaking',
            examples: ['One-time purchase or upgrade', 'Better teammates and rewards', 'Prime-exclusive drops'],
            impact: ['One-time purchase model', 'Improves player experience', 'Reduces cheating in matches'],
          },
          {
            name: 'Souvenir Packages',
            description: 'Special drops from major tournaments',
            examples: ['Tournament stickers', 'Gold player signatures', 'Special souvenir skins'],
            impact: ['Limited availability creates value', 'Tournament engagement drives sales', 'Collector market'],
          },
        ],
      },
    },
    clashRoyale: {
      name: 'Clash Royale',
      description:
        'Clash Royale is a real-time strategy game combining card collection with tower defense mechanics. It features a trophy-based ranking system and frequent updates.',
      website: 'https://clashroyale.com/',
      rankingSystem: {
        title: 'Ranking System',
        description: 'Clash Royale uses a trophy-based ranking system with leagues and arenas.',
        tiers: [
          'Training Camp',
          'Goblin Stadium',
          'Bone Pit',
          'Barbarian Bowl',
          "P.E.K.K.A's Playhouse",
          'Spell Valley',
          "Builder's Workshop",
          'Royal Arena',
          'Frozen Peak',
          'Jungle Arena',
          'Hog Mountain',
          'Electro Valley',
          'Spooky Town',
          "Rascal's Hideout",
          'Serenity Peak',
          'League 1-10',
          'Ultimate Champion',
        ],
        details: [
          'Trophy-based progression system',
          'Trophies gained/lost based on match results',
          'Arenas unlock new cards and features',
          'Leagues (4000+ trophies) offer seasonal rewards',
          'Season resets drop players slightly but preserve progress',
        ],
        incentives: [
          'Arena-specific card unlocks',
          'Seasonal rewards based on league',
          'Trophy road rewards',
          'League badges and borders',
          'Ultimate Champion exclusive rewards',
        ],
      },
      rewardStructures: {
        title: 'Reward Structures',
        description: 'Clash Royale offers multiple reward systems to keep players engaged daily.',
        types: [
          {
            name: 'Chests',
            description: 'Rewards earned after battles',
            examples: [
              'Wooden chests',
              'Silver chests',
              'Gold chests',
              'Magical chests',
              'Giant chests',
              'Epic chests',
              'Legendary chests',
            ],
          },
          {
            name: 'Crown Chest',
            description: 'Daily chest requiring 10 crowns',
            examples: ['Cards', 'Gold', 'Gems'],
          },
          {
            name: 'Trophy Road',
            description: 'Progressive rewards based on trophy count',
            examples: ['Chests', 'Gold', 'Gems', 'Cards', 'Emotes'],
          },
          {
            name: 'Seasonal Rewards',
            description: 'End-of-season rewards based on league',
            examples: ['League tokens', 'Seasonal chests', 'Banners', 'Emotes'],
          },
          {
            name: 'Challenges',
            description: 'Special events with unique rewards',
            examples: ['Classic challenges', 'Grand challenges', 'Special challenges', 'Global tournaments'],
          },
        ],
      },
      progressionIncentives: {
        title: 'Progression Incentives',
        description: 'Multiple progression paths keep players engaged long-term.',
        systems: [
          {
            name: 'Card Levels',
            description: 'Upgrade cards to increase power',
            rewards: ['Higher card stats', 'Better performance', 'Access to higher arenas'],
          },
          {
            name: 'King Tower Level',
            description: 'Account progression through XP',
            rewards: ['Higher tower HP', 'More card levels', 'Unlock features'],
          },
          {
            name: 'Trophy Progression',
            description: 'Climbing through arenas and leagues',
            rewards: ['New cards', 'Better chests', 'League rewards'],
          },
          {
            name: 'Mastery',
            description: 'Card-specific progression system',
            rewards: ['Mastery badges', 'Gold', 'Gems', 'Banner tokens'],
          },
          {
            name: 'Pass Royale',
            description: 'Premium battle pass system',
            rewards: ['Exclusive emotes', 'Tower skins', 'Banners', 'Chests', 'Gold'],
          },
        ],
      },
      playerBehaviorIncentives: {
        title: 'Player Behavior Incentives',
        description: 'Systems designed to encourage fair play and reduce negative behavior.',
        mechanisms: [
          {
            name: 'Emote System',
            description: 'Limited communication through emotes',
            features: ['Prevents toxicity', 'Expressive gameplay', 'Collectible emotes'],
          },
          {
            name: 'Reporting System',
            description: 'Report players for inappropriate behavior',
            consequences: ['Warnings', 'Temporary bans', 'Permanent bans'],
          },
          {
            name: 'Fair Play',
            description: 'Matchmaking based on card levels and trophies',
            features: ['Level caps in challenges', 'Trophy-based matchmaking', 'Card level matching'],
          },
          {
            name: 'Positive Reinforcement',
            description: 'Rewards for consistent play',
            rewards: ['Daily rewards', 'Crown chests', 'Seasonal rewards'],
          },
        ],
      },
      competitiveEcosystem: {
        title: 'Competitive Ecosystem',
        description: 'A vibrant competitive scene with multiple tournament formats.',
        levels: [
          {
            name: 'Ladder',
            description: 'Ranked trophy-based play',
            features: ['Trophy progression', 'Arena unlocks', 'Seasonal resets'],
          },
          {
            name: 'Challenges',
            description: 'Tournament-style game modes',
            features: ['Classic challenges', 'Grand challenges', 'Special events', 'Global tournaments'],
          },
          {
            name: 'Clan Wars',
            description: 'Team-based competitive mode',
            features: ['Clan battles', 'War trophies', 'Clan rewards', 'Collection day'],
          },
          {
            name: 'Professional Scene',
            description: 'Esports competitions and tournaments',
            features: ['CRL (Clash Royale League)', 'World Finals', 'Monthly qualifiers', 'Regional competitions'],
          },
        ],
      },
      monetization: {
        title: 'Monetization & Revenue',
        description: 'Clash Royale uses a freemium model with in-app purchases, focusing on progression acceleration and cosmetic items.',
        types: [
          {
            name: 'Gem Purchases',
            description: 'Premium currency for speeding up progression and buying items',
            examples: ['Gems cost $0.99-$99.99', 'Used to speed up chests', 'Buy cards and gold', 'Enter challenges'],
            impact: ['Time pressure creates spending urgency', 'Multiple price points for different spenders', 'Convenience purchases drive revenue'],
          },
          {
            name: 'Pass Royale',
            description: 'Monthly battle pass subscription',
            examples: ['$4.99 per month', 'Exclusive tower skins', 'Emotes and banners', 'Chests and gold'],
            impact: ['Recurring subscription revenue', 'High value perception', 'Creates monthly engagement'],
          },
          {
            name: 'Chest Speed-ups',
            description: 'Players pay to unlock chests immediately',
            examples: ['Gems to unlock chests faster', 'Reduces wait times', 'Creates impatience'],
            impact: ['Time-gating drives purchases', 'Small purchases add up', 'Psychological pressure to spend'],
          },
          {
            name: 'Card Purchases',
            description: 'Direct card and gold purchases',
            examples: ['Buy specific cards with gems', 'Gold purchases for upgrades', 'Special offers and bundles'],
            impact: ['Pay-to-progress faster', 'Creates competitive advantage', 'Whales spend heavily'],
          },
          {
            name: 'Emotes & Cosmetics',
            description: 'Cosmetic items for personalization',
            examples: ['Exclusive emotes', 'Tower skins', 'Banners', 'Card backs'],
            impact: ['Low-cost impulse purchases', 'Collection completion drives spending', 'Social status items'],
          },
        ],
      },
    },
  },
  comparison: {
    title: 'Comparison',
    description: 'Side-by-side comparison of incentive mechanisms across all three games',
    ranking: {
      'Rank Structure': {
        'league-of-legends': '10 tiers (Iron to Challenger) with 4 divisions each',
        'counter-strike-2': '17 ranks (Silver I to Global Elite) + Premier CS Rating',
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
    },
    rewards: {
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
      Economy: {
        'league-of-legends': 'Free-to-play with optional purchases',
        'counter-strike-2': 'Steam marketplace economy',
        'clash-royale': 'In-game currency (Gold, Gems)',
      },
    },
    progression: {
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
    },
    behavior: {
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
      Punishments: {
        'league-of-legends': ['Chat restrictions', 'Ranked restrictions', 'Bans'],
        'counter-strike-2': ['Cooldowns', 'Trust Factor reduction', 'VAC bans'],
        'clash-royale': ['Warnings', 'Temporary bans', 'Permanent bans'],
      },
      'Anti-Cheat': {
        'league-of-legends': 'Vanguard anti-cheat system',
        'counter-strike-2': 'VAC + Overwatch + Trust Factor',
        'clash-royale': 'Server-side validation',
      },
    },
    ecosystem: {
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
    },
    monetization: {
      'Primary Revenue Model': {
        'league-of-legends': 'Free-to-play with cosmetic purchases',
        'counter-strike-2': 'Steam marketplace economy + operation passes',
        'clash-royale': 'Freemium with in-app purchases',
      },
      'Main Revenue Drivers': {
        'league-of-legends': ['Skin sales', 'Battle passes', 'Champion purchases', 'Hextech crafting'],
        'counter-strike-2': ['Case opening', 'Skin marketplace', 'Operation passes', 'Prime status'],
        'clash-royale': ['Gem purchases', 'Pass Royale', 'Chest speed-ups', 'Card purchases'],
      },
      'Average Spending': {
        'league-of-legends': '$50-200 per year (cosmetics-focused)',
        'counter-strike-2': '$20-500+ (high variance, skin trading)',
        'clash-royale': '$10-100+ per month (progression-focused)',
      },
      'Whale Strategy': {
        'league-of-legends': 'Skin collectors, event pass buyers',
        'counter-strike-2': 'Rare skin collectors, case opening',
        'clash-royale': 'Progression acceleration, maxed accounts',
      },
      'Psychological Triggers': {
        'league-of-legends': ['FOMO (limited skins)', 'Collection completion', 'Social status'],
        'counter-strike-2': ['Gambling mechanics', 'Real-world value', 'Rarity perception'],
        'clash-royale': ['Time pressure', 'Pay-to-win elements', 'Competitive advantage'],
      },
      'Revenue Share Model': {
        'league-of-legends': '100% to Riot Games',
        'counter-strike-2': 'Steam takes 15% marketplace fee, Valve gets case/key revenue',
        'clash-royale': '100% to Supercell (App Store/Play Store take 30%)',
      },
    },
    summary: {
      league:
        'Focuses on seasonal progression with clear tier divisions, honor systems, and comprehensive competitive structure from solo queue to professional leagues.',
      cs2:
        'Emphasizes skill-based ranking with a strong skin economy, Trust Factor system, and integration with third-party competitive platforms.',
      clash:
        'Uses trophy-based progression with card collection mechanics, daily rewards, and a mobile-friendly competitive structure.',
    },
  },
  quiz: {
    title: 'Gaming Incentives Quiz',
    description: 'Test your knowledge about incentive mechanisms in League of Legends, Counter-Strike 2, and Clash Royale!',
    progress: {
      question: 'Question',
      of: 'of',
      score: 'Score',
    },
    actions: {
      previous: 'Previous',
      submit: 'Submit Answer',
      next: 'Next Question',
      finish: 'Finish Quiz',
    },
    explanation: 'Explanation',
    completed: {
      title: 'Quiz Completed!',
      excellent: 'Excellent work! You have a deep understanding of gaming incentive mechanisms.',
      good: 'Good job! You understand the basics, but there\'s always more to learn.',
      keepLearning: 'Keep learning! Review the content and try again to improve your score.',
      restart: 'Restart Quiz',
    },
    questions: [
      {
        question: 'How many rank tiers does League of Legends have?',
        options: [
          '8 tiers',
          '10 tiers',
          '12 tiers',
          '15 tiers',
        ],
        correctAnswer: 1,
        explanation: 'League of Legends uses a tiered ranking system with 10 tiers: Iron, Bronze, Silver, Gold, Platinum, Emerald, Diamond, Master, Grandmaster, and Challenger.',
      },
      {
        question: 'What is the highest rank in Counter-Strike 2?',
        options: [
          'Supreme Master First Class',
          'Global Elite',
          'Legendary Eagle Master',
          'Distinguished Master Guardian',
        ],
        correctAnswer: 1,
        explanation: 'Global Elite is the highest rank in Counter-Strike 2\'s competitive ranking system. Premier mode uses CS Rating instead, which can go up to 50,000+.',
      },
      {
        question: 'Which game uses a trophy-based ranking system?',
        options: [
          'League of Legends',
          'Counter-Strike 2',
          'Clash Royale',
          'All of the above',
        ],
        correctAnswer: 2,
        explanation: 'Clash Royale uses a trophy-based progression system where players gain or lose trophies based on match results, progressing through arenas and leagues.',
      },
      {
        question: 'What is the primary revenue model for Counter-Strike 2?',
        options: [
          'Subscription fees',
          'Steam marketplace economy',
          'Character purchases',
          'Battle pass only',
        ],
        correctAnswer: 1,
        explanation: 'Counter-Strike 2 generates revenue primarily through the Steam marketplace economy, where players buy and sell weapon skins. Steam takes a 15% transaction fee.',
      },
      {
        question: 'Which game offers "Victorious skins" as end-of-season rewards?',
        options: [
          'Counter-Strike 2',
          'Clash Royale',
          'League of Legends',
          'None of the above',
        ],
        correctAnswer: 2,
        explanation: 'League of Legends awards Victorious skins to players who achieve Gold rank or higher at the end of each ranked season.',
      },
      {
        question: 'What is the name of League of Legends\' honor system?',
        options: [
          'Trust Factor',
          'Honor System',
          'Reputation System',
          'Good Behavior Points',
        ],
        correctAnswer: 1,
        explanation: 'League of Legends uses an Honor System where players can honor teammates after matches, with honor levels ranging from 0 to 5 and rewards for positive behavior.',
      },
      {
        question: 'How many crowns are required to unlock the daily Crown Chest in Clash Royale?',
        options: [
          '5 crowns',
          '10 crowns',
          '15 crowns',
          '20 crowns',
        ],
        correctAnswer: 1,
        explanation: 'Clash Royale requires players to earn 10 crowns daily to unlock the Crown Chest, which contains cards, gold, and gems.',
      },
      {
        question: 'What is Counter-Strike 2\'s community-driven anti-cheat system called?',
        options: [
          'VAC',
          'Overwatch',
          'Trust Factor',
          'Prime Status',
        ],
        correctAnswer: 1,
        explanation: 'Overwatch is Counter-Strike 2\'s community-driven anti-cheat system where experienced players review reported cases of cheating and griefing.',
      },
      {
        question: 'Which game uses League Points (LP) for ranked progression?',
        options: [
          'Counter-Strike 2',
          'Clash Royale',
          'League of Legends',
          'All three games',
        ],
        correctAnswer: 2,
        explanation: 'League of Legends uses League Points (LP) that players earn by winning ranked matches. Players need to accumulate LP and win promotion series to advance between tiers.',
      },
      {
        question: 'What is the name of Clash Royale\'s premium battle pass?',
        options: [
          'Battle Pass',
          'Operation Pass',
          'Pass Royale',
          'Season Pass',
        ],
        correctAnswer: 2,
        explanation: 'Pass Royale is Clash Royale\'s monthly battle pass subscription ($4.99/month) that provides exclusive tower skins, emotes, banners, chests, and gold.',
      },
      {
        question: 'Which game features a "Hextech Crafting" loot system?',
        options: [
          'Counter-Strike 2',
          'Clash Royale',
          'League of Legends',
          'None of the above',
        ],
        correctAnswer: 2,
        explanation: 'League of Legends features Hextech Crafting, a loot box system that rewards players with champion shards, skin shards, and other items through chests and keys.',
      },
      {
        question: 'What is the top rank in Clash Royale called?',
        options: [
          'Grand Champion',
          'Ultimate Champion',
          'Legendary Champion',
          'Master Champion',
        ],
        correctAnswer: 1,
        explanation: 'Ultimate Champion is the highest rank in Clash Royale, achieved by players who reach the top of the trophy ladder.',
      },
      {
        question: 'Which game uses a Premier mode with CS Rating instead of traditional ranks?',
        options: [
          'League of Legends',
          'Counter-Strike 2',
          'Clash Royale',
          'All of the above',
        ],
        correctAnswer: 1,
        explanation: 'Counter-Strike 2 features Premier mode, which uses CS Rating (0-50,000+) instead of the traditional 17-rank system, with map-specific ratings and a pick/ban system.',
      },
      {
        question: 'What is the primary monetization strategy for League of Legends?',
        options: [
          'Progression acceleration',
          'Cosmetic skin sales',
          'Weapon marketplace',
          'Subscription model',
        ],
        correctAnswer: 1,
        explanation: 'League of Legends primarily generates revenue through cosmetic skin sales, with skins ranging from Epic (975 RP) to Ultimate (3250 RP), along with battle passes and champion purchases.',
      },
      {
        question: 'Which game features "Clash" tournaments?',
        options: [
          'Counter-Strike 2',
          'Clash Royale',
          'League of Legends',
          'Both League of Legends and Clash Royale',
        ],
        correctAnswer: 2,
        explanation: 'League of Legends features Clash, a monthly team-based tournament system where players form teams, compete in brackets, and earn trophies.',
      },
    ],
  },
}

// games map for quick lookup
enContent.games = enContent.home.games.reduce((acc, game) => {
  acc[game.id] = game
  return acc
}, {} as Record<string, typeof enContent.home.games[number]>)


