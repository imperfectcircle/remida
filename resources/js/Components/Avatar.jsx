export default function Avatar({
    source,
    name = '',
    role = '',
    href = '',
    anchorText = '',
    className = '',
    description = '',
}) {
    return (
        <div className="mt-10 flex flex-col items-center">
            <img
                src={source}
                className={`h-40 w-40 rounded-full border-4 border-red-700 object-cover ${className}`}
                alt={name ? name : anchorText}
            />
            {name && (
                <p className="text-center">
                    {name} <br /> {role}
                </p>
            )}
            {href && (
                <a
                    className="text-center underline dark:text-sky-400"
                    href={href}
                    target="_blank"
                >
                    {anchorText}
                </a>
            )}
            {description && (
                <p className="mt-3 text-center text-sm">{description}</p>
            )}
        </div>
    );
}
