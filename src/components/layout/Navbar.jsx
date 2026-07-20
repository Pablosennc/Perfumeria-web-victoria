export default function Navbar({ totalItems, onCartClick }) {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-10 py-4 text-ink bg-muted backdrop-blur-md border-b border-line shadow-sm">
      <div className="flex items-center gap-3">
        {/* Logo: coloca el archivo en public/images/logo.png */}
        <img src="src\assets\logo.png" alt="Julio Joyas" className="w-10 h-10 object-cover rounded-full" />
        <div className="font-display text-xl tracking-wide leading-none">
          JULIO <span className="text-accent">JOYAS</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-ink/70 tracking-wide">
        <a href="#catalogo" className="hover:text-primary transition-colors duration-200">
          Catálogo
        </a>
        <a
          href="https://www.instagram.com/julio.joyas/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-colors duration-200"
        >
          Instagram
        </a>
      </div>

      <button
        onClick={onCartClick}
        aria-label="Abrir carrito"
        className="cursor-pointer relative flex items-center gap-2 border border-line rounded-full px-4 py-2 text-sm hover:border-primary hover:bg-primary/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <CartIcon />
        <span className="hidden sm:inline">Carrito</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-onPrimary text-[11px] font-bold flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </nav>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
