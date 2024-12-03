import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { variants } from '@/Constants';
import { motion } from 'framer-motion';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

/**
 *
 * TODO Form per Emporio
 */

export default function Emporium() {
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
        post(route('contact.emporium'), {
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
                    REMIDA VARESE - Innoviamo con creatività | Emporio dei
                    Materiali
                </title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/emporio-dei-materiali"
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
                            <span className="font-bold">Emporio</span>

                            <p className="mt-5 text-xl md:text-2xl">
                                Remida Varese recupera dalle aziende, da
                                artigiani, da commercianti materiali in
                                eccedenza e/o destinati allo smaltimento, li
                                espone nell’emporio dei materiali per metterli a
                                disposizione di scuole, associazioni ed enti non
                                a scopo di lucro per attività e progetti
                                socio-educativi o culturali.
                            </p>
                        </motion.h1>
                    </div>
                    <div className="col-span-2">
                        <img
                            className="h-screen w-full object-cover opacity-90"
                            src="/images/emporium.webp"
                            alt=""
                        />
                    </div>
                </section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600"
                >
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white">
                        <h2 className="mb-10 text-center text-6xl">
                            Emporio dei Materiali
                        </h2>
                        <p>
                            In uno spazio apposito presso il Chiostro di
                            Voltorre è stato allestito l’Emporio dei materiali,
                            dove esponiamo con cura{' '}
                            <strong>diverse tipologie di scarti</strong>: stoffe
                            e filati (cotone, lana, seta, cordame sintetico,
                            pizzi, nastri, passamaneria), plastica e derivati
                            (rocchetti, tubi di varie dimensioni, plexiglass,
                            policarbonati, nylon, acetati, prestrusi, gomma
                            piuma, profilati in gomma spugna, imballaggi,
                            contenitori), carta e cartone (fogli di varie
                            dimensioni, rotoli, ritagli, prove di stampa), legno
                            (profili, rimanenze di taglio al laser, pannelli,
                            assi, telai).
                        </p>
                        <p className="mt-5">
                            Sono disponibili anche{' '}
                            <strong>
                                accessori di supporto alle attività educative e
                                creative
                            </strong>
                            , come moquette in agugliato recuperate dopo l’uso,
                            tavoli luminosi di varie dimensioni realizzati da
                            scarti di imballaggi in legno, strutture per
                            travasi, pannelli magnetici da parete, pedane, ecc..
                        </p>
                        <p className="mt-5">
                            <strong>
                                Possono prelevare materiali dall'emporio solo
                                associati
                            </strong>
                            , previa iscrizione ad Altrementi aps compilando il{' '}
                            <a
                                target="_blank"
                                href="/modules/domanda_iscrizione_enti_altrementi_2025.pdf"
                            >
                                Modulo di Iscrizione
                            </a>{' '}
                            e inviandolo all'indirizzo email{' '}
                            <a href="mailto: emporio@remidavarese.it">
                                emporio@remidavarese.it
                            </a>
                        </p>
                        <p className="mt-5 uppercase">
                            <strong>Modalità di Prelievo</strong>
                        </p>
                        <ul className="mt-5">
                            <li>
                                Gli associati possono prelevare i diversi
                                materiali presenti dopo aver prenotato una
                                visita scrivendo a{' '}
                                <a href="mailto:emporio@remidavarese.it">
                                    emporio@remidavarese.it
                                </a>{' '}
                                ,{' '}
                                <strong>
                                    condividendo il progetto che sta alla base
                                    della richiesta di prelievo
                                </strong>
                                .
                            </li>
                            <li>
                                Si concorda a grandi linee tipo e quantità di
                                materiali da asportare, visto che le
                                disponibilità variano da periodo a periodo.
                            </li>
                            <li>
                                Per il trasporto dei materiali è necessario
                                dotarsi di contenitori idonei.
                            </li>
                            <li>
                                Si richiede un contributo economico per ogni
                                prelievo di materiali.
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-center text-6xl">
                            Materiali non Strutturati e Materiali Destrutturati
                        </h2>
                        <p>
                            Il ruolo fondamentale dei materiali sta nella{' '}
                            <strong>
                                crescita cognitiva, sociale ed emotiva
                            </strong>{' '}
                            che il bambino vive nella partecipazione ad attività
                            creative, inseriti in contesti ludico/educativi
                            adeguati.
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
                            Nell’ampio spettro dei materiali, si distinguono i{' '}
                            <strong>materiali</strong> strutturati da quelli{' '}
                            <strong>non strutturati</strong>: i primi sono
                            costituiti da elementi legati tra loro da una
                            precisa rete di relazioni, i secondi sono{' '}
                            <strong>
                                quelli che permettono di spaziare, fantasticare
                                e immaginare, in quanto non rimandano ad un
                                singolo significato o a funzioni specifiche
                            </strong>
                            .
                        </p>
                        <p className="mt-5">
                            A questa distinzione si aggiunge il{' '}
                            <strong>materiale di scarto industriale</strong>,
                            che ha diverse caratteristiche aggiuntive per le
                            quali si parla di <strong>destrutturazione</strong>,
                            ovvero{' '}
                            <strong>
                                l’assenza di un’accezione precedente a quella
                                che può essere data, il non essere mai stati
                                usati e la grande quantità con cui vengono
                                proposti
                            </strong>
                            .
                        </p>
                        <p className="mt-5">
                            Chiara Todeschini e Roberta Vercesi (2017),{' '}
                            <em>Materiali inusuali e creatività</em>, in Monica
                            Guerra (a cura di) Materie Intelligenti, Ed. Junior,
                            Parma
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
