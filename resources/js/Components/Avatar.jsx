export default function Avatar({ source, name }) {
    return (
        <div className="mt-10">
            <img
                src={source}
                className="h-40 w-40 rounded-full border-4 border-red-700"
                alt={name}
            />
            <p>{name}</p>
        </div>
    );
}
