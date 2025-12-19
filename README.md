# DevRel Impact Framework

A strategic visualization tool for measuring and analyzing Developer Relations initiatives. Plot your DevRel activities on an impact matrix to understand where to invest, what to optimize, and what to reconsider.

![DevRel Impact Framework](https://img.shields.io/badge/DevRel-Impact%20Framework-10b981?style=for-the-badge)

## 🎯 What It Does

The DevRel Impact Framework helps teams:
- **Visualize** all DevRel initiatives on a Reach vs Closeness matrix
- **Analyze** each initiative's strategic position and ROI efficiency
- **Prioritize** where to invest time and resources
- **Identify** gaps in your developer engagement strategy

## 📊 The Four Metrics

### Reach (0-100)
*How many developers can this initiative potentially touch?*

Measures audience scale, discoverability, and broadcast potential. High reach means more developers discover your product; low reach means focused, targeted engagement.

| Score | Meaning |
|-------|---------|
| 80-100 | Massive audience potential (conferences, viral content) |
| 50-79 | Moderate scale (community channels, documentation) |
| 20-49 | Targeted reach (workshops, specific programs) |
| 0-19 | Highly focused (1:1 support, advisory boards) |

### Closeness (0-100)
*How deeply does this connect developers to your product/engineering?*

Measures intimacy, integration depth, and relationship quality. High closeness means developers deeply integrate with your product; low closeness means surface-level awareness.

| Score | Meaning |
|-------|---------|
| 80-100 | Deep technical integration (SDKs, code reviews, office hours) |
| 50-79 | Meaningful connection (workshops, open source, community) |
| 20-49 | Moderate engagement (blogs, newsletters, social) |
| 0-19 | Surface awareness (ads, conference booths, swag) |

### Happiness (0-100)
*How satisfied are developers with this initiative?*

Measures sentiment, engagement quality, and community satisfaction. This is the outcome metric—are developers delighted by this touchpoint?

| Score | Meaning |
|-------|---------|
| 80-100 | Exceptional delight (developers love and recommend it) |
| 60-79 | Good satisfaction (positive sentiment, repeat engagement) |
| 40-59 | Moderate (functional but not memorable) |
| 0-39 | Needs improvement (friction, frustration, or apathy) |

### Effort (0-100)
*How much time, resources, and energy does this require?*

Measures planning, execution, and maintenance costs. Lower is more efficient. This metric enables ROI calculations.

| Score | Meaning |
|-------|---------|
| 80-100 | High investment (major events, SDK development) |
| 50-79 | Moderate effort (content series, programs) |
| 20-49 | Manageable (community engagement, support) |
| 0-19 | Lightweight (automated, low-maintenance) |

## 🗺️ The Impact Matrix Quadrants

The matrix plots **Reach** (x-axis) against **Closeness** (y-axis), creating four strategic quadrants:

```
                    HIGH CLOSENESS
                          │
     ┌────────────────────┼────────────────────┐
     │                    │                    │
     │    NICHE DEEP      │   SCALE + DEPTH    │
     │                    │                    │
     │  Low Reach         │  High Reach        │
     │  High Closeness    │  High Closeness    │
     │                    │                    │
LOW ─┼────────────────────┼────────────────────┼─ HIGH
REACH│                    │                    │  REACH
     │    LOW IMPACT      │   BROAD SHALLOW    │
     │                    │                    │
     │  Low Reach         │  High Reach        │
     │  Low Closeness     │  Low Closeness     │
     │                    │                    │
     └────────────────────┼────────────────────┘
                          │
                    LOW CLOSENESS
```

### Scale + Depth (Top Right) ⭐
**High Reach & High Closeness**

The holy grail. These initiatives reach many developers AND create deep, meaningful connections. They require significant investment but deliver outsized returns.

*Strategy: Protect and expand. Document what makes them successful.*

### Niche Deep (Top Left)
**Low Reach & High Closeness**

Creates strong bonds with a smaller audience. Builds your most passionate advocates and surfaces critical feedback.

*Strategy: Don't scale—use for champions and deep insights.*

### Broad Shallow (Bottom Right)
**High Reach & Low Closeness**

Effective for awareness and top-of-funnel but doesn't create lasting relationships. Good for discovery.

*Strategy: Always connect to deeper engagement paths.*

### Low Impact (Bottom Left)
**Low Reach & Low Closeness**

Neither reaches many developers nor creates deep connections. May serve operational needs but shouldn't be DevRel's focus.

*Strategy: Automate, delegate, or deprecate.*

---

## 📋 Initiative Categories

### Events
| Initiative | R | C | H | E | Description |
|------------|---|---|---|---|-------------|
| Release Meetups | 45 | 60 | 75 | 65 | Focused workshops on new product versions driving immediate adoption |
| Education Workshops | 65 | 55 | 80 | 70 | Foundational sessions onboarding developers into the ecosystem |
| Conference Booths | 95 | 15 | 45 | 90 | High-volume discovery at major industry events |
| Hackathons | 50 | 70 | 94 | 88 | Competitive events fostering innovation and engagement |

### Community
| Initiative | R | C | H | E | Description |
|------------|---|---|---|---|-------------|
| Community Collabs | 70 | 45 | 85 | 40 | Partnering with grassroots groups to expand presence and trust |
| Open Source | 60 | 75 | 90 | 80 | Leading and contributing to key public repositories |
| MVP Program | 55 | 80 | 92 | 60 | Scaling advocacy through verified community leaders |
| Discord Server | 75 | 65 | 88 | 50 | Real-time community engagement and support channel |
| Swag Distribution | 25 | 10 | 55 | 35 | Sending branded merchandise to community members |

### Support
| Initiative | R | C | H | E | Description |
|------------|---|---|---|---|-------------|
| Office Hours | 10 | 98 | 95 | 35 | Personalized deep-dives into specific developer roadblocks |
| Bug Triage | 8 | 25 | 40 | 45 | Internal process of reviewing and prioritizing reported issues |
| Email Support | 20 | 35 | 45 | 55 | Traditional support channel with slower response times |
| Code Reviews | 15 | 95 | 85 | 60 | Reviewing community PRs and contributions |

### Product
| Initiative | R | C | H | E | Description |
|------------|---|---|---|---|-------------|
| Sales Shadowing | 5 | 85 | 65 | 25 | Joining solutions engineers to bridge technical and business gaps |
| Advisory Board | 15 | 92 | 88 | 45 | Curated group of elite users influencing product roadmap |
| SDK Development | 80 | 88 | 82 | 95 | Building and maintaining language-specific client libraries |
| Roadmap Reviews | 12 | 30 | 50 | 20 | Periodic internal reviews with limited external visibility |

### Content
| Initiative | R | C | H | E | Description |
|------------|---|---|---|---|-------------|
| Tech Blog | 85 | 30 | 70 | 55 | In-depth engineering insights shared publicly via company blog |
| API Docs | 90 | 50 | 78 | 75 | Self-serve closeness via executable documentation |
| YouTube Series | 88 | 25 | 72 | 85 | Video tutorials and technical deep-dives for async learning |
| Newsletter | 70 | 20 | 65 | 30 | Weekly digest of updates, tips, and community highlights |
| Internal Docs | 5 | 15 | 35 | 40 | Documentation for internal teams, rarely public-facing |
| Social Media | 85 | 8 | 50 | 40 | Broadcasting updates and engaging on social platforms |
| Podcast Guest | 60 | 12 | 60 | 20 | Appearing on industry podcasts to share insights |

---

## 🧮 ROI Efficiency Score

The framework calculates an **ROI Efficiency Score** for each initiative:

```
Impact = (Reach + Closeness + Happiness) / 3
Efficiency = Impact / Effort × 50
```

| Rating | Score | Meaning |
|--------|-------|---------|
| Excellent | >100 | High impact, low effort—maximize these |
| Good | 70-100 | Strong returns on investment |
| Moderate | 50-69 | Room for optimization |
| Low | 30-49 | Effort may not justify returns |
| Poor | <30 | Reconsider or restructure |

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Custom SVG** - Data visualization

---

## 📖 How to Use

1. **Browse Initiatives** - Scroll through the horizontal initiative cards at the top
2. **Click to Select** - Click any card or chart dot to see detailed analysis
3. **Filter by Category** - Use the category buttons to focus on specific types
4. **Read the Analysis** - The sidebar shows personalized insights, ROI efficiency, and recommendations
5. **Toggle Theme** - Switch between dark and light mode with the theme button

---

## 🎨 Features

- **Interactive Impact Matrix** - Click dots to highlight quadrants and see analysis
- **Personalized Recommendations** - Each initiative gets custom strategic advice
- **ROI Efficiency Scoring** - Understand which initiatives deliver the best returns
- **Category Filtering** - Focus on Events, Community, Support, Product, or Content
- **Dark/Light Mode** - Toggle between themes
- **Responsive Design** - Works on desktop and tablet

---

## 📄 License

MIT License - feel free to use this framework for your own DevRel strategy planning.

---

## 🤝 Contributing

Contributions welcome! If you have ideas for new metrics, initiatives, or features, please open an issue or PR.

---

Built with ♥ for the DevRel community
