import { Star } from "lucide-react";

const reviews = [
  {
    name: "Linnea S.",
    city: "Copenhagen",
    text: "The packaging is so cute it's basically décor. And the lingonberry bears? Dangerous. Already on box #3.",
    avatar: "https://i.pravatar.cc/120?img=47",
    color: "bg-candy-pink",
  },
  {
    name: "Mateo R.",
    city: "Berlin",
    text: "Subscription is the perfect monthly treat. My wife stole the whole box on day one. Sending it again.",
    avatar: "https://i.pravatar.cc/120?img=12",
    color: "bg-candy-blue",
  },
  {
    name: "Aïsha N.",
    city: "Paris",
    text: "Quality candy that doesn't taste like an airplane. Salty licorice converted me. Hej hej!",
    avatar: "https://i.pravatar.cc/120?img=32",
    color: "bg-candy-yellow",
  },
];

export function Reviews() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Loved by sweet tooths</p>
            <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              4.9 stars across 12,400+ reviews
            </h2>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="glass rounded-3xl p-6 shadow-card transition hover:-translate-y-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 font-display text-lg leading-snug">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className={`grid h-11 w-11 place-items-center overflow-hidden rounded-full ${r.color}`}>
                  <img src={r.avatar} alt={r.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.city}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
