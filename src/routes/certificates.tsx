import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Education & Certifications — Parth Bhutada" },
      { name: "description", content: "Education background and professional certifications." },
      { property: "og:title", content: "Education & Certifications — Parth Bhutada" },
      { property: "og:description", content: "Education and certifications." },
    ],
  }),
  component: CertificatesPage,
});

const education = [
  { 
    t: "Bachelor of Technology in Artificial Intelligence & Machine Learning", 
    issuer: "Symbiosis Institute of Technology, Pune", 
    year: "2023 - 2027", 
    status: "PURSUING",
    details: "CGPA: 7.23 | Specialized coursework in Deep Learning, NLP, Computer Vision, Reinforcement Learning, and Data Science"
  },
];

const certifications = [
  { 
    t: "Machine Learning A–Z Certification", 
    issuer: "Udemy", 
    year: "2025",
    focus: "Python, R, ML Algorithms | Hands-on program covering data preprocessing, supervised/unsupervised learning, neural networks, and model optimization.",
    url: "https://www.linkedin.com/posts/parth-bhutada_machinelearning-datascience-artificalintelligence-activity-7345461111573340161-kFWQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj9yn0BsTn9e1KFnwfwvyHRXtqrvehAZO4"
  },
  { 
    t: "Hotstar Clone Project Certification", 
    issuer: "SmartED Innovations", 
    year: "2025",
    focus: "ReactJS, JavaScript, CSS | Developed and deployed a streaming platform clone using ReactJS components, structured CSS layouts, and DOM-based interactivity",
    url: "https://www.linkedin.com/posts/parth-bhutada_reactjs-webdevelopment-javascript-activity-7360384452885102592-6gc1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj9yn0BsTn9e1KFnwfwvyHRXtqrvehAZO4"
  },
];

const achievements = [
  { 
    t: "INNOXO 2026 – Overdrive UI Competition", 
    issuer: "2nd Place Winner", 
    year: "2026",
    focus: "ISRO Redesign Prototype | UI/UX Design competition focused on redesigning government institution websites with modern design principles"
  },
  { 
    t: "Akshar Bharti NGO Platform", 
    issuer: "Product Design & Development", 
    year: "2025",
    focus: "EdTech | Designed and developed a scalable English learning platform for NGO workers with 95 structured lessons and interactive exercises"
  },
];

function CertificatesPage() {
  const [activeTab, setActiveTab] = useState<"education" | "certifications" | "achievements">("education");

  return (
    <div>
      <PageHeader
        eyebrow="Education & Achievements"
        title="Learning journey & recognition."
        description="Academic background, professional certifications, and notable achievements."
      />

      {/* Tab Navigation */}
      <section className="container-page py-8 border-b border-border">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("education")}
            className={`pb-3 border-b-2 transition ${
              activeTab === "education"
                ? "border-secondary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`pb-3 border-b-2 transition ${
              activeTab === "certifications"
                ? "border-secondary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Certifications
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`pb-3 border-b-2 transition ${
              activeTab === "achievements"
                ? "border-secondary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Achievements
          </button>
        </div>
      </section>

      {/* Education Tab */}
      {activeTab === "education" && (
        <section className="container-page py-12">
          <ul className="space-y-6">
            {education.map((c, i) => (
              <li key={i} className="border border-border p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-foreground">{c.t}</h3>
                  <div className="text-xs uppercase tracking-[0.2em] text-secondary">{c.status}</div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{c.issuer}</p>
                <p className="text-foreground leading-relaxed mb-2">{c.details}</p>
                <div className="text-sm text-secondary">{c.year}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications Tab */}
      {activeTab === "certifications" && (
        <section className="container-page py-12">
          <ul className="space-y-6">
            {certifications.map((c, i) => (
              <li key={i} className="border border-border p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-foreground">{c.t}</h3>
                  <div className="text-sm text-secondary">{c.year}</div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{c.issuer}</p>
                <p className="text-foreground leading-relaxed mb-4">{c.focus}</p>
                {c.url && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground crimson-underline">View Credential ↗</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Achievements Tab */}
      {activeTab === "achievements" && (
        <section className="container-page py-12">
          <ul className="space-y-6">
            {achievements.map((c, i) => (
              <li key={i} className="border border-border p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-foreground">{c.t}</h3>
                  <div className="text-sm text-secondary">{c.year}</div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{c.issuer}</p>
                <p className="text-foreground leading-relaxed">{c.focus}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
