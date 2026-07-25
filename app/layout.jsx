import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata() {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") || headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") || "https";
  const base = host ? `${protocol}://${host}` : "https://ata-ul-haq.dev";

  return {
    metadataBase: new URL(base),
    title: "Ata Ul Haq — AI Engineer",
    description:
      "AI engineer building computer vision, generative AI, and multimodal products from model to interface.",
    keywords: [
      "Ata Ul Haq",
      "AI Engineer",
      "Computer Vision",
      "Generative AI",
      "LLM Applications",
      "FastAPI",
      "Next.js",
    ],
    authors: [{ name: "Ata Ul Haq" }],
    openGraph: {
      title: "Ata Ul Haq — AI Engineer",
      description:
        "AI systems that see, reason, and ship — from model orchestration to polished products.",
      type: "website",
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
      title: "Ata Ul Haq — AI Engineer",
      description:
        "AI systems that see, reason, and ship — from model orchestration to polished products.",
      images: ["/og.png"],
    },
    icons: {
      icon: "/profile-pic.jpg",
      apple: "/profile-pic.jpg",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
