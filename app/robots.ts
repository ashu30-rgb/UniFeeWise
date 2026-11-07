import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://unifeewise.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          // OpenAI / ChatGPT live search & training
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          // Perplexity AI search
          "PerplexityBot",
          "Perplexity-User",
          // Anthropic Claude search & user browsing
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          // Google search & Gemini AI Overviews
          "Googlebot",
          "Google-Extended",
          // Microsoft Bing & Copilot (powers ChatGPT Search)
          "Bingbot",
          // Apple Intelligence & Siri ChatGPT integration
          "Applebot",
          "Applebot-Extended",
          // Cohere & Meta AI crawlers
          "cohere-ai",
          "Meta-ExternalAgent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
