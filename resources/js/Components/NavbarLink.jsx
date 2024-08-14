import { Link, usePage } from '@inertiajs/react';

export default function NavbarLink({ active = false, children, ...props }) {
    const { url } = usePage();
    return (
        <Link
            {...props}
            className={`block py-2 pl-3 pr-4 font-bold text-black/90 transition-colors hover:text-white md:p-0 md:text-lg dark:text-slate-400 ${active ? 'bg-red-700 font-bold text-white md:bg-transparent md:text-white dark:text-white' : ''}`}
        >
            {children}
        </Link>
    );
}
