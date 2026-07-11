import { useRef } from "react";
import ProductImage from "../catalog/ProductImage.jsx";
import StarRating from "../catalog/StarRating.jsx";
import { formatCLP } from "../../utils/formatCurrency.js";
import { PRODUCTS } from "../../data/products.js";

const FEATURED = PRODUCTS.filter((p) => p.featured);

export default function FeaturedCarousel({ onAdd }) {
  const trackRef = useRef(null);

  function scrollByCard(direction) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth + 20 : 260;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  if (FEATURED.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-2">
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-brand-goldDark font-bold mb-1.5">
            Selección de la casa
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-brand-ink">Los favoritos</h2>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Anterior"
            className="w-9 h-9 rounded-full border border-brand-borderLight text-brand-ink hover:border-brand-gold hover:text-brand-goldDark flex items-center justify-center transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Siguiente"
            className="w-9 h-9 rounded-full border border-brand-borderLight text-brand-ink hover:border-brand-gold hover:text-brand-goldDark flex items-center justify-center transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-pl-1 pb-3 -mx-6 px-6 md:mx-0 md:px-0"
        style={{ scrollbarWidth: "none" }}
      >
        {FEATURED.map((product) => (
          <div
            key={product.id}
            data-card
            className="snap-start shrink-0 w-[230px] md:w-[250px] bg-brand-paper border border-brand-borderLight rounded-2xl p-4 hover:border-brand-gold hover:shadow-lg hover:shadow-black/5 transition-all"
          >
            <div className="h-32 flex items-center justify-center mb-3 bg-white">
              <ProductImage product={product} size={90} />
            </div>
            <p className="text-[10px] tracking-[0.16em] uppercase text-brand-goldDark font-bold mb-1">
              {product.category === "arabe" ? "Perfumería árabe" : "Diseñador"}
            </p>
            <h3 className="font-display text-lg text-brand-ink mb-1 truncate">{product.name}</h3>
            <div className="mb-2.5">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} size={11} />
            </div>
            <div className="flex items-center justify-between">
              <span className="font-display text-base text-brand-goldDark font-bold">
                {formatCLP(product.price)}
              </span>
              <button
                onClick={() => onAdd(product.id)}
                className="w-8 h-8 rounded-full border border-brand-gold text-brand-goldDark hover:bg-brand-gold hover:text-brand-black flex items-center justify-center text-lg leading-none transition-colors"
                aria-label={`Añadir ${product.name}`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
