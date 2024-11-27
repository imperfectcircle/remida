import './bootstrap';
import '../css/app.css';

import { hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Flowbite } from 'flowbite-react';
import { customTheme } from './Themes/customTheme';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        hydrateRoot(
            el,
            <Flowbite theme={{ theme: customTheme }}>
                <App {...props} />
            </Flowbite>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
