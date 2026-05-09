import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2, ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Contact";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

export const Route = createFileRoute("/product/$handle")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.handle} — ScandyCandy` },
      { name: "description", content: "Premium Nordic candy from ScandyCandy." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [variantIdx, setVariantIdx] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isAdding = useCartStore((s) => s.isLoading);

  useEffect(() => {
    fetchProductByHandle(handle)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [handle]);

  const handleAdd = async () => {
    if (!product) return;
    const variant = product.variants.edges[variantIdx]?.node;
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions ?? [],
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto w-[min(1200px,94%)] py-12">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : !product ? (
          <p className="py-20 text-center text-muted-foreground">Product not found.</p>
        ) : (
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="aspect-square overflow-hidden rounded-3xl bg-secondary/40">
              {product.images.edges[0]?.node ? (
                <img
                  src={product.images.edges[0].node.url}
                  alt={product.images.edges[0].node.altText ?? product.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grid h-full w-full place-items-center text-7xl">🍬</div>
              )}
            </div>
            <div>
              <h1 className="font-display text-4xl font-semibold sm:text-5xl">{product.title}</h1>
              <p className="mt-4 text-2xl">
                {product.priceRange.minVariantPrice.currencyCode}{" "}
                {parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
              </p>
              <p className="mt-6 whitespace-pre-line text-muted-foreground">{product.description}</p>

              {product.variants.edges.length > 1 && (
                <div className="mt-6">
                  <p className="mb-2 text-sm font-medium">Variant</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.edges.map((v: any, i: number) => (
                      <button
                        key={v.node.id}
                        onClick={() => setVariantIdx(i)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          i === variantIdx
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {v.node.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button onClick={handleAdd} disabled={isAdding} size="lg" className="mt-8 w-full sm:w-auto">
                {isAdding ? <Loader2 className="h-4 w-4 animate-spin" /> : "Add to cart"}
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
