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

## 📋 Current Images Status

### ✅ Static Images (Required - All Present)

**Hero & Logos:**
- ✅ `logo_lol.png` - League of Legends logo for game cards
- ✅ `logo_csgo.png` - Counter-Strike 2 logo for game cards
- ✅ `logo_cr.png` - Clash Royale logo for game cards

### ✅ League of Legends Images (Present)

**Reward Structures:**
- ✅ `lol-ranked-rewards.jpg` - Ranked Rewards
- ✅ `lol-battle-pass.jpg` - Battle Pass
- ✅ `lol-hextech-crafting.jpg` - Hextech Crafting
- ✅ `lol-daily-missions.jpg` - Daily Missions

**Ranking System:**
- ✅ `lol-rank-incentives.jpg` - Rank Incentives

### ✅ Counter-Strike 2 Images (Present)

**Reward Structures:**
- ✅ `csgo-weekly-drops.jpg` - Weekly Drops
- ✅ `csgo-operation-passes.jpg` - Operation Passes
- ✅ `csgo-prime-status.jpg` - Prime Status

**Ranking System:**
- ✅ `csgo-rank-incentives.jpg` - Rank Incentives

**Missing:**
- ✅ `csgo-souvenir-packages.jpg` - Souvenir Packages

### ✅ Clash Royale Images (Present)

**Reward Structures:**
- ✅ `cr-chests.jpg` - Chests
- ✅ `cr-crown-chest.jpg` - Crown Chest
- ✅ `cr-challenges.jpg` - Challenges
- ✅ `cr-trophy-road.jpg` - Trophy Road

**Ranking System:**
- ✅ `cr-rank-incentives.jpg` - Rank Incentives

**Missing:**
- ⚠️ `cr-seasonal-rewards.jpg` - Seasonal Rewards

## 📝 Complete Image Naming Reference

### League of Legends (prefix: `lol-`)

**Reward Structures:**
- ✅ `lol-ranked-rewards.jpg` - Ranked Rewards
- ✅ `lol-battle-pass.jpg` - Battle Pass
- ✅ `lol-hextech-crafting.jpg` - Hextech Crafting
- ✅ `lol-daily-missions.jpg` - Daily Missions

**Ranking System:**
- ✅ `lol-rank-incentives.jpg` - Rank Incentives

**Other Sections** (images will be auto-generated from item names):
- Progression Incentives items
- Player Behavior Incentives items
- Competitive Ecosystem items
- Monetization & Revenue items

### Counter-Strike 2 (prefix: `csgo-`)

**Reward Structures:**
- ✅ `csgo-weekly-drops.jpg` - Weekly Drops
- ✅ `csgo-operation-passes.jpg` - Operation Passes
- ✅ `csgo-prime-status.jpg` - Prime Status
- ✅ `csgo-souvenir-packages.jpg` - Souvenir Packages

**Ranking System:**
- ✅ `csgo-rank-incentives.jpg` - Rank Incentives

**Other Sections** (images will be auto-generated from item names):
- Progression Incentives items
- Player Behavior Incentives items
- Competitive Ecosystem items
- Monetization & Revenue items

### Clash Royale (prefix: `cr-`)

**Reward Structures:**
- ✅ `cr-chests.jpg` - Chests
- ✅ `cr-crown-chest.jpg` - Crown Chest
- ✅ `cr-challenges.jpg` - Challenges
- ✅ `cr-trophy-road.jpg` - Trophy Road
- ⚠️ `cr-seasonal-rewards.jpg` - Seasonal Rewards (MISSING)

**Ranking System:**
- ✅ `cr-rank-incentives.jpg` - Rank Incentives

**Other Sections** (images will be auto-generated from item names):
- Progression Incentives items
- Player Behavior Incentives items
- Competitive Ecosystem items
- Monetization & Revenue items

## 🔍 Finding Missing Images

To find all possible image names needed, check the item names in:
- `data/league-of-legends.json`
- `data/counter-strike-2.json`
- `data/clash-royale.json`

Each item name in these files corresponds to a potential image name using the naming convention:
`{game-prefix}-{lowercase-hyphenated-title}.jpg`

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
- **Language Support**: Images use English names for file paths, but work in all languages

## 🚀 Quick Start

1. **Identify the box title** you want to add an image to (use English name)
2. **Convert it to the naming format**: `{game-prefix}-{lowercase-hyphenated-title}.jpg`
3. **Place the image** in `public/assets/images/`
4. **Refresh the page** - the image will appear automatically!

### Example Workflow

Want to add an image for "Ranked Rewards" in League of Legends?

1. Box title: "Ranked Rewards" (English name)
2. Convert: `lol-ranked-rewards.jpg`
3. Save your image as: `public/assets/images/lol-ranked-rewards.jpg`
4. Done! The image will automatically appear in both English and German.

## 📊 Summary

**Total Images Present:** 18
- Logos: 3/3 ✅
- League of Legends: 5 images ✅
- Counter-Strike 2: 4 images (1 missing)
- Clash Royale: 5 images (1 missing)
- Hero: 0/1 ⚠️

**Missing Images:**
- `hero.jpg` - Hero background
- `csgo-souvenir-packages.jpg` - Souvenir Packages
- `cr-seasonal-rewards.jpg` - Seasonal Rewards

Plus any images for items in Progression Incentives, Player Behavior Incentives, Competitive Ecosystem, and Monetization sections that don't have images yet.
