import { Link, usePage } from '@inertiajs/react';

export default function NavbarLink({ namedRoute, uri, label }) {
    const { url } = usePage();
    return (
        <Link
            href={namedRoute}
            className={`block py-2 pl-3 pr-4 font-bold text-black/90 transition-colors hover:text-white md:p-0 md:text-lg dark:text-slate-400 ${url === uri ? 'active' : ''}`}
        >
            {label}
        </Link>
    );
}
