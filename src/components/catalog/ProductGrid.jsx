import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, onAdd }) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pb-24 grid grid-cols-[repeat(auto-fill,minmax(255px,1fr))] gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </section>
  );
}
