import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, onAdd }) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pb-24 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} onAdd={onAdd} />
      ))}
    </section>
  );
}
