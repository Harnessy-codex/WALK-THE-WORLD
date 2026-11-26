# 🌍 WalkTheWorld

### Every Step Counts. Every Team Matters.

**WalkTheWorld** is a global virtual walking and running platform designed to connect people through movement, teamwork, and friendly competition.

The platform aims to bring individuals, teams, communities, universities, companies, and people across different countries together in a shared fitness experience.

Whether you're walking around your neighbourhood, running with friends, or competing with a team on another continent, WalkTheWorld turns everyday movement into a collective achievement.

---

## 📌 Project Overview

WalkTheWorld is being developed around a simple idea:

**What if people could compete globally through the steps they take every day?**

Users will eventually be able to create teams, invite friends, join public communities, participate in challenges, and compete on leaderboards based on their walking and running activity.

Unlike traditional fitness applications that primarily focus on individual performance, WalkTheWorld places strong emphasis on:

- Team participation.
- Community engagement.
- Global competition.
- Shared fitness goals.
- Collective achievements.

The goal is to create a platform where movement connects people regardless of their geographical location.

## 🎯 Vision

To build a global movement community where people connect, compete, and achieve more together through walking and running.

## 🚀 Mission

To make physical activity more engaging and accessible by combining fitness tracking, social interaction, teamwork, and global competition.

---

## ✨ Core Features and Planned Capabilities

WalkTheWorld is being developed in stages. The following describes the intended product experience, not a claim that every feature is currently operational.

### 1. Global Fitness Community

- Connect with individuals from different parts of the world.
- Discover walking and running communities.
- Participate in shared fitness goals.
- Build connections through friendly competition.

### 2. Team Management

Users will be able to:

- Create their own teams.
- Invite other participants.
- Join existing public teams.
- Manage private teams through invitations.
- Participate in team-based competitions.

Teams are intended to support different types of communities, including:

- Universities and colleges.
- Companies and workplaces.
- Fitness groups.
- Friends and families.
- Cities and local communities.
- International walking communities.

### 3. Global Leaderboards

The platform is designed around multiple ranking systems.

| Leaderboard | Description |
|---|---|
| Total Steps | Combined steps recorded by a team |
| Average Steps | Average steps per eligible team member |
| Individual Rankings | Personal step performance |
| Team Rankings | Competition between participating teams |

Leaderboards are planned to support:

- Daily rankings.
- Weekly rankings.
- Monthly rankings.
- All-time rankings.

### 4. Global Challenges

Participants will be able to compete in structured challenges, including:

- Daily step challenges.
- Weekly team competitions.
- Monthly fitness challenges.
- Community-versus-community competitions.
- International walking competitions.

### 5. Interactive 3D Earth

WalkTheWorld features an interactive 3D Earth concept as part of its landing-page experience.

The globe is being developed using **Three.js**.

The visual direction includes:

- A realistic Earth texture.
- Continuous globe rotation.
- Blue atmospheric lighting.
- Glowing geographical markers.
- Future geographical connections representing participating teams and communities.

The objective is to visually communicate the global nature of the platform.

### 6. User Profiles and Achievements

Planned user profiles will provide information such as:

- Personal activity statistics.
- Team membership.
- Competition history.
- Achievements and badges.
- Individual rankings.

### 7. Activity Tracking

The long-term objective is to support automated activity tracking.

Potential integrations include:

- Android Health Connect.
- Apple Health.

Manual step submissions may be used during early development and prototyping.

---

## 🏆 Competition Structure

WalkTheWorld is designed to support competition at multiple levels.

| Level | Description |
|---|---|
| Private Teams | Invite-only groups competing together |
| Public Teams | Discoverable teams open to new members |
| Communities | Universities, companies, clubs and local groups |
| Global Competitions | Larger competitions involving international participants |

The platform aims to make it possible for a small group of friends to participate in the same competitive environment as much larger communities.

---

## 🛠️ Technology Stack

The project is being developed using modern web technologies.

### Current Frontend Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Webpage structure and content |
| CSS3 | Styling, layouts and responsiveness |
| JavaScript | Frontend functionality and interactions |
| Three.js | 3D Earth rendering and animation |
| WebGL | Hardware-accelerated 3D graphics |

### Planned Backend Technologies

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for the backend |
| Express.js | Backend framework and API development |
| PostgreSQL | Relational database |
| REST APIs | Communication between frontend and backend |

### Planned Integrations

| Technology | Purpose |
|---|---|
| Android Health Connect | Android activity data integration |
| Apple Health | Apple activity data integration |

---

## 📂 Project Structure

The current frontend prototype follows this structure:

```text
WalkTheWorld/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── globe.js
│
├── assets/
│   └──
│
└── README.md
```

### File Responsibilities

**index.html**

Contains the main webpage structure, navigation, hero section, content sections, and the 3D globe container.

**css/style.css**

Contains the website's visual styling, layout rules, colours, typography, and responsive design.

**js/script.js**

Reserved for general frontend JavaScript functionality.

**js/globe.js**

Contains the Three.js implementation responsible for rendering and animating the 3D Earth.

