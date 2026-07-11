import { useEffect, useRef, useState } from "react";
import ProductImage from "../catalog/ProductImage.jsx";
import StarRating from "../catalog/StarRating.jsx";
import { formatCLP } from "../../utils/formatCurrency.js";
import { FEATURED_PRODUCTS } from "../../data/products.js";

const AUTOPLAY_MS = 5000;

export default function HeroCarousel({ onAdd }) {
  const [index, setIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startTimer() {
    stopTimer();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % FEATURED_PRODUCTS.length);
    }, AUTOPLAY_MS);
  }

  function stopTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
  }

  function goTo(i) {
    setIndex(i);
    startTimer();
  }

  function handleAdd(productId) {
    onAdd(productId);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  }

  if (FEATURED_PRODUCTS.length === 0) return null;

  return (
    <header
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      className="relative overflow-hidden px-6 md:px-10 pt-14 pb-14 md:pt-16 md:pb-16 bg-[radial-gradient(ellipse_at_50%_-10%,#1c1815_0%,#0a0a0a_60%)]"
    >
      <p className="text-center text-[11px] tracking-[0.28em] uppercase text-brand-gold font-bold mb-8 md:mb-10">
        Favoritos de la casa
      </p>

      <div className="relative max-w-5xl mx-auto min-h-[360px] md:min-h-[300px]">
        {FEATURED_PRODUCTS.map((product, i) => (
          <div
            key={product.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center transition-all duration-700 ease-out ${
              i === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            {/* Vitrina de la foto, con un resplandor dorado detrás para que no se vea plana */}
            <div className="relative order-1 md:order-2 flex items-center justify-center">
              <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-brand-gold/15 blur-3xl" />
              <div className="relative w-full max-w-[280px] aspect-square bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-black/40">
                <ProductImage product={product} size={170} />
              </div>
            </div>

            {/* Info del producto + acción de compra directa */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold mb-2">
                {product.category === "arabe" ? "Perfumería árabe" : "Diseñador"}
              </p>
              <h1 className="font-display text-3xl md:text-5xl leading-tight text-brand-ivory mb-2">
                {product.name}
              </h1>
              <p className="text-brand-muted text-sm mb-3">{product.brand}</p>
              <div className="flex justify-center md:justify-start mb-4">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size={14} />
              </div>
              <p className="text-brand-muted text-sm leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
                {product.note}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="font-display text-2xl text-brand-goldLight font-bold">
                  {formatCLP(product.price)}
                </span>
                <button
                  onClick={() => handleAdd(product.id)}
                  className="inline-flex items-center gap-2 bg-gold-gradient text-brand-black px-6 py-3 rounded-full text-xs font-extrabold tracking-wide uppercase hover:-translate-y-0.5 transition-transform shadow-lg shadow-brand-gold/10"
                >
                  {justAdded && i === index ? "Añadido ✓" : "Añadir al carrito"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {FEATURED_PRODUCTS.length > 1 && (
        <div className="relative flex items-center justify-center gap-2 mt-8">
          {FEATURED_PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ver producto destacado ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-brand-gold" : "w-1.5 bg-brand-ivory/25 hover:bg-brand-ivory/50"
              }`}
            />
          ))}
        </div>
      )}
    </header>
  );
}
