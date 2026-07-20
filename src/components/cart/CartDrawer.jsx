import { useState } from "react";
import CartItem from "./CartItem.jsx";
import { formatCLP } from "../../utils/formatCurrency.js";

export default function CartDrawer({ isOpen, onClose, cart }) {
  const { items, subtotal, increment, decrement, removeItem } = cart;
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  function handleCheckout() {
    setCheckoutMessage(true);
    setTimeout(() => setCheckoutMessage(false), 1800);
  }

  return (
    <>
      {/* .modal-overlay — rgba(0,0,0,0.5) + blur(4px), exacto según MASTER.md */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Carrito de compras"
        className={`fixed top-0 right-0 h-full w-[400px] max-w-[92vw] bg-surface text-ink shadow-xl z-[60] flex flex-col transition-transform duration-300 rounded-l-modal ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-line">
          <h2 className="font-display text-2xl text-ink">Tu selección</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="cursor-pointer text-ink/50 hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-ink/50 gap-3 py-10">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-secondary">
                <EmptyCartIcon />
              </div>
              <p className="text-ink">Tu carrito está vacío.</p>
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
          <div className="px-6 py-6 border-t border-line">
            <div className="flex justify-between text-sm text-ink/60 mb-1.5">
              <span>Subtotal</span>
              <span>{formatCLP(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-ink/60 mb-4">
              <span>Envío</span>
              <span>Se calcula al confirmar</span>
            </div>
            <div className="flex justify-between font-display text-xl font-bold text-ink mb-5">
              <span>Total</span>
              <span>{formatCLP(subtotal)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="cursor-pointer w-full bg-accent hover:opacity-90 text-white py-3.5 rounded-btn text-xs font-semibold tracking-wide uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {checkoutMessage ? "Disponible en la versión final" : "Continuar compra"}
            </button>
            <p className="text-[11px] text-ink/50 text-center mt-2.5 leading-relaxed">
              Este es un prototipo de demostración. El paso de pago se conecta en la versión
              final.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function EmptyCartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
