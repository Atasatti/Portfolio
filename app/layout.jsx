import "./globals.css";

const siteUrl = "https://ataulhaq.vercel.app";
const title = "Ata Ul Haq | AI Engineer & Computer Vision Specialist";
const description =
  "Portfolio of Ata Ul Haq, an AI engineer building production-ready computer vision, generative AI, multimodal, and full-stack AI products.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Ata Ul Haq Portfolio",
  keywords: [
    "Ata Ul Haq",
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
    siteName: "Ata Ul Haq Portfolio",
    locale: "en_US",
    type: "profile",
    firstName: "Ata Ul",
    lastName: "Haq",
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
