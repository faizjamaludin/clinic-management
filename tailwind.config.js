/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        13: "repeat(13, minmax(0, 1fr))",
      },
      gridRow: {
        "span-13": "span 13 / span 13",
      },
      borderRadius: {
        "2xs": "4px",
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "12px",
        xl: "14px",
        "2xl": "16px",
      },
      padding: {
        none: "0px",
        "2xs": "4px",
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },
      gap: {
        none: "0px",
        "2xs": "4px",
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },
      colors: {
        text: {
          primary: "#333333",
          active: "#4f46e5",
          inactive: "#e5e7eb",
          caption: "#9ca3af",
        },
        bg: {
          primary: "#FFFFFF",
          secondary: "#f9fafb",
        },
        button: {
          primary: "#6366f1",
          secondary: "#e0e7ff",
          "text-primary": "#eef2ff",
          "text-secondary": "#6366f1",
        },
        alert: {
          "success-text": "#15803d",
          "error-text": "#b91c1c",
          "pending-text": "#b45309",
          "success-bg": "#dcfce7",
          "error-bg": "#fecaca",
          "pending-bg": "#fef3c7",
        },
        border: {
          primary: "#f3f4f6",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
