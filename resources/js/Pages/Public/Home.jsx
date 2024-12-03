import { useEffect, useState } from 'react';
import { CardCarousel } from '@/Components/CardCarousel';
import CardTicker from '@/Components/CardTicker';
import Ghost from '@/Components/Ghost';
import SplashScreen from '@/Components/SplashScreen';
import PublicLayout from '@/Layouts/PublicLayout';
import ShimmerButton from '@/shadcn/magicui/shimmer-button';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Timeline from '@/Components/Timeline';
import { variants } from '@/Constants';
import { CollaborationCarousel } from '@/Components/CollaborationCarousel';

export default function Home({ events, collaborations }) {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');

        if (!hasVisited) {
            setTimeout(() => {
                setLoader(false);
                sessionStorage.setItem('hasVisited', true);
            }, 2500);
        } else {
            setLoader(false);
        }
    }, []);

    return (
        <>
            <Head>
                <title>REMIDA VARESE - Innoviamo con creatività | Home </title>
                <meta
                    name="description"
                    content="Centro di ricerca creativa che promuove il riutilizzo di materiali non strutturati di origine aziendale artigianale e naturale con finalità educative, ambientali ed artistiche."
                ></meta>
                <link rel="canonical" href="https://remidavarese.it/"></link>
            </Head>
            {loader ? (
                <SplashScreen />
            ) : (
                <PublicLayout>
                    <section className="grid min-h-screen grid-cols-1 bg-[#1a759f]/40 p-5 md:mt-[100px] md:grid-cols-2 md:p-0 lg:mt-0">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className="hidden md:flex md:items-center md:justify-center"
                        >
                            <img
                                src="/images/bg.webp"
                                alt=""
                                className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
                            />
                        </motion.div>
                        <div className="flex flex-col items-center justify-center text-white">
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                className="w-9/12 text-3xl md:text-6xl"
                            >
                                <span className="font-bold">REMIDA VARESE</span>
                                <br />

                                <span className="mt-2 text-xl md:text-2xl">
                                    Centro di ricerca creativa che promuove il
                                    riutilizzo di materiali non strutturati di
                                    origine aziendale artigianale e naturale con
                                    finalità educative, ambientali ed
                                    artistiche. <br /> Remida Varese attinge al
                                    metodo pedagogico ”
                                    <a
                                        href="https://www.reggiochildren.it/reggio-emilia-approach/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white underline"
                                    >
                                        Reggio Emilia Approach
                                    </a>
                                    ”.
                                </span>
                            </motion.h1>
                            <Link href={route('about')}>
                                <button className="mt-10 w-full rounded-3xl bg-white px-6 py-2 text-lg font-semibold text-black shadow-lg transition-colors hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">
                                    Scopri di più
                                </button>
                            </Link>
                        </div>
                    </section>
                    <section className="grid min-h-[65vh] grid-cols-1 place-items-center gap-5 bg-slate-300 p-5 pb-10 md:grid-cols-3 dark:bg-slate-600">
                        <Ghost
                            source="/images/Nero.png"
                            alternative="Fantasma Nero"
                            title="Laboratori per Scuole"
                            href={route('laboratories')}
                        />
                        <Ghost
                            source="/images/Grigio.png"
                            alternative="Fantasma Grigio"
                            title="Formazione"
                            href={route('training')}
                        />
                        <Ghost
                            source="/images/Blu.png"
                            alternative="Fantasma Blu"
                            title="Emporio dei Materiali"
                            href={route('emporium')}
                        />
                        <Ghost
                            source="/images/Verde.png"
                            alternative="Fantasma Verde"
                            title="Laboratori per Altri Enti"
                            href={route('other')}
                        />
                        <Ghost
                            source="/images/Viola.png"
                            alternative="Fantasma Viola"
                            title="Aziende"
                            href={route('agency')}
                        />
                        <Ghost
                            source="/images/Arancio.png"
                            alternative="Fantasma Arancio"
                            title="Laboratori Speciali"
                            href={route('special')}
                        />
                    </section>
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                        className="where grid h-screen place-items-center text-white"
                    >
                        <div className="max-w-xl p-5 text-center md:p-0">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={variants}
                                className="mb-10 pb-5 text-center text-6xl"
                            >
                                Dove Siamo
                            </motion.h2>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={variants}
                                className="text-4xl"
                            >
                                Il{' '}
                                <a
                                    href="https://it.wikipedia.org/wiki/Chiostro_di_Voltorre"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white underline"
                                >
                                    Chiostro di Voltorre
                                </a>{' '}
                                è un monastero benedettino del XII secolo in
                                stile romanico.
                                <br />
                                Ospita nei suoi locali i contesti ludici di
                                apprendimento di ReMida Varese
                            </motion.p>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={variants}
                                className="px-5"
                            >
                                <Link href={route('contacts')}>
                                    <ShimmerButton
                                        className="mt-3 w-full bg-red-600 text-lg hover:bg-red-800 dark:font-bold"
                                        shimmerSize="0.2rem"
                                        background="rgba(185, 28, 28 , 1)"
                                    >
                                        Contattaci
                                    </ShimmerButton>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.section>
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                        className="flex flex-col items-center justify-center bg-transparent p-5 py-10 dark:bg-slate-600"
                    >
                        <h2 className="mb-10 text-6xl text-black dark:text-gray-200">
                            In Evidenza
                        </h2>
                        {events.length == 0 && (
                            <div className="">
                                <p className="min-h-[25vh] text-2xl dark:text-white">
                                    Non Sono Ancora Presenti Eventi
                                </p>
                            </div>
                        )}
                        <CardCarousel events={events} />
                    </motion.section>
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                        className="grid min-h-fit grid-cols-1 bg-slate-400 md:grid-cols-2"
                    >
                        <div className="flex flex-col items-center justify-center bg-slate-500 p-10">
                            <h2 className="mb-10 text-center text-6xl text-white">
                                Aperture
                            </h2>
                            <div className="grid grid-cols-1 justify-items-center p-2 md:p-10">
                                <p className="text-2xl text-white md:text-4xl">
                                    Remida Varese apre solo su prenotazione per
                                    i{' '}
                                    <Link
                                        href={route('laboratories')}
                                        className="text-white underline"
                                    >
                                        Laboratori per scuole
                                    </Link>{' '}
                                    e per il prelievo di materiale non
                                    strutturato dall'emporio dei Materiali. I
                                    Laboratori creativi per famiglie aprono con
                                    calendario stagionale (vedere le{' '}
                                    <Link
                                        href={route('events')}
                                        className="text-white underline"
                                    >
                                        notizie in Evidenza
                                    </Link>
                                    ). Tutte le attività sono riservate agli
                                    Associati di Altrementi aps.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-5 md:p-10">
                            <h2 className="mb-10 text-center text-6xl text-white">
                                I Nostri Partner
                            </h2>
                            <div className="grid grid-cols-1 place-items-center justify-items-center gap-5 p-10 md:grid-cols-2">
                                <img src="/images/provincia.jpg" alt="" />
                                <img src="/images/gavirate.jpg" alt="" />
                            </div>
                        </div>
                    </motion.section>
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                        className="flex min-h-fit flex-col items-center justify-center p-2 md:p-10 dark:bg-slate-600"
                    >
                        <h2 className="mb-10 text-center text-6xl text-black dark:text-white">
                            Quanto Abbiamo Fatto
                        </h2>
                        <div className="max-w-6xl p-5">
                            <Timeline />
                        </div>
                    </motion.section>
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                        className="flex min-h-fit flex-col items-center justify-center bg-slate-600 p-2 md:p-10"
                    >
                        <h2 className="mb-10 text-center text-6xl text-white">
                            Collaborazioni
                        </h2>
                        <CardCarousel images={collaborations} />
                    </motion.section>
                </PublicLayout>
            )}
        </>
    );
}
