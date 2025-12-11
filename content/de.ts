import { SiteContent } from './types'

export const deContent: SiteContent = {
  nav: {
    brand: 'Gaming-Anreize',
    links: [
      { href: '/', label: 'Startseite' },
      { href: '/league-of-legends', label: 'League of Legends' },
      { href: '/counter-strike-2', label: 'Counter-Strike 2' },
      { href: '/clash-royale', label: 'Clash Royale' },
      { href: '/comparison', label: 'Vergleich' },
    ],
  },
  footer: {
    line1: 'Vergleich von Gaming-Anreizen – Lernprojekt',
    line2: 'Vergleiche Anreizmechanismen in League of Legends, Counter-Strike 2 und Clash Royale',
  },
  home: {
    hero: {
      title: 'Vergleich von Gaming-Anreizen',
      description:
        'Entdecke, wie League of Legends, Counter-Strike 2 und Clash Royale verschiedene Anreizmechanismen nutzen, um Spieler zu motivieren und zu binden.',
      cta: 'Gesamten Vergleich ansehen →',
    },
    about: {
      title: 'Über diesen Vergleich',
      paragraph1:
        'Diese Website bietet eine detaillierte Analyse von Anreizmechanismen in drei beliebten kompetitiven Spielen. Jedes Spiel nutzt eigene Strategien, um Spieler zu motivieren – von Rangsystemen über Belohnungsstrukturen bis zu Progressionspfaden und Wettbewerbsumgebungen.',
      paragraph2:
        'Navigiere zu den einzelnen Spielseiten, um mehr über ihre spezifischen Anreizsysteme zu erfahren, oder springe direkt zum Vergleich, um die Unterschiede auf einen Blick zu sehen.',
    },
    games: [
      {
        id: 'league-of-legends',
        name: 'League of Legends',
        description:
          'Ein Multiplayer-Online-Battle-Arena-Spiel (MOBA) mit komplexem Rangsystem und saisonalen Belohnungen.',
        color: 'from-blue-600 to-cyan-500',
        icon: '⚔️',
      },
      {
        id: 'counter-strike-2',
        name: 'Counter-Strike 2',
        description:
          'Ein taktischer Ego-Shooter mit kompetitivem Rangsystem und umfangreicher Waffenskin-Ökonomie.',
        color: 'from-orange-600 to-red-500',
        icon: '🎯',
      },
      {
        id: 'clash-royale',
        name: 'Clash Royale',
        description:
          'Ein Echtzeit-Strategiespiel, das Kartensammlung mit Tower-Defense-Mechaniken kombiniert.',
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
        'League of Legends ist ein Multiplayer-Online-Battle-Arena-Spiel (MOBA) von Riot Games mit komplexem Rangsystem, saisonalen Belohnungen und einer lebendigen Wettbewerbsszene.',
      rankingSystem: {
        title: 'Rangsystem',
        description:
          'League of Legends nutzt ein gestuftes Rangsystem (League System), das in mehrere Tiers und Divisionen unterteilt ist.',
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
          'Jeder Tier (außer Master+) hat 4 Divisionen (IV, III, II, I)',
          'Spieler verdienen League Points (LP) durch Siege',
          'Beförderungsserien zum Aufstieg zwischen Tiers',
          'Abstiegsschutz verhindert sofortige Rank-Drops',
          'Ranglisten-Saisons werden regelmäßig zurückgesetzt',
        ],
        incentives: [
          'Saisonabschluss-Belohnungen basierend auf dem höchsten Rang',
          'Rangrahmen und Ladebildschirm-Abzeichen',
          'Victorious-Skin für Spieler ab Gold',
          'Rang-Icons und Emotes',
          'Exklusive Chromas für höhere Ränge',
        ],
      },
      rewardStructures: {
        title: 'Belohnungsstrukturen',
        description:
          'League of Legends bietet verschiedene Belohnungssysteme, die Spieler während der Saison motivieren.',
        types: [
          {
            name: 'Ranglisten-Belohnungen',
            description: 'Saisonabschluss-Belohnungen abhängig vom erreichten Rang',
            examples: ['Victorious-Skins', 'Rangrahmen', 'Beschwörer-Icons', 'Emotes'],
          },
          {
            name: 'Battle Pass',
            description: 'Event-Pässe mit exklusiven Belohnungen',
            examples: ['Champions', 'Skins', 'Chroma-Varianten', 'Emotes', 'Wards'],
          },
          {
            name: 'Tägliche Missionen',
            description: 'Tägliche Quests mit Blauer Essenz und EP',
            examples: ['Gewinne ein Spiel', 'Spiele 3 Partien', 'Verursache Schaden', 'Erziele Takedowns'],
          },
          {
            name: 'Hextech-Handwerk',
            description: 'Beutesystem mit Champion-Scherben, Skin-Scherben und mehr',
            examples: ['Champion-Kapseln', 'Meistertruhen', 'Schlüsselfragmente'],
          },
        ],
      },
      progressionIncentives: {
        title: 'Fortschrittsanreize',
        description: 'Mehrere Fortschrittssysteme motivieren kontinuierliches Spielen.',
        systems: [
          {
            name: 'Beschwörer-Stufe',
            description: 'Account-Stufensystem ohne Obergrenze',
            rewards: ['Blaue Essenz', 'Champion-Kapseln', 'Level-Up-Belohnungen'],
          },
          {
            name: 'Champion-Meisterschaft',
            description: 'Fortschritt pro Champion',
            rewards: ['Meisterschaftsmarken', 'Meisterschaftsstufen (1-7)', 'Championspezifische Emotes'],
          },
          {
            name: 'Ranglisten-Aufstieg',
            description: 'Saisonaler Ranglistenfortschritt',
            rewards: ['LP-Gewinne', 'Rangaufstiege', 'Saisonale Belohnungen'],
          },
          {
            name: 'Event-Pässe',
            description: 'Zeitlich begrenzte Fortschrittsleisten',
            rewards: ['Exklusive Skins', 'Chroma-Varianten', 'Icons', 'Emotes'],
          },
        ],
      },
      playerBehaviorIncentives: {
        title: 'Anreize für Spieler-Verhalten',
        description: 'Systeme zur Förderung positiven Verhaltens und Reduzierung von Toxicity.',
        mechanisms: [
          {
            name: 'Ehrungssystem',
            description: 'Spieler können Teammitglieder nach Partien ehren',
            rewards: ['Ehrungsstufen (0-5)', 'Ehrungskapseln', 'Exklusive Belohnungen', 'Ladebildschirm-Abzeichen'],
          },
          {
            name: 'Verhaltensstrafen',
            description: 'Strafen bei negativem Verhalten',
            consequences: ['Chat-Einschränkungen', 'Ranglisten-Sperren', 'Zeitweilige Banns', 'Permanente Banns'],
          },
          {
            name: 'Meldesystem',
            description: 'Spieler können toxisches Verhalten melden',
            impact: ['Automatisierte Strafen', 'Sofort-Feedback', 'Verhaltens-Tracking'],
          },
          {
            name: 'Positive Verstärkung',
            description: 'Belohnungen für Fairness und Teamplay',
            rewards: ['Ehrungspunkte', 'Exklusive Skins', 'Anerkennung im Ladebildschirm'],
          },
        ],
      },
      competitiveEcosystem: {
        title: 'Wettbewerbsökosystem',
        description: 'Eine lebendige Wettbewerbsszene mit mehreren Ebenen.',
        levels: [
          {
            name: 'Solo Queue',
            description: 'Individuelles Ranglistenspiel',
            features: ['Solo/Duo-Queue', 'Flex-Queue', 'Ranglistensaisons'],
          },
          {
            name: 'Clash',
            description: 'Team-basiertes Turniersystem',
            features: ['Monatliche Turniere', 'Teambildung', 'KO-Brackets', 'Trophäen'],
          },
          {
            name: 'Profiszene',
            description: 'Regionale und internationale Wettbewerbe',
            features: ['LCS', 'LEC', 'LCK', 'LPL', 'Worlds'],
          },
          {
            name: 'Amateur-Turniere',
            description: 'Community-organisierte Wettkämpfe',
            features: ['Third-Party-Plattformen', 'Preisgelder', 'Rang-Anforderungen'],
          },
        ],
      },
    },
    counterStrike2: {
      name: 'Counter-Strike 2',
      description:
        'Counter-Strike 2 ist ein taktischer Ego-Shooter von Valve mit kompetitivem Rangsystem, Skin-Ökonomie und starker Esports-Präsenz.',
      rankingSystem: {
        title: 'Rangsystem',
        description: 'Counter-Strike 2 nutzt ein skillbasiertes Rangsystem (Competitive Skill Groups / CS Rating).',
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
          '17 Ränge von Silver I bis Global Elite',
          'Verstecktes MMR (Matchmaking Rating) bestimmt den Rang',
          'Siege/Niederlagen beeinflussen den Rang, Leistung fließt ein',
          'Rangverfall bei Inaktivität',
          'Premier-Modus nutzt CS Rating (0-50.000+) statt Rängen',
        ],
        incentives: [
          'Rangabzeichen im Profil',
          'Zugang zu stärker besetzten Matches',
          'Prestige durch hohe Ränge',
          'Zugang zu kompetitivem Matchmaking',
          'Prime-Status-Vorteile',
        ],
      },
      rewardStructures: {
        title: 'Belohnungsstrukturen',
        description:
          'Counter-Strike 2 bietet Belohnungen durch Drops, Operationen und die Steam-Marktplatz-Ökonomie.',
        types: [
          {
            name: 'Wöchentliche Drops',
            description: 'Zufällige Items nach Matches',
            examples: ['Waffenskins', 'Cases', 'Sticker', 'Graffiti'],
          },
          {
            name: 'Operation-Pässe',
            description: 'Zeitlich begrenzte Operation-Events',
            examples: ['Operation-Missionen', 'Exklusive Skins', 'Coins', 'Stars'],
          },
          {
            name: 'Prime-Status',
            description: 'Premium-Matchmaking mit besseren Belohnungen',
            examples: ['Prime-exklusive Drops', 'Besseres Matchmaking', 'Souvenir-Pakete'],
          },
          {
            name: 'Souvenir-Pakete',
            description: 'Spezielle Drops aus Major-Turnieren',
            examples: ['Turnier-Sticker', 'Goldene Signaturen', 'Besondere Skins'],
          },
        ],
      },
      progressionIncentives: {
        title: 'Fortschrittsanreize',
        description: 'Mehrere Fortschrittssysteme halten Spieler langfristig motiviert.',
        systems: [
          {
            name: 'Rangfortschritt',
            description: 'Aufstieg in den kompetitiven Rängen',
            rewards: ['Rangabzeichen', 'Besseres Matchmaking', 'Prestige'],
          },
          {
            name: 'Operation Stars',
            description: 'Fortschritt über Operation-Missionen',
            rewards: ['Operations-Belohnungen', 'Exklusive Items', 'Operation-Coin-Upgrades'],
          },
          {
            name: 'Service-Medaillen',
            description: 'Jährlicher Account-Fortschritt',
            rewards: ['Service-Medaillen', 'Profil-Anpassung', 'Prestige'],
          },
          {
            name: 'StatTrak-Waffen',
            description: 'Kill-Zähler auf Waffenskins',
            rewards: ['Killcounter', 'Personalisierte Waffen', 'Sammlerwert'],
          },
        ],
      },
      playerBehaviorIncentives: {
        title: 'Anreize für Spieler-Verhalten',
        description: 'Systeme zur Wahrung der Wettbewerb-Integrität und zur Reduzierung von Cheating.',
        mechanisms: [
          {
            name: 'Trust Factor',
            description: 'Versteckter Verhaltens-Score fürs Matchmaking',
            rewards: ['Bessere Mitspieler', 'Weniger Cheater', 'Höhere Matchqualität'],
          },
          {
            name: 'Overwatch',
            description: 'Community-basiertes Anti-Cheat-System',
            rewards: ['EP-Belohnungen', 'Community-Beitrag', 'Bessere Spielqualität'],
          },
          {
            name: 'Prime-Status',
            description: 'Verifizierte Accounts mit besserem Matchmaking',
            rewards: ['Bessere Mitspieler', 'Weniger Cheater', 'Prime-exklusive Drops'],
          },
          {
            name: 'Cooldowns',
            description: 'Zeitliche Sperren bei Verlassen/Griefing',
            consequences: ['30 Minuten', '2 Stunden', '24 Stunden', '7 Tage'],
          },
        ],
      },
      competitiveEcosystem: {
        title: 'Wettbewerbsökosystem',
        description: 'Robustes kompetitives Umfeld mit mehreren Stufen.',
        levels: [
          {
            name: 'Matchmaking',
            description: 'Rangierte Competitive-Matches',
            features: ['5v5-Matches', 'Rangbasiertes Matchmaking', 'Kartenauswahl'],
          },
          {
            name: 'Premier Mode',
            description: 'CS Rating-basiertes Competitive',
            features: ['Pick/Ban-System', 'CS Rating', 'Leaderboards', 'Karten-spezifische Ratings'],
          },
          {
            name: 'Faceit/ESEA',
            description: 'Drittanbieter-Wettkampfplattformen',
            features: ['Höheres Skill-Ceiling', '128-Tick-Server', 'Turniere', 'Ligen'],
          },
          {
            name: 'Profiszene',
            description: 'Große Turniere und Ligen',
            features: ['Majors', 'BLAST', 'ESL Pro League', 'IEM', 'BLAST Premier'],
          },
        ],
      },
    },
    clashRoyale: {
      name: 'Clash Royale',
      description:
        'Clash Royale ist ein Echtzeit-Strategiespiel mit Kartensammlung und Tower-Defense-Mechaniken, einem pokalbasierten Rangsystem und regelmäßigen Updates.',
      rankingSystem: {
        title: 'Rangsystem',
        description: 'Clash Royale nutzt ein pokalbasiertes Rangsystem mit Arenen und Ligen.',
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
          'Pokalbasierter Fortschritt',
          'Pokalgewinn/-verlust nach Matches',
          'Arenen schalten neue Karten und Features frei',
          'Ligen (4000+ Pokale) bieten saisonale Belohnungen',
          'Saison-Resets senken Spieler leicht ab, Fortschritt bleibt teilweise erhalten',
        ],
        incentives: [
          'Arenaspezifische Kartenfreischaltungen',
          'Saisonbelohnungen basierend auf Liga',
          'Trophäenpfad-Belohnungen',
          'Liga-Abzeichen und Rahmen',
          'Exklusive Belohnungen für Ultimate Champion',
        ],
      },
      rewardStructures: {
        title: 'Belohnungsstrukturen',
        description: 'Clash Royale bietet tägliche und langfristige Belohnungssysteme.',
        types: [
          {
            name: 'Truhen',
            description: 'Belohnungen nach Kämpfen',
            examples: [
              'Holz-, Silber-, Gold- und Magische Truhen',
              'Riesen- und Epische Truhen',
              'Legendäre Truhen',
            ],
          },
          {
            name: 'Kronentruhe',
            description: 'Tägliche Truhe für 10 Kronen',
            examples: ['Karten', 'Gold', 'Juwelen'],
          },
          {
            name: 'Trophäenpfad',
            description: 'Fortschreitende Belohnungen basierend auf Pokalen',
            examples: ['Truhen', 'Gold', 'Juwelen', 'Karten', 'Emotes'],
          },
          {
            name: 'Saisonale Belohnungen',
            description: 'Saisonabschluss-Belohnungen nach Liga',
            examples: ['Liga-Tokens', 'Saisonale Truhen', 'Banner', 'Emotes'],
          },
          {
            name: 'Herausforderungen',
            description: 'Events mit einzigartigen Belohnungen',
            examples: ['Klassische und Große Herausforderungen', 'Spezial-Events', 'Globale Turniere'],
          },
        ],
      },
      progressionIncentives: {
        title: 'Fortschrittsanreize',
        description: 'Mehrere Fortschrittswege halten Spieler langfristig bei der Stange.',
        systems: [
          {
            name: 'Kartenlevel',
            description: 'Karten aufwerten, um Stärke zu erhöhen',
            rewards: ['Bessere Kartenwerte', 'Stärkeres Deck', 'Zugang zu höheren Arenen'],
          },
          {
            name: 'Königsturm-Level',
            description: 'Account-Fortschritt über EP',
            rewards: ['Mehr Turm-HP', 'Höhere Kartenstufen', 'Freischaltung von Features'],
          },
          {
            name: 'Pokalfortschritt',
            description: 'Aufstieg durch Arenen und Ligen',
            rewards: ['Neue Karten', 'Bessere Truhen', 'Ligabelohnungen'],
          },
          {
            name: 'Mastery',
            description: 'Karten-spezifisches Fortschrittssystem',
            rewards: ['Mastery-Badges', 'Gold', 'Juwelen', 'Banner-Tokens'],
          },
          {
            name: 'Pass Royale',
            description: 'Premium-Battle-Pass',
            rewards: ['Exklusive Emotes', 'Tower Skins', 'Banner', 'Truhen', 'Gold'],
          },
        ],
      },
      playerBehaviorIncentives: {
        title: 'Anreize für Spieler-Verhalten',
        description: 'Systeme zur Förderung fairen Spiels und Reduktion negativen Verhaltens.',
        mechanisms: [
          {
            name: 'Emote-System',
            description: 'Begrenzte Kommunikation über Emotes',
            features: ['Verhindert Toxicity', 'Ausdrucksstarkes Gameplay', 'Sammelbare Emotes'],
          },
          {
            name: 'Meldesystem',
            description: 'Melde Spieler bei Fehlverhalten',
            consequences: ['Verwarnungen', 'Zeitweilige Banns', 'Permanente Banns'],
          },
          {
            name: 'Fair Play',
            description: 'Matchmaking nach Kartenlevel und Pokalen',
            features: ['Level-Caps in Herausforderungen', 'Pokalbasiertes Matchmaking', 'Angeglichene Kartenlevel'],
          },
          {
            name: 'Positive Verstärkung',
            description: 'Belohnungen für konstantes Spielen',
            rewards: ['Tägliche Belohnungen', 'Kronentruhen', 'Saisonale Belohnungen'],
          },
        ],
      },
      competitiveEcosystem: {
        title: 'Wettbewerbsökosystem',
        description: 'Lebendiges kompetitives Umfeld mit verschiedenen Turnierformaten.',
        levels: [
          {
            name: 'Ladder',
            description: 'Ranglisten-Spiel über Pokale',
            features: ['Pokalfortschritt', 'Arenafreischaltungen', 'Saison-Resets'],
          },
          {
            name: 'Herausforderungen',
            description: 'Turnierartige Spielmodi',
            features: ['Klassische/Grand Challenges', 'Spezial-Events', 'Globale Turniere'],
          },
          {
            name: 'Clan Wars',
            description: 'Team-basierter Modus',
            features: ['Clan-Kämpfe', 'Kriegspokale', 'Clan-Belohnungen', 'Collection Day'],
          },
          {
            name: 'Profiszene',
            description: 'Esports und Turniere',
            features: ['CRL', 'World Finals', 'Monatliche Qualifier', 'Regionale Wettbewerbe'],
          },
        ],
      },
    },
  },
  comparison: {
    title: 'Vergleich',
    description: 'Gegenüberstellung der Anreizmechanismen aller drei Spiele',
    ranking: {
      'Rangstruktur': {
        'league-of-legends': '10 Tiers (Iron bis Challenger) mit je 4 Divisionen',
        'counter-strike-2': '17 Ränge (Silver I bis Global Elite) + Premier CS Rating',
        'clash-royale': 'Pokalbasiert mit Arenen und Ligen (17+ Stufen)',
      },
      'Fortschrittsmethode': {
        'league-of-legends': 'League Points (LP) mit Aufstiegsserien',
        'counter-strike-2': 'Verstecktes MMR mit Sieg/Niederlage-Tracking',
        'clash-royale': 'Pokalgewinn/-verlust pro Match',
      },
      'Saison-Reset': {
        'league-of-legends': 'Neustart mit Platzierungsspielen',
        'counter-strike-2': 'Rangverfall nach Inaktivität',
        'clash-royale': 'Teilweiser Reset, Fortschritt bleibt teilweise',
      },
      'Höchster Rang': {
        'league-of-legends': 'Challenger',
        'counter-strike-2': 'Global Elite / hoher CS Rating',
        'clash-royale': 'Ultimate Champion',
      },
    },
    rewards: {
      'Primäre Belohnungen': {
        'league-of-legends': ['Victorious-Skins', 'Rangrahmen', 'Hextech-Crafting', 'Battle Passes'],
        'counter-strike-2': ['Waffenskins', 'Cases', 'Operation-Pässe', 'Souvenir-Pakete'],
        'clash-royale': ['Truhen', 'Karten', 'Gold', 'Juwelen', 'Emotes'],
      },
      'Tägliche Belohnungen': {
        'league-of-legends': 'Tägliche Missionen mit Blauer Essenz und EP',
        'counter-strike-2': 'Wöchentliche Drops nach Matches',
        'clash-royale': 'Kronentruhe (10 Kronen täglich)',
      },
      'Premium-Pass': {
        'league-of-legends': 'Event-Pässe mit exklusiven Skins',
        'counter-strike-2': 'Operation-Pässe mit Missionen',
        'clash-royale': 'Pass Royale mit Tower Skins und Emotes',
      },
      'Ökonomie': {
        'league-of-legends': 'Free-to-play mit optionalen Käufen',
        'counter-strike-2': 'Steam-Marktplatz-Ökonomie',
        'clash-royale': 'In-Game-Währung (Gold, Juwelen)',
      },
    },
    progression: {
      'Account-Fortschritt': {
        'league-of-legends': 'Beschwörerlevel (ohne Cap)',
        'counter-strike-2': 'Service-Medaillen (jährlich)',
        'clash-royale': 'Königsturm-Level durch EP',
      },
      'Charakter-/Einheitenfortschritt': {
        'league-of-legends': 'Champion-Meisterschaft (Level 1-7)',
        'counter-strike-2': 'StatTrak-Killzähler auf Waffen',
        'clash-royale': 'Kartenlevel (Upgrade-System)',
      },
      'Sammlung': {
        'league-of-legends': 'Champion- und Skin-Sammlung',
        'counter-strike-2': 'Waffenskin-Sammlung',
        'clash-royale': 'Kartensammlung und Upgrades',
      },
      'Langfristige Ziele': {
        'league-of-legends': ['Challenger erreichen', 'Alle Champions meistern', 'Alle Skins sammeln'],
        'counter-strike-2': ['Global Elite erreichen', 'Seltene Skins sammeln', 'Operationen abschließen'],
        'clash-royale': ['Ultimate Champion erreichen', 'Alle Karten maxen', 'Mastery abschließen'],
      },
    },
    behavior: {
      'Positives Verhalten': {
        'league-of-legends': 'Ehrungssystem (Level 0-5) mit Belohnungen',
        'counter-strike-2': 'Trust Factor für besseres Matchmaking',
        'clash-royale': 'Begrenzte Kommunikation (nur Emotes)',
      },
      'Meldesystem': {
        'league-of-legends': 'In-Game-Reports mit Sofort-Feedback',
        'counter-strike-2': 'Overwatch Community-Review',
        'clash-royale': 'Report-System bei Fehlverhalten',
      },
      'Strafen': {
        'league-of-legends': ['Chat-Restriktionen', 'Ranglisten-Sperren', 'Banns'],
        'counter-strike-2': ['Cooldowns', 'Trust Factor-Reduktion', 'VAC-Banns'],
        'clash-royale': ['Verwarnungen', 'Zeitweilige Banns', 'Permanente Banns'],
      },
      'Anti-Cheat': {
        'league-of-legends': 'Vanguard Anti-Cheat-System',
        'counter-strike-2': 'VAC + Overwatch + Trust Factor',
        'clash-royale': 'Serverseitige Validierung',
      },
    },
    ecosystem: {
      'Ranglisten-Spiel': {
        'league-of-legends': 'Solo/Duo-Queue + Flex-Queue',
        'counter-strike-2': 'Competitive Matchmaking + Premier',
        'clash-royale': 'Ladder (pokalbasiert)',
      },
      'Teamspiel': {
        'league-of-legends': 'Clash-Turniere (monatlich)',
        'counter-strike-2': '5v5-Competitive-Matches',
        'clash-royale': 'Clan Wars (Teamkämpfe)',
      },
      'Turniermodus': {
        'league-of-legends': 'Clash-Turniere',
        'counter-strike-2': 'Faceit/ESEA Drittanbieter-Plattformen',
        'clash-royale': 'Herausforderungen und Globale Turniere',
      },
      'Profiszene': {
        'league-of-legends': 'Regionale Ligen (LCS, LEC, LCK, LPL) + Worlds',
        'counter-strike-2': 'Majors, BLAST, ESL Pro League, IEM',
        'clash-royale': 'CRL + World Finals',
      },
    },
    summary: {
      league:
        'Setzt auf saisonalen Fortschritt mit klaren Tier-Divisionen, Ehrungssystem und umfassender Wettbewerbsstruktur von Solo-Queue bis Profiszene.',
      cs2:
        'Betont skillbasiertes Ranking mit starker Skin-Ökonomie, Trust-Factor-System und Integration von Drittanbieter-Wettbewerben.',
      clash:
        'Nutze pokalbasierten Fortschritt mit Kartensammlung, täglichen Belohnungen und mobilfreundlicher Wettbewerbsstruktur.',
    },
  },
}

deContent.games = deContent.home.games.reduce((acc, game) => {
  acc[game.id] = game
  return acc
}, {} as Record<string, typeof deContent.home.games[number]>)


