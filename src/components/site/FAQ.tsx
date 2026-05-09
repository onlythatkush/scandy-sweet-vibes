import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  { q: "How fast is shipping?", a: "Orders ship within 24 hours from our Stockholm warehouse. EU delivery 2–4 business days, UK 3–5, US 5–7." },
  { q: "Are there allergen-friendly options?", a: "Yes — every product page lists allergens clearly. We carry vegan, gluten-free and gelatin-free candy, and you can filter by need." },
  { q: "Can I pause or cancel my subscription?", a: "Absolutely. Manage everything from your account: pause, skip a month, swap your box size, or cancel — no awkward emails." },
  { q: "Do you ship outside Europe?", a: "We ship worldwide. Customs and duties are calculated transparently at checkout for non-EU destinations." },
  { q: "How is the candy kept fresh?", a: "Resealable food-safe pouches inside a sturdy mailer. Each batch is dated and stored cool until it ships." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto grid w-[min(1100px,92%)] gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Sweet, simple answers
          </h2>
          <p className="mt-4 text-muted-foreground">Can't find what you need? Slide into our DMs — we reply fast.</p>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="glass overflow-hidden rounded-2xl shadow-soft">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold">{it.q}</span>
                  <Plus className={`h-5 w-5 transition ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted-foreground">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
