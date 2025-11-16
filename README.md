# Portfolio Website - Next.js

This is a Next.js portfolio website that automatically serves your portfolio page when the development server runs.

## Installation

1. Install the required dependencies:
```bash
npm install
```

## Running the Development Server

Run the development server:
```bash
npm run dev
```

The server will:
- Start on `http://localhost:3000`
- Automatically open your browser (if configured) to display the portfolio website
- Support hot-reloading for instant updates during development

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
Portfolio/
├── pages/
│   ├── index.js          # Main portfolio page
│   ├── _app.js           # App wrapper with global styles
│   └── api/
│       └── contact.js    # Contact form API endpoint
├── styles/
│   └── style.css         # Global styles
├── public/               # Static assets (images, etc.)
├── package.json
└── next.config.js
```

## Features

- **Automatic Page Serving**: The portfolio page is automatically served at the root URL
- **Contact Form**: Fully functional contact form with API endpoint at `/api/contact`
- **Static Assets**: All images and static files are served from the `public` folder
- **Responsive Design**: Built with Bootstrap for mobile-friendly layouts
- **Hot Reloading**: Changes are reflected instantly during development

## API Endpoints

- `POST /api/contact` - Handles contact form submissions
  - Request body: `{ name, email, phone, message }`
  - Returns: `{ status, message, data }`

## Static Assets

All images and static files should be placed in the `public` folder. They can be referenced in your code using paths like `/image.png`.

## Customization

- Edit `pages/index.js` to modify the portfolio content
- Edit `styles/style.css` to customize the styling
- Modify `pages/api/contact.js` to add database integration or email sending functionality

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your repository
- **Any Node.js hosting**: Run `npm run build` and `npm start`
