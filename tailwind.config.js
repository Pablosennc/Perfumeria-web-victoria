/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Mapeados 1:1 a las variables CSS definidas en src/index.css,
        // que a su vez vienen directo de la tabla "Color Palette" de MASTER.md
        primary: "var(--color-primary)",
        onPrimary: "var(--color-on-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        surface: "var(--color-background)",
        ink: "var(--color-foreground)",
        muted: "var(--color-muted)",
        line: "var(--color-border)",
        danger: "var(--color-destructive)",
        ring: "var(--color-ring)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      borderRadius: {
        btn: "8px",
        card: "12px",
        modal: "16px",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, var(--color-secondary), var(--color-accent))",
        "hero-radial": "radial-gradient(ellipse at 50% -10%, #1e293b 0%, #0F172A 60%)",
      },
    },
  },
  plugins: [],
};
