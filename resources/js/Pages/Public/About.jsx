import Avatar from '@/Components/Avatar';
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
                <meta
                    name="description"
                    content="Remida Varese è un Centro di ricerca creativa attraverso il riutilizzo di materiali non strutturati di origine aziendale e artigianale"
                ></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/chi-siamo"
                ></link>
            </Head>
            <PublicLayout>
                <section className="mt-[110px] grid h-screen grid-cols-1 bg-black/60 md:grid-cols-3 md:p-0 lg:mt-0">
                    <div className="flex items-center justify-center text-white">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className="w-9/12 py-5 text-3xl md:text-6xl"
                        >
                            <span className="font-bold">Chi Siamo</span>
                            <br />
                            <p className="mt-5 text-xl md:text-2xl">
                                Remida Varese è un{' '}
                                <strong>
                                    Centro di ricerca creativa attraverso il
                                    riutilizzo di materiali non strutturati di
                                    origine aziendale e artigianale
                                </strong>{' '}
                                (sottoprodotti, rimanenze di magazzino, ecc.)
                                gestito dall’Associazione di Promozione Sociale
                                Altrementi di Varese.
                            </p>
                        </motion.h1>
                    </div>
                    <div className="col-span-2">
                        <img
                            className="h-screen w-full object-cover opacity-90"
                            src="/images/about.webp"
                            alt=""
                        />
                    </div>
                </section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="flex min-h-fit flex-col items-center justify-center bg-slate-700 p-2 md:p-10"
                >
                    <h2 className="mb-10 text-center text-6xl text-white">
                        Remida Varese
                    </h2>
                    <div className="mb-10 max-w-6xl px-5 text-xl text-white md:px-0 md:text-2xl">
                        <p>
                            Nato nel 2012 grazie alla fondamentale
                            collaborazione di{' '}
                            <a
                                href="http://www.modusriciclandi.info/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white underline"
                            >
                                Remida Reggio Emilia
                            </a>
                            , della Provincia di Varese - settore Ambiente e al
                            finanziamento ottenuto dal progetto Interreg{' '}
                            <a
                                href="https://www.remida.org/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white underline"
                            >
                                ModusRiciclandi
                            </a>{' '}
                            , un Piano Integrato Transfrontaliero tra Provincia
                            di Varese e Cantone Ticino, dalla sua nascita ha
                            sede presso il{' '}
                            <a
                                href="https://it.wikipedia.org/wiki/Chiostro_di_Voltorre"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white underline"
                            >
                                Chiostro di Voltorre
                            </a>
                            , attualmente attivo in convenzione con il Comune di
                            Gavirate.
                        </p>
                        <p className="mt-5">
                            Remida Varese è uno spazio nel quale chi entra trova
                            svariati materiali di origine aziendale ed
                            artigianale, ma anche suggerimenti, sensazioni,
                            curiosità, divertimento, emozioni, possibili
                            collaborazioni.
                        </p>
                        <p className="mt-5">
                            Remida Varese è un’occasione per interagire con
                            molteplici realtà, una predisposizione del pensiero
                            che induce alla ricerca di diverse prospettive in
                            un’ottica di sostenibilità e rispetto della materia,
                            dell’ambiente, dell’uomo.
                        </p>
                        <p className="mt-5">
                            Remida Varese si connota come una risorsa importante
                            di riqualificazione ed arricchimento delle proposte
                            educative, ambientali ed artistiche presenti sul
                            territorio dando nuova vita e valore agli errori di
                            produzione, attraverso riutilizzi innovati con le
                            seguenti iniziative:
                        </p>
                        <ul className="ml-5 mt-5">
                            <li>
                                Attività educative e didattiche per le scuole di
                                ogni ordine e grado
                            </li>
                            <li>
                                Percorsi di Formazione per operatori
                                socio-educativi e insegnanti
                            </li>
                            <li>
                                Raccolta e distribuzione del materiale non
                                strutturato di origine aziendale e artigianale{' '}
                            </li>
                            <li>
                                Collaborazioni con altri Enti del terzo settore
                                ed aziende profit
                            </li>
                            <li>
                                Eventi e laboratori con Enti Locali e Pro Loco
                            </li>
                            <li>
                                Installazioni e workshop con artisti, stilisti,
                                eco designer
                            </li>
                        </ul>
                    </div>
                </motion.section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="flex flex-col items-center justify-center bg-transparent p-5 py-10 dark:bg-slate-600"
                >
                    <h2 className="mb-10 text-6xl text-black dark:text-gray-300">
                        Rete Remida
                    </h2>
                    <div className="mb-10 max-w-6xl px-5 text-xl text-black md:px-0 md:text-2xl dark:text-white">
                        <p>
                            "Remida Varese fa parte di una rete nazionale e
                            internazionale che oggi si compone di 11 Centri
                            coordinati dal Centro Remida di Reggio Emilia, che
                            dal 1996 porta avanti il progetto grazie a un’idea
                            dell’Istituzione Nidi e Scuole dell’Infanzia del
                            Comune di Reggio Emilia, Fondazione Reggio Children
                            e Iren. Per informazioni:
                        </p>
                        <p className="mt-5">
                            Il progetto Remida nasce nel 1996 a Reggio Emilia da
                            un’idea dell’Istituzione Nidi e Scuole dell’Infanzia
                            di Reggio Emilia, Fondazione Reggio Children e Iren.
                            Gli altri centri sono a: Bologna, Borgo San Lorenzo
                            (Firenze), Genova, Milano, Napoli, Torino, Trondheim
                            (Norvegia), Skillingaryd (Svezia), Buenos Aires
                            (Argentina), Perth (Australia).
                        </p>
                        <p className="mt-5">
                            Lo scambio e i contatti periodici tra i vari Centri
                            Remida rafforzano il patto tra persone e
                            organizzazioni che stanno costruendo un percorso di
                            corresponsabilità nell’ambito dell’Educazione
                            ambientale e della cultura in generale.
                        </p>
                    </div>
                </motion.section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="flex min-h-fit flex-col items-center justify-center bg-slate-700 p-2 md:p-10"
                >
                    <h2 className="mb-10 text-center text-6xl text-white">
                        Altrementi APS
                    </h2>
                    <div className="mb-10 max-w-6xl px-5 text-xl text-white md:px-0 md:text-2xl">
                        <p>
                            L’Associazione di Promozione Sociale AltreMenti
                            nasce nel 2009 (ai sensi della legge 383/2000)
                            grazie alla volontà di persone dalle capacità,
                            competenze ed esperienze diverse. Animatori sociali,
                            artisti, educatrici, pedagogiste, architetti e
                            grafici si sono uniti con scopo di migliorare la
                            tutela dell’ambiente attraverso la realizzazione di
                            progetti, interventi inerenti soprattutto la
                            tematica dello sviluppo sostenibile.
                        </p>
                        <p className="mt-5">
                            AltreMenti realizza i propri fini istituzionali con
                            le seguenti attività:
                        </p>
                        <ul className="ml-5 mt-5">
                            <li>
                                progettazione e realizzazione di laboratori
                                creativi attraverso l’uso dei materiali di
                                scarto aziendale e di materiali naturali;
                            </li>
                            <li>
                                progettazione di percorsi educativi ed
                                animativi, anche all’interno di programmi della
                                Comunità Europea, Repubblica Italiana, Regione,
                                Provincia, dei Comuni, Comunità Montane, Asl,
                                ecc.;
                            </li>
                            <li>
                                consulenza per la gestione di spazi e attività,
                                anche a seguito di convenzioni con Enti Locali,
                                per il riuso creativo dei materiali di scarto
                                aziendale e di materiali naturali;
                            </li>
                            <li>
                                progettazione e realizzazione di corsi di
                                formazione;
                            </li>
                            <li>
                                promozione di attività sociali di carattere
                                ambientale rivolte particolarmente a categorie
                                svantaggiate;
                            </li>
                            <li>
                                Installazioni e workshop con artisti, stilisti,
                                eco designer
                            </li>
                        </ul>
                        <p className="mt-5">
                            Nel 2012 ha inaugurato il Centro ReMida Varese
                            presso il Chiostro di Voltorre a Gavirate in
                            collaborazione con la Provincia di Varese ed altri
                            partner italiani e ticinesi.
                        </p>
                        <p className="mt-5">
                            Associazione di Promozione Sociale Altrementi ha
                            sede in Via Pagliano 18 21100 a Varese C.F.
                            95067980128 P.IVA 03289460127 ed è iscritta nel
                            Registro Unico Nazionale del Terzo Settore con
                            numero di Repertorio 86522
                        </p>
                    </div>
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
                    <div className="mb-10 max-w-6xl px-5 text-xl text-black md:px-0 md:text-2xl dark:text-white">
                        <p>
                            L’equipe di Remida Varese è composta da
                            professionisti in animazione sociale, arte,
                            educazione, pedagogia, architettura, musica e
                            grafica.
                        </p>
                        <h2 className="mt-5 text-center text-3xl font-semibold uppercase">
                            consiglio direttivo
                        </h2>
                        <div className="grid max-w-7xl grid-cols-1 justify-items-center md:grid-cols-3">
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Marco Quilici"
                                role="Presidente"
                            />
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Davide Quilici"
                                role="Vice Presidente"
                            />
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Enrico Casmirri"
                                role="Segretario"
                            />
                        </div>
                        <h2 className="mt-10 text-center text-3xl font-semibold uppercase">
                            Associati Operativi
                        </h2>
                        <div className="grid max-w-7xl grid-cols-1 justify-items-center md:grid-cols-4">
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Lorella Manzo"
                            />
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Antonio Testa"
                            />
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Stefania Miano"
                            />
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Monica Sistu"
                            />
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Paola Bertaglia"
                            />
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Sara Dalla Pozza"
                            />
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Barbara Parietti"
                            />
                            <Avatar
                                source="/images/no-image.jpg"
                                name="Marta Bonomi"
                            />
                        </div>
                    </div>
                </motion.section>
            </PublicLayout>
        </>
    );
}
