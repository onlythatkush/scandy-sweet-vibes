import { useMemo, useState } from "react";
import { Check, Gift, Sparkles } from "lucide-react";

const sizes = [
  { id: "s", label: "Small", weight: "250g", price: 9.9 },
  { id: "m", label: "Medium", weight: "500g", price: 16.9 },
  { id: "l", label: "Large", weight: "1kg", price: 28.9 },
];

const candies = [
  { id: "bears", name: "Lingonberry Bears", emoji: "🐻", color: "bg-candy-pink" },
  { id: "sour", name: "Sour Worms", emoji: "🪱", color: "bg-candy-yellow" },
  { id: "marsh", name: "Marshmallows", emoji: "☁️", color: "bg-candy-blue" },
  { id: "choco", name: "Chocolate Hearts", emoji: "💗", color: "bg-candy-bubblegum" },
  { id: "lic", name: "Salty Licorice", emoji: "🖤", color: "bg-candy-mint" },
  { id: "lolli", name: "Mini Lollipops", emoji: "🍭", color: "bg-candy-pink" },
  { id: "fizz", name: "Fizzy Cola", emoji: "🥤", color: "bg-candy-yellow" },
  { id: "cara", name: "Sea Salt Caramel", emoji: "🍮", color: "bg-candy-beige" },
];

export function BuildYourMix() {
  const [size, setSize] = useState("m");
  const [picked, setPicked] = useState<string[]>(["bears", "sour", "choco"]);
  const [message, setMessage] = useState("");

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const price = useMemo(() => {
    const base = sizes.find((s) => s.id === size)!.price;
    return (base + picked.length * 0.5).toFixed(2);
  }, [size, picked]);

  return (
    <section id="mix" className="relative py-24">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-[120%] -translate-y-1/2 bg-gradient-mint opacity-30 blur-3xl" />
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Build your own</p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Your dream pick &amp; mix, in three sweet steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass rounded-[2rem] p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">1</span>
              Choose box size
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSize(s.id)}
                  className={`relative rounded-2xl border-2 p-4 text-left transition ${
                    size === s.id ? "border-primary bg-card shadow-soft" : "border-border bg-card/50 hover:border-foreground/20"
                  }`}
                >
                  <div className="font-display text-lg font-semibold">{s.label}</div>
                  <div className="text-sm text-muted-foreground">{s.weight}</div>
                  <div className="mt-2 text-base font-semibold">€{s.price.toFixed(2)}</div>
                  {size === s.id && (
                    <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">2</span>
              Pick your favorites
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {candies.map((c) => {
                const active = picked.includes(c.id);
                return (
                  <button
                    key={c.id}
                    onClick={() => toggle(c.id)}
                    className={`group relative flex flex-col items-center gap-2 rounded-2xl p-4 transition ${
                      active ? "ring-2 ring-primary" : "ring-1 ring-border hover:ring-foreground/20"
                    } ${c.color}`}
                  >
                    <span className="text-3xl transition group-hover:scale-110">{c.emoji}</span>
                    <span className="text-xs font-semibold text-foreground/80">{c.name}</span>
                    {active && (
                      <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">3</span>
              Add a gift message
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-2xl border bg-card px-4 py-3">
              <Gift className="h-4 w-4 text-primary" />
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hej! A little Nordic sweetness for you 🇸🇪"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <aside className="glass flex flex-col justify-between rounded-[2rem] p-6 shadow-card sm:p-8">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" /> Your mix
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold">
                {sizes.find((s) => s.id === size)!.label} box · {picked.length} picks
              </h3>

              <ul className="mt-6 space-y-2">
                {picked.length === 0 && (
                  <li className="text-sm text-muted-foreground">Add candies on the left to begin.</li>
                )}
                {picked.map((id) => {
                  const c = candies.find((x) => x.id === id)!;
                  return (
                    <li key={id} className="flex items-center justify-between rounded-xl bg-card px-3 py-2 text-sm">
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{c.emoji}</span>
                        {c.name}
                      </span>
                      <span className="text-muted-foreground">+€0.50</span>
                    </li>
                  );
                })}
              </ul>

              {message && (
                <div className="mt-4 rounded-xl bg-candy-yellow/60 p-3 text-sm">
                  <div className="text-xs font-semibold text-foreground/70">Gift note</div>
                  <p className="text-foreground">"{message}"</p>
                </div>
              )}
            </div>

            <div className="mt-8">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-display text-3xl font-semibold">€{price}</span>
              </div>
              <button className="mt-4 w-full rounded-full bg-foreground py-4 text-sm font-semibold text-background shadow-glow transition hover:scale-[1.02]">
                Add mix to cart
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">Free shipping over €35 · Stripe secure checkout</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
