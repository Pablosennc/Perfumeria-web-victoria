/**
 * Divisor ornamental en forma de rama de laurel, mirando al motivo del
 * logo de Julio Joyas. Es el elemento de marca que hace que la página
 * no se sienta como una plantilla genérica: aparece en el punto exacto
 * donde el hero oscuro se encuentra con el catálogo claro, como un
 * pequeño sello.
 */
export default function LaurelDivider({ className = "" }) {
  return (
    <div className={`flex justify-center text-brand-gold ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 240 40"
        className="w-52 md:w-60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <defs>
          <g id="jj-laurel-branch">
            <path d="M6,20 Q55,4 108,19" />
            <ellipse cx="24" cy="17" rx="5" ry="2.2" transform="rotate(-15 24 17)" fill="currentColor" stroke="none" opacity="0.85" />
            <ellipse cx="42" cy="12" rx="5" ry="2.2" transform="rotate(-30 42 12)" fill="currentColor" stroke="none" opacity="0.85" />
            <ellipse cx="62" cy="8" rx="5" ry="2.2" transform="rotate(-45 62 8)" fill="currentColor" stroke="none" opacity="0.85" />
            <ellipse cx="83" cy="9" rx="5" ry="2" transform="rotate(-60 83 9)" fill="currentColor" stroke="none" opacity="0.8" />
            <ellipse cx="100" cy="15" rx="4.5" ry="1.8" transform="rotate(-75 100 15)" fill="currentColor" stroke="none" opacity="0.75" />
          </g>
        </defs>
        <use href="#jj-laurel-branch" />
        <use href="#jj-laurel-branch" transform="translate(240,0) scale(-1,1)" />
        <circle cx="120" cy="20" r="2.6" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}
