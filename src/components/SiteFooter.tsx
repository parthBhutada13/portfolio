export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-page py-10 flex flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div className="font-serif text-foreground">
          parth<span className="text-primary">.</span>
        </div>
        <div>© {year}</div>
      </div>
    </footer>
  );
}
