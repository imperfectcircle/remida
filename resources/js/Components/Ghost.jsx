import { Link } from '@inertiajs/react';

export default function Ghost({ source, alternative, title, href }) {
    return (
        <Link
            href={href}
            className="flex flex-col items-center transition-all hover:scale-105"
        >
            <img
                src={source}
                alt={alternative}
                className="size-28 drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
            />
            <div className="-mt-[50px] flex h-32 w-48 items-end justify-center rounded-bl-[50px] rounded-tr-[50px] bg-white p-5 shadow-md dark:bg-slate-400">
                <h2 className="text-center text-xl text-black dark:text-white">
                    {title}
                </h2>
            </div>
        </Link>
    );
}
