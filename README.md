# 📊 Dynamic Portfolio Dashboard

A full-stack **Dynamic Portfolio Dashboard** built with **Next.js, TypeScript, Tailwind CSS, TanStack Query, and Node.js (Express)**.
The application displays real-time stock portfolio insights using live market data fetched from **Yahoo Finance (unofficial API)**.

This project is implemented as part of the **Octa Byte AI Pvt Ltd – Case Study Assignment**.

---

## 🚀 Live Architecture Overview

```
Dynamic-Portfolio-Dashboard
├── backend/          # Node.js + Express API
│   ├── src/
│   ├── dist/
│   └── package.json
│
├── client/           # Next.js (App Router) frontend
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── netlify.toml
│
└── README.md
```

---

## 🧠 Key Features

### ✅ Portfolio Dashboard
- Tabular portfolio view with:
  - Stock name (Particulars)
  - Purchase price
  - Quantity
  - Investment value
  - Portfolio %
  - Exchange (NSE)
  - CMP (Current Market Price)
  - Present value
  - Gain / Loss (color coded)
  - P/E Ratio
  - Latest earnings

### 🔄 Real-Time Updates
- Auto refresh every **15 seconds**
- Powered by **TanStack Query polling**

### 🧩 Sector Grouping
- Stocks grouped by sector
- Sector-level summaries:
  - Total investment
  - Total present value
  - Total P/L

### 📈 Visualizations (Optional Requirement)
- **Portfolio allocation pie chart**
- **Sector-wise investment bar chart**
- Implemented using **Recharts**

### 🌗 Light / Dark Theme
- CSS variable–based theming
- Tailwind compatible
- Toggle supported

### ⚡ Performance & UX
- Memoized computations
- Dumb reusable components
- Loading skeletons
- Error boundaries with retry

---

## 🛠️ Technology Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **TanStack React Query**
- **react-table**
- **Recharts**

### Backend
- **Node.js**
- **Express**
- **TypeScript**
- **Yahoo Finance (unofficial – yahoo-finance2)**
- **Express Rate Limit**
- **In-memory caching**

### Deployment
- **Frontend**: Netlify (SSR enabled)
- **Backend**: Render

---

## 📦 Data Source Strategy

> ⚠️ Yahoo Finance does not provide an official public API.

**Solution used:**
- `yahoo-finance2` (unofficial library)
- Server-side fetching only
- Cached + rate-limited to avoid blocking

**Fetched fields:**
- CMP (`regularMarketPrice`)
- P/E Ratio
- Earnings timestamp

No API keys are exposed on the client.

---

## 🧩 Frontend Architecture

### Design Principles
- SOLID
- Separation of concerns
- Dumb presentational components
- Pure utility functions for computations

### Data Flow
```
Backend API
   ↓
TanStack Query (cache + polling)
   ↓
PortfolioContainer (orchestration)
   ↓
Derived metrics (pure utils)
   ↓
Charts + Tables (presentation)
```

---

## 🧪 Caching, Throttling & Rate Limiting

### Backend
- In-memory cache for stock quotes
- TTL-based refresh
- Express rate-limit middleware
- `trust proxy` configured for cloud deployment

### Frontend
- React Query caching
- Background revalidation
- Controlled refetch interval

---

## ▶️ Running the Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/AmarnathCKR/Dynamic-Portfolio-Dashboard-with-React.Js-TypeScript-Tailwind-Node.Js
cd Dynamic-Portfolio-Dashboard-with-React.Js-TypeScript-Tailwind-Node.Js
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:4000`

### 3️⃣ Frontend Setup
```bash
cd client
npm install --legacy-peer-deps
npm run dev
```
Frontend runs on `http://localhost:3000`

---

## 🌍 Environment Variables

### Frontend (`client/.env.local`)
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
```

---

## 📤 Deployment Notes

### Netlify (Frontend)
- Uses Netlify’s Next.js runtime
- SSR handled via Netlify-managed serverless functions
- No custom netlify/functions required

### Render (Backend)
- Node.js version: 24.x
- Build: `npm run build`
- Start: `npm start`

---

## 🧑‍💼 Interview Talking Points
- Why unofficial APIs were used
- How rate limiting & caching were handled
- Why charts are derived client-side
- How SSR works on Netlify
- Separation of domain logic vs UI logic

---

## 📌 Future Improvements
- WebSocket-based live updates
- Redis cache
- Persistent portfolio storage
- Authentication
- Unit tests for utilities

---

## 📄 License
This project is created solely for evaluation and educational purposes as part of the Octa Byte AI case study.

---

## 🙌 Author
**Amarnath (Amar)**  
Full-Stack Engineer
