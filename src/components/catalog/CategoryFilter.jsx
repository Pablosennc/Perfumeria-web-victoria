import { CATEGORIES } from "../../data/products.js";

export default function CategoryFilter({ active, onChange, resultCount }) {
  return (
    <section
      id="catalogo"
      className="max-w-6xl mx-auto px-6 md:px-10 mt-16 mb-7 flex items-center justify-between gap-6 flex-wrap"
    >
      <div className="flex gap-2.5 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className={`px-5 py-2 rounded-full text-sm border transition-colors ${
              active === cat.value
                ? "bg-brand-gold border-brand-gold text-brand-black font-bold"
                : "border-brand-borderLight text-brand-inkMuted hover:border-brand-gold hover:text-brand-goldDark"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <span className="text-sm text-brand-inkMuted">
        {resultCount} fragancia{resultCount === 1 ? "" : "s"}
      </span>
    </section>
  );
}
