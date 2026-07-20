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
    <div className="group flex flex-col bg-muted border border-line rounded-card p-3.5 md:p-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <div className="h-28 md:h-40 flex items-center justify-center mb-3 bg-white border border-primary/20 rounded-lg">
        <ProductImage product={product} size={90} />
      </div>

      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[9px] md:text-[10px] tracking-[0.14em] md:tracking-[0.18em] uppercase text-primary font-bold">
          {product.category === "arabe" ? "Perfumería árabe" : "Diseñador"}
        </p>
        <span className="hidden sm:inline font-display text-[11px] text-ink/30 tracking-wide">
          Nº {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-display text-base md:text-xl text-ink mb-0.5 truncate">{product.name}</h3>
      <p className="text-[11px] md:text-xs text-ink/60 mb-2">{product.brand}</p>
      <div className="mb-2.5">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size={11} />
      </div>
      <p className="hidden md:block text-[12.5px] text-ink/60 leading-relaxed mb-4 min-h-[38px]">
        {product.note}
      </p>

      <div className="mt-auto flex items-center justify-between gap-2">
        <span className="font-display text-sm md:text-lg text-ink font-bold">
          {formatCLP(product.price)}
        </span>
        <button
          onClick={handleAdd}
          className={`cursor-pointer inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-btn text-[11px] md:text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
            justAdded
              ? "bg-primary text-onPrimary"
              : "bg-accent text-onPrimary hover:opacity-90 hover:-translate-y-px"
          }`}
        >
          {justAdded ? (
            <>
              <CheckIcon /> Añadido
            </>
          ) : (
            "Añadir"
          )}
        </button>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