**assets/**

Reserved for project images, textures, icons, and other static resources.

---

## 🎨 Design Direction

WalkTheWorld follows a modern sports-technology visual identity.

### Visual Identity

| Element | Direction |
|---|---|
| Primary Background | Deep navy |
| Secondary Background | Dark blue |
| Accent Colour | Electric cyan |
| Primary Text | White |
| Secondary Text | Slate grey |
| Visual Theme | Global connectivity and movement |

### Design Principles

- Clean and modern interface.
- Responsive desktop and mobile layouts.
- Strong visual hierarchy.
- Minimal distractions.
- Clear navigation.
- Engaging visual elements.
- Consistent design across platform sections.

---

## ⚙️ Getting Started

The current version is a frontend prototype that can be run locally without installing a backend or database.

### Prerequisites

You will need:

- A modern web browser.
- Visual Studio Code or another code editor.
- Visual Studio Code Live Server extension.
- An internet connection to load the Three.js library and external Earth texture.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/WalkTheWorld.git
```

### 2. Enter the Project Directory

```bash
cd WalkTheWorld
```

### 3. Open the Project

Open the project folder in Visual Studio Code.

### 4. Launch the Application

Open `index.html` using the Live Server extension.

The application should open in your browser.

**Note:** Three.js is currently loaded through an import map and CDN. The current prototype does not require `npm install`.

---

## 🗺️ Development Roadmap

WalkTheWorld is being developed incrementally, with the intention of evolving from a frontend prototype into a complete full-stack application.

### Phase 1 — Frontend Foundation

- [x] Establish project structure.
- [x] Build the initial landing page.
- [x] Implement navigation.
- [x] Create the hero section.
- [x] Establish the visual identity.
- [x] Implement responsive layout.
- [x] Integrate Three.js.
- [x] Render a textured 3D Earth.
- [x] Implement continuous globe rotation.
- [x] Add atmospheric glow.
- [ ] Refine the globe's visual presentation.
- [ ] Add geographical team markers and animations.
- [ ] Develop the remaining landing-page sections.

### Phase 2 — User Interface Development

- [ ] User registration interface.
- [ ] Login interface.
- [ ] User dashboard.
- [ ] User profile pages.
- [ ] Team creation interface.
- [ ] Team discovery interface.
- [ ] Leaderboard interface.
- [ ] Challenge interface.
- [ ] Achievements and badges.

### Phase 3 — Backend Development

- [ ] Set up Node.js and Express.
- [ ] Design REST API endpoints.
- [ ] Set up PostgreSQL.
- [ ] Implement user authentication.
- [ ] Implement user and team management.
- [ ] Develop step-recording functionality.
- [ ] Develop leaderboard calculations.
- [ ] Implement challenge management.

### Phase 4 — Activity Tracking

- [ ] Explore Android Health Connect integration.
- [ ] Explore Apple Health integration.
- [ ] Implement activity synchronization.
- [ ] Introduce activity verification.
- [ ] Prevent duplicate activity records.
- [ ] Develop activity-history management.

### Phase 5 — Competition and Community

- [ ] Public and private teams.
- [ ] Community competitions.
- [ ] Global competitions.
- [ ] Daily, weekly and monthly rankings.
- [ ] Team achievements.
- [ ] Notifications.
- [ ] Community engagement features.

### Phase 6 — Testing and Deployment

- [ ] Functional testing.
- [ ] Responsive testing.
- [ ] API testing.
- [ ] Database testing.
- [ ] Security testing.
- [ ] Performance optimization.
- [ ] Production deployment.

---

## 🔐 Security and Data Integrity

Trust and fair competition will be essential to the platform.

Planned safeguards include:

- Secure user authentication.
- Server-side validation of activity records.
- Duplicate activity submission prevention.
- Activity verification and audit trails.
- Detection of suspicious activity patterns.
- Protection of user information.
- Fair and consistent leaderboard eligibility rules.

The objective is to create a competitive environment where rankings reflect genuine participation.

---

## 📊 Current Development Status

**Project stage:** Early-stage frontend prototype.

The current development focus is establishing the visual foundation and interactive experience before moving into backend implementation.

| Component | Status |
|---|---|
| Landing page | Implemented |
| Navigation | Initial implementation |
| Responsive layout | Initial implementation |
| Three.js integration | Implemented |
| Textured rotating Earth | Implemented |
| Atmospheric glow | Implemented |
| Team markers | In development |
| User authentication | Planned |
| Backend APIs | Planned |
| PostgreSQL database | Planned |
| Automated step tracking | Planned |
| Global leaderboards | Planned |

---

## 🤝 Contributing

WalkTheWorld is an evolving project, and contributions, suggestions, and constructive feedback are welcome.

Potential areas of contribution include:

- Frontend development.
- Backend development.
- UI/UX design.
- Database architecture.
- Fitness data integrations.
- Testing and quality assurance.
- Product development ideas.

If you would like to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Test your implementation.
5. Submit a pull request describing your contribution.

Example:

```bash
git checkout -b feature/your-feature
```

---

## 💡 Project Philosophy

WalkTheWorld is built around the belief that movement becomes more meaningful when shared.

A single step may seem insignificant, but millions of steps taken together can represent something much bigger.

The platform aims to transform individual physical activity into a shared global experience.

**One person starts walking. A team starts moving. The world starts connecting.**

---

## 📌 Disclaimer

WalkTheWorld is currently an independent development project in its prototype stage.

Features described as planned or under development are not necessarily available in the current version.

The project is intended to evolve through continuous development, testing, and feedback.

---

## 👨‍💻 Project

**Project Name:** WalkTheWorld  
**Tagline:** Every Step Counts. Every Team Matters.  
**Category:** Fitness Technology / Social Fitness / Sports Technology  
**Development Stage:** Early-stage prototype  
**Primary Technologies:** HTML, CSS, JavaScript and Three.js

---

<p align="center">

### 🌍 WALK THE WORLD

**Every Step Counts. Every Team Matters.**

*Connecting people through movement, one step at a time.*

</p>