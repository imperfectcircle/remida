import { memo, useState } from 'react';
import { cn } from '@/lib/utils';
import CustomModal from './CustomModal';

export const Card = memo(
    ({ card, index, hovered, setHovered, selectedCard, setSelectedCard }) => (
        <>
            <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelectedCard(card)}
                className={cn(
                    'relative h-60 w-full cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out md:h-96 dark:bg-neutral-900',
                    hovered !== null &&
                        hovered !== index &&
                        'scale-[0.98] blur-sm',
                )}
            >
                <img
                    src={card.src}
                    alt={card.title}
                    className="absolute inset-0 object-cover"
                />
                <div
                    className={cn(
                        'absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300',
                        hovered === index ? 'opacity-100' : 'opacity-0',
                    )}
                >
                    <div className="bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-medium text-transparent md:text-2xl">
                        {card.title}
                    </div>
                </div>
            </div>

            <CustomModal
                isOpen={selectedCard !== null}
                onClose={() => setSelectedCard(null)}
                title={selectedCard?.title}
                image={selectedCard?.src}
            />
        </>
    ),
);

Card.displayName = 'Card';

export function FocusCards({ cards }) {
    const [hovered, setHovered] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-5 md:grid-cols-2 md:px-8">
            {cards.map((card, index) => (
                <Card
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                />
            ))}
        </div>
    );
}
