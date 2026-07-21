/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: { DEFAULT: '#05050A', 50: '#0a0a14', 100: '#0e0e1e', 200: '#12122a', 300: '#1a1a36', 400: '#222248', 500: '#2a2a5a' },
        royal: { DEFAULT: '#7c3aed', 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7c3aed', 800: '#6d28d9', 900: '#581c87' },
        gold: { DEFAULT: '#d4a574', 50: '#fefcf8', 100: '#fdf6ed', 200: '#f9e8d3', 300: '#f5d6a8', 400: '#e8b97a', 500: '#d4a574', 600: '#b8844f', 700: '#9a6838', 800: '#7d5028', 900: '#603c1e' },
        cream: { DEFAULT: '#f8f4f0', 50: '#fdfcfa', 100: '#faf6f0', 200: '#f5efe6', 300: '#ede3d4', 400: '#e0ceb8', 500: '#d0b89a' },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 5s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite alternate',
        'float-slow': 'float 8s ease-in-out infinite alternate',
        'cursor': 'cursor 0.7s step-end infinite',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-scale': 'fadeInScale 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite alternate',
        'mesh-shift': 'meshShift 15s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'border-glow': 'borderGlow 4s linear infinite',

      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-12px)' },
        },
        cursor: { '50%': { borderColor: 'transparent' } },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          from: { opacity: '0', transform: 'scale(0.85)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.25', transform: 'scale(1)', filter: 'blur(8px)' },
          '100%': { opacity: '0.5', transform: 'scale(1.03)', filter: 'blur(4px)' },
        },
        meshShift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(3%, -2%) scale(1.05)' },
          '66%': { transform: 'translate(-2%, 3%) scale(0.95)' },
          '100%': { transform: 'translate(1%, -1%) scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(124, 58, 237, 0.3)' },
          '50%': { borderColor: 'rgba(212, 165, 116, 0.3)' },
        },

      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #7c3aed, #d4a574)',
        'royal-gradient': 'linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #d8b4fe 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4a574 0%, #f5d6a8 50%, #e8b97a 100%)',
        'mesh-purple': 'radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(212,165,116,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(168,85,247,0.06) 0%, transparent 50%)',
        'mesh-gold': 'radial-gradient(ellipse at 30% 20%, rgba(212,165,116,0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(124,58,237,0.08) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(124, 58, 237, 0.15)',
        'glow-strong': '0 0 60px rgba(124, 58, 237, 0.25)',
        'glow-gold': '0 0 40px rgba(212, 165, 116, 0.15)',
        'card': '0 8px 40px rgba(0, 0, 0, 0.45)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.6)',
        'premium': '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
