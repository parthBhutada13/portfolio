import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { designProjects, technicalProjects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects" },
      { name: "description", content: "Data science, machine learning, and product design work." },
      { property: "og:title", content: "Projects" },
      { property: "og:description", content: "Data science and design projects" },
    ],
  }),
  component: ProjectsPage,
});

export const projects = [...technicalProjects, ...designProjects];

function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"design" | "technical">("technical");

  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        description="Data science, machine learning, and product design work."
      />

      {/* Tab Navigation */}
      <section className="container-page py-8 border-b border-border overflow-x-auto">
        <div className="flex gap-8 flex-nowrap">
          <button
            onClick={() => setActiveTab("technical")}
            className={`pb-3 border-b-2 transition whitespace-nowrap ${
              activeTab === "technical"
                ? "border-secondary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Data Science & ML
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`pb-3 border-b-2 transition whitespace-nowrap ${
              activeTab === "design"
                ? "border-secondary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Design Projects
          </button>
        </div>
      </section>

      {/* Design Projects */}
      {activeTab === "design" && (
        <section className="container-page py-12">
          <ul className="space-y-12">
            {designProjects.map((p) => (
              <li key={p.id} className="border border-border p-8 hover:border-secondary transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-xs text-secondary tracking-widest mb-2">{p.n} · {p.year}</div>
                    <h3 className="font-serif text-3xl text-foreground mb-2">{p.t}</h3>
                    <p className="text-sm text-secondary font-medium">{p.category}</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed mb-4">{p.fullDesc}</p>
                
                {p.url && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground crimson-underline">View Project ↗</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Technical Projects */}
      {activeTab === "technical" && (
        <section className="container-page py-12">
          <ul className="space-y-12">
            {technicalProjects.map((p) => (
              <li key={p.id} className="border border-border p-8 hover:border-secondary transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-xs text-secondary tracking-widest mb-2">{p.n} · {p.year}</div>
                    <h3 className="font-serif text-3xl text-foreground mb-2">{p.t}</h3>
                    <p className="text-sm text-secondary font-medium">{p.category}</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed mb-4">{p.fullDesc}</p>
                
                {p.url && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground crimson-underline">View Project ↗</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
