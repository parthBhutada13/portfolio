import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { projects } from "./projects";

export const Route = createFileRoute("/projects/$id")({
  head: () => ({
    meta: [
      { title: "Project — Portfolio" },
      { name: "description", content: "Project details and case study." },
    ],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-4">— 404</div>
        <h1 className="font-serif text-7xl text-foreground">Not found.</h1>
        <p className="mt-4 text-muted-foreground">
          This project isn't in the archive.
        </p>
        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-2.5 text-sm tracking-wide hover:opacity-90 transition"
          >
            Back to projects
          </Link>
        </div>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { id } = Route.useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    throw new Error("Project not found");
  }

  const projectIndex = projects.findIndex((p) => p.id === id);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div>
      <PageHeader
        eyebrow="Project"
        title={project.t}
        description={project.desc}
      />

      <section className="container-page py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Project Hero Image - placeholder */}
          <div className="aspect-video bg-card border border-border rounded flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p className="text-sm">Project visual</p>
              <p className="text-xs mt-2">Add your project images here</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6 text-foreground leading-relaxed">
              <p>
                Add detailed project description, process, and outcomes here. Replace this text with your case study content.
              </p>
              <p>
                Include information about your approach, challenges you solved, and the impact of the work.
              </p>
            </div>

            <aside className="space-y-8 text-sm">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">— Role</div>
                <p className="text-foreground">{project.role}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">— Year</div>
                <p className="text-foreground">{project.year}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container-page py-12 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="group text-left hover:text-secondary transition"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">← Previous</div>
              <h3 className="font-serif text-xl text-foreground group-hover:text-secondary transition">{prevProject.t}</h3>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="group text-right hover:text-secondary transition"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">Next →</div>
              <h3 className="font-serif text-xl text-foreground group-hover:text-secondary transition">{nextProject.t}</h3>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}
