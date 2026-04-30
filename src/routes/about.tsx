import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Parth Bhutada" },
      { name: "description", content: "Background, skills, and approach to data science and design." },
      { property: "og:title", content: "About — Parth Bhutada" },
      { property: "og:description", content: "Data Science Enthusiast & Designer" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="About me"
        description="A student exploring the world of data, machine learning, and product design."
      />

      <section className="container-page py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-foreground leading-relaxed">
          <p>
            I'm a B.Tech student in AI & Machine Learning at Symbiosis Institute of Technology. I'm really curious about how data can be used to understand the world better and build more useful products. My background includes studying machine learning, statistics, and software development, but I'm also deeply interested in product design.
          </p>
          <p>
            I learn best by building things, actively taking on projects across different areas of tech. Lately, I've been exploring natural language processing and large language models to solve language-specific challenges. At the same time, I really enjoy developing user-focused applications from the ground up, with a focus on making complex data easy to understand and interact with.
          </p>
          <p>
            Right now, I'm eager to collaborate, learn new technologies, and take on roles that challenge me to apply my skills in real-world scenarios. Whether it's training machine learning models, analyzing data, or refining a user interface, I'm always ready to build something meaningful.
          </p>
        </div>

        <aside className="space-y-8 text-sm">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">— Expertise</div>
            <ul className="space-y-1 text-foreground text-sm">
              <li>Data Analysis & Statistics</li>
              <li>Machine Learning</li>
              <li>Data Visualization</li>
              <li>Product Design & UX</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">— Skills</div>
            <ul className="space-y-1 text-foreground text-sm">
              <li>Python, R, JavaScript</li>
              <li>ML/AI: PyTorch, Scikit-learn</li>
              <li>Data: Power BI, SQL, MongoDB</li>
              <li>Design: Figma, React, Tailwind</li>
            </ul>
          </div>
          <Link
            to="/contact"
            className="inline-block border border-border px-4 py-2 text-sm hover:border-secondary transition"
          >
            Get in touch →
          </Link>
        </aside>
      </section>
    </div>
  );
}
