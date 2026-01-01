# Baby Goods Dealer v2

Modern e-commerce website for baby products built with Next.js 14.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Utilities:** clsx

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Development Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd babygoodsdealer-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Deployment

### Docker Deployment

Build and run with Docker:

```bash
# Build the image
docker build -t babygoodsdealer-v2 .

# Run the container
docker run -p 3000:3000 babygoodsdealer-v2
```

### Coolify Deployment

This project is configured for Coolify deployment with standalone output:

1. Connect your Git repository to Coolify
2. Set the build pack to "Dockerfile"
3. Configure environment variables in Coolify dashboard
4. Deploy

The Dockerfile uses multi-stage builds for optimal image size.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | No |

## Project Structure

```
babygoodsdealer-v2/
├── app/                  # Next.js App Router pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
├── public/               # Static assets
├── Dockerfile            # Docker configuration
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## License

Private - All rights reserved.
