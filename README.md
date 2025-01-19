# Zendesk Clone

A modern help desk solution built with React, Supabase, and AI capabilities.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd zendesk-clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Then edit `.env` with your Supabase credentials.

4. Start the development server:
```bash
npm run dev
```

## Deployment

This project is configured for deployment on AWS Amplify. The build settings are already included in the repository.

### Deploy to AWS Amplify

1. Push your code to GitHub
2. Go to AWS Amplify Console
3. Click "New App" → "Host Web App"
4. Connect your GitHub repository
5. Use the default build settings
6. Deploy!

## Environment Variables

The following environment variables are required:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `VITE_APP_NAME`: Application name

## Tech Stack

- React + TypeScript
- Vite
- Supabase
- AWS Amplify (deployment)

## License

MIT
