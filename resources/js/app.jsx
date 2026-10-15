import { createInertiaApp } from '@inertiajs/react';

createInertiaApp({
    strictMode: true,
    title: (title) => (title ? `${title} - ${import.meta.env.VITE_APP_NAME ?? 'Laravel'}` : import.meta.env.VITE_APP_NAME ?? 'Laravel'),
});
