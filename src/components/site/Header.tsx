import { Link } from "@tanstack/react-router";
import { Search, Menu, User, Heart, PartyPopper, Rocket, Crown } from "lucide-react";
import { CartDrawer } from "@/components/site/CartDrawer";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-candy-yellow shadow-card">
      <div className="mx-auto flex w-full max-w-[1500px] items-center gap-4 px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 flex-col items-center leading-none">
          <Crown className="h-5 w-5 text-foreground" fill="currentColor" />
          <span className="font-display text-2xl text-candy-cyan tracking-tight">SCANDY</span>
          <span className="font-display text-2xl text-candy-cyan -mt-1 tracking-tight">CANDY</span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-5 lg:flex">
          <button className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-candy-cyan">
            <Menu className="h-5 w-5" />
            Kategorier
          </button>
          <button className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-candy-cyan">
            <PartyPopper className="h-5 w-5" />
            Nyheter
          </button>
          <button className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-candy-cyan">
            <Rocket className="h-5 w-5" />
            Bästsäljare
          </button>
        </nav>

        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Sök bland 1.000+ produkter..."
            className="w-full rounded-md bg-background py-3 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-candy-cyan"
          />
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button className="grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-background/40" aria-label="Konto">
            <User className="h-5 w-5" />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-background/40" aria-label="Önskelista">
            <Heart className="h-5 w-5" />
          </button>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
