module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '*',
  ],
  theme: {
    colors: {
      primary: '#4338ca',
      'primary-dark': '#4c1d95',
      'grey-1': '#f8fafc',
      'grey-2': '#f1f5f9',
      'grey-3': '#e2e8f0',
      'grey-4': '#cbd5e1',
      'grey-5': '#94a3b8',
      'grey-6': '#64748b',
      'grey-7': '#475569',
      'grey-8': '#334155',
      'grey-9': '#1e293b',
      'grey-10': '#0f172a',
    },
    screens: {
      'mobile-s': '320px',
      'mobile-m': '480px',
      'tablet-s': '768px',
      'tablet-m': '1024px',
      'laptop-s': '1280px',
      'laptop-m': '1366px',
      desktop: '1920px',
    },
    fontSize: {
      alfa: ['14px', '20px'],
      bravo: ['16px', '24px'],
      charlie: ['18px', '28px'],
      delta: ['21px', '28px'],
      echo: ['24px', '32px'],
      foxtrot: ['28px', '32px'],
      golf: ['32px', '36px'],
      hotel: ['35px', '40px'],
      india: ['39px', '44px'],
      juliet: ['42px', '48px'],
      kilo: ['48px', '56px'],
      lima: ['54px', '60px'],
    },
    fontFamily: {
      script: ["'Yellowtail', cursive"],
    },
    spacing: {
      '3XS': '2px',
      '2XS': '4px',
      XS: '8px',
      S: '16px',
      M: '24px',
      L: '32px',
      XL: '48px',
      '2XL': '64px',
      '3XL': '128px',
    },
    container: {
      center: true,
      'max-width': {
        // DEFAULT: '90%',
        'mobile-s': '288px',
        'mobile-m': '448px',
        'tablet-s': '736px',
        'tablet-m': '992px',
        'laptop-s': '1248px',
        'laptop-m': '1334px',
        desktop: '1888px',
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen mobile-s': {
            maxWidth: '288px',
          },
          '@screen mobile-m': {
            maxWidth: '448px',
          },
          '@screen tablet-s': {
            maxWidth: '736px',
          },
          '@screen tablet-m': {
            maxWidth: '992px',
          },
          // '@screen laptop-s': {
          //   maxWidth: '1248px',
          // },
          // '@screen laptop-m': {
          //   maxWidth: '1334px',
          // },
        },
      });
    },
  ],
};
