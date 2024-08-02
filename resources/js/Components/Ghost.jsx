export default function Ghost({ source, alternative, title }) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={source}
                alt={alternative}
                className="size-28 drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
            />
            <div className="w-48 h-32 bg-white rounded-bl-[50px] rounded-tr-[50px] -mt-[50px] shadow-md flex justify-center items-end p-5">
                <h2 className="text-xl">{title}</h2>
            </div>
        </div>
    );
}
