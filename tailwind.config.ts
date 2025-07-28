/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0, 0, 0.5, 1)',
      },
      colors: {
        // Core Neutrals (Black & White)
        'white': '#FFFFFF',
        'black': '#000000',

        'border': '#B3B3B3', // Assuming this is a neutral border color
        'inactive':'#808080',
        "skeleton":"#e7e7e7",

        // Primary Colors
        'primary-1': '#FFFFFF', // Assuming the first primary is the white #FFFFFF
        'primary-2': '#363738', // Assuming the second primary is #363738

        // Secondary Colors
        'secondary-1': '#F5F5F5', // Assuming the first secondary is #F5F5F5
        'secondary-2': '#FEFAF1', // Assuming the second secondary is #FEFAF1
        'secondary-3': '#DB4444', // Assuming the third secondary is #DB4444

        // Text Colors
        'text': '#7D8184',
        'text-1': '#FAFAFA', // All text colors seem to be the same #D37643 based on the image
        'text-2': '#D37643', // Duplicate for clarity, but same as text-1
        'text-3': '#AFAFAF', // Duplicate for clarity, but same as text-1
        'text-button-card': '#D37643', // Duplicate for clarity, but same as text-1

        // Other Colors / Button Colors
        'button-1': '#01e85d', //#00FF66
        'button-2': '#DB4444', // This matches secondary-3, good for consistency
        'hover-button-1': '#a0bce0',
        'hover-button-2': '#EB5757',

        // Background Color
        'bg-1': '#FFFFFF', // Background color, same as primary-1

        // Neutrals (Gray Scale)
        'neutral-50': '#F9FAFB',
        'neutral-100': '#F3F4F6',
        'neutral-200': '#E5E7EB',
        'neutral-300': '#D1D5DB',
        'neutral-400': '#9CA3AF',
        'neutral-500': '#6B7280',
        'neutral-600': '#4B5563',
        'neutral-700': '#374151',
        'neutral-800': '#1F2937',
        'neutral-900': '#111827',

        // Success (Green Scale)
        'success-50': '#ECFDF5',
        'success-100': '#D1FAE5',
        'success-200': '#A7F3D0',
        'success-300': '#6EE7B7',
        'success-400': '#34D399',
        'success-500': '#10B981',
        'success-600': '#059669',
        'success-700': '#047857',
        'success-800': '#065F46',
        'success-900': '#064E3B',

        // Warning (Yellow/Orange Scale)
        'warning-50': '#FFFBEB',
        'warning-100': '#FEF3C7',
        'warning-200': '#FDE68A',
        'warning-300': '#FCD34D',
        'warning-400': '#FBBF24',
        'warning-500': '#F59E0B',
        'warning-600': '#D97706',
        'warning-700': '#B45309',
        'warning-800': '#92400E',
        'warning-900': '#78350F',

        // Danger (Red/Pink Scale)
        'danger-50': '#FEF2F2',
        'danger-100': '#FEE2E2',
        'danger-200': '#FECACA',
        'danger-300': '#FCA5A5',
        'danger-400': '#F87171',
        'danger-500': '#EF4444',
        'danger-600': '#DC2626',
        'danger-700': '#B91C1C',
        'danger-800': '#991B1B',
        'danger-900': '#7F1D1D',

        // Individual Hues (These appear to be specific shades, possibly from a broader palette)
        'blue-700': '#1D4ED8',
        'blue-800': '#1E40AF',
        'blue-900': '#1E3A8A',

        'purple-700': '#6D28D9',
        'purple-800': '#5B21B6',
        'purple-900': '#4C1D95',

        'magenta-700': '#BE185D',
        'magenta-800': '#9D174D',
        'magenta-900': '#831843',

        'green-700': '#047857',
        'green-800': '#065F46',
        'green-900': '#064E3B',

        'red-700': '#B91C1C',
        'red-800': '#991B1B',
        'red-900': '#7F1D1D',

        'yellow-700': '#B45309',
        'yellow-800': '#92400E',
        'yellow-900': '#78350F',
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      
      addComponents({


      });
      
      addUtilities({
        '.transition-apple': {
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0, 0, 0.5, 1)',
        },
      })
      
    }),
  ],
};
