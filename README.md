<h1 align="center">🌀 No Infinity Scroll</h1>

> Take back your focus — block Shorts, Reels & endless scroll traps.

<p align="center"> 
  <img src="./docs/static/demo.gif" width="640" alt="No Infinity Scroll Demo"> 
</p> 

<p align="center"> 
  English 
  | 
  <a href="./docs/readme/pt-BR/README.md">Português</a> 
</p>

No Infinity Scroll is a Chrome extension built with React, TypeScript, and Vite (CRXJS) that blocks addictive infinite-scroll experiences such as YouTube Shorts, Instagram Reels, and other similar content traps — helping you reclaim your time and focus.

## 📌 Table of Contents
- [🔹 What is No Infinity Scroll?](#-what-is-no-infinity-scroll)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Features](#️-features)
- [📂 Project Structure](#-project-structure)
- [📜 License](#-license)

## 🔹 What is No Infinity Scroll?
No Infinity Scroll acts as a digital self-defense layer that disables or blocks infinite scrolling sections in social media platforms and video apps.

It’s designed to help users avoid compulsive consumption loops, focusing instead on meaningful and intentional browsing.

## 🚀 Getting Started

### 📋 Requirements
Before installation, make sure you have:
- [Node.js](https://nodejs.org/en) (for development)
- [Chrome Browser](https://www.google.com/intl/en-US/chrome) (for testing the extension)

### Installation
1. Install dependencies

```bash
pnpm install
```

2. Start development server

```bash
pnpm dev
```

3. Load the extension into Chrome
- Open `chrome://extensions/`
- Enable Developer Mode
- Click Load unpacked
- Select the `/dist` folder

4. Build for production

```bash
pnpm build
```

## ⚙️ Features

✅ Block YouTube Shorts navigation – Detects and prevents access to the Shorts interface.  
✅ Block Instagram Reels – Intercepts and blocks Reels pages and feeds.  
✅ Non-intrusive – Works silently in the background without UI clutter.

## 📂 Project Structure

```
no-infinity-scroll/
│── src/
│   ├── content/
│   │   ├── instagram/       # Logic to block Reels navigation
│   │   ├── youtube/         # Logic to block Shorts navigation
│   │   └── shared/          # Common scripts
│── manifest.config.ts       # CRXJS manifest configuration
│── vite.config.ts           # Vite build setup
│── package.json
│── README.md
```

## 📜 License
This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.