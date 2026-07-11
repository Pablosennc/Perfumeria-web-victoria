import { CATEGORIES } from "../../data/products.js";

export default function CategoryFilter({ active, onChange, resultCount }) {
  return (
    <section id="catalogo" className="max-w-6xl mx-auto px-6 md:px-10 mt-16 mb-7">
      {/* Búsqueda y filtros avanzados: preview visual, aún no funcional a propósito. */}
      <div className="flex items-center gap-3 flex-wrap mb-5">
        <div className="relative flex-1 min-w-[220px]">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-inkMuted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            disabled
            placeholder="Buscar por nombre o marca..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-brand-borderLight bg-brand-cream text-sm text-brand-inkMuted placeholder:text-brand-inkMuted/70 cursor-not-allowed"
          />
        </div>
        <button
          disabled
          className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-brand-borderLight bg-brand-cream text-sm text-brand-inkMuted cursor-not-allowed whitespace-nowrap"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="10" y1="18" x2="14" y2="18" />
          </svg>
          Filtrar
          <span className="text-[9px] tracking-wide uppercase bg-brand-gold/15 text-brand-goldDark px-2 py-0.5 rounded-full font-bold">
            Próximamente
          </span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-6 flex-wrap">
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
      </div>
    </section>
  );
}
