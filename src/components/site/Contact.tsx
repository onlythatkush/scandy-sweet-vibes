import { Instagram, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-soft p-8 shadow-glow sm:p-14">
          <div className="absolute -right-10 -top-10 h-60 w-60 animate-blob bg-candy-yellow/60 blur-2xl" />
          <div className="absolute -bottom-16 -left-10 h-72 w-72 animate-blob bg-candy-blue/60 blur-2xl" style={{ animationDelay: "-4s" }} />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-foreground/70">Say hej</p>
              <h2 className="mt-2 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Let's keep in touch — sweetly.
              </h2>
              <p className="mt-4 max-w-md text-foreground/80">
                Get 10% off your first box, plus monthly drops, recipes, and shamelessly cute candy content.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="you@scandycandy.com"
                  className="w-full rounded-full bg-white/80 px-5 py-3.5 text-sm outline-none placeholder:text-foreground/50 focus:bg-white"
                />
                <button className="rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:scale-[1.03]">
                  Subscribe
                </button>
              </form>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                  <Instagram className="h-4 w-4" /> @scandycandy
                </a>
                <a href="#" className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M19.6 6.3a4.8 4.8 0 0 1-3.4-1.6V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.7a2.8 2.8 0 1 0 1.9 2.7V2h2.7a4.8 4.8 0 0 0 3.4 4.3v2z"/></svg>
                  TikTok
                </a>
                <a href="mailto:hej@scandycandy.com" className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                  <Mail className="h-4 w-4" /> hej@scandycandy.com
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 shadow-soft sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-candy-mint">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-display text-lg font-semibold">Visit our Stockholm boutique</div>
                  <p className="text-sm text-muted-foreground">Götgatan 22 · 118 46 Stockholm, Sweden</p>
                  <p className="mt-2 text-sm">Open daily · 10:00 – 19:00</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl" style={{
                    background: ["var(--candy-pink)","var(--candy-blue)","var(--candy-yellow)","var(--candy-bubblegum)","var(--candy-mint)","var(--candy-beige)"][i],
                  }} />
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Latest from @scandycandy on Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex w-[min(1200px,92%)] flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-soft text-base font-bold text-primary-foreground">S</span>
          <span className="font-display text-lg font-semibold">ScandyCandy</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ScandyCandy AB · Made with hygge in Stockholm</p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Shipping</a>
        </div>
      </div>
    </footer>
  );
}
