import candy1 from "@/assets/candy-1.png";
import candy3 from "@/assets/candy-3.png";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid w-[min(1200px,92%)] items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-mint opacity-50 blur-3xl" />
          <div className="grid grid-cols-2 gap-4">
            <div className="glass aspect-[4/5] rounded-3xl bg-candy-pink p-6 shadow-card">
              <img src={candy1} alt="" width={300} height={300} loading="lazy" className="h-full w-full animate-float object-contain" />
            </div>
            <div className="mt-10 grid gap-4">
              <div className="glass aspect-square rounded-3xl bg-candy-blue p-5 shadow-card">
                <img src={candy3} alt="" width={300} height={300} loading="lazy" className="h-full w-full animate-float-delay object-contain" />
              </div>
              <div className="glass rounded-3xl bg-candy-yellow p-5 text-center shadow-card">
                <div className="font-display text-3xl font-semibold">12k+</div>
                <div className="text-xs text-foreground/70">happy candy fans</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Our story</p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Nordic candy culture, premium ingredients, zero compromise.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Started in a tiny Stockholm kitchen, ScandyCandy curates the best <em>godis</em> from Sweden, Denmark, Norway and Finland — from salty licorice and sour skulls to lingonberry gummies and sea-salt chocolate. We work with small Nordic producers who care about real flavor, real ingredients and a little bit of mischief.
          </p>
          <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            {[
              "Natural colors & flavors",
              "Vegan & gelatin-free options",
              "Recyclable packaging",
              "Shipped fresh from EU",
            ].map((f) => (
              <li key={f} className="glass flex items-center gap-2 rounded-2xl px-4 py-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-candy-mint">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
