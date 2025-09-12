# Full Stack Developer Portfolio Design Guidelines
*Inspired by Brittany Chiang's Design Aesthetic*

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Brittany Chiang's award-winning developer portfolio design, known for its dark theme, minimalist aesthetic, and professional presentation that balances technical expertise with visual appeal.

## Core Design Elements

### A. Color Palette
**Dark Theme Primary:**
- Navy Blue Background: `210 35% 10%` (main background)
- Light Navy: `210 30% 15%` (card backgrounds, elevated surfaces)
- Lightest Navy: `210 25% 20%` (hover states, borders)

**Text Colors:**
- Primary Text: `210 15% 85%` (main content)
- Secondary Text (Slate): `210 20% 65%` (supporting text)
- Light Text: `210 10% 75%` (descriptions, meta info)

**Accent:**
- Signature Green: `172 100% 70%` (#64ffda) - sparingly used for CTAs, highlights, and interactive elements

### B. Typography
**Font Stack:**
- Primary: Inter or SF Mono via Google Fonts CDN
- Monospace: 'SF Mono', 'Monaco', 'Inconsolata' for code snippets and technical details

**Hierarchy:**
- Hero Title: 4xl-6xl, bold weight
- Section Headers: 2xl-3xl, semibold
- Body Text: base-lg, regular weight
- Technical Labels: sm, monospace font

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 8, 16, and 24 (p-4, m-8, gap-16, py-24)
- Consistent vertical rhythm using multiples of 8
- Generous whitespace for breathing room
- Container max-width: 7xl with responsive padding

### D. Component Library

**Navigation:**
- Fixed sidebar navigation (desktop) with smooth scroll anchors
- Sticky mobile header with hamburger menu
- Floating social media icons (left side)
- Floating email contact (right side)

**Content Sections:**
- Hero: Large typography with animated text reveals and subtle background effects
- About: Two-column layout (text + skills/technologies grid)
- Experience: Timeline or tabbed interface with company logos and descriptions
- Projects: Grid layout with hover effects revealing project details
- Contact: Simple form with navy theme styling

**Interactive Elements:**
- Subtle hover animations (scale, glow effects)
- Smooth scrolling between sections
- Loading animations with navy/green color scheme
- Project cards with overlay on hover

**Cards & Containers:**
- Subtle borders using lightest navy
- Rounded corners (rounded-lg)
- Elevated cards with navy background
- Hover states with gentle scaling and green accent borders

### E. Animations
**Minimal & Purposeful:**
- Fade-in animations for section reveals
- Gentle hover scaling (scale-105)
- Smooth scrolling navigation
- Loading spinner with signature green color
- Text typing animation for hero section tagline

## Content Strategy
**Single-Page Layout with 5 Core Sections:**
1. **Hero** - Name, title, brief intro with call-to-action
2. **About** - Professional background, skills, tech stack
3. **Experience** - Work history with interactive timeline
4. **Projects** - 3-4 featured projects with live/repo links
5. **Contact** - Contact form and social links

## Images
**Minimal Image Usage:**
- Small professional headshot in About section (rounded, subtle border)
- Project screenshots/mockups in Projects section (with hover overlays)
- Company logos in Experience section (grayscale with color on hover)
- No large hero background image - relies on typography and color for impact
- Optional: Subtle geometric patterns or code snippets as background elements

## Technical Considerations
- Mobile-first responsive design
- Dark theme throughout (no light mode toggle needed)
- Performance-optimized with minimal animations
- Accessibility-focused with proper contrast ratios
- SEO-optimized single-page structure

This design creates a professional, developer-focused portfolio that showcases technical skills while maintaining visual sophistication through the signature dark navy theme and strategic use of the green accent color.