import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import DOMPurify from 'dompurify';

export default function EventShow({ event }) {
    return (
        <>
            <Head>
                <title>{`REMIDA VARESE - Innoviamo con creatività | ${event.title}`}</title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href={`https://remidavarese.it/${event.slug}`}
                ></link>
            </Head>
            <PublicLayout>
                <section className="my-[150px] grid grid-cols-1 place-items-center gap-10 p-5">
                    <div className="max-w-7xl rounded-lg bg-gray-200 shadow-lg dark:bg-gray-600 dark:text-white">
                        <div className="flex justify-center p-5">
                            <img
                                className="w-full rounded-lg object-cover shadow-lg"
                                src={event.image_url}
                                alt={event.title}
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h2 className="text-4xl font-bold uppercase">
                                {event.title}
                            </h2>
                        </div>
                        <div
                            className="px-5 py-10 text-xl md:px-16"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(event.description),
                            }}
                        />
                    </div>
                </section>
            </PublicLayout>
        </>
    );
}
