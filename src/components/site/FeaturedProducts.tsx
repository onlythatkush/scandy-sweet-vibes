import { Heart, Plus } from "lucide-react";
import candy1 from "@/assets/candy-1.png";
import candy2 from "@/assets/candy-2.png";
import candy3 from "@/assets/candy-3.png";
import candy4 from "@/assets/candy-4.png";

const products = [
  { name: "Lingonberry Bears", tag: "Swedish Gummies", price: "€8.50", img: candy1, bg: "bg-candy-pink", emoji: "🐻" },
  { name: "Sour Rainbow Pop", tag: "Sour Candy", price: "€4.20", img: candy2, bg: "bg-candy-yellow", emoji: "🌈" },
  { name: "Arctic Marshmallow", tag: "Marshmallow", price: "€6.90", img: candy3, bg: "bg-candy-blue", emoji: "❄️" },
  { name: "Cocoa Heart Drops", tag: "Chocolate", price: "€11.00", img: candy4, bg: "bg-candy-bubblegum", emoji: "💗" },
  { name: "Salty Licorice", tag: "Licorice", price: "€7.40", img: candy1, bg: "bg-candy-mint", emoji: "🖤" },
  { name: "Pick & Mix Box", tag: "Build Your Own", price: "€19.90", img: candy2, bg: "bg-candy-pink", emoji: "🎁" },
];

export function FeaturedProducts() {
  return (
    <section id="shop" className="relative py-24">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Bestsellers</p>
            <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Sweetness from across the Nordics
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Hand-picked, tested by candy nerds, packed with love — and a tiny bit of obsession.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl bg-card p-6 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`relative grid h-56 place-items-center overflow-hidden rounded-2xl ${p.bg}`}>
                <img
                  src={p.img}
                  alt={p.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-40 w-40 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-xl"
                />
                <button
                  aria-label="Add to wishlist"
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/70 backdrop-blur transition hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </button>
                <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {p.emoji} {p.tag}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.price}</p>
                </div>
                <button className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background transition hover:scale-110">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
