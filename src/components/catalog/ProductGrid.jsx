import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, onAdd }) {
  if (products.length === 0) {
    return (
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-3xl">
        <div className="flex flex-col items-center justify-center text-center py-3xl border border-dashed border-line rounded-card">
          <p className="text-ink font-display text-lg mb-1">No encontramos fragancias en esta categoría</p>
          <p className="text-ink/60 text-sm">Prueba con otra categoría del filtro de arriba.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pb-3xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-lg">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} onAdd={onAdd} />
      ))}
    </section>
  );
}
