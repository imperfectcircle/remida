import { COLLABORATION_ARRAY } from '@/Constants';
import { Card, CardContent } from '@/shadcn/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shadcn/ui/carousel';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export function CollaborationCarousel({ array }) {
    const [isVisible, setIsVisible] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className="w-full max-w-7xl"
        >
            <CarouselContent>
                {COLLABORATION_ARRAY.map((el, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="p-5">
                                        <h2 className="mb-2 text-2xl font-bold uppercase tracking-tight">
                                            {el.title}
                                        </h2>
                                        <div className="mb-3 text-xl font-normal dark:text-gray-400">
                                            <p>{el.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {isVisible && (
                <div>
                    <CarouselPrevious className="dark:text-white" />
                    <CarouselNext className="dark:text-white" />
                </div>
            )}
        </Carousel>
    );
}
