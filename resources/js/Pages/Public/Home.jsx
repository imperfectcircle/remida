import { CardCarousel } from '@/Components/CardCarousel';
import Ghost from '@/Components/Ghost';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/shadcn/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2500);
    }, []);

    return (
        <>
            {loader ? (
                <div className="flex h-screen w-full items-center justify-center">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="inline-block"
                        src="/images/Arancio.png"
                        alt=""
                    />
                </div>
            ) : (
                <PublicLayout>
                    <section className="lg:header mt-[100px] grid h-screen grid-cols-1 p-5 md:grid-cols-2 md:p-0 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2.5 }}
                            className="hidden md:flex md:items-center md:justify-center"
                        >
                            <img
                                src="/images/bg.webp"
                                alt=""
                                className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
                            />
                        </motion.div>
                        <div className="flex items-center justify-center text-white">
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2.5 }}
                                className="w-8/12 text-3xl md:text-6xl"
                            >
                                <span className="font-bold">REMIDA</span>
                                <br />
                                <span className="font-semibold text-gray-400">
                                    Innoviamo con creatività.
                                </span>
                                <br />
                                <span className="text-xl md:text-2xl">
                                    Laboratori, formazione e tanto altro con
                                    riutilizzo di materiale di scarto aziendale
                                    per un futuro sostenibile.
                                    <br />
                                    Siamo la tua destinazione per la creatività
                                    e il riutilizzo di materiali non
                                    strutturati.
                                </span>
                            </motion.h1>
                        </div>
                    </section>
                    <section className="grid min-h-fit grid-cols-1 justify-items-center gap-5 bg-slate-300 p-5 pb-10 md:grid-cols-3 lg:grid-cols-6">
                        <Ghost
                            source="/images/Nero.png"
                            alternative="Fantasma Nero"
                            title="Titolo Nero"
                        />
                        <Ghost
                            source="/images/Grigio.png"
                            alternative="Fantasma Grigio"
                            title="Titolo Grigio"
                        />
                        <Ghost
                            source="/images/Blu.png"
                            alternative="Fantasma Blu"
                            title="Titolo Blu"
                        />
                        <Ghost
                            source="/images/Verde.png"
                            alternative="Fantasma Verde"
                            title="Titolo Verde"
                        />
                        <Ghost
                            source="/images/Viola.png"
                            alternative="Fantasma Viola"
                            title="Titolo Viola"
                        />
                        <Ghost
                            source="/images/Arancio.png"
                            alternative="Fantasma Arancio"
                            title="Titolo Arancio"
                        />
                    </section>
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        className="where grid h-screen place-items-center text-white"
                    >
                        <div className="max-w-xl p-5 md:p-0">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className="text-4xl"
                            >
                                Il chiostro di Voltorre è un monastero
                                benedettino del XII secolo di stile romanico.
                                <br />
                                Ospita al piano superiore i contesti ludici di
                                apprendimento di ReMida Varese
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className="px-5"
                            >
                                <Button className="mt-3 w-full bg-red-600 text-lg hover:bg-red-800">
                                    Contattaci
                                </Button>
                            </motion.div>
                        </div>
                    </motion.section>
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        className="mt-10 flex flex-col items-center justify-center p-5"
                    >
                        <h2 className="mb-10 text-6xl">In Evidenza</h2>
                        <CardCarousel />
                    </motion.section>
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        className="mt-10 flex min-h-fit flex-col items-center justify-center bg-slate-400 p-5"
                    >
                        <h2 className="mb-10 text-center text-6xl">
                            I Nostri Partner
                        </h2>
                        <div className="grid grid-cols-1 justify-items-center gap-5 bg-slate-400 p-10 md:grid-cols-2 lg:grid-cols-4">
                            <img src="https://picsum.photos/200" alt="" />
                            <img src="https://picsum.photos/201" alt="" />
                            <img src="https://picsum.photos/202" alt="" />
                            <img src="https://picsum.photos/203" alt="" />
                            <img src="https://picsum.photos/204" alt="" />
                            <img src="https://picsum.photos/205" alt="" />
                            <img src="https://picsum.photos/206" alt="" />
                            <img src="https://picsum.photos/207" alt="" />
                        </div>
                    </motion.section>
                </PublicLayout>
            )}
        </>
    );
}
