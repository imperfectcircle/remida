export default function CustomModal({
    isOpen,
    onClose,
    content = '',
    image = '',
    title,
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="relative z-50 max-h-[80vh] w-[80vw] overflow-y-auto rounded-lg bg-white p-8 scrollbar-thin scrollbar-track-[#fca5a5] scrollbar-thumb-[#ef4444] dark:bg-slate-700">
                <h2 className="mb-4 text-3xl font-bold">{title}</h2>
                {content && (
                    <div
                        className="text-lg"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                )}
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="mt-4 w-full object-cover"
                    />
                )}
                <button
                    onClick={onClose}
                    className="mt-4 rounded bg-red-800 px-4 py-2 text-white hover:bg-red-900"
                >
                    Chiudi
                </button>
            </div>
        </div>
    );
}
