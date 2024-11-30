import { Head, Link } from '@inertiajs/react';
import { variants } from '@/Constants';
import PublicLayout from '@/Layouts/PublicLayout';
import { motion } from 'framer-motion';
import ButtonLink from '@/Components/ButtonLink';
import Avatar from '@/Components/Avatar';

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
                <section className="mt-[110px] grid h-screen grid-cols-1 bg-black/60 md:grid-cols-3 md:p-0 lg:mt-0">
                    <div className="flex items-center justify-center text-white">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className="w-9/12 py-5 text-3xl md:text-6xl"
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
                    <div className="col-span-2">
                        <img
                            className="h-screen w-full object-cover opacity-90"
                            src="/images/expertise.webp"
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
                        <h2 className="pb-10 text-6xl">
                            Riferimenti Culturali Pedagogici
                        </h2>
                        <div className="grid max-w-7xl grid-cols-1 justify-items-center gap-10 md:grid-cols-4">
                            <Avatar
                                source="/images/JD.webp"
                                href="https://it.wikipedia.org/wiki/John_Dewey"
                                anchorText="John Dewey"
                                className="border-slate-700"
                                description="Considerato il fondatore del pragmatismo educativo, ha sviluppato una concezione dell'esperienza come rapporto tra uomo e ambiente, dove l'uomo non è uno spettatore passivo, ma interagisce con ciò che lo circonda. L'educazione deve aprire la via a nuove esperienze ed al potenziamento di tutte le opportunità per uno sviluppo ulteriore. Secondo lui la creatività è educabile, e contesti formativi nei quali sia prevista e promossa la divergenza, intesa anche solo come possibilità/necessità di non adeguarsi a comportamenti standardizzati e univoci, sono capaci di allenare e rinforzare atteggiamenti e comportamenti creativi. Ha coniato il concetto dell’”imparare facendo”."
                            />
                            <Avatar
                                source="/images/VLS.webp"
                                href="https://www.stateofmind.it/bibliography/vygotskij-lev-semenovic/"
                                anchorText="Lev S. Vygotskij"
                                className="border-slate-700"
                                description="Psicologo e pedagogista russo, promuove l’idea che l’apprendimento è un processo sociale e collaborativo. Gli individui imparano attraverso l’interazione con gli altri, attraverso la discussione e la risoluzione dei problemi insieme. Afferma inoltre che l’Immaginazione e la creatività nell’età infantile si combinano in forme nuove di elementi provenienti dall’esperienza, ritrasformando i dati di realtà con una nuova forza attiva."
                            />
                            <Avatar
                                source="/images/LM.webp"
                                href="https://www.reggiochildren.it/reggio-emilia-approach/loris-malaguzzi/"
                                anchorText="Loris Malaguzzi"
                                className="border-slate-700"
                                description="Ha creato la teoria del gioco dei bambini, che intende l'azione del gioco come un processo attraverso il quale si impara dall'ambiente e attraverso l'esperienza. La teoria afferma che il modo più efficace per gli educatori di aiutare i bambini a imparare è creare un ambiente in cui si sentano liberi di esplorare, sperimentare e giocare con diversi materiali quotidiani utilizzando un approccio creativo. Nel 1968 Loris Malaguzzi fonda il Reggio Emilia approach, che mette al centro il bambino stesso come elemento principale dell'educazione primaria. Il Reggio Emilia Approach afferma che i bambini sono attivamente coinvolti nel proprio processo di apprendimento e che questo può essere supportato dagli adulti che lavorano con loro. Lo scopo di questo metodo era quello di fornire un approccio più pratico e centrato sul bambino."
                            />
                            <Avatar
                                source="/images/EG.webp"
                                href="https://www.elinoreducare.org/elinor-goldschmied/"
                                anchorText="Elinor Violet Sinnott Goldschmied"
                                className="border-slate-700"
                                description="Educatrice e pedagogista britannica che ha vissuto e lavorato anche in Italia, teorizza e definisce il “gioco euristico”: attività di esplorazione e ricerca che permette ai bambini del nido, in totale autonomia, attraverso prove ed errori, di sperimentare e mettere in relazione un insieme di materiali, indagando in questo modo le proprietà e le possibili combinazioni. Goldsmchied è teorica anche del noto “cestino dei tesori”, il naturale precursore del gioco euristico."
                            />
                            <Avatar
                                source="/images/BM.webp"
                                href="https://www.treccani.it/enciclopedia/bruno-munari/"
                                anchorText="Bruno Munari"
                                className="border-slate-700"
                                description="Uno dei massimi protagonisti dell’arte, del design e della grafica del XX secolo che – come spiega l’enciclopedia Treccani nella voce a lui dedicata – ha mantenuto inalterata la sua estrosità creativa a sostegno dell’indagine costruttiva della forma attraverso sperimentazioni visive e tattili e, insieme, la sua grande capacità di comunicarla con parole, oggetti, giocattoli."
                            />
                            <Avatar
                                source="/images/GR.webp"
                                href="https://100giannirodari.com/"
                                anchorText="Gianni Rodari"
                                className="border-slate-700"
                                description="Nel suo libro “La grammatica della fantasia” introduce ai processi della fantasia e delle regole della creazione per renderne l’uso accessibile a tutti. L’autore non consegna però un ricettario per costruire storie, ma offre materia prima, idee, occasioni, riflessioni utilissime per superare la muraglia della routine scolastica e per riconoscere il ruolo fondamentale della creatività all’interno del processo educativo."
                            />
                            <Avatar
                                source="/images/MG.webp"
                                href="https://bambinienatura.it/tipi-b-e-n/monica/"
                                anchorText="Monica Guerra"
                                className="border-slate-700"
                                description="È professoressa ordinaria di Pedagogia generale e sociale e docente di Pedagogia dell'infanzia e di Coordinamento dei servizi educativi presso il Dipartimento di Scienze Umane per la Formazione dell'Università di Milano-Bicocca, dove coordina il Master in Educazione e Natura. La sua ricerca si occupa di modelli di innovazione scolastica e di esperienze educative in e outdoor."
                            />
                        </div>
                    </div>
                </motion.section>
            </PublicLayout>
        </>
    );
}
