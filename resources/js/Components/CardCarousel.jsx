import { Card, CardContent } from '@/shadcn/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shadcn/ui/carousel';
import { useEffect, useState } from 'react';

export function CardCarousel() {
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
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img
                                        src={`https://picsum.photos/40${index}`}
                                        alt=""
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {isVisible && (
                <div>
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            )}
        </Carousel>
    );
}
