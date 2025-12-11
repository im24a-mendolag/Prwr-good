# Images Directory

This directory contains all static images used by the website.

## 🎯 Automatic Image Naming System

**IMPORTANT:** The website automatically loads images based on item/box titles. You just need to name your images correctly!

### How It Works

For every item box on the game pages, the system automatically generates an image path from the box title:

1. **Convert title to lowercase**
2. **Replace spaces and special characters with hyphens**
3. **Add game prefix** (`lol-`, `csgo-`, or `cr-`)
4. **Add file extension** (`.jpg` by default, or `.png`)

### Naming Examples

**League of Legends (prefix: `lol-`):**
- "Ranked Rewards" → `lol-ranked-rewards.jpg`
- "Battle Pass" → `lol-battle-pass.jpg` "Done"
- "Hextech Crafting" → `lol-hextech-crafting.jpg`
- "Daily Missions" → `lol-daily-missions.jpg`
- "Rank Incentives" → `lol-rank-incentives.jpg`

**Counter-Strike 2 (prefix: `csgo-`):**
- "Weekly Drops" → `csgo-weekly-drops.jpg` "Done"
- "Operation Passes" → `csgo-operation-passes.jpg` "Done"
- "Prime Status" → `csgo-prime-status.jpg`
- "Souvenir Packages" → `csgo-souvenir-packages.jpg`
- "Rank Incentives" → `csgo-rank-incentives.jpg`

**Clash Royale (prefix: `cr-`):**
- "Chests" → `cr-chests.jpg`
- "Crown Chest" → `cr-crown-chest.jpg`
- "Seasonal Rewards" → `cr-seasonal-rewards.jpg`
- "Challenges" → `cr-challenges.jpg` (or `.png`)
- "Trophy Road" → `cr-trophy-road.jpg`
- "Rank Incentives" → `cr-rank-incentives.jpg`

### All Sections That Use Images

This automatic naming applies to **all item boxes** in these sections on each game page:

- ✅ **Ranking System** - Items in ranking system sections
- ✅ **Reward Structures** - All reward structure types
- ✅ **Progression Incentives** - All progression systems
- ✅ **Player Behavior Incentives** - All behavior mechanisms
- ✅ **Competitive Ecosystem** - All ecosystem levels
- ✅ **Monetization & Revenue** - All monetization types

## 📋 Required Static Images

These images are used in specific locations and need exact names:

### Hero & Logos
- `hero.jpg` - Hero background image on home page (1920x1080px recommended)
- `logo_lol.png` - League of Legends logo for game cards (transparent background, 200-400px width) "done"
- `logo_csgo.png` - Counter-Strike 2 logo for game cards (transparent background, 200-400px width) "done"
- `logo_cr.png` - Clash Royale logo for game cards (transparent background, 200-400px width) "done"

## 📝 Image Naming Guide

### Special Characters Handling

The system automatically handles special characters:
- Spaces → hyphens (`-`)
- Special characters (`,`, `.`, `&`, etc.) → removed or converted to hyphens
- Multiple consecutive hyphens → single hyphen
- Leading/trailing hyphens → removed

**Examples:**
- "Player Behavior Incentives" → `player-behavior-incentives`
- "Monetization & Revenue" → `monetization-revenue`
- "CS:GO" → `cs-go`

### File Extensions

- Default: `.jpg`
- Can also use: `.png` (for images with transparency)
- The system will look for the exact extension you provide

## 🖼️ Image Specifications

### Recommended Sizes
- **Hero image**: 1920x1080px (Full HD) or larger
- **Logos**: 200-400px width, transparent background (PNG)
- **Item box images**: 800-1200px width, maintain aspect ratio
- **Icons**: 24x24px to 48x48px (SVG preferred)

### Format Guidelines
- Use **JPG** for photos/screenshots (smaller file size)
- Use **PNG** for logos or images requiring transparency
- Use **SVG** for icons and simple graphics

## 🔧 Image Sources

You can obtain images from:
1. **Own Screenshots** - Take screenshots from the games (best quality)
2. **Placeholder Services** - Use [via.placeholder.com](https://via.placeholder.com) for development
3. **Stock Photos** - Use services like Unsplash, Pexels (check licenses!)
4. **Game Assets** - Extract from game files (ensure fair use)

## ⚠️ Important Notes

- **Graceful Degradation**: If an image doesn't exist, the box will display without an image (no errors)
- **Path**: All images are served from `/assets/images/` in the application
- **Optimization**: Next.js Image component automatically optimizes images
- **Accessibility**: Alt text is automatically generated from item names
- **Case Sensitive**: Image names are case-sensitive on some systems, so use lowercase

## 🚀 Quick Start

1. **Identify the box title** you want to add an image to
2. **Convert it to the naming format**: `{game-prefix}-{lowercase-hyphenated-title}.jpg`
3. **Place the image** in `public/assets/images/`
4. **Refresh the page** - the image will appear automatically!

### Example Workflow

Want to add an image for "Ranked Rewards" in League of Legends?

1. Box title: "Ranked Rewards"
2. Convert: `lol-ranked-rewards.jpg`
3. Save your image as: `public/assets/images/lol-ranked-rewards.jpg`
4. Done! The image will automatically appear.

## 📚 Complete Image List Reference

To see all possible image names, check the actual item names in:
- `data/league-of-legends.json`
- `data/counter-strike-2.json`
- `data/clash-royale.json`

Each item name in these files corresponds to a potential image name using the naming convention above.
