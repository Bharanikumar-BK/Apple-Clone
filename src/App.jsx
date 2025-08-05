import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductGrid from "./Components/ProductGrid";
import PromoSection from "./Components/PromoSection";
import Footer from "./Components/Footer";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroData = {
    title: "iPhone 15 Pro",
    subtitle: "Titanium. So strong. So light. So Pro.",
    bgImage:
      "https://www.apple.com/v/home/be/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_large.jpg",
    dark: true,
  };

  const products = [
    {
      id: 1,
      title: 'MacBook Air 15"',
      description: "Impressively big. Impossibly thin.",
      price: 1299,
      image:
        "https://www.apple.com/v/home/be/images/heroes/macbook-air-15/hero_macbook_air_15__bpn92fv0fkl6_large.jpg",
    },
    {
      id: 2,
      title: "iPad Pro",
      description: "Supercharged by M2",
      price: 799,
      image:
        "https://www.apple.com/v/home/be/images/heroes/ipad-pro/hero_ipadpro__gl982dtudj6q_large.jpg",
    },
    {
      id: 3,
      title: "Apple Watch Series 9",
      description: "Smarter. Brighter. Mightier.",
      price: 399,
      image:
        "https://www.apple.com/v/home/be/images/heroes/apple-watch-series-9/hero_apple_watch_series_9__fq8fm61mngm2_large.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="flex-grow">
        <Hero {...heroData} />
        <ProductGrid products={products} />
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
