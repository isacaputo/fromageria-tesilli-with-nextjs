# 🧀 Fromageria Tesilli

> **Work in Progress** - E-commerce platform for artisanal cheeses

A modern Next.js e-commerce application for selling artisanal cheeses, built with TypeScript, Prisma, and Neon database.

## 🚧 Project Status

This project is currently **under active development**. Features and functionality are being implemented incrementally.

### ✅ Completed Features

- Next.js 14 setup with TypeScript
- Prisma ORM integration with Neon serverless database
- Database schema for products (cheese catalog)
- WebSocket-enabled database connections for serverless deployment
- Basic product data models and actions
- Environment configuration for development and production

### 🔄 In Progress

- Product listing and catalog pages
- Shopping cart functionality
- User authentication and profiles
- Payment processing integration
- Admin dashboard for inventory management
- Responsive UI/UX design

### 📋 Planned Features

- Advanced product filtering and search
- Customer reviews and ratings
- Order tracking and history
- Email notifications
- Multi-language support
- SEO optimization

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Database**: Neon (Serverless PostgreSQL)
- **ORM**: Prisma with Neon adapter
- **Styling**: [TBD - CSS framework to be decided]
- **Authentication**: [TBD]
- **Payments**: [TBD]
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Neon database account

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd fromageria-nextjs-project
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
NEXT_PUBLIC_APP_NAME=Fromageria Tesilli
NEXT_PUBLIC_APP_DESCRIPTION=Loja Online de Queijos Artesanais
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
DATABASE_URL=your_neon_database_url_here
```

4. Generate Prisma client

```bash
npx prisma generate
```

5. Run database migrations (when available)

```bash
npx prisma db push
```

6. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
fromageria-nextjs-project/
├── app/                    # Next.js app directory
├── db/                     # Database configuration
│   ├── prisma.ts          # Prisma client with Neon adapter
│   └── sample-data.ts     # Sample data for development
├── lib/                    # Utility functions and actions
│   ├── actions/           # Server actions
│   └── utils/             # Helper functions
├── prisma/                # Prisma schema and migrations
└── public/                # Static assets
```

## 🔧 Development Notes

### Database Configuration

This project uses Neon serverless database with Prisma. The setup includes:

- WebSocket connections for optimal serverless performance
- Custom Prisma extensions for type transformations
- Environment-based configuration loading

---

**Note**: This README will be updated as the project progresses and new features are implemented.
