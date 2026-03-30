# OneInfo.ai Hero Section

A stunning, scroll-driven hero section showcasing the Instagram → AI DM → Revenue flow.

## Features

✨ **Three Dynamic Scenes:**
- **Scene 1:** Instagram post with animated comments
- **Scene 2:** AI-powered DM automation with product cards
- **Scene 3:** Revenue dashboard with live metrics

🎨 **Visual Design:**
- Obsidian dark background (#0B0B0F)
- Purple and blue accent lighting
- Glassmorphism UI elements
- Particle system for atmosphere
- Smooth scroll-driven transitions

⚡ **Tech Stack:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
oneinfo-hero/
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main page with hero section
│   └── globals.css      # Global styles and utilities
├── components/
│   ├── HeroSection.tsx  # Main hero component with scroll logic
│   ├── InstagramScene.tsx    # Scene 1: Instagram post
│   ├── DMScene.tsx           # Scene 2: DM automation
│   ├── DashboardScene.tsx    # Scene 3: Revenue dashboard
│   └── ParticleSystem.tsx    # Ambient particles
└── ...config files
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```ts
colors: {
  primary: "#7C3AED",    // Purple
  secondary: "#3B82F6",  // Blue
  obsidian: "#0B0B0F",   // Dark background
}
```

### Animation Speed
Adjust transition durations in individual scene components or `HeroSection.tsx`.

### Content
Modify the copy in `HeroSection.tsx` and update mock data in scene components.

## Performance

- ⚡ Optimized with App Router and Turbopack
- 🎭 Framer Motion animations use GPU acceleration
- 📱 Fully responsive design
- ♿ Accessible with semantic HTML

## License

MIT
