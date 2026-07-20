import { CATEGORIES } from "../../data/products.js";

export default function CategoryFilter({ active, onChange, resultCount }) {
  return (
    <section id="catalogo" className="max-w-6xl mx-auto px-6 md:px-10 mt-2xl mb-lg">
      {/* Búsqueda: preview visual, aún no funcional a propósito para el MVP de mañana. */}
      <div className="relative mb-md">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40"
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
          className="w-full pl-10 pr-4 py-3 rounded-btn border border-[#E2E8F0] bg-muted text-sm text-ink/50 placeholder:text-ink/40 cursor-not-allowed"
        />
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex gap-sm flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onChange(cat.value)}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                active === cat.value
                  ? "bg-primary border-primary text-onPrimary font-semibold shadow-sm"
                  : "border-line text-ink/70 hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filtro avanzado: deshabilitado a propósito para el MVP de mañana. */}
        <div className="flex items-center gap-md">
          <button
            disabled
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-muted text-sm text-ink/40 cursor-not-allowed whitespace-nowrap"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="10" y1="18" x2="14" y2="18" />
            </svg>
            Filtrar
            <span className="text-[9px] tracking-wide uppercase bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-bold">
              Próximamente
            </span>
          </button>
          <span className="text-sm text-ink/60 whitespace-nowrap">
            {resultCount} fragancia{resultCount === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </section>
  );
}
