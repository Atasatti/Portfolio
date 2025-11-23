# Portfolio Website - Next.js

This is a Next.js portfolio website that automatically serves your portfolio page when the development server runs.

## Installation

1. Install the required dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string_here
   MONGODB_DB_NAME=Portfolio_Website
   ```
   - For MongoDB Atlas: Get your connection string from your cluster dashboard
   - For local MongoDB: Use `mongodb://localhost:27017`

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
├── lib/
│   └── mongodb.js        # MongoDB connection utility
├── styles/
│   └── style.css         # Global styles
├── public/               # Static assets (images, etc.)
├── package.json
└── next.config.js
```

## Features

- **Automatic Page Serving**: The portfolio page is automatically served at the root URL
- **Contact Form**: Fully functional contact form with API endpoint at `/api/contact`
- **Database Integration**: Contact form submissions are stored in MongoDB (Portfolio_Website.contacts collection)
- **Static Assets**: All images and static files are served from the `public` folder
- **Responsive Design**: Built with Bootstrap for mobile-friendly layouts
- **Hot Reloading**: Changes are reflected instantly during development

## API Endpoints

- `POST /api/contact` - Handles contact form submissions
  - Request body: `{ name, email, phone, message }`
  - Returns: `{ status, message, data }`
  - **Database**: Saves submissions to MongoDB collection `contacts` in the `Portfolio_Website` database
  - Each submission includes: name, email, phone, message, createdAt timestamp, and status

## Static Assets

All images and static files should be placed in the `public` folder. They can be referenced in your code using paths like `/image.png`.

## Database Setup

The contact form automatically saves submissions to MongoDB:

- **Database**: `Portfolio_Website` (configurable via `MONGODB_DB_NAME`)
- **Collection**: `contacts`
- **Document Structure**:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "message": "string",
    "createdAt": "Date",
    "status": "new"
  }
  ```

To view your contacts, connect to your MongoDB database and query the `contacts` collection.

## Customization

- Edit `pages/index.js` to modify the portfolio content
- Edit `styles/style.css` to customize the styling
- Modify `pages/api/contact.js` to customize contact form handling
- Update `lib/mongodb.js` to change database connection settings

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your repository
- **Any Node.js hosting**: Run `npm run build` and `npm start`
