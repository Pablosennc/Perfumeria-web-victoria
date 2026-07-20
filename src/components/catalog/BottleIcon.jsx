import { FAMILY_GRADIENTS } from "../../data/products.js";

/**
 * Ilustración vectorial de una botella de perfume, coloreada según
 * la familia olfativa del producto. No depende de imágenes externas,
 * por lo que no hay riesgo de derechos de autor sobre fotografías.
 */
export default function BottleIcon({ family, uid, size = 100 }) {
  const [c1, c2] = FAMILY_GRADIENTS[family] || FAMILY_GRADIENTS.amber;
  const gradientId = `bottle-gradient-${uid}`;

  return (
    <svg viewBox="0 0 100 130" width={size} height={size * 1.3} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect x="40" y="6" width="20" height="14" rx="3" fill="#cbd5e1" opacity="0.9" />
      <rect x="44" y="0" width="12" height="8" rx="2" fill="#94a3b8" />
      <path
        d="M32 26 Q30 22 40 20 L60 20 Q70 22 68 26 L72 110 Q72 122 60 124 L40 124 Q28 122 28 110 Z"
        fill={`url(#${gradientId})`}
        stroke="rgba(15,23,42,0.2)"
        strokeWidth="1"
      />
      <rect x="34" y="55" width="32" height="26" rx="2" fill="rgba(15,23,42,0.35)" />
      <line x1="40" y1="62" x2="60" y2="62" stroke="#ffffff" strokeWidth="0.6" opacity="0.7" />
      <line x1="40" y1="68" x2="56" y2="68" stroke="#ffffff" strokeWidth="0.6" opacity="0.5" />
      <rect x="30" y="26" width="6" height="90" rx="3" fill="#ffffff" opacity="0.18" />
    </svg>
  );
}
