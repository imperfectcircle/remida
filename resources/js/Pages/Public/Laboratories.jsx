import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { sectionContent, variants } from '@/Constants';
import { motion } from 'framer-motion';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useState } from 'react';

const Modal = ({ isOpen, onClose, content, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="relative z-50 max-h-[80vh] w-[80vw] overflow-y-auto rounded-lg bg-white p-8 dark:bg-slate-700">
                <h2 className="mb-4 text-3xl font-bold">{title}</h2>
                <div
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                <button
                    onClick={onClose}
                    className="mt-4 rounded bg-red-800 px-4 py-2 text-white hover:bg-red-900"
                >
                    Chiudi
                </button>
            </div>
        </div>
    );
};

export default function Laboratories() {
    const { flash } = usePage().props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);

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
        school: '',
        message: '',
        privacy: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.schools'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset('name', 'email', 'phone', 'school', 'message', 'privacy');
                clearErrors();
            },
        });
    };

    return (
        <>
            <Head>
                <title>
                    REMIDA VARESE - Innoviamo con creatività | Laboratori per
                    Scuole
                </title>
                <meta
                    name="description"
                    content="I laboratori proposti si basano su approcci
                                pedagogici che permettono di fare scoperte, di
                                provare e sperimentare, di conoscere, di
                                sbagliare e di apprendere."
                ></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/laboratori-per-scuole"
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
                            <span className="font-bold">
                                Laboratori per Scuole
                            </span>

                            <p className="mt-5 text-xl md:text-2xl">
                                I laboratori proposti si basano su approcci
                                pedagogici che permettono di fare scoperte, di
                                provare e sperimentare, di conoscere, di
                                sbagliare e di apprendere.
                            </p>
                        </motion.h1>
                    </div>
                    <div className="col-span-2">
                        <img
                            className="h-screen w-full object-cover opacity-90"
                            src="/images/laboratories.webp"
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
                            Le idee e la loro realizzazione nascono spontanee
                            nei nostri laboratori, che prevedono la
                            manipolazione attiva dei materiali non strutturati
                            messi a disposizione in contesti appropriati, dove
                            divengono mediatori di apprendimento e strumenti
                            d’indagine per il singolo e per il gruppo che
                            interagisce.
                        </p>
                        <p className="mt-5">
                            <strong>Le proposte</strong> tengono in
                            considerazione le conoscenze e le abilità dei
                            partecipanti, le esigenze di gioco e le tematiche,{' '}
                            <strong>differenziate per fasce d’età</strong> e
                            congruenti con le programmazioni scolastiche.
                        </p>
                        <p className="mt-5">
                            Remida Varese offre laboratori{' '}
                            <strong>
                                permanenti presso il Chiostro di Voltorre
                            </strong>{' '}
                            o <strong>itineranti presso la vostra sede</strong>,
                            con la possibilità di programmare più incontri in
                            modo da avere più tempo nell’esplorazione delle
                            potenzialità dei materiali non strutturati.
                        </p>
                        <p className="mt-5">
                            IMPORTANTE: per quanto riguarda le attività
                            permanenti presso il Chiostro di Voltorre, diamo la
                            possibilità di consumare un pranzo al sacco in
                            autonomia al termine dei laboratori, nei pressi del
                            Chiostro se bel tempo o in spazi coperti in caso di
                            maltempo.
                        </p>
                        <p className="mt-5">
                            Di seguito le proposte educativo/didattiche per
                            l'anno scolastico 2024-2025:
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
                    {/* Sezione Uno */}
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white">
                        <h2 className="mb-10 text-center text-6xl">
                            Asilo Nido e Sezione Primavera
                        </h2>
                        <p>
                            Il bambino da 1 a 3 anni si interessa spontaneamente
                            all’ambiente che lo circonda, scopre e conosce
                            attraverso i sensi e tutto il suo corpo: come un
                            esploratore si muove alla ricerca di ciò che è
                            nuovo, che attira la sua attenzione e, grazie alla
                            ripetizione instancabile, conosce e diventa abile.
                            Sperimentare, scoprire e ripetere sono le azioni
                            attraverso cui il bambino affina le proprie abilità
                            cognitive, manuali, emotive.
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={() => {
                                    setSelectedSection('nido');
                                    setIsModalOpen(true);
                                }}
                                className="mt-5 inline-block rounded-3xl bg-white px-6 py-3 text-black shadow-md transition-colors hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                            >
                                Scopri di più
                            </button>
                        </div>
                    </div>
                    {/* Fine Sezione Uno */}

                    {/* Sezione Due */}
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-center text-6xl">
                            Scuola dell'infanzia
                        </h2>
                        <p>
                            <strong>
                                “non sono sicuro di aver vissuto, dopo
                                l’infanzia” A. de Saint-Exupéry
                            </strong>
                        </p>
                        <p className="mt-5">
                            I laboratori pensati per l’infanzia facilitano
                            attività espressive come quelle di simbolizzazione e
                            narrazione, suggeriscono domande e fanno nascere
                            suggestioni.
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={() => {
                                    setSelectedSection('infanzia');
                                    setIsModalOpen(true);
                                }}
                                className="mt-5 inline-block rounded-3xl bg-black px-6 py-3 text-white shadow-md transition-colors hover:bg-gray-900 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                            >
                                Scopri di più
                            </button>
                        </div>
                    </div>
                    {/* Fine Sezione Due */}

                    {/* Sezione Tre */}
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-center text-6xl">
                            Scuola Primaria
                        </h2>
                        <p>
                            I nostri laboratori sono un luogo di esplorazione e
                            di creatività, sono una pratica del fare, dove lo
                            studente diventa protagonista di un processo di
                            costruzione di conoscenze che gli permettono di
                            essere coinvolto in una situazione collettiva di
                            scambio comunicativo tra pari, di costruzione di
                            apprendimenti significativi.
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={() => {
                                    setSelectedSection('primaria');
                                    setIsModalOpen(true);
                                }}
                                className="mt-5 inline-block rounded-3xl bg-white px-6 py-3 text-black shadow-md transition-colors hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                            >
                                Scopri di più
                            </button>
                        </div>
                    </div>
                    {/* Fine Sezione Tre */}

                    {/* Sezione Quattro */}
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white">
                        <h2 className="mb-10 text-center text-6xl">
                            Scuola Secondaria
                        </h2>
                        <p className="text-2xl">
                            Per le scuole secondarie privilegiamo: un{' '}
                            <strong>
                                metodo esperienziale e socializzante
                            </strong>{' '}
                            per stimolare la curiosità e l’interesse,
                            consolidare le conoscenze e migliorare il
                            coinvolgimento di tutti i partecipanti in ottica
                            inclusiva; <strong>l’interdisciplinarità</strong>{' '}
                            per allenarsi a stabilire connessioni in modo da
                            acquisire un atteggiamento mentale aperto e
                            consapevole;{' '}
                            <strong>l’imparare divertendosi</strong> in cui le
                            attività assecondano la naturale inclinazione degli
                            studenti verso il gioco, predisponendoli ad un
                            atteggiamento positivo e propositivo. Per questi
                            ordini di scuola siamo in grado di{' '}
                            <strong>
                                personalizzare i laboratori a seconda delle
                                vostre richiesta didattiche e curricolari
                            </strong>
                            .
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={() => {
                                    setSelectedSection('secondaria');
                                    setIsModalOpen(true);
                                }}
                                className="mt-5 inline-block rounded-3xl bg-black px-6 py-3 text-white shadow-md transition-colors hover:bg-gray-900 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                            >
                                Scopri di più
                            </button>
                        </div>
                    </div>
                    {/* Fine Sezione Quattro */}
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
                                    htmlFor="school"
                                    value="Seleziona il tipo di Scuola"
                                    className="mb-2 text-xl dark:text-white"
                                />
                                <select
                                    id="school"
                                    name="school"
                                    required
                                    value={data.school}
                                    onChange={(e) =>
                                        setData('school', e.target.value)
                                    }
                                    className={`mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm ${errors.school && 'border-red-500'}`}
                                >
                                    <option value="">
                                        Seleziona il tipo di scuola
                                    </option>
                                    <option value="nido">Nido</option>
                                    <option value="scuola_dell_infanzia">
                                        Scuola dell'infanzia
                                    </option>
                                    <option value="scuola_primaria">
                                        Scuola primaria
                                    </option>
                                    <option value="scuola_secondaria">
                                        Scuola secondaria
                                    </option>
                                </select>
                                {errors.school && (
                                    <InputError message={errors.school} />
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
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={sectionContent[selectedSection]?.title}
                    content={sectionContent[selectedSection]?.content}
                />
            </PublicLayout>
        </>
    );
}
