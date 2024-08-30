import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import DOMPurify from 'dompurify';

export default function Events({ events }) {
    console.log(events);

    return (
        <>
            <Head>
                <title>REMIDA VARESE - Innoviamo con creatività | Eventi</title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/eventi"
                ></link>
            </Head>
            <PublicLayout>
                {events.length == 0 && (
                    <div className="grid h-screen w-full place-items-center dark:bg-slate-900 dark:text-white">
                        <p className="text-2xl">
                            Non sono ancora presenti Eventi.
                        </p>
                    </div>
                )}

                {events.length > 0 && (
                    <section className="my-[150px] grid grid-cols-1 gap-5 p-5 md:grid-cols-5 dark:bg-slate-900 dark:text-white">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="rounded-lg bg-gray-200 shadow-lg dark:bg-gray-700"
                            >
                                <div className="flex justify-center">
                                    <img
                                        className="w-full rounded-lg object-cover"
                                        src={event.image_url}
                                        alt={event.title}
                                    />
                                </div>
                                <div className="text-center">
                                    <h2 className="pt-5 text-2xl font-bold uppercase">
                                        {event.title}
                                    </h2>
                                </div>
                                <div
                                    className="py-5 text-center text-xl"
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(
                                            event.description.substring(0, 100),
                                        ),
                                    }}
                                />

                                <div className="grid place-items-center pb-5">
                                    <Link
                                        href={route(
                                            'public.event.show',
                                            event.slug,
                                        )}
                                        className="rounded-3xl bg-red-800 px-5 py-2 text-white transition-colors hover:bg-red-900"
                                    >
                                        Continua a Leggere
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </section>
                )}
            </PublicLayout>
        </>
    );
}
