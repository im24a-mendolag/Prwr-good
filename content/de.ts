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
      { href: '/quiz', label: 'Quiz' },
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
      website: 'https://www.leagueoflegends.com/',
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
          'Ranglisten-Saisons werden regelmäßig§ zurückgesetzt',
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
      monetization: {
        title: 'Monetarisierung & Umsatz',
        description: 'League of Legends nutzt ein Free-to-Play-Modell mit optionalen Käufen, das sich auf kosmetische Items und Komfortfunktionen konzentriert.',
        types: [
          {
            name: 'Champion-Käufe',
            description: 'Spieler können Champions mit Riot Points (RP) oder Blauem Wesen kaufen',
            examples: ['Neue Champions kosten 975-9750 RP', 'Champion-Bundles', 'Champion-Splitter für Rabatte'],
            impact: ['Schafft Dringlichkeit bei neuen Veröffentlichungen', 'Ermutigt regelmäßiges Spielen für Blaues Wesen', 'Premium-Währung treibt direkte Käufe an'],
          },
          {
            name: 'Skin-Verkäufe',
            description: 'Kosmetische Skins sind der Hauptumsatzträger',
            examples: ['Epische Skins (975 RP)', 'Legendäre Skins (1820 RP)', 'Ultimative Skins (3250 RP)', 'Prestige-Skins', 'Event-exklusive Skins'],
            impact: ['Hohe Gewinnmargen bei digitalen Gütern', 'Zeitlich begrenzte Angebote schaffen FOMO', 'Sammlung vervollständigen treibt wiederholte Käufe an'],
          },
          {
            name: 'Battle Pässe',
            description: 'Event-Pässe bieten exklusive Belohnungen für einen festen Preis',
            examples: ['Event-Pässe (10-15€)', 'Premium-Tracks mit exklusiven Skins', 'Zeitlich begrenzte Progression'],
            impact: ['Wiederkehrende Einnahmequelle', 'Erhöht Spielerbindung während Events', 'Schafft Dringlichkeit durch Zeitlimits'],
          },
          {
            name: 'Hextech-Crafting',
            description: 'Lootbox-System, das Schlüsselkäufe fördert',
            examples: ['Meisterwerks-Truhen', 'Schlüsselfragmente', 'Edelsteine für seltene Skins'],
            impact: ['Glücksspielmechaniken treiben Ausgaben an', 'Seltene Items schaffen Verlangen', 'Kostenlose Truhen binden Spieler ins System'],
          },
          {
            name: 'Account-Services',
            description: 'Komfortkäufe für Account-Verwaltung',
            examples: ['Namensänderungen', 'Server-Transfers', 'XP-Boosts', 'Champion-Mieten'],
            impact: ['Günstige Komfortkäufe', 'Wiederkehrende Einnahmen aus Account-Services', 'Reduziert Reibung für engagierte Spieler'],
          },
        ],
      },
    },
    counterStrike2: {
      name: 'Counter-Strike 2',
      description:
        'Counter-Strike 2 ist ein taktischer Ego-Shooter von Valve mit kompetitivem Rangsystem, Skin-Ökonomie und starker Esports-Präsenz.',
      website: 'https://www.counter-strike.net/',
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
      monetization: {
        title: 'Monetarisierung & Umsatz',
        description: 'Counter-Strike 2 generiert Einnahmen durch die Steam-Marktplatz-Ökonomie, Operations-Pässe und Prime-Status-Abonnements.',
        types: [
          {
            name: 'Waffenskin-Marktplatz',
            description: 'Spieler kaufen und verkaufen Skins auf dem Steam Community Market',
            examples: ['Skin-Preise von 0,03€ bis Tausende', 'Steam nimmt 15% Transaktionsgebühr', 'Seltene Skins können 10.000€+ kosten'],
            impact: ['Schafft Wahrnehmung von realem Wert', 'Handelsökonomie treibt Engagement an', 'Steam-Marktplatzgebühren generieren Einnahmen'],
          },
          {
            name: 'Case-Öffnung',
            description: 'Lootbox-System für Waffenskins und Sticker',
            examples: ['Cases kosten 2,50€', 'Schlüssel zum Öffnen erforderlich', 'Seltene Items haben niedrige Drop-Raten'],
            impact: ['Glücksspielmechaniken treiben hohe Ausgaben an', 'Niedrige Wahrscheinlichkeit schafft Suchtkreislauf', 'Kostenlose Cases binden Spieler'],
          },
          {
            name: 'Operations-Pässe',
            description: 'Zeitlich begrenzte Operations-Events mit Premium-Tracks',
            examples: ['Operations-Pässe (15€)', 'Exklusive Operations-Skins', 'Operations-Münzen und Sterne'],
            impact: ['Wiederkehrende Einnahmen alle paar Monate', 'FOMO treibt Käufe an', 'Exklusive Inhalte schaffen Wert'],
          },
          {
            name: 'Prime-Status',
            description: 'Premium-Abonnement für besseres Matchmaking',
            examples: ['Einmaliger Kauf oder Upgrade', 'Bessere Teammitglieder und Belohnungen', 'Prime-exklusive Drops'],
            impact: ['Einmaliges Kaufmodell', 'Verbessert Spielererfahrung', 'Reduziert Cheating in Matches'],
          },
          {
            name: 'Souvenir-Pakete',
            description: 'Spezielle Drops von großen Turnieren',
            examples: ['Turnier-Sticker', 'Goldene Spieler-Signaturen', 'Spezielle Souvenir-Skins'],
            impact: ['Begrenzte Verfügbarkeit schafft Wert', 'Turnier-Engagement treibt Verkäufe an', 'Sammler-Markt'],
          },
        ],
      },
    },
    clashRoyale: {
      name: 'Clash Royale',
      description:
        'Clash Royale ist ein Echtzeit-Strategiespiel mit Kartensammlung und Tower-Defense-Mechaniken, einem pokalbasierten Rangsystem und regelmäßigen Updates.',
      website: 'https://clashroyale.com/',
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
      monetization: {
        title: 'Monetarisierung & Umsatz',
        description: 'Clash Royale nutzt ein Freemium-Modell mit In-App-Käufen, das sich auf Progressionsbeschleunigung und kosmetische Items konzentriert.',
        types: [
          {
            name: 'Edelstein-Käufe',
            description: 'Premium-Währung zur Beschleunigung der Progression und zum Kauf von Items',
            examples: ['Edelsteine kosten 0,99€-99,99€', 'Werden verwendet, um Truhen zu beschleunigen', 'Karten und Gold kaufen', 'Challenges betreten'],
            impact: ['Zeitdruck schafft Ausgabendringlichkeit', 'Mehrere Preisstufen für verschiedene Käufer', 'Komfortkäufe treiben Umsatz an'],
          },
          {
            name: 'Pass Royale',
            description: 'Monatliches Battle-Pass-Abonnement',
            examples: ['4,99€ pro Monat', 'Exklusive Turm-Skins', 'Emotes und Banner', 'Truhen und Gold'],
            impact: ['Wiederkehrende Abonnement-Einnahmen', 'Hohe Wertwahrnehmung', 'Schafft monatliches Engagement'],
          },
          {
            name: 'Truhen-Beschleunigung',
            description: 'Spieler zahlen, um Truhen sofort zu öffnen',
            examples: ['Edelsteine zum schnelleren Öffnen von Truhen', 'Reduziert Wartezeiten', 'Schafft Ungeduld'],
            impact: ['Zeitbegrenzung treibt Käufe an', 'Kleine Käufe summieren sich', 'Psychologischer Druck zum Ausgeben'],
          },
          {
            name: 'Karten-Käufe',
            description: 'Direkte Karten- und Goldkäufe',
            examples: ['Spezifische Karten mit Edelsteinen kaufen', 'Goldkäufe für Upgrades', 'Spezielle Angebote und Bundles'],
            impact: ['Bezahlen für schnelleren Fortschritt', 'Schafft Wettbewerbsvorteil', 'Whales geben viel aus'],
          },
          {
            name: 'Emotes & Kosmetik',
            description: 'Kosmetische Items zur Personalisierung',
            examples: ['Exklusive Emotes', 'Turm-Skins', 'Banner', 'Kartenrücken'],
            impact: ['Günstige Impulskäufe', 'Sammlung vervollständigen treibt Ausgaben an', 'Soziale Status-Items'],
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
    monetization: {
      'Primary Revenue Model': {
        'league-of-legends': 'Free-to-Play mit kosmetischen Käufen',
        'counter-strike-2': 'Steam-Marktplatz-Ökonomie + Operations-Pässe',
        'clash-royale': 'Freemium mit In-App-Käufen',
      },
      'Main Revenue Drivers': {
        'league-of-legends': ['Skin-Verkäufe', 'Battle Pässe', 'Champion-Käufe', 'Hextech-Crafting'],
        'counter-strike-2': ['Case-Öffnung', 'Skin-Marktplatz', 'Operations-Pässe', 'Prime-Status'],
        'clash-royale': ['Edelstein-Käufe', 'Pass Royale', 'Truhen-Beschleunigung', 'Karten-Käufe'],
      },
      'Average Spending': {
        'league-of-legends': '50-200€ pro Jahr (kosmetikfokussiert)',
        'counter-strike-2': '20-500€+ (hohe Varianz, Skin-Handel)',
        'clash-royale': '10-100€+ pro Monat (progressionsfokussiert)',
      },
      'Whale Strategy': {
        'league-of-legends': 'Skin-Sammler, Event-Pass-Käufer',
        'counter-strike-2': 'Seltene Skin-Sammler, Case-Öffnung',
        'clash-royale': 'Progressionsbeschleunigung, maximierte Accounts',
      },
      'Psychological Triggers': {
        'league-of-legends': ['FOMO (begrenzte Skins)', 'Sammlung vervollständigen', 'Sozialer Status'],
        'counter-strike-2': ['Glücksspielmechaniken', 'Realwelt-Wert', 'Seltenheitswahrnehmung'],
        'clash-royale': ['Zeitdruck', 'Pay-to-Win-Elemente', 'Wettbewerbsvorteil'],
      },
      'Revenue Share Model': {
        'league-of-legends': '100% an Riot Games',
        'counter-strike-2': 'Steam nimmt 15% Marktplatzgebühr, Valve erhält Case/Schlüssel-Umsatz',
        'clash-royale': '100% an Supercell (App Store/Play Store nehmen 30%)',
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
  quiz: {
    title: 'Gaming-Anreize Quiz',
    description: 'Teste dein Wissen über Anreizmechanismen in League of Legends, Counter-Strike 2 und Clash Royale!',
    progress: {
      question: 'Frage',
      of: 'von',
      score: 'Punkte',
    },
    actions: {
      previous: 'Zurück',
      submit: 'Antwort absenden',
      next: 'Nächste Frage',
      finish: 'Quiz beenden',
    },
    explanation: 'Erklärung',
    completed: {
      title: 'Quiz abgeschlossen!',
      excellent: 'Ausgezeichnet! Du hast ein tiefes Verständnis für Gaming-Anreizmechanismen.',
      good: 'Gut gemacht! Du verstehst die Grundlagen, aber es gibt immer noch mehr zu lernen.',
      keepLearning: 'Weiter lernen! Überprüfe den Inhalt und versuche es erneut, um deine Punktzahl zu verbessern.',
      restart: 'Quiz neu starten',
    },
    questions: [
      {
        question: 'Wie viele Rangstufen hat League of Legends?',
        options: [
          '8 Stufen',
          '10 Stufen',
          '12 Stufen',
          '15 Stufen',
        ],
        correctAnswer: 1,
        explanation: 'League of Legends verwendet ein gestuftes Rangsystem mit 10 Stufen: Iron, Bronze, Silver, Gold, Platinum, Emerald, Diamond, Master, Grandmaster und Challenger.',
      },
      {
        question: 'Was ist der höchste Rang in Counter-Strike 2?',
        options: [
          'Supreme Master First Class',
          'Global Elite',
          'Legendary Eagle Master',
          'Distinguished Master Guardian',
        ],
        correctAnswer: 1,
        explanation: 'Global Elite ist der höchste Rang im kompetitiven Rangsystem von Counter-Strike 2. Der Premier-Modus verwendet stattdessen CS Rating, das bis zu 50.000+ gehen kann.',
      },
      {
        question: 'Welches Spiel verwendet ein pokalbasiertes Rangsystem?',
        options: [
          'League of Legends',
          'Counter-Strike 2',
          'Clash Royale',
          'Alle oben genannten',
        ],
        correctAnswer: 2,
        explanation: 'Clash Royale verwendet ein pokalbasiertes Fortschrittssystem, bei dem Spieler basierend auf Match-Ergebnissen Pokale gewinnen oder verlieren und durch Arenen und Ligen aufsteigen.',
      },
      {
        question: 'Was ist das primäre Einnahmemodell für Counter-Strike 2?',
        options: [
          'Abonnementgebühren',
          'Steam-Marktplatz-Ökonomie',
          'Charakterkäufe',
          'Nur Battle Pass',
        ],
        correctAnswer: 1,
        explanation: 'Counter-Strike 2 generiert Einnahmen hauptsächlich durch die Steam-Marktplatz-Ökonomie, wo Spieler Waffenskins kaufen und verkaufen. Steam erhebt eine Transaktionsgebühr von 15%.',
      },
      {
        question: 'Welches Spiel bietet "Victorious Skins" als Saisonendbelohnungen an?',
        options: [
          'Counter-Strike 2',
          'Clash Royale',
          'League of Legends',
          'Keines der oben genannten',
        ],
        correctAnswer: 2,
        explanation: 'League of Legends vergibt Victorious Skins an Spieler, die am Ende jeder Rangliste-Saison Gold-Rang oder höher erreichen.',
      },
      {
        question: 'Wie heißt das Ehrungssystem von League of Legends?',
        options: [
          'Trust Factor',
          'Honor System',
          'Reputation System',
          'Good Behavior Points',
        ],
        correctAnswer: 1,
        explanation: 'League of Legends verwendet ein Honor System, bei dem Spieler nach Matches Teammitglieder ehren können, mit Honor-Leveln von 0 bis 5 und Belohnungen für positives Verhalten.',
      },
      {
        question: 'Wie viele Kronen sind erforderlich, um die tägliche Kronentruhe in Clash Royale freizuschalten?',
        options: [
          '5 Kronen',
          '10 Kronen',
          '15 Kronen',
          '20 Kronen',
        ],
        correctAnswer: 1,
        explanation: 'Clash Royale erfordert, dass Spieler täglich 10 Kronen verdienen, um die Kronentruhe freizuschalten, die Karten, Gold und Edelsteine enthält.',
      },
      {
        question: 'Wie heißt das gemeinschaftsgesteuerte Anti-Cheat-System von Counter-Strike 2?',
        options: [
          'VAC',
          'Overwatch',
          'Trust Factor',
          'Prime Status',
        ],
        correctAnswer: 1,
        explanation: 'Overwatch ist das gemeinschaftsgesteuerte Anti-Cheat-System von Counter-Strike 2, bei dem erfahrene Spieler gemeldete Fälle von Cheating und Griefing überprüfen.',
      },
      {
        question: 'Welches Spiel verwendet League Points (LP) für den Ranglistenfortschritt?',
        options: [
          'Counter-Strike 2',
          'Clash Royale',
          'League of Legends',
          'Alle drei Spiele',
        ],
        correctAnswer: 2,
        explanation: 'League of Legends verwendet League Points (LP), die Spieler durch Siege in Ranglistenspielen verdienen. Spieler müssen LP sammeln und Aufstiegsserien gewinnen, um zwischen den Stufen aufzusteigen.',
      },
      {
        question: 'Wie heißt der Premium-Battle-Pass von Clash Royale?',
        options: [
          'Battle Pass',
          'Operation Pass',
          'Pass Royale',
          'Season Pass',
        ],
        correctAnswer: 2,
        explanation: 'Pass Royale ist das monatliche Battle-Pass-Abonnement von Clash Royale (4,99 $/Monat), das exklusive Turm-Skins, Emotes, Banner, Truhen und Gold bietet.',
      },
      {
        question: 'Welches Spiel verfügt über ein "Hextech Crafting" Loot-System?',
        options: [
          'Counter-Strike 2',
          'Clash Royale',
          'League of Legends',
          'Keines der oben genannten',
        ],
        correctAnswer: 2,
        explanation: 'League of Legends verfügt über Hextech Crafting, ein Lootbox-System, das Spieler mit Champion-Splittern, Skin-Splittern und anderen Gegenständen durch Truhen und Schlüssel belohnt.',
      },
      {
        question: 'Wie heißt der höchste Rang in Clash Royale?',
        options: [
          'Grand Champion',
          'Ultimate Champion',
          'Legendary Champion',
          'Master Champion',
        ],
        correctAnswer: 1,
        explanation: 'Ultimate Champion ist der höchste Rang in Clash Royale, erreicht von Spielern, die die Spitze der Pokalleiter erreichen.',
      },
      {
        question: 'Welches Spiel verwendet einen Premier-Modus mit CS Rating statt traditioneller Ränge?',
        options: [
          'League of Legends',
          'Counter-Strike 2',
          'Clash Royale',
          'Alle oben genannten',
        ],
        correctAnswer: 1,
        explanation: 'Counter-Strike 2 verfügt über einen Premier-Modus, der CS Rating (0-50.000+) statt des traditionellen 17-Rang-Systems verwendet, mit karten-spezifischen Bewertungen und einem Pick/Ban-System.',
      },
      {
        question: 'Was ist die primäre Monetarisierungsstrategie für League of Legends?',
        options: [
          'Fortschrittsbeschleunigung',
          'Kosmetische Skin-Verkäufe',
          'Waffen-Marktplatz',
          'Abonnementmodell',
        ],
        correctAnswer: 1,
        explanation: 'League of Legends generiert Einnahmen hauptsächlich durch kosmetische Skin-Verkäufe, mit Skins von Epic (975 RP) bis Ultimate (3250 RP), zusammen mit Battle Pässen und Champion-Käufen.',
      },
      {
        question: 'Welches Spiel bietet "Clash"-Turniere?',
        options: [
          'Counter-Strike 2',
          'Clash Royale',
          'League of Legends',
          'Sowohl League of Legends als auch Clash Royale',
        ],
        correctAnswer: 2,
        explanation: 'League of Legends bietet Clash, ein monatliches team-basiertes Turniersystem, bei dem Spieler Teams bilden, in Brackets antreten und Trophäen verdienen.',
      },
    ],
  },
}

deContent.games = deContent.home.games.reduce((acc, game) => {
  acc[game.id] = game
  return acc
}, {} as Record<string, typeof deContent.home.games[number]>)


