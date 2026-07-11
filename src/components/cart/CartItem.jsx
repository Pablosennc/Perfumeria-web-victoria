import ProductImage from "../catalog/ProductImage.jsx";
import { formatCLP } from "../../utils/formatCurrency.js";

export default function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  const { product, qty, lineTotal } = item;

  return (
    <div className="flex gap-3.5 py-4 border-b border-brand-borderLight">
      <div className="w-13 flex-shrink-0">
        <ProductImage product={product} size={52} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-base font-semibold text-brand-ink mb-0.5">{product.name}</h4>
        <p className="text-[11.5px] text-brand-inkMuted mb-2.5">{product.brand}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 border border-brand-borderLight rounded-full px-1 py-0.5">
            <button
              onClick={() => onDecrement(product.id)}
              className="w-5.5 h-5.5 rounded-full bg-brand-cream text-brand-ink hover:bg-brand-gold hover:text-brand-black text-sm flex items-center justify-center"
            >
              −
            </button>
            <span className="text-sm min-w-[14px] text-center text-brand-ink">{qty}</span>
            <button
              onClick={() => onIncrement(product.id)}
              className="w-5.5 h-5.5 rounded-full bg-brand-cream text-brand-ink hover:bg-brand-gold hover:text-brand-black text-sm flex items-center justify-center"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <div className="font-display text-sm text-brand-goldDark font-bold">
              {formatCLP(lineTotal)}
            </div>
            <button
              onClick={() => onRemove(product.id)}
              className="text-[11px] text-brand-inkMuted underline hover:text-brand-goldDark"
            >
              Quitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
