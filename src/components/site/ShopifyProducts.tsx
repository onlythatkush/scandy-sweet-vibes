import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Loader2, Plus } from "lucide-react";
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
    <section id="shop" className="relative bg-background py-20">
      <div className="mx-auto w-[min(1300px,94%)]">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Shop</p>
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">Singles</h1>
          </div>
          <p className="hidden text-sm text-muted-foreground sm:block">
            {loading ? "Loading…" : `${products.length} product${products.length !== 1 ? "s" : ""}`}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card/50 py-20 text-center">
            <p className="text-lg font-medium">No products found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell the chat what candy you want to add — e.g. "Add Lingonberry Bears for 25 SEK".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => {
              const img = p.node.images.edges[0]?.node;
              const price = p.node.priceRange.minVariantPrice;
              const variant = p.node.variants.edges[0]?.node;
              const available = variant?.availableForSale ?? false;
              return (
                <article key={p.node.id} className="group flex flex-col">
                  <Link
                    to="/product/$handle"
                    params={{ handle: p.node.handle }}
                    className="relative block aspect-square overflow-hidden rounded-2xl bg-secondary/40"
                  >
                    {img ? (
                      <img
                        src={img.url}
                        alt={img.altText ?? p.node.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-4xl">🍬</div>
                    )}
                    {!available && (
                      <span className="absolute left-3 top-3 rounded-full bg-foreground/80 px-3 py-1 text-xs font-semibold text-background">
                        Sold out
                      </span>
                    )}
                  </Link>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        to="/product/$handle"
                        params={{ handle: p.node.handle }}
                        className="block truncate font-display text-base font-semibold hover:text-primary"
                      >
                        {p.node.title}
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleAdd(p)}
                      disabled={!available || isAdding}
                      className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-foreground text-background transition hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
                      aria-label={`Add ${p.node.title} to cart`}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
