import { Check } from "lucide-react";

const plans = [
  {
    name: "Small Box",
    price: 14,
    desc: "A tasty intro to Nordic sweets",
    items: ["~300g curated candy", "4–6 unique varieties", "Free Nordic recipe card"],
    bg: "bg-candy-blue",
  },
  {
    name: "Medium Box",
    price: 24,
    desc: "Most loved by Scandy fans",
    items: ["~600g curated candy", "8–10 unique varieties", "Limited monthly drop", "Surprise sticker pack"],
    bg: "bg-gradient-soft",
    featured: true,
  },
  {
    name: "Family Box",
    price: 39,
    desc: "Movie nights, sorted",
    items: ["~1.2kg curated candy", "12+ varieties", "Two limited drops", "Custom gift note"],
    bg: "bg-candy-yellow",
  },
];

export function Subscriptions() {
  return (
    <section id="subscribe" className="relative py-24">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Subscribe</p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A taste of Scandinavia, every month
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Pause, swap, or cancel any time. Always free shipping on subscription boxes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-3xl p-8 shadow-card transition hover:-translate-y-1 ${
                p.featured ? "text-foreground" : "bg-card"
              }`}
            >
              <div className={`absolute inset-0 -z-10 ${p.bg} ${p.featured ? "opacity-100" : "opacity-60"}`} />
              {p.featured && (
                <span className="mb-4 inline-block rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-foreground/70">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold">€{p.price}</span>
                <span className="text-sm text-foreground/70">/ month</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-white/70">
                      <Check className="h-3 w-3" />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-full py-3.5 text-sm font-semibold transition hover:scale-[1.02] ${p.featured ? "bg-foreground text-background" : "bg-foreground/90 text-background"}`}>
                Start subscription
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
