import { Link } from '@inertiajs/react';

export default function NavbarLink({ active = false, children, ...props }) {
    return (
        <Link
            {...props}
            className={`block py-2 pl-3 pr-4 font-bold text-black/90 transition-colors hover:text-gray-400 md:p-0 md:text-lg dark:text-slate-400 dark:hover:text-slate-500 ${active ? 'bg-red-700 font-bold text-white md:bg-transparent md:text-red-700 md:hover:text-red-700 dark:text-white dark:hover:text-white' : ''}`}
        >
            {children}
        </Link>
    );
}
