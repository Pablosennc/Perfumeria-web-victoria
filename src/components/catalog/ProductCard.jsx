import { useState } from "react";
import ProductImage from "./ProductImage.jsx";
import StarRating from "./StarRating.jsx";
import { formatCLP } from "../../utils/formatCurrency.js";

export default function ProductCard({ product, index, onAdd }) {
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    onAdd(product.id);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  }

  return (
    <div className="group flex flex-col bg-brand-paper border border-brand-borderLight rounded-2xl p-3.5 md:p-5 hover:-translate-y-1 hover:border-brand-gold hover:shadow-xl hover:shadow-black/5 transition-all">
      <div className="h-28 md:h-40 flex items-center justify-center mb-3 bg-white group-hover:scale-105 transition-transform">
        <ProductImage product={product} size={90} />
      </div>

      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[9px] md:text-[10px] tracking-[0.14em] md:tracking-[0.18em] uppercase text-brand-goldDark font-bold">
          {product.category === "arabe" ? "Perfumería árabe" : "Diseñador"}
        </p>
        <span className="hidden sm:inline font-display text-[11px] text-brand-goldDark/50 tracking-wide">
          Nº {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-display text-base md:text-xl text-brand-ink mb-0.5 truncate">{product.name}</h3>
      <p className="text-[11px] md:text-xs text-brand-inkMuted mb-2">{product.brand}</p>
      <div className="mb-2.5">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size={11} />
      </div>
      <p className="hidden md:block text-[12.5px] text-brand-inkMuted leading-relaxed mb-4 min-h-[38px]">
        {product.note}
      </p>

      <div className="mt-auto flex items-center justify-between gap-2">
        <span className="font-display text-sm md:text-lg text-brand-goldDark font-bold">
          {formatCLP(product.price)}
        </span>
        <button
          onClick={handleAdd}
          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-bold border transition-colors whitespace-nowrap ${
            justAdded
              ? "bg-brand-gold border-brand-gold text-brand-black"
              : "border-brand-gold text-brand-goldDark hover:bg-brand-gold hover:text-brand-black"
          }`}
        >
          {justAdded ? "Añadido ✓" : "Añadir"}
        </button>
      </div>
    </div>
  );
}
