/**
 * Muestra una calificación de 0 a 5 como estrellas (soporta medias estrellas)
 * más la cifra y, opcionalmente, la cantidad de reseñas.
 *
 * @param {boolean} onDark - true cuando se usa sobre un fondo oscuro (ej. el
 *   carrusel del hero), para que el texto y el contorno mantengan contraste.
 */
export default function StarRating({ rating, reviewCount, size = 13, onDark = false }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;
    return fillPercent;
  });

  const outlineClass = "text-ink/25";
  const countClass = "text-ink/70";

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5" style={{ width: size * 5 }}>
        {stars.map((fillPercent, i) => (
          <div key={i} className="relative" style={{ width: size, height: size }}>
            <StarOutline size={size} className={`absolute inset-0 ${outlineClass}`} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
              <StarOutline size={size} filled className="text-accent" />
            </div>
          </div>
        ))}
      </div>
      <span className={`text-[11px] ${countClass}`}>
        {rating.toFixed(1)}
        {typeof reviewCount === "number" && ` (${reviewCount})`}
      </span>
    </div>
  );
}

function StarOutline({ size, filled = false, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path
        strokeLinejoin="round"
        d="M12 2.5l2.9 6.05 6.6.85-4.85 4.6 1.25 6.6L12 17.6l-5.9 3-1.25-6.6-4.85-4.6 6.6-.85z"
      />
    </svg>
  );
}
