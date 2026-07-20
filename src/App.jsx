import { useMemo, useState } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import HeroCarousel from "./components/home/HeroCarousel.jsx";
import CategoryFilter from "./components/catalog/CategoryFilter.jsx";
import ProductGrid from "./components/catalog/ProductGrid.jsx";
import CartDrawer from "./components/cart/CartDrawer.jsx";
import { useCart } from "./hooks/useCart.js";
import { PRODUCTS } from "./data/products.js";

export default function App() {
  const [category, setCategory] = useState("todos");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useCart();

  const filteredProducts = useMemo(() => {
    if (category === "todos") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar totalItems={cart.totalItems} onCartClick={() => setIsCartOpen(true)} />
      <HeroCarousel onAdd={cart.addItem} />

      <CategoryFilter
        active={category}
        onChange={setCategory}
        resultCount={filteredProducts.length}
      />
      <ProductGrid products={filteredProducts} onAdd={cart.addItem} />
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} />
    </div>
  );
}
