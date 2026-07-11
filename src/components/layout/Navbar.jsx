import logo from "../../assets/logo.png";

export default function Navbar({ totalItems, onCartClick }) {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-10 py-4 text-brand-ivory bg-brand-black/90 backdrop-blur-md border-b border-brand-line">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Julio Joyas" className="w-10 h-10 rounded-full" />
        <div className="font-display text-xl tracking-wide leading-none">
          JULIO <span className="text-brand-gold">JOYAS</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted tracking-wide">
        <a href="#catalogo" className="hover:text-brand-goldLight transition-colors">
          Catálogo
        </a>
        <a
          href="https://www.instagram.com/julio.joyas/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-brand-goldLight transition-colors"
        >
          Instagram
        </a>
      </div>

      <button
        onClick={onCartClick}
        className="relative flex items-center gap-2 border border-brand-line rounded-full px-4 py-2 text-sm hover:border-brand-gold hover:bg-brand-gold/10 transition-colors"
      >
        Carrito
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-gold text-brand-black text-[11px] font-extrabold flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </nav>
  );
}
