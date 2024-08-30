import { Card, CardContent } from '@/shadcn/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shadcn/ui/carousel';
import { Link } from '@inertiajs/react';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';

export function CardCarousel({ events }) {
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
                {events.map((event, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1">
                            <Card>
                                <Link
                                    href={route(
                                        'public.event.show',
                                        event.slug,
                                    )}
                                >
                                    <CardContent className="card flex aspect-square items-center justify-center p-6">
                                        <img src={event.image_url} alt="" />
                                        <div className="card-content p-5 text-white">
                                            <h2 className="mb-2 text-lg font-bold uppercase tracking-tight text-white dark:text-white">
                                                {event.title}
                                            </h2>
                                            <div
                                                className="mb-3 font-normal text-white dark:text-gray-400"
                                                dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(
                                                        event.description.substring(
                                                            0,
                                                            400,
                                                        ),
                                                    ),
                                                }}
                                            />
                                        </div>
                                    </CardContent>
                                </Link>
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
