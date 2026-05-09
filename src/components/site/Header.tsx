import { Link } from "@tanstack/react-router";
import { Heart, Search, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { CartDrawer } from "@/components/site/CartDrawer";

export function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const links = [
    { href: "#shop", label: "Shop" },
    { href: "#mix", label: "Build a Mix" },
    { href: "#subscribe", label: "Subscribe" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto mt-3 w-[min(1200px,95%)]">
        <div className="glass flex items-center justify-between rounded-full px-4 py-2.5 shadow-soft sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-soft text-base font-bold text-primary-foreground shadow-glow">
              S
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Scandy<span className="text-primary">Candy</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button className="hidden h-9 w-9 place-items-center rounded-full hover:bg-muted sm:grid" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={() => setDark((d) => !d)}
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button className="hidden h-9 w-9 place-items-center rounded-full hover:bg-muted sm:grid" aria-label="Wishlist">
              <Heart className="h-4 w-4" />
            </button>
            <CartDrawer />
            <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted md:hidden" aria-label="Menu">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>

        {open && (
          <div className="glass mt-2 flex flex-col gap-1 rounded-3xl p-3 md:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-2 text-sm font-medium hover:bg-muted">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
