import { variants } from '@/Constants';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <>
            <Head>
                <title>
                    REMIDA VARESE - Innoviamo con creatività | Chi Siamo
                </title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/chi-siamo"
                ></link>
            </Head>
            <PublicLayout>
                <section className="about grid h-screen grid-cols-1 bg-black/60 p-5 md:mt-[100px] md:grid-cols-2 md:p-0 lg:mt-0">
                    <div className="flex items-center justify-center text-white">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className="w-9/12 text-3xl md:text-6xl"
                        >
                            <span className="font-bold">Chi Siamo</span>
                            <br />
                            <span className="font-semibold text-gray-400">
                                Lorem Ipsum.
                            </span>
                            <br />
                            <span className="text-xl md:text-2xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Laudantium dolores delectus
                                quaerat harum vitae quam neque blanditiis
                                officiis earum ipsa iusto repudiandae
                                recusandae, quasi sit facilis reprehenderit
                                voluptas, modi architecto!
                            </span>
                        </motion.h1>
                    </div>
                </section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="flex flex-col items-center justify-center bg-transparent p-5 py-10 dark:bg-slate-600"
                >
                    <h2 className="mb-10 text-6xl text-black dark:text-gray-300">
                        Network Remida
                    </h2>
                </motion.section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="flex min-h-fit flex-col items-center justify-center bg-slate-600 p-2 md:p-10"
                >
                    <h2 className="mb-10 text-center text-6xl text-white">
                        Altrementi APS
                    </h2>
                </motion.section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="flex flex-col items-center justify-center bg-transparent p-5 py-10 dark:bg-slate-600"
                >
                    <h2 className="mb-10 text-6xl text-black dark:text-gray-300">
                        Associati
                    </h2>
                </motion.section>
            </PublicLayout>
        </>
    );
}
