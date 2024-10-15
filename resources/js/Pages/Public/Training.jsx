import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { variants } from '@/Constants';
import { motion } from 'framer-motion';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

/**
 *
 * TODO Form per Formazione
 */

export default function Training() {
    const { flash } = usePage().props;
    const {
        data,
        setData,
        post,
        processing,
        errors,
        wasSuccessful,
        clearErrors,
        reset,
    } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacy: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.training'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset('name', 'email', 'phone', 'message', 'privacy');
                clearErrors();
            },
        });
    };
    return (
        <>
            <Head>
                <title>
                    REMIDA VARESE - Innoviamo con creatività | Formazione
                </title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/formazione"
                ></link>
            </Head>

            <PublicLayout>
                <section className="mt-[110px] grid h-screen grid-cols-1 bg-black/60 p-5 md:grid-cols-3 md:p-0 lg:mt-0">
                    <div className="flex items-center justify-center text-white">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className="w-9/12 py-5 text-3xl md:text-6xl"
                        >
                            <span className="font-bold">Formazione</span>

                            <p className="mt-5 text-xl md:text-2xl">
                                I percorsi ideati si concentrano non solo sulla
                                conoscenza del metodo per la progettazione e
                                realizzazione di attività ma si indirizzano
                                anche verso l’arte, la logica, l’estetica e la
                                documentazione.
                            </p>
                        </motion.h1>
                    </div>
                    <div className="col-span-2">
                        <img
                            className="h-screen w-full object-cover opacity-90"
                            src="/images/training.webp"
                            alt=""
                        />
                    </div>
                </section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="bg-transparent dark:bg-slate-500 dark:text-white"
                >
                    <div className="mx-auto max-w-7xl px-5 py-10 text-2xl">
                        <p>
                            Proponiamo corsi di{' '}
                            <strong>
                                formazione, consulenze, supervisioni
                                metodologiche e incontri
                            </strong>{' '}
                            rivolti direttamente a equipe educative di Asilo
                            Nido, Scuola dell’Infanzia, insegnanti di Scuola
                            Primaria e Secondaria, RSA, Cooperative, Imprese
                            Sociali, Associazioni, Enti Pubblici e Privati,
                            gruppi di adulti intenzionati ad approcciarsi alla
                            metodologia del “Reggio Emilia Approach” o
                            indirettamente attraverso collaborazioni con
                            Associazioni di categoria come Ascom e Agenzie di
                            servizi per le imprese.
                        </p>
                    </div>
                </motion.section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600"
                >
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white">
                        <h2 className="mb-10 text-center text-6xl">
                            Formazione
                        </h2>
                        <p>
                            I nostri apprezzati percorsi formativi “
                            <strong>
                                Materiali non strutturati di origine aziendale e
                                artigianale per la promozione della creatività
                            </strong>
                            ” e “
                            <strong>
                                Materiali naturali come risorsa educativa
                            </strong>
                            ” sono{' '}
                            <strong>rivolti all’intera equipe educativa</strong>{' '}
                            di un’organizzazione 0 – 6 anni, che sia un Asilo
                            Nido, una Scuola dell’Infanzia o un sistema
                            integrato e si svolge interamente in presenza,
                            inizialmente presso i nostri spazi al Chiostro di
                            Voltorre e successivamente presso la struttura della
                            committenza.
                        </p>
                        <p className="mt-5">
                            La formazione è un{' '}
                            <strong>percorso di costruzione</strong>, continua e
                            graduale, di pratiche esperienziali, riflessioni e
                            condivisioni che porta il gruppo educativo ad{' '}
                            <strong>attuare nuove pratiche pedagogiche</strong>,
                            adattandole alla propria realtà professionale.
                        </p>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-center text-6xl">
                            Consulenza
                        </h2>
                        <p>
                            Al{' '}
                            <strong>
                                termine dei nostri percorsi formativi
                            </strong>{' '}
                            è possibile attivare{' '}
                            <strong>
                                consulenze progettuali e pedagogiche
                            </strong>
                            , fortemente interconnesse alla formazione, dedicati
                            al ripensamento, alla riorganizzazione ed
                            eventualmente alla ristrutturazione di{' '}
                            <strong>spazi interni o esterni</strong> agli Asili
                            Nido e Scuole dell’Infanzia, in modo da riflettere
                            la voglia di apprendimento dei bambini che li
                            abitano.
                        </p>
                        <p className="mt-5">
                            Spazi, o meglio <strong>contesti</strong>,
                            articolati in <strong>centri di interesse</strong>{' '}
                            per sostenere l’incontro a piccolo gruppo e per
                            offrire plurime e diversificate possibilità di
                            esplorazione e scoperta nell’incontro con diversi
                            linguaggi, permettendo così ai bambini di esprimersi
                            attraverso le proprie competenze uniche e
                            soggettive.
                        </p>
                        <p className="mt-5">
                            <strong>Spazi Interni</strong>
                        </p>
                        <p className="mt-5">
                            Per gli spazi interni si deve tendere ad un
                            miglioramento in ricchezza e creatività dei contesti
                            ludici di apprendimento, dove sono fondamentali i{' '}
                            <strong>
                                materiali non strutturati e gli allestimenti
                            </strong>
                            .
                        </p>
                        <p className="mt-5">
                            Favorire una{' '}
                            <strong>
                                ricerca tattile e sonora dei materiali
                            </strong>{' '}
                            in una esplorazione multisensoriale totale, proporre{' '}
                            <strong>fonti luminose</strong> che amplificano le
                            caratteristiche degli oggetti, sostenere{' '}
                            <strong>i processi creativi e costruttivi</strong>{' '}
                            in spazi idonei per dare valore alle loro esperienze
                            conoscitive complesse, sono solo alcune tracce di
                            ricerca che si traducono in concrete
                            riorganizzazioni degli spazi.
                        </p>
                        <p className="mt-5">
                            <strong>Spazi Esterni</strong>
                        </p>
                        <p className="mt-5">
                            Gli spazi esterni sono luoghi estremamente ricchi di
                            opportunità educative e formative, alcune più
                            intenzionali se pensate dall’adulto, altre più
                            spontanee se guidate direttamente dall’esplorazione
                            e dalla manipolazione da parte dei bambini.
                        </p>
                        <p className="mt-5">
                            Pensare a <strong>zone di quiete</strong> con angoli
                            di tranquillità dedicate anche alla relazione tra
                            pari, a <strong>zone di movimento</strong> per
                            l’esercizio di abilità attraverso percorsi
                            sensoriali, a <strong>zone di gioco</strong>{' '}
                            costruttivo e simbolico è l’inizio di una
                            progettazione che diviene concreta implementazione
                            delle strutture più adatte a tali scopi.
                        </p>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-center text-6xl">
                            Supervisione Metodologica
                        </h2>
                        <p>
                            <strong>Breve percorso</strong> periodico{' '}
                            <strong>di confronto e rielaborazione</strong> in
                            cui i gruppi di lavoro vengono accompagnati nel
                            valutare le metodologie applicate nella propria
                            realtà professionale.
                        </p>
                        <p className="mt-5">
                            Altrimenti detto{' '}
                            <strong>Team Working (fare gruppo)</strong>, la
                            supervisione ha l’obiettivo di consolidare un gruppo
                            di lavoro, creare sinergie che consentano di
                            collaborare per la realizzazione dello scopo comune
                            (mission educativa/professionale).
                        </p>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white">
                        <h2 className="mb-10 text-center text-6xl">Incontri</h2>
                        <h2 className="my-10 text-3xl font-semibold">
                            Genitori "in gioco"
                        </h2>
                        <p className="mt-5">
                            Grazie al gioco e nel gioco è possibile{' '}
                            <strong>riscoprire il mondo infantile</strong>, il
                            proprio e dei propri bambini del Nido e
                            dell’Infanzia, per comprenderlo e conoscerlo{' '}
                            <strong>in tutta la sua totalità</strong>: emotiva,
                            corporea e cognitiva.
                        </p>
                        <p className="mt-5">
                            ReMida Varese propone uno spazio ludico e
                            laboratoriale per i genitori e per genitori/figli
                            che ha lo scopo di essere un’esperienza simbolica,
                            che consente di{' '}
                            <strong>
                                "accorciare" le distanze tra il mondo adulto e
                                l’infanzia
                            </strong>
                            , per ritrovare uno sguardo nuovo e rinnovato, da
                            cui è più semplice fare fiorire riflessioni e
                            condivisioni.
                        </p>
                        <p className="mt-5">
                            Gli <strong>incontri sono quattro</strong> tra cui{' '}
                            <strong>uno dedicato solo ai padri</strong>.
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="grid place-items-center p-2 md:p-10 dark:bg-slate-500 dark:text-white"
                >
                    <div className="">
                        <h2 className="mb-10 text-6xl">Contattaci</h2>
                    </div>
                    <div className="mx-auto w-full p-5 md:w-5/12 md:p-0">
                        {wasSuccessful && (
                            <div className="mb-5 w-full rounded-lg bg-emerald-500 p-5 text-center text-white">
                                {flash.message}
                            </div>
                        )}
                        <form
                            className="space-y-3 rounded-xl bg-gray-200 p-10 text-black shadow-lg dark:bg-slate-600"
                            onSubmit={submit}
                        >
                            <div>
                                <InputLabel
                                    htmlFor="name"
                                    value="Nome Contatto"
                                    className="mb-2 text-xl dark:text-white"
                                />
                                <TextInput
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Nome Contatto"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className={`w-full ${errors.name && 'border-red-500'}`}
                                />
                                {errors.name && (
                                    <InputError message={errors.name} />
                                )}
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="email"
                                    value="Indirizzo Email"
                                    className="mb-2 text-xl dark:text-white"
                                />
                                <TextInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="Indirizzo Email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    className={`w-full ${errors.email && 'border-red-500'}`}
                                />
                                {errors.email && (
                                    <InputError message={errors.email} />
                                )}
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="phone"
                                    value="Numero di Telefono"
                                    className="mb-2 text-xl dark:text-white"
                                />
                                <TextInput
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    required
                                    placeholder="Numero di Telefono"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData('phone', e.target.value)
                                    }
                                    className={`w-full ${errors.phone && 'border-red-500'}`}
                                />
                                {errors.phone && (
                                    <InputError message={errors.phone} />
                                )}
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="message"
                                    value="Il Tuo Messaggio"
                                    className="mb-2 text-xl dark:text-white"
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Scrivi il tuo messaggio qui..."
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className={`mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm ${errors.message && 'border-red-500'}`}
                                    rows="4"
                                />

                                {errors.message && (
                                    <InputError message={errors.message} />
                                )}
                            </div>
                            <div className="flex items-center text-black dark:text-white">
                                <input
                                    type="checkbox"
                                    required
                                    checked={data.privacy}
                                    onChange={(e) =>
                                        setData('privacy', e.target.checked)
                                    }
                                    className="mr-2"
                                />
                                <p
                                    className={`${errors.privacy && 'text-red-500'}`}
                                >
                                    Dichiaro di aver preso visione della{' '}
                                    <a
                                        href="#"
                                        className="inline text-red-500 underline"
                                    >
                                        Privacy Policy
                                    </a>
                                    , pertanto presto il mio consenso al
                                    trattamento dei dati per ricevere le
                                    informazioni richieste.
                                </p>
                                {errors.privacy && (
                                    <InputError>{errors.privacy}</InputError>
                                )}
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="mt-2 w-full rounded-3xl bg-red-800 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-900"
                                    disabled={processing}
                                >
                                    Invia
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.section>
            </PublicLayout>
        </>
    );
}
