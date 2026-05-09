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
    <section id="shop" className="relative bg-background py-12">
      <div className="mx-auto w-[min(1300px,94%)]">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-primary/30 py-20 text-center">
            <p className="text-lg font-medium text-primary">No products found</p>
            <p className="mt-2 text-sm text-primary/70">
              Tell the chat what candy you want to add — e.g. "Add Lingonberry Bears for 25 SEK".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => {
              const img = p.node.images.edges[0]?.node;
              const price = p.node.priceRange.minVariantPrice;
              const variant = p.node.variants.edges[0]?.node;
              const available = variant?.availableForSale ?? false;
              return (
                <article key={p.node.id} className="group flex flex-col text-center">
                  <Link
                    to="/product/$handle"
                    params={{ handle: p.node.handle }}
                    className="relative block aspect-square overflow-hidden bg-background"
                  >
                    {img ? (
                      <img
                        src={img.url}
                        alt={img.altText ?? p.node.title}
                        loading="lazy"
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-4xl">🍬</div>
                    )}
                    {!available && (
                      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-md bg-candy-yellow px-3 py-1 text-xs font-semibold text-primary">
                        Sold out
                      </span>
                    )}
                  </Link>
                  <div className="mt-4 flex flex-col items-start gap-2">
                    <Link
                      to="/product/$handle"
                      params={{ handle: p.node.handle }}
                      className="text-sm font-medium text-primary hover:opacity-80"
                    >
                      {p.node.title}
                    </Link>
                    <p className="font-display text-2xl text-primary leading-none">
                      From {parseFloat(price.amount).toFixed(0)} {price.currencyCode}
                    </p>
                    <button
                      onClick={() => handleAdd(p)}
                      disabled={!available || isAdding}
                      className="sr-only"
                      aria-label={`Add ${p.node.title} to cart`}
                    >
                      <Plus className="h-3 w-3" /> Add
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
