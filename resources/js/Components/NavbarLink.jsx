import { Link } from '@inertiajs/react';

export default function NavbarLink({ active = false, children, ...props }) {
    return (
        <Link
            {...props}
            className={`block py-2 pl-3 pr-4 font-bold text-black/90 transition-colors hover:text-white md:p-0 md:text-lg dark:text-slate-400 ${active ? 'bg-red-700 font-bold text-white md:bg-transparent md:text-red-700 md:hover:text-red-700 dark:text-white dark:hover:text-white' : ''}`}
        >
            {children}
        </Link>
    );
}
