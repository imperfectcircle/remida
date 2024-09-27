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
                <meta
                    name="description"
                    content="Remida Varese connette con le proprie attività mondi differenti quali la scuola, l’imprenditoria, il terzo settore, le istituzioni locali, la cultura."
                ></meta>
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
                            <p className="mt-5 text-xl md:text-2xl">
                                Remida Varese connette con le proprie attività
                                mondi differenti quali la scuola,
                                l’imprenditoria, il terzo settore, le
                                istituzioni locali, la cultura. Abbiamo progetti
                                da proporre, vogliamo accogliere nuove idee e
                                collaborazioni.
                            </p>
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
                        <img
                            src="/images/Nero.png"
                            alt="Fantasmino Nero"
                            className="mx-auto mb-5 w-20"
                        />
                        <h2 className="mb-10 text-6xl">
                            Laboratori per Scuole
                        </h2>
                        <p className="text-2xl">
                            I laboratori di Remida Varese non sono solo spazi
                            fisici, ma anche spazi mentali dove è possibile
                            un’educazione alla creatività intesa come capacità
                            di liberarsi dai condizionamenti per stabilire nuove
                            relazioni con le cose che si conoscono, dove si
                            sposta l’attenzione sui processi realizzativi
                            piuttosto che sui prodotti che vengono creati.
                        </p>
                        <ButtonLink light href={route('laboratories')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400">
                        <img
                            src="/images/Grigio.png"
                            alt="Fantasmino Grigio"
                            className="mx-auto mb-5 w-20"
                        />
                        <h2 className="mb-10 text-6xl">Formazione</h2>
                        <p className="text-2xl">
                            Per Remida Varese è una priorità la condivisione
                            delle conoscenze e delle competenze acquisite negli
                            anni di attività in dialogo con il territorio e la
                            comunità che lo vive.
                        </p>
                        <ButtonLink href={route('training')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400">
                        <img
                            src="/images/Blu.png"
                            alt="Fantasmino Blu"
                            className="mx-auto mb-5 w-20"
                        />
                        <h2 className="mb-10 text-6xl">
                            Emporio dei Materiali
                        </h2>
                        <p className="text-2xl">
                            Remida Varese recupera dalle aziende, da artigiani,
                            da commercianti materiali in eccedenza e/o destinati
                            allo smaltimento, li espone nell’emporio dei
                            materiali per metterli a disposizione di scuole,
                            associazioni ed enti non a scopo di lucro per
                            attività e progetti socio-educativi o culturali.
                        </p>
                        <ButtonLink href={route('emporium')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white">
                        <img
                            src="/images/Verde.png"
                            alt="Fantasmino Verde"
                            className="mx-auto mb-5 w-20"
                        />
                        <h2 className="mb-10 text-6xl">
                            Laboratori per Altri Enti
                        </h2>
                        <p className="text-2xl">
                            I nostri laboratori creativi di sensibilizzazione
                            alla sostenibilità ambientale per famiglie si
                            possono realizzare durante manifestazioni ed eventi
                            pubblici organizzati da Enti Locali, Pro Loco,
                            Associazioni ecc. e presso le sedi di organizzazioni
                            come Comunità, Centri diurni, RSA, Fondazioni ecc.
                            per ospiti con disabilità, anziani, minori ecc..
                        </p>
                        <ButtonLink light href={route('other')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white">
                        <img
                            src="/images/Viola.png"
                            alt="Fantasmino Viola"
                            className="mx-auto mb-5 w-20"
                        />
                        <h2 className="mb-10 text-6xl">Aziende</h2>
                        <p className="text-2xl">
                            La fonte delle nostre proposte sono i materiali che
                            recuperiamo gratuitamente dalle realtà industriali,
                            artigianali e commerciali del territorio. Siamo
                            sempre alla ricerca di nuove collaborazioni per
                            trasformare insieme gli scarti di produzione, le
                            rimanenze di magazzino, le eccedenze e altri
                            materiali esclusi dalla commercializzazione in
                            preziose risorse per la comunità, senza fini di
                            lucro.
                        </p>
                        <ButtonLink light href={route('agency')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400">
                        <img
                            src="/images/Arancio.png"
                            alt="Fantasmino Arancio"
                            className="mx-auto mb-5 w-20"
                        />
                        <h2 className="mb-10 text-6xl">Progetti Speciali</h2>
                        <p className="text-2xl">
                            Installazioni interattive, creazioni artistiche e
                            laboratori creati su misura, in collaborazione con
                            vari Enti, per rendere unico l’evento a cui
                            partecipiamo e promuovere contemporaneamente la
                            sostenibilità ambientale, in quanto il materiale
                            utilizzato è esclusivamente scarto aziendale o
                            artigianale.
                        </p>
                        <ButtonLink href={route('special')}>
                            Scopri di più
                        </ButtonLink>
                    </div>
                </motion.section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="bg-transparent py-10 dark:bg-slate-600"
                >
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-2xl dark:text-white">
                        <h2 className="pb-10 text-6xl">Compleanni</h2>
                        <p>
                            Remida Varese è un servizio per associati pensato
                            per offrire a bambini e adulti un contesto speciale
                            dove festeggiare insieme un compleanno alternativo e
                            sostenibile; un’occasione all’insegna del
                            divertimento e della creatività, per socializzare
                            sperimentando, toccando e trasformando i materiali
                            non strutturati di origine aziendale e artigianale.
                        </p>
                        <p className="pb-10 pt-5">
                            Remida Varese è anche itinerante: vuoi organizzare
                            un compleanno creativo? ReMida Varese viene da te
                            con tutto il necessario per rendere ancora più
                            speciale una giornata importante.
                        </p>
                    </div>
                </motion.section>
            </PublicLayout>
        </>
    );
}
