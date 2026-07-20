import ProductImage from "../catalog/ProductImage.jsx";
import { formatCLP } from "../../utils/formatCurrency.js";

export default function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  const { product, qty, lineTotal } = item;

  return (
    <div className="flex gap-3.5 py-4 border-b border-line">
      <div className="w-14 flex-shrink-0 bg-muted rounded-md flex items-center justify-center">
        <ProductImage product={product} size={44} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-base font-semibold text-ink mb-0.5 truncate">{product.name}</h4>
        <p className="text-[11.5px] text-ink/50 mb-2.5">{product.brand}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 border border-line rounded-full px-1 py-0.5">
            <button
              onClick={() => onDecrement(product.id)}
              aria-label="Restar unidad"
              className="cursor-pointer w-6 h-6 rounded-full bg-muted text-ink hover:bg-primary hover:text-onPrimary flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <MinusIcon />
            </button>
            <span className="text-sm min-w-[14px] text-center text-ink">{qty}</span>
            <button
              onClick={() => onIncrement(product.id)}
              aria-label="Sumar unidad"
              className="cursor-pointer w-6 h-6 rounded-full bg-muted text-ink hover:bg-primary hover:text-onPrimary flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <PlusIcon />
            </button>
          </div>
          <div className="text-right">
            <div className="font-display text-lg text-ink font-bold leading-none">
              {formatCLP(lineTotal)}
            </div>
            <button
              onClick={() => onRemove(product.id)}
              className="cursor-pointer text-[11px] text-ink/50 underline hover:text-danger mt-1 inline-block transition-colors duration-200"
            >
              Quitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
