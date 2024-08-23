import { Head, Link } from '@inertiajs/react';
import { variants } from '@/Constants';
import PublicLayout from '@/Layouts/PublicLayout';
import { motion } from 'framer-motion';
import ButtonLink from '@/Components/ButtonLink';

export default function Expertise() {
    return (
        <>
            <Head>
                <title>
                    REMIDA VARESE - Innoviamo con creatività | Cosa Facciamo
                </title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/cosa-facciamo"
                ></link>
            </Head>

            <PublicLayout>
                <section className="expertise grid h-screen grid-cols-1 bg-black/60 p-5 md:mt-[100px] md:grid-cols-2 md:p-0 lg:mt-0">
                    <div className="flex items-center justify-center text-white">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className="w-9/12 text-3xl md:text-6xl"
                        >
                            <span className="font-bold">Cosa Facciamo</span>
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
                    className="grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600"
                >
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white">
                        <h2 className="mb-10 text-6xl">
                            Laboratori per le Scuole
                        </h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                        <ButtonLink light href={route('laboratories')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-6xl">Formazione</h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                        <ButtonLink href={route('training')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-6xl">
                            Emporio dei Materiali
                        </h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                        <ButtonLink href={route('emporium')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white">
                        <h2 className="mb-10 text-6xl">
                            Laboratori per Altri Enti
                        </h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                        <ButtonLink light href={route('other')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white">
                        <h2 className="mb-10 text-6xl">Aziende</h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                        <ButtonLink light href={route('agency')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-6xl">Laboratori Speciali</h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                        <ButtonLink href={route('special')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                </motion.section>
            </PublicLayout>
        </>
    );
}
