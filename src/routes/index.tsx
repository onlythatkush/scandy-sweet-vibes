import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { BuildYourMix } from "@/components/site/BuildYourMix";
import { Subscriptions } from "@/components/site/Subscriptions";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { Contact, Footer } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScandyCandy — Scandinavian Candy Delivered To Your Door" },
      { name: "description", content: "Premium Nordic sweets, gummies, chocolates, salty licorice, and pick & mix candy boxes. Build your own mix or subscribe for a monthly Scandinavian candy drop." },
      { property: "og:title", content: "ScandyCandy — Scandinavian Candy Delivered" },
      { property: "og:description", content: "Premium Nordic candy, pick & mix boxes, and monthly subscriptions." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <BuildYourMix />
        <Subscriptions />
        <About />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
