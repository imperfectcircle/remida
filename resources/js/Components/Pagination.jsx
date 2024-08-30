import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    return (
        <nav className="mt-4 text-center">
            {links.map((link, _) => (
                <Link
                    preserveScroll
                    href={link.url || ''}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    key={_}
                    className={`inline-block rounded-lg px-3 py-2 text-xs text-gray-700 ${
                        link.active ? 'bg-gray-950 text-white' : ''
                    } ${
                        !link.url
                            ? 'cursor-not-allowed !text-gray-300'
                            : 'transition-colors hover:bg-gray-600 hover:text-white'
                    }`}
                ></Link>
            ))}
        </nav>
    );
}
