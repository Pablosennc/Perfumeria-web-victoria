import { useState } from "react";
import BottleIcon from "./BottleIcon.jsx";

/**
 * Muestra la imagen real del producto (product.image).
 * Si no hay imagen definida, o si la URL falla al cargar, cae de vuelta
 * al ícono SVG de respaldo coloreado por familia olfativa — así el
 * catálogo nunca muestra una imagen rota mientras se van completando
 * las fotos reales en products.js.
 */
export default function ProductImage({ product, size = 100, className = "" }) {
  const [failed, setFailed] = useState(false);
  const hasImage = Boolean(product.image) && !failed;

  if (!hasImage) {
    return <BottleIcon family={product.family} uid={`fallback-${product.id}-${size}`} size={size} />;
  }

  return (
    <img
      src={product.image}
      alt={`${product.name} — ${product.brand}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-contain ${className}`}
      style={{ width: size, height: size * 1.3 }}
    />
  );
}
