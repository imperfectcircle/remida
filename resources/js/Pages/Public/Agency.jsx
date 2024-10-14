import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { variants } from '@/Constants';
import { motion } from 'framer-motion';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

/**
 *
 * TODO Form per Agency
 */

export default function Agency() {
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
                    REMIDA VARESE - Innoviamo con creatività | Aziende
                </title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/aziende"
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
                            <span className="font-bold">Aziende</span>

                            <p className="mt-5 text-xl md:text-2xl">
                                Partecipare al progetto Remida Varese significa
                                impegnarsi attivamente{' '}
                                <strong>
                                    nella riduzione degli sprechi e nella
                                    promozione di un'economia circolare
                                </strong>
                                , dimostrando concretamente l’impegno per la
                                sostenibilità d’impresa.
                            </p>
                        </motion.h1>
                    </div>
                    <div className="col-span-2">
                        <img
                            className="h-screen w-full object-cover opacity-90"
                            src="/images/agency.webp"
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
                            Con la nostra esperienza siamo in grado di
                            trasformare gli scarti in strumenti educativi,
                            didattici e artistici.
                        </p>
                        <p className="mt-5">
                            Le aziende partner di Remida Varese beneficiano di
                            una <strong>maggiore visibilità</strong> e aumentano
                            la <strong>reputazione aziendale</strong>,
                            associando il proprio marchio a un progetto
                            innovativo e sostenibile riconosciuto a livello sia
                            locale che internazionale.
                        </p>
                        <p className="mt-5">
                            Un’azienda può fornire fornire i propri materiali e
                            diventare partner del progetto Remida Varese con
                            vari tipi di collaborazioni, per impattare
                            positivamente sulla responsabilità socio-ambientale
                            d’impresa e sulla sensibilizzazione dei cittadini
                            del territorio.
                        </p>
                        <p className="mt-5">
                            Negli anni hanno aderito al progetto più di 45 tra
                            aziende, artigiani, commercianti e singoli
                            imprenditori.
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
                            Fornitura Materiali
                        </h2>
                        <p>
                            Per aderire al progetto vi invitiamo a{' '}
                            <strong>contattarci per valutare</strong> insieme
                            quali materiali potrebbero esserci utili, escludendo
                            quelli pericolosi all’utilizzo manuale o troppo
                            sporchi.
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
                            Effettueremo un <strong>sopralluogo</strong> per
                            comprendere meglio la natura e la quantità dei
                            materiali disponibili.
                        </p>
                        <p className="mt-5">
                            Stabiliremo le <strong>modalità operative</strong>{' '}
                            di raccolta più efficienti, minimizzando ogni
                            impatto logistico.
                        </p>
                        <p className="mt-5">
                            <strong>Formalizzeremo</strong> la nostra
                            collaborazione con una <strong>convenzione</strong>{' '}
                            che regolerà la fornitura dei materiali in modo
                            chiaro e trasparente, rispettando le vostre esigenze
                            e tempistiche.
                        </p>
                        <p className="mt-5">
                            Ci sarà un <strong>monitoraggio continuo</strong>{' '}
                            della collaborazione, per apportare eventuali
                            miglioramenti al processo.
                        </p>
                        <p className="mt-5">
                            La{' '}
                            <strong>
                                donazione dei materiali sarà gratuita
                            </strong>{' '}
                            e il <strong>trasporto a nostro carico</strong>.
                        </p>
                        <p className="mt-5">
                            La <strong>donazione dei materiali</strong> da parte
                            dell’azienda aderente al progetto Remida Varese{' '}
                            <strong>
                                non è sottoposta alla normativa relativa alla
                                gestione dei rifiuti
                            </strong>
                            .
                        </p>
                        <p className="mt-5">
                            Collaborare con Remida Varese è un’opportunità per
                            trasformare gli scarti della vostra azienda in
                            risorse utili per la comunità, contribuendo
                            attivamente a un progetto di sostenibilità
                            ambientale e sociale. Vi invitiamo a unirvi a noi in
                            questa missione, per creare insieme un futuro più
                            verde e creativo. Contattateci per ulteriori
                            informazioni e per avviare una collaborazione.
                        </p>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-center text-6xl">
                            Partnership
                        </h2>
                        <p>
                            Per un’impresa migliorare la sostenibilità è
                            strettamente legato al{' '}
                            <strong>miglioramento della reputazione</strong>,
                            alla{' '}
                            <strong>
                                soddisfazione delle aspettative dei dipendenti
                            </strong>{' '}
                            e alla{' '}
                            <strong>
                                maggiore efficienza e riduzione degli sprechi
                            </strong>
                            .
                        </p>
                        <p className="mt-5">
                            Divenire partner del progetto Remida Varese
                            significa <strong>condividere la missione</strong>{' '}
                            di migliorare la sostenibilità sociale e ambientale
                            non solo della propria organizzazione,{' '}
                            <strong>
                                ma dell'intera comunità a cui apparteniamo
                            </strong>
                            .
                        </p>
                        <p className="mt-5">
                            Vi proponiamo una prospettiva diversa nel guardare
                            gli oggetti che apparentemente non hanno più valore,
                            ma che possono “risorgere” grazie ad un riutilizzo
                            creativo, progettando e realizzando insieme{' '}
                            <strong>
                                iniziative sia interne all’azienda sia esterne
                            </strong>
                            , coinvolgendo le scuole, le associazioni, le
                            istituzioni e i cittadini del proprio territorio di
                            riferimento.
                        </p>
                        <p className="mt-5">Le proposte possono essere:</p>
                        <ul className="mt-5">
                            <li>
                                festa creativa con le famiglie dei dipendenti
                            </li>
                            <li>
                                installazioni o eventi artistici realizzati con
                                scarti aziendali o naturali
                            </li>
                            <li>team-building aziendale</li>
                            <li>
                                laboratori con le scuole e le associazioni del
                                territorio
                            </li>
                            <li>
                                festa di comunità insieme agli Enti Locali del
                                territorio
                            </li>
                        </ul>
                        <p className="mt-5">
                            Hanno collaborato con noi, RCS Mediagroup Spa
                            (Corriere della Sera e Gazzetta dello sport) Milano,
                            AON Italia Spa Milano, Sole 24 Spa Milano, Avery
                            Dennison Ris Italia Srl Cadorago, Sielco Srl
                            Buguggiate
                        </p>
                    </div>
                </motion.section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="bg-slate-600 text-white"
                >
                    <h2 className="mb-10 pt-10 text-center text-6xl">
                        Aziende Fornitrici
                    </h2>
                    <div className="mx-auto grid max-w-7xl grid-cols-1 py-10 text-2xl md:grid-cols-3 md:gap-10">
                        <div className="">
                            <p className="mb-3">Almar Snc - Gavirate</p>
                            <p className="mb-3">Bel-Go Briko Srl Varese</p>
                            <p className="mb-3">
                                Colorificio Papotti Srl Buguggiate
                            </p>
                            <p className="mb-3">Crs maglieria Srl Varese</p>
                            <p className="mb-3">D&S Srl Galliate</p>
                            <p className="mb-3">
                                Elmec informatica Spa Brunello
                            </p>
                            <p className="mb-3">Eurofilm Srl Vedano Olona</p>
                            <p className="mb-3">
                                Grossoni Legno Srl Somma Lombardo
                            </p>
                            <p className="mb-3">
                                Ilma Plastica Srl Oltrona di Gavirate
                            </p>
                            <p className="mb-3">IPL Spa Besozzo</p>
                            <p className="mb-3">Lati Spa Vedano Olona</p>
                            <p className="mb-3">LC Sas Cassano Magnago</p>
                            <p className="mb-3">Limenta Srl Busto Arsizio</p>
                            <p className="mb-3">Link.it Srl Buguggiate</p>
                        </div>
                        <div className="">
                            <p className="mb-3">Maglificio Elisa Srl Varese</p>
                            <p className="mb-3">Mascioni Spa Cuvio</p>
                            <p className="mb-3">Merlett Spa Daverio</p>
                            <p className="mb-3">
                                Mirage Spa Venegono Inferiore
                            </p>
                            <p className="mb-3">Miroglio Gruppo Spa Alba</p>
                            <p className="mb-3">Montplast Srl Arese</p>
                            <p className="mb-3">Nice Srl Albizzate</p>
                            <p className="mb-3">Nuova DIBI Snc Besozzo</p>
                            <p className="mb-3">ODB Magneti Srl Cuveglio</p>
                            <p className="mb-3">Polinelli srl Daverio</p>
                            <p className="mb-3">
                                Pusterla 1880 Spa Venegono Inferiore
                            </p>
                            <p className="mb-3">Radice Gomma Srl Origgio</p>
                            <p className="mb-3">
                                Rivestimenti speciali Srl Varese
                            </p>
                            <p className="mb-3">
                                Stamperia di Magnago Srl Magnago{' '}
                            </p>
                        </div>
                        <div className="">
                            <p className="mb-3">Scenica Srl Rescaldina</p>
                            <p className="mb-3">Seprio Plast Srl Tradate</p>
                            <p className="mb-3">
                                Servi Grafiche Spa Busto Arsizio
                            </p>
                            <p className="mb-3">
                                Tacchificio Villa Cortese Srl Villa Cortese
                            </p>
                            <p className="mb-3">
                                Tessitura Arnetta Srl Gazzada Schianno
                            </p>
                            <p className="mb-3">
                                Tessitura Denna Srl Busto Arsizio
                            </p>
                            <p className="mb-3">
                                Tessitura Vignetta Srl Bodio Lomnago
                            </p>
                            <p className="mb-3">
                                Traflex plastic Srl Casale Litta
                            </p>
                            <p className="mb-3">Tre60 Snc Milano</p>
                            <p className="mb-3">Verve Spa Venegono Superiore</p>
                            <p className="mb-3">
                                Virex gomma Srl Somma Lombardo
                            </p>
                            <p className="mb-3">Yamamay Spa Gallarate</p>
                            <p className="mb-3">Zago Sas Crosio della Valle</p>
                        </div>
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
