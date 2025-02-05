/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Montserrat"],
        },
        boxShadow: {
          outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
        },
        backgroundImage: {
          "gradient-to-r": "linear-gradient(to right, #10B981, #12CB8E)",
        },
        colors: {
          card: {
            light: "#F8FAFB",
            DEFAULT: "#F8FAFB",
            dark: "#F8FAFB",
          },
          'custom-gray': '#6b7280',
          'custom-blue': '#3b82f6',
          'custom-red': '#ef4444',
          'custom-green': '#22c55e',
          'custom-yellow': '#eab308',
          'custom-purple': '#a855f7',
          'custom-indigo': '#6366f1',
          'custom-pink': '#ec4899',
          'custom-teal': '#14b8a6',
          'custom-orange': '#f97316',
          'custom-cyan': '#06b6d4',
          'custom-lime': '#84cc16',
          'custom-rose': '#f43f5e',
          'custom-amber': '#f59e0b',
        },
      },
    },
    variants: {
      scale: ["responsive", "hover", "focus", "group-hover"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
      opacity: ["responsive", "hover", "focus", "group-hover"],
      backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    },
    plugins: [],
    safelist: [
      'text-custom-gray', 'bg-custom-gray', 'border-l-custom-gray',
      'text-custom-blue', 'bg-custom-blue', 'border-l-custom-blue',
      'text-custom-red', 'bg-custom-red', 'border-l-custom-red',
      'text-custom-green', 'bg-custom-green', 'border-l-custom-green',
      'text-custom-yellow', 'bg-custom-yellow', 'border-l-custom-yellow',
      'text-custom-purple', 'bg-custom-purple', 'border-l-custom-purple',
      'text-custom-indigo', 'bg-custom-indigo', 'border-l-custom-indigo',
      'text-custom-pink', 'bg-custom-pink', 'border-l-custom-pink',
      'text-custom-teal', 'bg-custom-teal', 'border-l-custom-teal',
      'text-custom-orange', 'bg-custom-orange', 'border-l-custom-orange',
      'text-custom-cyan', 'bg-custom-cyan', 'border-l-custom-cyan',
      'text-custom-lime', 'bg-custom-lime', 'border-l-custom-lime',
      'text-custom-rose', 'bg-custom-rose', 'border-l-custom-rose',
      'text-custom-amber', 'bg-custom-amber', 'border-l-custom-amber',
      'text-custom-emerald', 'bg-custom-emerald', 'border-l-custom-emerald',
    ],
  };