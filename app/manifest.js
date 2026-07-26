export default function manifest() {
  return {
    name: "Ata Ul Haq — AI Engineer Portfolio",
    short_name: "Ata Ul Haq",
    description:
      "AI engineering portfolio focused on computer vision, generative AI, multimodal systems, and production-ready products.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f0e8",
    theme_color: "#f2f0e8",
    lang: "en",
    categories: ["portfolio", "technology", "artificial intelligence"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
