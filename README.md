# ResQConnect — Post-Disaster Recovery & Coordination Platform

> **"Connect people who need help with people who can provide it."**

ResQConnect is a humanitarian post-disaster recovery and coordination platform that bridges the critical gap between impacted families, grassroots volunteers, certified NGOs, donors, and verified district authorities during the rehabilitation and recovery phases.

---

## 🌟 Day 1 Architecture & Highlights

This repository contains the **Day 1 Frontend Foundation** of ResQConnect, built with a clean humanitarian aesthetic and scalable architecture.

- **Humanitarian Design System**: Calibrated palette featuring Deep Navy (`#0F172A`), Ocean Blue (`#0284C7`), Relief Teal (`#0D9488`), and accessible status indicators. Zero generic SaaS templates, no military aesthetics.
- **Process Visualization**: Explicit lifecycle representation: `Citizen → Request → Verification → Matching → Assistance → Recovery`.
- **Citizen Recovery Dashboard Shell**:
  - Live welcome header with localized regional context
  - 4 Real-time Metric Cards: Active Requests (2), Under Verification (1), In Progress (1), Completed (3)
  - Quick Actions: *Request Help*, *Track Requests*, *Find Assistance*, *Volunteer*
  - Recent Requests feed with interactive verification milestone timeline modal
- **Demo Role Switcher**: Instant switching between **Citizen** (Day 1 Active), **Volunteer** (Day 2), **Relief NGO** (Day 2), and **Admin Desk** (Day 3).
- **Public Informational Suite**:
  - Landing Page (`/`): Process visual, 6-step framework, stakeholder roles, trust principles.
  - How It Works (`/how-it-works`): Comprehensive 6-step breakdown and request status system.
  - Recovery vs. Emergency (`/recovery`): Clear distinction between golden-hour 112/NDRF rescue and medium-term post-disaster recovery coordination.
  - About (`/about`): 4 pillars of trust and accredited partner organizations.
- **Authentication Pages**:
  - Login (`/login`) with role demo shortcuts and simulated forgot password flow.
  - Register (`/register`) with role selection and NGO verification notices.
- **100% Non-Broken Routes**: Unfinished Day 2/3 modules cleanly handled by the reusable `ComingSoon.jsx` component.

---

## 🧭 Request Status Lifecycle

Every relief ticket adheres to the standardized 7-stage status system:
1. `Submitted` — Request logged into ResQConnect registry
2. `Under Verification` — Field coordinator validating need and household coordinates
3. `Verified` — Authenticated by local authorities or civil defense desks
4. `Matched` — Assigned to a qualified partner NGO or mobile relief corps
5. `Assistance In Progress` — Delivery truck dispatched or medical unit on ground
6. `Completed` — Handover receipt signed off with photo confirmation
7. `Closed` — Ticket permanently archived in district records

---

## 🛠️ Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite 6 (High performance, ESM bundling)
- **Routing**: React Router 7 (`react-router-dom`)
- **Icons**: Lucide React (`lucide-react`)
- **Styling**: Vanilla CSS Design System with custom properties (`src/index.css`)
- **State Management**: React Context API (`AuthContext`) with `localStorage` persistence
- **Mock Data**: Centralized recovery requests, users, disasters, and partner NGOs in `src/data/`

---

## 📂 Project Structure

```text
├── index.html                   # HTML entry with humanitarian branding & fonts
├── package.json                 # Dependencies & project scripts
├── vite.config.js               # Vite 6 configuration
├── public/                      # Static assets
└── src/
    ├── main.jsx                 # Application DOM root
    ├── App.jsx                  # Root router & auth provider wrapper
    ├── index.css                # Humanitarian CSS design system tokens
    ├── context/
    │   └── AuthContext.jsx      # Frontend mock session & role switching
    ├── data/
    │   ├── mockUsers.js         # Citizen, Volunteer, NGO, Admin profiles
    │   ├── mockRequests.js      # Post-disaster assistance requests
    │   ├── mockDisasters.js     # Active disaster operations & recovery principles
    │   └── mockOrganizations.js # Accredited partner relief NGOs
    ├── components/
    │   ├── Navbar.jsx           # Responsive top navigation with mobile drawer
    │   ├── Footer.jsx           # Platform navigation & emergency disclaimers
    │   ├── Button.jsx           # Accessible multi-variant action button
    │   ├── Card.jsx             # Surface card container
    │   ├── Badge.jsx            # Semantic color badge
    │   ├── StatusBadge.jsx      # Accessible status indicator with icons
    │   ├── Input.jsx            # Form input, textarea, and select controls
    │   ├── StatCard.jsx         # Metric card with visual accent
    │   ├── PageHeader.jsx       # Header container with actions
    │   ├── EmptyState.jsx       # Empty view placeholder
    │   ├── Modal.jsx            # Accessible dialog overlay
    │   └── ComingSoon.jsx       # Roadmap placeholder for Day 2/3 pages
    ├── layouts/
    │   ├── PublicLayout.jsx     # Header + Outlet + Footer
    │   └── DashboardLayout.jsx  # Collapsible Sidebar + Topbar + Content
    ├── pages/
    │   ├── Landing.jsx          # Hero, Process Flow, Stakeholders, Trust
    │   ├── HowItWorks.jsx       # 6-Step deep dive & status glossary
    │   ├── Recovery.jsx         # Recovery protocol vs 112 emergency rescue
    │   ├── About.jsx            # Mission, pillars of trust, partner NGOs
    │   ├── Login.jsx            # Demo login with role switcher
    │   ├── Register.jsx         # Registration with role selection
    │   ├── NotFound.jsx         # 404 handler
    │   ├── VolunteerPlaceholder.jsx # Day 2 volunteer desk roadmap
    │   ├── NGOPlaceholder.jsx   # Day 2 NGO desk roadmap
    │   ├── AdminPlaceholder.jsx # Day 3 admin desk roadmap
    │   └── citizen/
    │       ├── CitizenDashboard.jsx # Stats, quick actions, recent requests
    │       ├── RequestHelp.jsx      # Functional assistance intake form
    │       ├── MyRequests.jsx       # Searchable, filterable request archive
    │       ├── Notifications.jsx    # Live alerts on dispatches & verifications
    │       └── Profile.jsx          # Contact coordinates & verified status
    └── routes/
        └── AppRoutes.jsx        # Complete client-side route manifest
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the application.

### 4. Production Build
```bash
npm run build
```

---

## 🎯 Testing & Demo Guide

1. **Landing Page**: Observe the top active disaster banner, hero process flow, and 6-step recovery blueprint.
2. **Login / Role Switching**: Go to `/login` and test the **Interactive Demo Role Switcher**:
   - Select **Citizen** → Access Citizen Dashboard (`/citizen`)
   - Select **Volunteer** → View Day 2 Volunteer Mobilization roadmap (`/volunteer`)
   - Select **NGO** → View Day 2 NGO Operations roadmap (`/ngo`)
   - Select **Admin** → View Day 3 Authority Desk roadmap (`/admin`)
3. **Citizen Request Interaction**:
   - Click any request card on the Citizen Dashboard to view the milestone timeline modal.
   - Click **Submit New Request** or navigate to `/citizen/request-help` to fill and submit a new recovery ticket.
   - Click **Notifications** to view real-time verification and dispatch alerts.
4. **Responsive Testing**: Resize viewport to test mobile navigation drawer and adaptive grid cards.

---

## 📜 Academic Note
Developed for **Mini Project (Semester 5)**. Designed for future integration with Express.js, MongoDB, real-time WebSockets, and GIS mapping without requiring UI rework.
