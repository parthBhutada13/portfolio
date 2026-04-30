import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Parth Bhutada" },
      { name: "description", content: "A collection of my articles and thoughts on technology." },
      { property: "og:title", content: "Blog — Parth Bhutada" },
      { property: "og:description", content: "A collection of my articles and thoughts on technology." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    t: "The Internet's GPS: A Deep Dive into the Network Layer (OSI Layer 3)",
    date: "October 24, 2025",
    readTime: "7 min read",
    excerpt: "Discover how the Network Layer (OSI Layer 3) enables your computer to find Google in milliseconds. This comprehensive guide breaks down IP addressing, routing protocols, and how packets travel across the internet with intuitive explanations of complex networking concepts.",
    fullDesc: "Ever wondered how your computer finds Google in milliseconds? This blog breaks down the Network Layer (OSI Layer 3) with intuitive explanations of how data travels across networks. Explore IP addressing schemes, routing algorithms, how packets navigate the internet infrastructure, and the fundamental protocols that power global connectivity.",
    url: "https://medium.com/@parthbhutada13/the-network-layer-b04a105d5313",
    tags: ["OSI Model", "Network Layer", "IP Addressing", "Routing", "TCP/IP"]
  },
];

function BlogPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Writing"
        title="My Thoughts"
        description="A collection of my articles, tutorials, and thoughts on technology."
      />
      <section className="container-page py-12">
        <ul className="space-y-10">
          {posts.map((p, i) => (
            <li key={i} className="border-b border-border pb-10 last:border-b-0 break-words">
              <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">{p.date}</div>
              {p.readTime && <div className="text-xs text-muted-foreground mb-3">◐ {p.readTime}</div>}
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-serif text-2xl md:text-3xl text-foreground hover:text-secondary transition inline-block">{p.t}</a>
              <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">{p.fullDesc}</p>
              {p.tags && (
                <div className="flex gap-2 mt-4 flex-wrap">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs text-secondary">{tag}</span>
                  ))}
                </div>
              )}
              <a href={p.url || "#"} className="inline-block mt-4 text-sm text-foreground crimson-underline" target={p.url ? "_blank" : undefined} rel={p.url ? "noopener noreferrer" : undefined}>Read on Medium ↗</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
