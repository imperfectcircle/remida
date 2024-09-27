import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { variants } from '@/Constants';
import { motion } from 'framer-motion';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

/**
 *
 * TODO Form per Other
 */

export default function Other() {
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
                    Atri Enti
                </title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/laboratori-per-altri-enti"
                ></link>
            </Head>

            <PublicLayout>
                <section className="other grid h-screen grid-cols-1 bg-black/60 p-5 md:mt-[100px] md:grid-cols-2 md:p-0 lg:mt-0">
                    <div className="flex items-center justify-center text-white">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className="w-9/12 text-3xl md:text-6xl"
                        >
                            <span className="font-bold">
                                Laboratori per Altri Enti
                            </span>

                            <p className="mt-5 text-xl md:text-2xl">
                                <strong>I nostri laboratori</strong> creativi di
                                sensibilizzazione alla sostenibilità ambientale
                                <strong>per famiglie</strong> si possono
                                realizzare{' '}
                                <strong>
                                    durante manifestazioni ed eventi pubblici
                                </strong>{' '}
                                organizzati da Enti Locali, Pro Loco,
                                Associazioni ecc. e
                                <strong>
                                    presso le sedi di organizzazioni
                                </strong>{' '}
                                come Comunità, Centri diurni, RSA, Fondazioni
                                ecc.{' '}
                                <strong>
                                    per ospiti con disabilità, anziani, minori
                                    ecc.
                                </strong>
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
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white">
                        <h2 className="mb-10 text-center text-6xl">
                            Comunità, Centri Diurni, RSA, Fondazioni
                        </h2>
                        <p>
                            <strong>
                                L'arte e la creatività sono linguaggi
                            </strong>{' '}
                            estremamente forti che mettono a disposizione di
                            ciascuna persona di{' '}
                            <strong>
                                qualsiasi età, con o senza disabilità
                            </strong>
                            , uno strumento di comunicazione universale,
                            immediato, diretto, spontaneo, istintivo, privo di
                            filtri. <strong>Il processo creativo</strong>,
                            coinvolgendo le funzioni percettive, attentive e
                            cognitive di una persona, è infatti un esercizio
                            complesso che{' '}
                            <strong>
                                spinge a sviluppare un comportamento coordinato,
                                frutto dell'integrazione di tutte le funzioni
                                psichiche e motorie
                            </strong>
                            .
                        </p>
                        <p className="mt-5">
                            <strong>I nostri laboratori</strong>, da concordare
                            per tipologia con il committente, come sempre
                            proposti attraverso il riutilizzo di materiali di
                            scarto aziendale e artigianale,{' '}
                            <strong>hanno l'obiettivo</strong> di far vivere ai
                            partecipanti una{' '}
                            <strong>sensazione di soddisfazione</strong> per
                            l’opera prodotta ed un altrettanto fondamentale{' '}
                            <strong>senso di rilassamento e benessere</strong>{' '}
                            che il processo creativo è capace di indurre, oltre
                            che la naturale propensione alla sostenibilità
                            ambientale.
                        </p>
                        <p className="mt-5">
                            Hanno collaborato con noi: Fondazione Renato Piatti
                            Onlus di Varese, Il Millepiedi Onlus Coop. Soc. di
                            Varese, RSA Bernacchi di Gavirate
                        </p>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-center text-6xl">
                            Enti Locali, Pro Loco, Associazioni
                        </h2>
                        <p>
                            <strong>
                                Piazze, parchi, aree verdi e tensostrutture
                            </strong>{' '}
                            sono solo alcuni luoghi dove vari Enti organizzano
                            eventi e dove le famiglie con bambini si ritrovano
                            per passare del buon tempo assieme. Sono punti di
                            aggregazione in cui si sviluppano dei rapporti
                            umani, sociali e dunque di intrattenimento.{' '}
                            <strong>L'obiettivo delle nostre proposte</strong>,
                            uniche per la loro originalità, è quello di{' '}
                            <strong>promuovere la creatività</strong> con i
                            materiali non strutturati e{' '}
                            <strong>
                                sensibilizzare i partecipanti alla sostenibilità
                                ambientale
                            </strong>
                            .
                        </p>
                        <p className="mt-5">
                            Hanno collaborato con noi: Comuni di Varese Busto
                            Arsizio, Gazzada Schianno, Laveno Mombello,
                            Albizzate, Angera, Besozzo, Gorla Maggiore,
                            Sangiano, Pro Loco di Brenta, Oratorio di Travedona
                            Monate, Parco Regionale Campo dei Fiori.
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
            </PublicLayout>
        </>
    );
}
