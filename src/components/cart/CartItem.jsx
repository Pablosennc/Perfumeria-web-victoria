import ProductImage from "../catalog/ProductImage.jsx";
import { formatCLP } from "../../utils/formatCurrency.js";

export default function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  const { product, qty, lineTotal } = item;

  return (
    <div className="flex gap-3.5 py-4 border-b border-brand-line">
      <div className="w-13 flex-shrink-0">
        <ProductImage product={product} size={52} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-base font-semibold mb-0.5">{product.name}</h4>
        <p className="text-[11.5px] text-brand-muted mb-2.5">{product.brand}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 border border-brand-line rounded-full px-1 py-0.5">
            <button
              onClick={() => onDecrement(product.id)}
              className="w-5.5 h-5.5 rounded-full bg-brand-panel hover:bg-brand-gold hover:text-brand-black text-sm flex items-center justify-center"
            >
              −
            </button>
            <span className="text-sm min-w-[14px] text-center">{qty}</span>
            <button
              onClick={() => onIncrement(product.id)}
              className="w-5.5 h-5.5 rounded-full bg-brand-panel hover:bg-brand-gold hover:text-brand-black text-sm flex items-center justify-center"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <div className="font-display text-sm text-brand-goldLight font-bold">
              {formatCLP(lineTotal)}
            </div>
            <button
              onClick={() => onRemove(product.id)}
              className="text-[11px] text-brand-muted underline hover:text-brand-goldLight"
            >
              Quitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
