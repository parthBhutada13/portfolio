import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl tracking-tight">
            <span className="text-foreground">parth{

            }</span>
            <span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-muted-foreground hover:text-foreground transition-colors ${isActive ? "text-foreground crimson-underline" : ""
                }`
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="md:hidden border-t border-border">
        <div className="container-page flex gap-4 overflow-x-auto py-3 text-xs" style={{ scrollbarWidth: 'none' }}>
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-muted-foreground whitespace-nowrap transition-colors ${isActive ? "text-foreground" : ""
                }`
              }
            >
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
