import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/perfil", label: "Perfil" },
  { href: "/projetos", label: "Projetos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-[4.5rem] items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="group flex items-center gap-3" aria-label="Ir para o início">
          <span className="flex h-9 w-9 items-center justify-center border border-primary/45 bg-primary/10 font-mono text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">TF</span>
          <span className="hidden text-sm font-bold tracking-tight text-foreground sm:block">Thaíssa Fernandes</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <a href="mailto:thaissafssilva@gmail.com" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-foreground">
            Fale comigo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background px-5 py-4 md:hidden" aria-label="Navegação móvel">
          <div className="container flex flex-col gap-1 px-0">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-border/60 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <a href="mailto:thaissafssilva@gmail.com" onClick={() => setOpen(false)} className="py-3 text-sm font-bold text-primary">
              Fale comigo <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background/70">
      <div className="container flex flex-col gap-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">Thaíssa Fernandes</p>
          <p className="mt-1">Produto, requisitos e tecnologia com intenção.</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/thaissa-fernandes-02l08u06a/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href="https://github.com/tfsLua" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
          <a href="mailto:thaissafssilva@gmail.com" className="hover:text-primary">Email</a>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
      <BackToTop />
    </div>
  );
}
