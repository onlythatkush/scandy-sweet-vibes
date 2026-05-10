import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Loader2, ShoppingBag, Heart, Crown } from "lucide-react";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

export function ShopifyProducts() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isAdding = useCartStore((s) => s.isLoading);

  useEffect(() => {
    fetchProducts(48)
      .then((p) => setProducts(p))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions ?? [],
    });
  };

  return (
    <section id="shop" className="bg-background py-8">
      <div className="mx-auto w-full max-w-[1500px] px-6">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-candy-cyan" />
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-md border border-dashed border-border py-20 text-center">
            <p className="text-lg font-medium text-foreground">Inga produkter än</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {products.map((p) => {
              const img = p.node.images.edges[0]?.node;
              const price = p.node.priceRange.minVariantPrice;
              const variant = p.node.variants.edges[0]?.node;
              const available = variant?.availableForSale ?? false;
              return (
                <article key={p.node.id} className="group relative flex flex-col overflow-hidden rounded-md bg-card shadow-card transition hover:shadow-glow">
                  <Link
                    to="/product/$handle"
                    params={{ handle: p.node.handle }}
                    className="relative block aspect-square overflow-hidden bg-background p-4"
                  >
                    {img ? (
                      <img
                        src={img.url}
                        alt={img.altText ?? p.node.title}
                        loading="lazy"
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-5xl">🍬</div>
                    )}
                  </Link>

                  <button
                    aria-label="Lägg till i önskelista"
                    className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:text-candy-red"
                  >
                    <Heart className="h-5 w-5" />
                  </button>

                  <div className="flex flex-1 flex-col px-3 pb-3">
                    <Link
                      to="/product/$handle"
                      params={{ handle: p.node.handle }}
                      className="line-clamp-2 min-h-[2.5rem] text-sm font-bold text-candy-cyan hover:underline"
                    >
                      {p.node.title}
                    </Link>
                    <p className="mt-1 text-xs text-muted-foreground">Lösgodis</p>

                    <div className="mt-auto flex items-end justify-between pt-2">
                      <div>
                        <p className="text-lg font-bold text-candy-red leading-none">
                          {parseFloat(price.amount).toFixed(2).replace(".", ",")} kr
                        </p>
                        <div className="mt-1 flex gap-0.5">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <Crown key={i} className="h-3 w-3 text-candy-gold" fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => handleAdd(p)}
                        disabled={!available || isAdding}
                        aria-label={`Lägg ${p.node.title} i kundvagn`}
                        className="grid h-9 w-9 place-items-center rounded-full bg-candy-yellow text-foreground transition hover:scale-110 disabled:opacity-40"
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {!available && (
                    <span className="absolute left-3 top-3 rounded bg-candy-red px-2 py-1 text-[10px] font-bold uppercase text-primary-foreground">
                      Slut
                    </span>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
