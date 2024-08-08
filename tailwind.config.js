/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import flowbite from 'flowbite-react/tailwind';
export default {
    darkMode: ['selector'],
    content: [
        'resources/**/*.{js,jsx}',
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
        flowbite.content(),
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            backgroundImage: {
                'hero-pattern': "url('../public/images/header.webp')",
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'spin-around': {
                    '0%': {
                        transform: 'translateZ(0) rotate(0)',
                    },
                    '15%, 35%': {
                        transform: 'translateZ(0) rotate(90deg)',
                    },
                    '65%, 85%': {
                        transform: 'translateZ(0) rotate(270deg)',
                    },
                    '100%': {
                        transform: 'translateZ(0) rotate(360deg)',
                    },
                },
                slide: {
                    to: {
                        transform: 'translate(calc(100cqw - 100%), 0)',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'spin-around':
                    'spin-around calc(var(--speed) * 2) infinite linear',
                slide: 'slide var(--speed) ease-in-out infinite alternate',
            },
        },
    },
    plugins: [
        forms,
        require('tailwindcss-animate'),
        require('tailwind-scrollbar'),
        flowbite.plugin(),
    ],
};
