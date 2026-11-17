# Virtual Courses AI — Architecture

A page-by-page and module-by-module walkthrough of the app as it exists in this repo, plus the production roadmap. Everything in the "as built" sections is verifiable in `src/`; the roadmap is planned work, not current behaviour.

## As built

### Pages (`src/pages/`)

| File | Route | What it does |
|---|---|---|
| `HomePage.tsx` | `/` | Hero, platform stats, category showcase, popular courses, About, learner reviews |
| `CoursesPage.tsx` | `/courses` | Full catalogue with category filtering |
| `CourseDetailPage.tsx` | `/course/:courseId` | Curriculum (modules → lessons), instructor, difficulty, enrol / wishlist |
| `ReelsPage.tsx` | `/reels` | Micro-learning short videos drawn from the course data |
| `SearchPage.tsx` | `/search` | Smart search over the catalogue + personalised recommendations from enrolments |
| `ChatbotPage.tsx` | `/chatbot` | Built-in learning assistant: FAQs, course recommendations, career guidance, learning paths |
| `MyCoursesPage.tsx` | `/my-courses` | Enrolled courses with per-course progress |
| `DashboardPage.tsx` | `/dashboard` | Educator / admin analytics: enrolment trend, category split (Recharts) |
| `CertificatePage.tsx` | `/certificate/:courseId` | Completion certificate for a finished course |
| `WishlistPage.tsx` | `/wishlist` | Saved courses |
| `ProfilePage.tsx` | `/profile` | Learner profile, certificates and scores |
| `LoginPage.tsx` / `SignUpPage.tsx` | `/login`, `/signup` | Role-based sign-in (student, educator, admin) |

### Data model (`src/lib/courses.ts`)

The catalogue is typed data, not hard-coded pages:

- `Course` — id, title, category, instructor, difficulty, description, thumbnail, duration, lesson count, rating, tags, `modules[]`, `reels[]`
- `Module` — title, `lessons[]`, `quiz[]`
- `Lesson` — title, duration, YouTube embed URL, description
- `QuizQuestion` — question, options, correct answer

19 courses across 6 categories: App Development, AI & Machine Learning, Data Science & Analytics, Cybersecurity & Networking, Digital Marketing & Business, Creative & Design.

### Auth & learner state (`src/lib/auth.ts`, `src/contexts/AuthContext.tsx`)

- Three roles: `student`, `educator`, `admin`.
- Per-user state: enrolled courses, wishlist, completed modules per course, quiz scores with attempts, earned certificates.
- Demo implementation: accounts and state persist in browser localStorage. This is a demo convenience — see the roadmap for JWT.

### Components (`src/components/`)

`Navbar`, `Footer`, `CourseCard`, `ProgressBar`, plus the full shadcn/ui set under `components/ui/`.

## Production roadmap

| Area | Now | Planned |
|---|---|---|
| Backend | None — browser-only | Node.js + Express.js API |
| Database | In-code catalogue + localStorage | MongoDB |
| Auth | Demo localStorage sign-in | JWT with server-side authorization |
| AI Search | In-app matching + recommendations | OpenAI API |
| Video | YouTube embeds | Cloudinary hosting |
| Payments | None — all courses free | Stripe for future paid tiers |
| Certificates | In-browser certificate page | PDF generation, unique certificate ID, public verification page |
| Instructor tools | Catalogue managed in code | Dashboard uploads for courses, lessons, quizzes, assignments |
| Admin | Analytics dashboard view | Full management of users, instructors, courses, certificates, platform statistics |
| Reels | Watch | Like, save, share |
| Security | Client-side form validation (Zod) | Server-side authentication, authorization, input validation, data protection |
