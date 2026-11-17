# Virtual Courses AI — Free AI-Powered Learning Platform

![Virtual Courses AI](banner.jpg)

**Grow your skills to advance your career path.** A free online learning platform for students and professionals: full courses with structured modules and video lessons, micro-learning reels, quizzes, completion certificates, progress tracking, smart course search and a built-in learning assistant — all in one place, all free.

🔗 **Live demo:** https://virtualcoursesdemo.netlify.app/
🎓 **19 free courses · 6 categories · certificates, quizzes & reels included**

![Status](https://img.shields.io/badge/status-live-brightgreen) ![Courses](https://img.shields.io/badge/courses-19%20free-blue) ![Stack](https://img.shields.io/badge/stack-React%20%2B%20TypeScript%20%2B%20Vite-61dafb) ![Hosting](https://img.shields.io/badge/hosting-Netlify-00C7B7)

## What it does

- **Free online courses** — 19 complete courses, each built from modules, video lessons (YouTube embeds), a per-module quiz and its own set of micro-reels.
- **Course details pages** — curriculum, modules and lessons, instructor, difficulty level, duration, ratings and prerequisites-style overview for every course.
- **Micro-learning reels** — a dedicated Reels section for short educational videos you can watch in quick sessions.
- **Quizzes & assessments** — a quiz at the end of every module, with scores and attempts tracked per course.
- **Completion certificates** — finish a course and get a certificate page in your name.
- **Progress tracking** — enrolled courses, completed modules, quiz scores and certificates are kept in your profile and My Courses.
- **Smart course search** — an AI Search page that matches your query to courses and recommends what to learn next based on what you're already enrolled in.
- **Learning assistant chatbot** — a built-in assistant that answers FAQs and helps with course recommendations, career guidance and learning paths.
- **Student, educator & admin views** — role-based dashboards: learners track their progress, educators and admins get an analytics dashboard with enrolment and category charts.
- **Wishlist & profiles** — save courses for later and manage your learner profile.

## Sections

| Section | Route | Purpose |
|---|---|---|
| Home | `/` | Introduces the platform, popular courses, reviews |
| Courses | `/courses` | Browse and filter all 19 courses |
| Course details | `/course/:courseId` | Curriculum, lessons, quizzes, instructor |
| Reels | `/reels` | Short educational videos |
| AI Search | `/search` | Smart course discovery + recommendations |
| Chatbot | `/chatbot` | Learning assistant support |
| My Courses | `/my-courses` | Enrolled courses and progress |
| Dashboard | `/dashboard` | Educator / admin analytics |
| Certificate | `/certificate/:courseId` | Course completion certificate |
| Wishlist | `/wishlist` | Saved courses |
| About & Reviews | on Home | Platform story and student / educator feedback |
| Support | via Chatbot & Footer | Help and contact information |

## Course categories

The catalogue covers 6 categories — Web Development, UI/UX Design and App Development sit inside them alongside Ethical Hacking, AI/ML and Data Science:

| Category | Example courses |
|---|---|
| App Development | Full-Stack Web Development – MERN Stack Mastery · Mobile App Development – Flutter & React Native · Frontend Mastery – React, Tailwind, Animations · Backend Essentials – Node.js & Express.js |
| AI & Machine Learning | Machine learning, neural networks and applied AI |
| Data Science & Analytics | Data analytics, visualisation and data-driven decision making |
| Cybersecurity & Networking | Ethical hacking and security fundamentals |
| Digital Marketing & Business | Marketing and career-growth skills |
| Creative & Design | UI/UX design and creative tools |

## Run locally

```sh
npm install
npm run dev
```

Build and test:

```sh
npm run build
npm test
```

## Under the hood

A single-page React app — the full source is in this repo:

- **Frontend** — React 18 + TypeScript, built with Vite, styled with Tailwind CSS and shadcn/ui (Radix) components, animated with Framer Motion.
- **Routing & data** — React Router 6 for the 14 routes above; TanStack Query for data state; Recharts powers the dashboard analytics.
- **Course engine** (`src/lib/courses.ts`) — the catalogue is structured data: every course carries modules → lessons → quiz questions → reels, so adding a course is adding data, not new pages.
- **Auth & progress** (`src/contexts/AuthContext.tsx`, `src/lib/auth.ts`) — sign-up / login with three roles (student, educator, admin); enrolments, wishlist, completed modules, quiz scores and certificates persist per user.
- **Forms** — React Hook Form + Zod validation.

📐 **Full walkthrough:** [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — page-by-page map, data model, and the production roadmap.

## Roadmap — production upgrade path

The demo runs entirely in the browser. The planned production stack, in order:

| Component | Planned technology |
|---|---|
| Frontend | React / Next.js (current app is React + Vite) |
| Backend | Node.js + Express.js API |
| Database | MongoDB |
| Authentication | JWT (replacing demo sign-in) |
| AI Search | OpenAI API on top of the current smart search |
| Video hosting | Cloudinary |
| Payments | Stripe (for future paid tiers — courses are free today) |
| Certificates | PDF generation with a unique ID per certificate |

Priority improvements:

1. **Certificate verification** — every certificate gets a unique ID and a public verification page.
2. **Instructor dashboard uploads** — instructors create courses, lessons, quizzes and assignments from the dashboard (today the catalogue is managed in code).
3. **Admin dashboard** — full user, instructor, course and certificate management with platform statistics.
4. **Reels interactions** — like, save and share on every reel.
5. **Security hardening** — server-side authentication and authorization, input validation and data protection when the backend lands.

## Honest limits

- **Demo data.** Course ratings, student counts and the homepage figures (50,000+ students, 25,000+ certificates, 15+ instructors) are showcase numbers for the demo, not audited platform metrics. Reviews are sample testimonials.
- **Demo sign-in.** Accounts and progress are stored in the browser (localStorage) — convenient for a demo, not secure production auth. JWT auth arrives with the backend in the roadmap.
- **Built-in assistant, not a live LLM.** The chatbot answers from prepared responses and the AI Search matches and recommends over the course catalogue in-app; neither calls an external AI API yet.
- **Certificates are generated in-browser** — the unique-ID public verification page is a roadmap item, not yet live.

## Tech

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui (Radix) · React Router · TanStack Query · Framer Motion · Recharts · React Hook Form + Zod · Netlify hosting
