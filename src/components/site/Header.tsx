import { Link } from "@tanstack/react-router";
import { Search, Menu, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CartDrawer } from "@/components/site/CartDrawer";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#shop", label: "Shop" },
    { href: "#mix", label: "Build a Mix" },
    { href: "#subscribe", label: "Subscribe" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="mx-auto grid w-full grid-cols-3 items-center px-6 py-5">
        <div className="flex items-center justify-start">
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-full text-primary hover:bg-secondary"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <Link to="/" className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display text-4xl leading-none text-primary tracking-wide">
              Scandy Candy
            </span>
            <span className="text-2xl" aria-hidden>🐟</span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/80">
            Swedish Candy
          </span>
        </Link>

        <div className="flex items-center justify-end gap-1 text-primary sm:gap-3">
          <button className="hidden items-center gap-1 text-xs font-medium sm:inline-flex" aria-label="Region">
            Sweden | SEK kr
            <ChevronDown className="h-3 w-3" />
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <button className="hidden h-9 w-9 place-items-center rounded-full hover:bg-secondary sm:grid" aria-label="Account">
            <User className="h-4 w-4" />
          </button>
          <CartDrawer />
        </div>
      </div>

      {open && (
        <div className="mx-auto flex w-[min(1200px,95%)] flex-col gap-1 border-t border-secondary py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-2 text-sm font-medium text-primary hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
