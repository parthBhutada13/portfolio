import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parth Bhutada — Home" },
      { name: "description", content: "Data Science Enthusiast & Designer — Building solutions through data analysis and thoughtful product design." },
      { property: "og:title", content: "Parth Bhutada — Home" },
      { property: "og:description", content: "Data Science Enthusiast & Designer" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="container-page pt-24 pb-28 grid md:grid-cols-12 gap-8 items-end border-b border-border">
        <div className="md:col-span-8">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-6">
            + Data Science Enthusiast & Designer
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95]">
            data, code &
            <br />
            <span className="italic text-secondary">design</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
            I'm a student passionate about turning raw data into meaningful stories and building intuitive tools. I love exploring the intersection of machine learning, statistics, and human-centered design.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              to="/projects"
              className="bg-primary text-primary-foreground px-5 py-3 text-sm tracking-wide hover:opacity-90 transition"
            >
              View projects
            </Link>
            <Link
              to="/contact"
              className="border border-border text-foreground px-5 py-3 text-sm tracking-wide hover:border-secondary transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="md:col-span-4 hidden md:block">
        </div>
      </section>


      {/* Current Focus */}
      <section className="container-page py-16 border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">— Now</div>
          <p className="text-foreground leading-relaxed">
            Final year B.Tech in AI & ML. Focused on applying data science and statistical analysis to solve real-world problems through design and engineering.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">— Focus</div>
          <p className="text-foreground leading-relaxed italic font-serif">Data Analysis, Visualization, ML, Statistics, Product Design</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">— Elsewhere</div>
          <ul className="space-y-1 text-foreground">
            <li><Link className="hover:text-secondary" to="/blog">Read the blog →</Link></li>
            <li><Link className="hover:text-secondary" to="/certificates">Credentials →</Link></li>
            <li><Link className="hover:text-secondary" to="/about">About me →</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
}