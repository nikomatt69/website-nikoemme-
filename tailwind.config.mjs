/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Space Grotesk Variable",
          "Space Grotesk",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono Variable",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        terminal: {
          bg: "rgb(var(--terminal-bg) / <alpha-value>)",
          panel: "rgb(var(--terminal-panel) / <alpha-value>)",
          border: "rgb(var(--terminal-border) / <alpha-value>)",
          text: "rgb(var(--terminal-text) / <alpha-value>)",
          muted: "rgb(var(--terminal-muted) / <alpha-value>)",
          accent: "rgb(var(--terminal-accent) / <alpha-value>)",
          error: "rgb(var(--terminal-error) / <alpha-value>)",
          warning: "rgb(var(--terminal-warning) / <alpha-value>)",
          code: "rgb(var(--terminal-code) / <alpha-value>)",
          "window-bg": "rgb(var(--terminal-window-bg) / <alpha-value>)",
          "window-border": "rgb(var(--terminal-window-border) / <alpha-value>)",
          "window-text": "rgb(var(--terminal-window-text) / <alpha-value>)",
          "window-code": "rgb(var(--terminal-window-code) / <alpha-value>)",
        },
        surface: {
          hover: "var(--surface-hover)",
          active: "var(--surface-active)",
          strong: "var(--surface-strong)",
        },
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        strong: "var(--shadow-strong)",
        glow: "var(--shadow-glow)",
      },
      animation: {
        cursor: "cursor 1s step-end infinite",
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        cursor: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.terminal.text"),
            "--tw-prose-headings": theme("colors.terminal.text"),
            "--tw-prose-links": theme("colors.terminal.accent"),
            "--tw-prose-bold": theme("colors.terminal.text"),
            "--tw-prose-code": theme("colors.terminal.text"),
            "--tw-prose-pre-code": theme("colors.terminal.text"),
            "--tw-prose-pre-bg": theme("colors.terminal.code"),
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
