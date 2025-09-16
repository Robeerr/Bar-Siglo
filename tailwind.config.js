/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f8f8",            // Fondo general
        foreground: "#1f1f1f",            // Texto principal
        primary: "#d97706",                // Color principal (naranja/dorado)
        "primary-foreground": "#ffffff",   // Texto sobre primary
        card: "#ffffff",                   // Fondo de tarjetas
        "card-foreground": "#1f1f1f",      // Texto en tarjetas
        input: "#ffffff",                  // Fondo inputs
        border: "#e5e5e5",                 // Bordes generales
        ring: "#d97706",                   // Color de ring/focus
        muted: "#f3f4f6",                  // Fondos muted
        "muted-foreground": "#6b7280",     // Texto muted
        sidebar: "#111827",                // Fondo sidebar/footer
        "sidebar-border": "#1f2937",       // Bordes sidebar/footer
        "sidebar-primary": "#f59e0b",      // Color destacado en sidebar
        "sidebar-primary-foreground": "#ffffff" // Texto sobre sidebar-primary
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
}
