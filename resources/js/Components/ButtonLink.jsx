import { Link } from '@inertiajs/react';

export default function ButtonLink({
    children,
    light = false,
    className = '',
    ...props
}) {
    return (
        <Link
            {...props}
            className={`mt-5 inline-block rounded-3xl px-6 py-3 shadow-md transition-colors dark:bg-black dark:text-white dark:hover:bg-gray-900 ${light ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'} ${className}`}
        >
            {children}
        </Link>
    );
}
