import { useState } from "react";
import CartItem from "./CartItem.jsx";
import { formatCLP } from "../../utils/formatCurrency.js";

export default function CartDrawer({ isOpen, onClose, cart }) {
  const { items, subtotal, increment, decrement, removeItem } = cart;
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  function handleCheckout() {
    setCheckoutMessage(true);
    setTimeout(() => setCheckoutMessage(false), 1600);
  }

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/55 z-50 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-[400px] max-w-[92vw] bg-brand-panel border-l border-brand-line z-[60] flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-brand-line">
          <h2 className="font-display text-2xl">Tu selección</h2>
          <button onClick={onClose} className="text-brand-muted hover:text-brand-gold text-2xl leading-none">
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-brand-muted gap-2 py-10">
              <span className="text-2xl opacity-50">✦</span>
              <p>Tu carrito está vacío.</p>
              <p className="text-xs">Explora el catálogo y añade tus fragancias favoritas.</p>
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onIncrement={increment}
                onDecrement={decrement}
                onRemove={removeItem}
              />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-brand-line">
            <div className="flex justify-between text-sm text-brand-muted mb-1.5">
              <span>Subtotal</span>
              <span>{formatCLP(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-brand-muted mb-4">
              <span>Envío</span>
              <span>Se calcula al confirmar</span>
            </div>
            <div className="flex justify-between font-display text-xl font-bold mb-5">
              <span>Total</span>
              <span>{formatCLP(subtotal)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-brand-gold hover:bg-brand-goldLight text-brand-black py-3.5 rounded-full text-xs font-extrabold tracking-wide uppercase transition-colors"
            >
              {checkoutMessage ? "Disponible en la versión final ✦" : "Continuar compra"}
            </button>
            <p className="text-[11px] text-brand-muted text-center mt-2.5 leading-relaxed">
              Este es un prototipo de demostración. El paso de pago se conecta en la versión
              final.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
