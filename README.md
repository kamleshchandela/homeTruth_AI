# 🏠 HomeTruth AI

<div align="center">

[![Next.js](https://img.shields.io/badge/Frontend-React%2018%2B-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-yellowgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)](https://github.com)

</div>

> **Find the Truth. Before You Move In.**  
> An AI-powered real estate intelligence platform that reveals hidden property truths, predicts future costs, matches government schemes, optimizes home loans, and connects verified home services.

---

## 📖 About the Project

HomeTruth AI is a comprehensive full-stack web application designed to transform how people make one of life's most important decisions — choosing a home. By combining artificial intelligence with real-time data analysis, we provide transparency in an industry often plagued by hidden costs, misleading information, and lack of accountability.

Our platform delivers:
- **House Health Scores** — A credit-score-like rating for every property
- **True Cost Calculation** — Complete monthly expense breakdown beyond rent
- **Risk Detection** — AI-identified hidden problems
- **Government Scheme Matching** — Personalized benefit eligibility
- **Loan Optimization** — Smart bank comparison and negotiation insights
- **Service Marketplace** — Verified home service professionals

---

## ❗ Problem Statement

In today's housing ecosystem, individuals face significant challenges when making one of the most important financial decisions of their lives — choosing a home. The process is broken across five dimensions:

| Challenge | Impact |
|------------|--------|
| **Fake/Misleading Listings** | No verified data on property's actual condition |
| **Hidden Costs** | Maintenance, utilities, repairs never disclosed upfront |
| **Complex Government Schemes** | Most eligible people never claim benefits they deserve |
| **Loan Inefficiency** | No intelligent comparison between bank offers |
| **Unreliable Services** | No accountability, fake reviews, unpredictable pricing |

There is no single integrated platform that combines all of these into one seamless, intelligent, trustworthy experience.

---

## 💡 Our Solution

HomeTruth AI serves as a unified decision intelligence platform that reveals:

1. **Real Condition** — AI scanning detects dampness, structural issues, past problems
2. **True Monthly Cost** — Rent + maintenance + utilities + repairs + society charges
3. **Health Score** — Comprehensive property rating out of 100
4. **Future Predictions** — 3-5 year cost projections (best/worst case)
5. **Government Benefits** — Instant eligibility calculation for subsidies
6. **Smart Loans** — Bank comparison with negotiation scripts
7. **Verified Services** — Book trusted plumbers, electricians, AC repair

---

## ✨ Key Features

### 🔬 Core Intelligence

- **🏥 House Health Score** — Animated circular progress (0-100) with severity-based coloring
- **🔍 Hidden Risk Detector** — AI flags dampness, power issues, water shortage, structural concerns
- **💰 True Cost Receipt** — Line-item expense breakdown formatted like an invoice
- **📈 Regret Predictor** — Statistical insights on common renter regrets
- **👥 People Like You** — Behavioral patterns from similar user profiles

### 🗺️ Exploration

- **🗺️ Interactive Map** — Leaflet.js map with color-coded risk pins, heatmap layers
- **🏠 3D House Model** — Three.js digital twin with problem area highlighting
- **⚖️ Compare Homes** — Side-by-side comparison of 2-3 properties

### 💰 Financial Tools

- **📊 Future Cost Simulator** — Inflation-adjusted 5-year projections
- **🏛️ Government Schemes** — Personalized eligibility checker with deadline trackers
- **🏦 Loan Optimizer** — Bank comparison, smart profile improver, negotiation engine

### 🛠️ Services

- **🔧 Service Marketplace** — Verified professionals with ratings and live tracking
- **📅 Booking System** — Calendar scheduling, photo upload, payment integration
- **📊 Provider Dashboard** — Dedicated dashboard for service providers

### 👤 User Experience

- **🌙 Dark/Light Mode** — Glass morphism theme with smooth transitions
- **📱 Fully Responsive** — Mobile, tablet, and desktop optimized
- **🤖 AI Chat Interface** — Ask questions about any property
- **📄 True Cost Report** — Downloadable PDF financial summary

---

## 🛠 Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| React 18+ with Vite | UI Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling (Glass morphism) |
| Framer Motion | Animations |
| Redux Toolkit | State management |
| React Router v6 | Navigation |
| React Query | Data fetching |
| Formik + Yup | Form handling |
| Recharts | Data visualization |
| Leaflet.js | Interactive maps |
| Three.js | 3D models |
| Lottie React | Animations |
| React Hot Toast | Notifications |

### Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Express.js | API Framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| Bcrypt | Password hashing |
| Helmet | Security headers |
| Express Validator | Input validation |

### Integrations

| Service | Purpose |
|---------|---------|
| Google OAuth | Social login |
| Cloudinary | Image uploads |
| EmailJS | Contact forms |
| Razorpay/Stripe | Payments |
| Firebase | Push notifications |

---

## 📂 Project Structure

```
HomeTruth AI/
├── client/                          # Frontend application
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/                # Static assets
│   │   ├── components/            # Reusable components
│   │   │   ├── common/           # Buttons, inputs, cards
│   │   │   ├── layout/            # Navbar, Footer, Sidebar
│   │   │   └── features/         # Feature-specific components
│   │   ├── config/               # Configuration files
│   │   ├── contexts/             # React contexts
│   │   ├── hooks/                # Custom hooks
│   │   ├── pages/               # Page components
│   │   │   ├── Home/            # Landing page
│   │   │   ├── Explore/         # Browse homes
│   │   │   ├── HomeDetail/      # Property details
│   │   │   ├── Map/             # Interactive map
│   │   │   ├── Simulator/        # Cost simulator
│   │   │   ├── Schemes/         # Government schemes
│   │   │   ├── LoanOptimizer/  # Bank comparison
│   │   │   ├── Services/       # Service marketplace
│   │   │   ├── ProviderDashboard/
│   │   │   ├── Dashboard/      # User dashboard
│   │   │   ├── Admin/           # Admin panel
│   │   │   ├── Compare/        # Compare homes
│   │   │   ├── Chat/           # AI chat
│   │   │   ├── Report/         # Download reports
│   │   │   ├── SubmitListing/  # Add property
│   │   │   ├── Auth/           # Login/Register
│   │   │   └── NotFound/       # 404 page
│   │   ├── redux/               # Redux store
│   │   ├── styles/              # Global styles
│   │   ├── utils/               # Utility functions
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── server/                        # Backend application
│   ├── config/
│   │   └── db.ts               # MongoDB connection
│   ├── controllers/            # Route controllers
│   ├── middlewares/            # Auth, validation
│   ├── models/               # Mongoose schemas
│   │   ├── User.ts
│   │   ├── Home.ts
│   │   ├── ServiceProvider.ts
│   │   ├── Booking.ts
│   │   ├── Scheme.ts
│   │   ├── Loan.ts
│   │   └── Report.ts
│   ├── routes/               # API routes
│   ├── utils/                # Helper functions
│   ├── .env.example
│   ├── index.ts              # Entry point
│   └── package.json
│
├── .gitignore
├── LICENSE
├── README.md
└── package.json              # Root package.json
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/HomeTruth-AI.git
cd HomeTruth-AI
```

### Environment Variables

Create `.env` files in both `client/` and `server/` directories:

**Server (.env)**
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/hometruth
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

**Client (.env)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_FIREBASE_API_KEY=your_firebase_key
```

### Install Dependencies

**Root**
```bash
npm install
```

**Backend**
```bash
cd server
npm install
```

**Frontend**
```bash
cd client
npm install
```

---

## ▶️ Usage Instructions

### Start Development Server

**Backend**
```bash
cd server
npm run dev
```
Server runs on: `http://localhost:5000`

**Frontend**
```bash
cd client
npm run dev
```
Client runs on: `http://localhost:5173`

### Build for Production

```bash
cd client
npm run build
```

### API Endpoints

| Method | Endpoint | Description |
|-------|----------|-------------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |
| GET | `/api/homes` | List homes (with filters) |
| GET | `/api/homes/:id` | Home details |
| POST | `/api/homes` | Submit listing |
| GET | `/api/services/providers` | Service providers |
| POST | `/api/services/bookings` | Create booking |
| GET | `/api/schemes` | Government schemes |
| POST | `/api/loans/calculate` | Loan calculation |

---

## 🎨 UI/UX Design

### Design System

Our design follows a **Dark Glass Morphism** theme with glass-like translucent cards over a deep dark background.

| Element | Specification |
|---------|---------------|
| **Background** | #0A0A0F (Deep dark) |
| **Primary** | #F5A623 (Amber) |
| **Secondary** | #F5C518 (Amber hover) |
| **Card BG** | rgba(20, 25, 35, 0.7) |
| **Text Primary** | #FFFFFF |
| **Text Secondary** | #9CA3AF |
| **Border** | rgba(255, 255, 255, 0.1) |

### Typography

| Element | Font |
|---------|------|
| **Headings** | 'Playfair Display', serif |
| **Body** | 'Outfit', sans-serif |
| **Data/Code** | 'JetBrains Mono', monospace |

### Figma Design Links

| Prototype | Link |
|-----------|------|
| **Design** | [Figma Design](https://www.figma.com/design/49FzHjaxbrvl4bJ2bSfvAI/Untitled?node-id=0-1&t=GnZsAAonpc8pnGSi-1) |
| **Mobile** | [Mobile Prototype](https://www.figma.com/proto/49FzHjaxbrvl4bJ2bSfvAI/Untitled?node-id=1-3&viewport=270%2C229%2C0.15&t=ojjeOfcX8u6RtGm0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3&page-id=0%3A1&show-proto-sidebar=1) |
| **Desktop** | [Desktop Prototype](https://www.figma.com/proto/49FzHjaxbrvl4bJ2bSfvAI/Untitled?node-id=13-2052&viewport=270%2C229%2C0.15&t=ojjeOfcX8u6RtGm0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=13%3A396&page-id=0%3A1&show-proto-sidebar=1) |

---

## 🚀 Roadmap

### Phase 1 — Foundation ✅
- [x] Landing page with hero and stats
- [x] Explore page with filters
- [x] Home detail page with health score
- [x] Basic authentication

### Phase 2 — Intelligence 🔄
- [ ] AI Hidden Risk Detection
- [ ] Future Cost Simulator
- [ ] Regret Predictor
- [ ] True Cost Receipt

### Phase 3 — Maps & 3D 🗺️
- [ ] Interactive Map with layers
- [ ] 3D House Model viewer
- [ ] Compare Homes feature

### Phase 4 — Financial Tools 💰
- [ ] Government Schemes page
- [ ] Loan Optimizer
- [ ] Bank API integration

### Phase 5 — Services 🔧
- [ ] Service Marketplace
- [ ] Provider Dashboard
- [ ] Live tracking

### Phase 6 — Scale 🚀
- [ ] Admin Panel
- [ ] Analytics dashboard
- [ ] B2B API licensing

---

## 🤝 Contributing

We welcome contributions from developers worldwide.

### Ways to Contribute

1. **Report Bugs** — Open an issue with reproduction steps
2. **Suggest Features** — Create a feature request
3. **Code Contributions** — Submit PRs to main branch
4. **Documentation** — Improve guides and examples
5. **Testing** — Help ensure code quality

### Development Guidelines

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add: Your_feature_description"

# Push and create PR
git push origin feature/your-feature-name
```

### Coding Standards

- Use TypeScript for all new code
- Follow existing component patterns
- Include proper type definitions
- Add comments for complex logic
- Test your changes before submitting

---

## 📜 License

**Proprietary License** — All rights reserved.

This project is proprietary software. See the [LICENSE](LICENSE) file for full details.

---

## 👨‍💻 Author

### Kamlesh Chandela

<div align="left">

**Full-Stack Developer** | **B.Tech Student**  
Swaminarayan University, Kalol

| Skill | Technology |
|-------|------------|
| **Frontend** | React.js, TypeScript, Tailwind CSS |
| **Backend** | Node.js, Express.js, MongoDB |
| **AI** | Generative AI Integration |

> Building scalable, real-world applications with clean architecture and modern UI.

</div>

### Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/kamleshchandela)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)](https://github.com/kamleshchandela)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/kamleshchandela)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail)](mailto:kamleshchandela@example.com)

---

<div align="center">

**Built with ❤️ using the MERN Stack**

[▲ Back to Top](#-hometruth-ai)

</div>