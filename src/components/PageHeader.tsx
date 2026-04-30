interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="container-page pt-16 pb-10 border-b border-border">
      <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-4">
        — {eyebrow}
      </div>
      <h1 className="font-serif text-4xl md:text-6xl text-foreground max-w-3xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </section>
  );
}
