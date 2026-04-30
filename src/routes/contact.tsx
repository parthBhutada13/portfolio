import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Parth Bhutada" },
      { name: "description", content: "Get in touch about projects, writing, or correspondence." },
      { property: "og:title", content: "Contact — Parth Bhutada" },
      { property: "og:description", content: "Get in touch about projects, writing, or correspondence." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something remarkable"
        description="Open to research collaborations, internships, full-time roles, and interesting AI conversations."
      />

      <section className="container-page py-16">
        <div className="space-y-8 text-sm max-w-2xl">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">— Reach Out</div>
            <p className="text-foreground leading-relaxed">
              Interested in collaborating? Let's talk about AI, design, or building something meaningful.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">— Contact & Platforms</div>
            <ul className="space-y-2 text-foreground">
              <li><span className="text-foreground">◆ parthbhutada13@gmail.com</span></li>

              <li><a className="hover:text-secondary transition" href="https://linkedin.com/in/parth-bhutada" target="_blank" rel="noopener noreferrer">◆ linkedin.com/in/parth-bhutada</a></li>
              <li><a className="hover:text-secondary transition" href="https://github.com/parthBhutada13" target="_blank" rel="noopener noreferrer">◆ github.com/parthBhutada13</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
