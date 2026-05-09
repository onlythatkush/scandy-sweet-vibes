import heroImg from "@/assets/hero-candy.jpg";
import candy1 from "@/assets/candy-1.png";
import candy2 from "@/assets/candy-2.png";
import candy3 from "@/assets/candy-3.png";
import candy4 from "@/assets/candy-4.png";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pb-24 pt-10 sm:pt-16">
      {/* floating blobs */}
      <div className="pointer-events-none absolute -left-20 top-32 h-72 w-72 animate-blob bg-candy-pink/60 blur-2xl" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 animate-blob bg-candy-blue/60 blur-2xl" style={{ animationDelay: "-5s" }} />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 animate-blob bg-candy-yellow/50 blur-2xl" style={{ animationDelay: "-9s" }} />

      {/* floating candies */}
      <img src={candy1} alt="" aria-hidden width={120} height={120} className="pointer-events-none absolute left-[6%] top-[28%] h-20 w-20 animate-float drop-shadow-2xl sm:h-28 sm:w-28" />
      <img src={candy2} alt="" aria-hidden width={140} height={140} className="pointer-events-none absolute right-[8%] top-[18%] h-24 w-24 animate-float-delay drop-shadow-2xl sm:h-32 sm:w-32" />
      <img src={candy3} alt="" aria-hidden width={110} height={110} className="pointer-events-none absolute right-[14%] bottom-[12%] h-16 w-16 animate-float-slow drop-shadow-2xl sm:h-24 sm:w-24" />
      <img src={candy4} alt="" aria-hidden width={120} height={120} className="pointer-events-none absolute left-[12%] bottom-[8%] h-20 w-20 animate-float drop-shadow-2xl sm:h-28 sm:w-28" style={{ animationDelay: "-3s" }} />

      <div className="relative mx-auto w-[min(1100px,92%)] text-center">
        <span className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80 animate-rise">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          New: Lingonberry gummy drop — limited batch
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl animate-rise" style={{ animationDelay: "60ms" }}>
          Scandinavian candy{" "}
          <span className="bg-gradient-soft bg-clip-text text-transparent">delivered</span>{" "}
          to your door
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg animate-rise" style={{ animationDelay: "120ms" }}>
          Premium Nordic sweets, gummies, chocolates, and pick &amp; mix candy — curated with a little bit of hygge in every box.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-rise" style={{ animationDelay: "180ms" }}>
          <a href="#shop" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-glow transition hover:scale-[1.03]">
            Shop Candy
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href="#mix" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:scale-[1.03]">
            Build Your Mix
          </a>
        </div>

        <div className="relative mx-auto mt-14 w-full max-w-3xl animate-rise" style={{ animationDelay: "240ms" }}>
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-soft opacity-40 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-2 shadow-card">
            <img
              src={heroImg}
              alt="A pile of pastel Scandinavian pick and mix candy"
              width={1024}
              height={1024}
              className="h-auto w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 left-6 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-soft sm:flex">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-candy-mint">⭐</div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Rated by 12,400+</div>
              <div className="text-sm font-semibold">4.9 / 5 average</div>
            </div>
          </div>
          <div className="glass absolute -top-4 right-6 hidden items-center gap-2 rounded-2xl px-4 py-3 shadow-soft sm:flex">
            <span className="text-2xl">🚚</span>
            <div className="text-left text-xs">
              <div className="text-muted-foreground">Free shipping</div>
              <div className="font-semibold text-foreground">Orders over €35</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
