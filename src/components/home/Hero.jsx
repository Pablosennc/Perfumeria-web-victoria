import { SITE } from "../../config/site.js";

export default function Hero() {
  const hasImage = Boolean(SITE.heroImage);

  const backgroundStyle = hasImage
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.55), rgba(10,10,10,0.75)), url(${SITE.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <header
      style={backgroundStyle}
      className={`relative px-6 md:px-10 pt-20 md:pt-28 pb-20 text-center text-brand-ivory ${
        hasImage ? "" : "bg-[radial-gradient(ellipse_at_50%_-10%,#1c1815_0%,#0a0a0a_60%)]"
      }`}
    >
      <p className="text-[11px] tracking-[0.28em] uppercase text-brand-gold font-bold mb-4">
        Perfumería de autor
      </p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto mb-5 animate-fade-up">
        Esencias que viajan de <em className="italic text-brand-goldLight">Oriente</em> al
        armario del diseñador
      </h1>
      <p className="max-w-md mx-auto text-brand-muted text-base leading-relaxed mb-9">
        Una selección curada de fragancias árabes originales y firmas de diseñador, con
        precios de mercado y disponibilidad inmediata.
      </p>
      <a
        href="#catalogo"
        className="inline-flex items-center gap-2 bg-gold-gradient text-brand-black px-8 py-3.5 rounded-full text-xs font-extrabold tracking-wide uppercase hover:-translate-y-0.5 transition-transform shadow-lg shadow-brand-gold/10"
      >
        Ver catálogo
      </a>
    </header>
  );
}
