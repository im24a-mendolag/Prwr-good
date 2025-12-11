# Gaming Incentives Comparison Website

A responsive website comparing incentive mechanisms in League of Legends, Counter-Strike 2, and Clash Royale.

## Features

- 🎮 **Three Game Pages**: Detailed breakdowns of each game's incentive systems
- 📊 **Comparison Table**: Side-by-side comparison of all games
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Fully Responsive**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, gaming-themed design with Tailwind CSS
- ⚡ **Next.js 14**: Built with the latest Next.js App Router

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji icons and SVG assets

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── league-of-legends/  # LoL page
│   ├── counter-strike-2/   # CS2 page
│   ├── clash-royale/       # Clash Royale page
│   └── comparison/         # Comparison page
├── components/
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── ThemeProvider.tsx   # Dark mode provider
│   ├── ThemeToggle.tsx     # Theme toggle button
│   ├── GameCard.tsx        # Game card component
│   ├── GameSection.tsx     # Reusable section component
│   └── ComparisonTable.tsx # Comparison table component
├── data/
│   ├── games.ts            # Game metadata
│   ├── league-of-legends.json
│   ├── counter-strike-2.json
│   └── clash-royale.json
└── assets/                 # SVG icons and images
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

- **Home** (`/`): Overview with game cards
- **League of Legends** (`/league-of-legends`): Detailed LoL incentives
- **Counter-Strike 2** (`/counter-strike-2`): Detailed CS2 incentives
- **Clash Royale** (`/clash-royale`): Detailed Clash Royale incentives
- **Comparison** (`/comparison`): Side-by-side comparison tables

## Customization

All game data is stored in JSON files in the `/data` folder. You can easily modify:
- Ranking systems
- Reward structures
- Progression incentives
- Player behavior mechanisms
- Competitive ecosystem details

## Features Explained

### Ranking Systems
Each game's unique ranking structure, tiers, and progression methods.

### Reward Structures
How each game rewards players through various systems like battle passes, daily rewards, and seasonal events.

### Progression Incentives
Long-term progression systems that keep players engaged over time.

### Player Behavior Incentives
Mechanisms designed to promote positive behavior and reduce toxicity.

### Competitive Ecosystem
The competitive structure from casual play to professional esports.

## License

This project is open source and available for educational purposes.




