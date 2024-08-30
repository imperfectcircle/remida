<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fav Icons -->
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png">
        <link rel="manifest" href="/images/favicons/site.webmanifest">

        <!-- Meta Tags -->
        <meta property="og:type" content="website" />
                <meta property="og:image" content="" />
                <meta
                    property="og:url"
                    content="https://www.remidavarese.it/"
                />
                <meta
                    property="og:description"
                    content="REMIDA VARESE - Innoviamo con creatività"
                />
                <meta
                    property="og:title"
                    content="REMIDA VARESE - Innoviamo con creatività"
                />
                <meta property="og:locale" content="it_IT" />
                <meta property="og:site_name" content="REMIDA VARESE" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="" />
                <meta
                    name="twitter:title"
                    content="REMIDA VARESE - Innoviamo con creatività"
                />
                <meta
                    name="twitter:description"
                    content="REMIDA VARESE - Innoviamo con creatività"
                />
                <meta
                    name="twitter:image"
                    content="https://www.remidavarese.it/images/remida_logo.webp"
                />

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        </script>
    </head>
    <body class="font-sans antialiased bg-gray-100 dark:bg-slate-900">
        @inertia
    </body>
</html>
