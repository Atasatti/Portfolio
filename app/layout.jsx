import "./globals.css";

const siteUrl = "https://ataulhaq.vercel.app";
const title = "Ata Ul Haq (Ata Satti) | AI Engineer";
const description =
  "Official portfolio of Ata Ul Haq, also known online as Ata Satti—an AI engineer specializing in computer vision, generative AI, and multimodal products.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Ata Ul Haq",
  keywords: [
    "Ata Ul Haq",
    "Ata Satti",
    "Ata Satti AI Engineer",
    "Ata Satti Portfolio",
    "Ata Ul Haq AI Engineer",
    "AI Engineer Pakistan",
    "Computer Vision Engineer",
    "Generative AI Engineer",
    "Multimodal AI",
    "LLM Applications",
    "Machine Learning Engineer",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Ata Ul Haq", url: siteUrl }],
  creator: "Ata Ul Haq",
  publisher: "Ata Ul Haq",
  verification: {
    google: "reihA8Wbe5z3ym_N5-J8JmZ0oqpwX8qY5QdLSH8a0LQ",
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [
        {
          url: "/llms.txt",
          title: "LLM-readable portfolio summary",
        },
        {
          url: "/llms-full.txt",
          title: "Full LLM-readable portfolio context",
        },
      ],
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ata Ul Haq",
    locale: "en_US",
    type: "profile",
    firstName: "Ata Ul",
    lastName: "Haq",
    username: "Atasatti",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ata Ul Haq — AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#f2f0e8",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://github.com/Atasatti" />
        <link rel="me" href="https://www.linkedin.com/in/ata-satti" />
      </head>
      <body>{children}</body>
    </html>
  );
}
