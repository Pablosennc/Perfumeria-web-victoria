import { useState } from "react";
import ProductImage from "./ProductImage.jsx";
import { formatCLP } from "../../utils/formatCurrency.js";

export default function ProductCard({ product, onAdd }) {
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    onAdd(product.id);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  }

  return (
    <div className="group flex flex-col bg-gradient-to-b from-brand-panel2 to-brand-panel border border-brand-line rounded-2xl p-5 hover:-translate-y-1 hover:border-brand-gold hover:shadow-2xl hover:shadow-black/40 transition-all">
      <div className="h-40 flex items-center justify-center mb-3 group-hover:-rotate-3 group-hover:scale-105 transition-transform">
        <ProductImage product={product} size={100} />
      </div>

      <p className="text-[10px] tracking-[0.18em] uppercase text-brand-gold font-bold mb-1.5">
        {product.category === "arabe" ? "Perfumería árabe" : "Diseñador"}
      </p>
      <h3 className="font-display text-xl mb-0.5">{product.name}</h3>
      <p className="text-xs text-brand-muted mb-2.5">{product.brand}</p>
      <p className="text-[12.5px] text-brand-muted leading-relaxed mb-4 min-h-[38px]">
        {product.note}
      </p>

      <div className="mt-auto flex items-center justify-between gap-2">
        <span className="font-display text-lg text-brand-goldLight font-bold">
          {formatCLP(product.price)}
        </span>
        <button
          onClick={handleAdd}
          className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${
            justAdded
              ? "bg-brand-gold border-brand-gold text-brand-black"
              : "border-brand-gold text-brand-goldLight hover:bg-brand-gold hover:text-brand-black"
          }`}
        >
          {justAdded ? "Añadido ✓" : "Añadir"}
        </button>
      </div>
    </div>
  );
}
