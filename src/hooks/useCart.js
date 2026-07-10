import { useMemo, useState } from "react";
import { PRODUCTS } from "../data/products.js";

/**
 * Encapsula el estado y las operaciones del carrito de compras.
 * Mantenerlo separado de los componentes permite testearlo sin
 * renderizar UI, y reutilizarlo si el carrito se necesita en otra
 * pantalla (ej. un checkout dedicado).
 */
export function useCart() {
  /** @type {[Record<number, number>, Function]} mapa productId -> cantidad */
  const [quantities, setQuantities] = useState({});

  const items = useMemo(() => {
    return Object.entries(quantities)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => {
        const product = PRODUCTS.find((p) => p.id === Number(id));
        return { product, qty, lineTotal: product.price * qty };
      });
  }, [quantities]);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.qty, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.lineTotal, 0),
    [items]
  );

  function addItem(productId) {
    setQuantities((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  }

  function increment(productId) {
    setQuantities((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  }

  function decrement(productId) {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) - 1),
    }));
  }

  function removeItem(productId) {
    setQuantities((prev) => ({ ...prev, [productId]: 0 }));
  }

  return { items, totalItems, subtotal, addItem, increment, decrement, removeItem };
}
