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
      className="relative overflow-hidden px-6 md:px-10 pt-3xl pb-3xl md:pt-3xl md:pb-3xl bg-gradient-to-b from-white to-muted"
    >
      {/* Resplandores de fondo suaves */}
      <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <p className="relative text-center text-[11px] tracking-[0.28em] uppercase text-accent font-bold mb-8 md:mb-2xl">
        Favoritos de la casa
      </p>

      <div className="relative max-w-5xl mx-auto min-h-[380px] md:min-h-[320px]">
        {FEATURED_PRODUCTS.map((product, i) => (
          <div
            key={product.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center transition-all duration-500 ease-out ${
              i === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            {/* Panel de vidrio esmerilado adaptado para Light Luxury */}
            <div className="relative order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full max-w-[280px] aspect-square bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="w-full h-full flex items-center justify-center bg-white rounded-[20px] m-2 shadow-sm">
                  <ProductImage product={product} size={170} />
                </div>
              </div>
            </div>

            {/* Info del producto + CTA */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-[10px] tracking-[0.2em] uppercase text-secondary font-bold mb-2">
                {product.category === "arabe" ? "Perfumería árabe" : "Diseñador"}
              </p>
              <h1 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-ink mb-2">
                {product.name}
              </h1>
              <p className="text-ink/60 text-sm mb-3">{product.brand}</p>
              <div className="flex justify-center md:justify-start mb-4">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size={14} />
              </div>
              <p className="text-ink/60 text-sm leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
                {product.note}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="font-display text-2xl text-ink font-bold">
                  {formatCLP(product.price)}
                </span>
                <button
                  onClick={() => handleAdd(product.id)}
                  className="cursor-pointer inline-flex items-center gap-2 bg-accent text-onPrimary px-6 py-3 rounded-btn text-xs font-semibold tracking-wide uppercase hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {justAdded && i === index ? (
                    <>
                      <CheckIcon /> Añadido
                    </>
                  ) : (
                    "Añadir al carrito"
                  )}
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
              className={`cursor-pointer h-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-ink/25 hover:bg-ink/50"
              }`}
            />
          ))}
        </div>
      )}
    </header>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}