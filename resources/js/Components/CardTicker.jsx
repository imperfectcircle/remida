import NumberTicker from '@/shadcn/magicui/number-ticker';

export default function CardTicker({ title, text, value }) {
    return (
        <div className="w-full">
            <div className="flex h-fit flex-col items-center justify-center space-y-5 rounded-lg border-2 border-slate-200 p-5 text-gray-300 shadow-lg">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="font-semibold">{text}</p>
                <p className="my-10 text-5xl font-bold">
                    <NumberTicker value={value} className="text-gray-300" />
                </p>
            </div>
        </div>
    );
}
