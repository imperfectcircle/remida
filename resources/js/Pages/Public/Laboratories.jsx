import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { variants } from '@/Constants';
import { motion } from 'framer-motion';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

/**
 *
 * TODO Form per Laboratori
 */

export default function Laboratories() {
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
                        <p className="mt-5">
                            Il materiale non strutturato, per le sue
                            caratteristiche, offre infinite possibilità al
                            bambino di questa età: concetti come pieno e vuoto,
                            dentro e fuori, alto e basso, luce e ombra,
                            l’equilibrio e la caduta (ecc.) sono conosciuti e
                            acquisiti da esperienze dirette che egli fa con le
                            mani e con il corpo, per la sua mente.
                        </p>

                        <p className="mt-5">
                            È possibile{' '}
                            <strong>
                                organizzare i seguenti laboratori con la
                                presenza dei genitori, per la festa finale
                                dell’anno scolastico e/o per la promozione del
                                proprio Asilo
                            </strong>
                            .
                        </p>
                        <h2 className="my-10 text-3xl font-semibold">
                            LABORATORI PERMANENTI PRESSO IL CHIOSTRO DI VOLTORRE
                        </h2>
                        <p className="mt-5">
                            Remida Varese ha allestito presso la sua sede dei
                            contesti ludici, pronti ad accogliere fino a 25
                            bambini per ognuna delle seguenti attività:
                        </p>
                        <p className="mt-5">
                            <strong>TAPPETO DI TESORI</strong> – ESPLORAZIONE
                            SENSORIALE POLIMATERICA – 12/18 mesi
                        </p>
                        <p className="mt-5">
                            Luogo di scoperte e ricerche sensoriali dove i bimbi
                            entrano in relazione con i diversi materiali per
                            toccarli, allinearli, impilarli, scuoterli,
                            infilarli l’uno dentro l’altro. Il tatto, la vista,
                            l’udito indagano e scoprono le potenzialità infinite
                            dei materiali presenti, in un’armonia che genera
                            nuove combinazioni e possibilità costruttive.
                        </p>
                        <p className="mt-5">
                            <strong>CHE COMBINAZIONE!</strong> – GIOCO EURISTICO
                            – 12/24 mesi
                        </p>
                        <p className="mt-5">
                            “Cosa posso fare con questo oggetto? Come funziona?
                            “
                        </p>
                        <p className="mt-5">
                            Il laboratorio euristico è uno spazio dedicato di
                            libera sperimentazione e scoperta, di materiali non
                            consueti: il materiale non strutturato è
                            classificato per categorie di oggetti, selezionati
                            accuratamente in quantità e qualità per offrire al
                            bambino la possibilità di raggiungere nuove mete e
                            scoperte autonome (Eureka!).
                        </p>
                        <p className="mt-5">
                            Una proposta educativa che offre agli educatori la
                            possibilità di trovare un nuovo sguardo sui bambini,
                            al loro desiderio di sperimentazione e scoperta, per
                            comprendere e conoscere il bambino in tutta la sua
                            totalità: emotiva, corporea, cognitiva.
                        </p>
                        <p className="mt-5">
                            <strong>EQUILIBRI</strong> – MOVIMENTO E SCOPERTA –
                            12/24 mesi
                        </p>
                        <p className="mt-5">
                            Questo contesto con gioco a terra permette di
                            coniugare il desiderio di fare grandi spostamenti,
                            sperimentare e ricercare l’equilibrio degli oggetti
                            e del loro corpo. Esperienze di gioco in movimento
                            come: impilare, costruire torri e farle cadere,
                            allineare, costruire camminamenti per provare
                            equilibri con il corpo, trasportare e sperimentare
                            il peso, la leggerezza, la stabilità.
                        </p>
                        <p className="mt-5">
                            <strong>CANTIERE</strong> – MACRO COSTRUTTIVITÁ –
                            12/24 mesi, Sezione Primavera
                        </p>
                        <p className="mt-5">
                            Il materiale non strutturato induce esplorazioni di
                            equilibri, piani inclinati, incastri per la
                            costruzione di architetture fantastiche per forma,
                            dimensione, colore. Si sviluppa un processo in
                            continua trasformazione dove abilità fisiche e
                            matematiche si mettono alla prova, favorendo la
                            collaborazione e la cooperazione tra i partecipanti.
                        </p>
                        <h2 className="my-10 text-3xl font-semibold">
                            LABORATORI ITINERANTI PRESSO LA SEDE DELLE SCUOLE
                        </h2>
                        <p className="mt-5">
                            Gli stessi laboratori si possono realizzare nelle
                            vostre sedi, in spazi idonei. Una sola attività o
                            una serie di esperienze evitando la trasferta verso
                            il Chiostro di Voltorre,{' '}
                            <strong>con o senza genitori</strong>.
                        </p>
                        <p className="mt-5">
                            <strong>
                                Compilate il form sottostante per ricevere una
                                proposta ad hoc.
                            </strong>
                        </p>
                    </div>
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
                        <p className="mt-5">
                            Fruizione di stimoli e informazioni provenienti dai
                            materiali, dallo spazio e dalle loro interazioni,
                            rielaborazione e produzione creativa sono le
                            attività che prendono vita nei laboratori per
                            l’infanzia di Remida Varese, verso l’obiettivo
                            ultimo del potenziamento del pensiero divergente,
                            contraddistinto da flessibilità, fluidità,
                            originalità, elaborazione, valutazione, cambiamento
                            e innovazione.
                        </p>
                        <h2 className="my-10 text-3xl font-semibold">
                            LABORATORI PERMANENTI PRESSO IL CHIOSTRO DI VOLTORRE
                        </h2>
                        <p className="mt-5">
                            Remida Varese ha allestito presso la sua sede dei
                            contesti ludici di apprendimento per ognuna delle
                            seguenti attività, che una volta terminate prevedono
                            il riordino dei materiali riutilizzati:
                        </p>
                        <p className="mt-5">
                            <strong>CANTIERE</strong> – MACRO COSTRUTTIVITÁ –
                            primo, secondo e terzo anno
                        </p>
                        <p className="mt-5">
                            Il materiale non strutturato induce esplorazioni di
                            equilibri, piani inclinati, incastri per la
                            costruzione di architetture fantastiche per forma,
                            dimensione, colore. Si sviluppa un processo in
                            continua trasformazione dove abilità fisiche e
                            matematiche si mettono alla prova, favorendo la
                            collaborazione e la cooperazione tra i partecipanti.
                        </p>
                        <p className="mt-5">
                            <strong>CORNICI MATERICHE</strong> – MICRO
                            CREATIVITÁ – primo, secondo e terzo anno
                        </p>
                        <p className="mt-5">
                            Propone un percorso creativo e immaginativo
                            attraverso il riuso di piccoli materiali non
                            strutturati. La varietà per tipologia, forma, colore
                            dei materiali messi a disposizione dei bambini
                            stimola l’espressività insita in ognuno. Si
                            privilegia il processo creativo piuttosto che il
                            prodotto finale, si induce la riflessione su quello
                            che si sta facendo, si manifesta la voglia di
                            condividere il significato dell’opera realizzata.
                        </p>
                        <p className="mt-5">
                            <strong>LUCI E OMBRE</strong> – ESPLORAZIONE E
                            CREATIVITÁ – primo, secondo e terzo anno
                        </p>
                        <p className="mt-5">
                            In un ambiente oscurato si esplorano le potenzialità
                            dei materiali non strutturati in relazione alla
                            luce, diffusa dal basso o proiettata verso una
                            parete. In un continuo gioco individuale o di gruppo
                            si apprendono mutazioni di tonalità, di grandezza,
                            di combinazione cromatica interagendo con le ombre
                            che si possono creare. La percezione degli oggetti
                            varia permettendo apprendimenti in relazione anche
                            al corpo e al movimento.
                        </p>
                        <p className="mt-5">
                            <strong>GIOCARE CON I SUONI</strong> – SONORITÁ E
                            COOPERAZIONE – secondo e terzo anno
                        </p>
                        <p className="mt-5">
                            Tutto suona, i corpi, gli ambienti, la natura e i
                            materiali che ci circondano. Il laboratorio propone
                            giochi con cui imparare a riconoscere e riprodurre i
                            diversi suoni e ritmi che scaturiscono dalla
                            percussione, dallo scuotimento, dall’oscillamento
                            degli oggetti messi a disposizione dei partecipanti.
                            Guidati dal musicoterapista Antonio Testa il gruppo
                            di partecipanti diviene una piccola orchestra
                            attraverso l’ascolto degli altri, la concentrazione
                            e la cooperazione.
                        </p>
                        <h2 className="my-10 text-3xl font-semibold">
                            LABORATORI ITINERANTI PRESSO LA SEDE DELLE SCUOLE
                        </h2>
                        <p className="mt-5">
                            La stessa tipologia di laboratori può giungere nelle
                            vostre sedi. Un solo laboratorio o una serie di
                            esperienze senza la trasferta verso il Chiostro di
                            Voltorre. Siamo in grado di trasportare materiali e
                            attrezzature in spazi idonei, visionati in
                            precedenza.
                        </p>
                        <p className="mt-5">
                            <strong>
                                Compilate il form sottostante per ricevere una
                                proposta ad hoc.
                            </strong>
                        </p>
                    </div>
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
                        <p className="mt-5">
                            Remida Varese per la scuola primaria adotta un
                            metodo pedagogico rigoroso e mirato a mantenere un
                            atteggiamento al contempo aperto e analitico nei
                            confronti delle cose, di quelle sconosciute, ma
                            soprattutto di quelle conosciute.
                        </p>
                        <p className="mt-5">
                            Remida Varese offre laboratori{' '}
                            <strong>
                                permanenti presso il Chiostro di Voltorre a
                                Gavirate
                            </strong>
                            , che toccano anche{' '}
                            <strong>argomenti storici</strong> (le origini del
                            Monastero) e <strong>ambientali </strong>(con una
                            eventuale passeggiata in sicurezza sulle sponde del
                            lago di Varese)
                        </p>
                        <h2 className="my-10 text-3xl font-semibold">
                            LABORATORI PERMANENTI PRESSO IL CHIOSTRO DI VOLTORRE
                        </h2>
                        <p className="mt-5">
                            Remida Varese ha allestito presso la sua sede dei
                            contesti ludici di apprendimento per ognuna delle
                            seguenti attività, che una volta terminate prevedono
                            il riordino dei materiali riutilizzati:
                        </p>
                        <p className="mt-5">
                            <strong>TERRE DI MEZZO</strong> – GIORNATA DI
                            ACCOGLIENZA A INIZIO ANNO SCOLASTICO – primo anno
                        </p>
                        <p className="mt-5">
                            Nella fase passaggio dalla Scuola dell’infanzia alla
                            Scuola Primaria, il primo periodo di socializzazione
                            e accoglienza permette di costruire un clima
                            inclusivo e non discriminante. Proponiamo una
                            giornata di attività creative di gruppo che
                            sviluppano la cooperazione divertendosi,
                            naturalmente con materiali non strutturati.
                        </p>
                        <p className="mt-5">
                            <strong>TANGRAM</strong> – LOGICA, IMMAGINAZIONE E
                            COOPERAZIONE – primo e secondo anno
                        </p>
                        <p className="mt-5">
                            Il Tangram è un gioco-rompicapo antichissimo di
                            origine orientale, costituito da sette tavole il cui
                            scopo è formare una figura utilizzando tutti i pezzi
                            senza sovrapposizioni. Sviluppa l’immaginazione e la
                            fantasia per creare sagome di uomini, animali, case,
                            ecc..
                        </p>
                        <p className="mt-5">
                            È un importante esercizio di concentrazione e
                            conoscenza delle forme geometriche, della loro
                            visione e composizione nello spazio. Nelle scuole
                            primarie del nord Europa è inserito nella
                            programmazione didattica di geometria e di altre
                            discipline.
                        </p>
                        <p className="mt-5">
                            Remida Varese riutilizza materiali non strutturati
                            sia per costruire i tangram di varie dimensioni, sia
                            per personalizzare le configurazioni realizzate.
                        </p>
                        <p className="mt-5">
                            <strong>CITTÁ INFINITA</strong> – MACRO
                            COSTRUTTIVITÁ E COOPERAZIONE – tutto il quinquennio
                        </p>
                        <p className="mt-5">
                            Un’esperienza collettiva di creazione e costruzione
                            di spazi urbani sempre nuovi e unici. La città
                            diventa il luogo delle relazioni e del dialogo.
                            Partendo dalla propria casa, ogni partecipante
                            incrementa il valore della cooperazione realizzando
                            insieme ad altri spazi ed edifici condivisi.
                        </p>
                        <p className="mt-5">
                            <strong>ANIMALIAMO</strong> – CREATIVITÁ,
                            COOPERAZIONE E NARRAZIONE – tutto il quinquennio
                        </p>
                        <p className="mt-5">
                            Partendo dalla visione dell’albo illustrato
                            “Bestiario universale”, gli studenti sono stimolati
                            a progettare e realizzare in coppia un animale
                            fantastico, riutilizzando piccoli materiali da
                            combinare tra loro. Successivamente le superbestie
                            si presentano al resto del gruppo, specificando
                            caratteristiche fisiche ed etologiche uniche e
                            irripetibili!
                        </p>
                        <p className="mt-5">
                            <strong>LUCI E OMBRE</strong> – ESPLORAZIONE E
                            CREATIVITÁ – tutto il quinquennio
                        </p>
                        <p className="mt-5">
                            In un ambiente oscurato si esplorano le potenzialità
                            dei materiali non strutturati in relazione alla
                            luce, diffusa dal basso o proiettata verso una
                            parete. In un continuo gioco individuale o di gruppo
                            si apprendono mutazioni di tonalità, di grandezza,
                            di combinazione cromatica interagendo con le ombre
                            che si possono creare. La percezione degli oggetti
                            varia permettendo apprendimenti in relazione anche
                            al corpo e al movimento. Si potranno infine
                            comprendere fenomeni come l’eclissi e l’alternanza
                            delle stagioni
                        </p>
                        <p className="mt-5">
                            <strong>GIOCARE CON I SUONI</strong> – SONORITÁ E
                            COOPERAZIONE – tutto il quinquennio
                        </p>
                        <p className="mt-5">
                            I materiali non strutturati nascondono svariate
                            potenzialità sonore. Il laboratorio propone indagini
                            attraverso la relazione tra il corpo, le mani, i
                            gesti e le qualità sonore dei vari materiali, anche
                            in combinazione tra loro: nascono così suoni e ritmi
                            che scaturiscono dalla percussione, dallo
                            scuotimento, dall’oscillamento degli oggetti messi a
                            disposizione dei partecipanti. Guidati dal
                            musicoterapista Antonio Testa il gruppo di
                            partecipanti diviene una piccola orchestra
                            attraverso l’ascolto degli altri, la concentrazione
                            e la cooperazione.
                        </p>
                        <h2 className="my-10 text-3xl font-semibold">
                            LABORATORI ITINERANTI PRESSO LA SEDE DELLE SCUOLE
                        </h2>
                        <p className="mt-5">
                            Gli stessi laboratori si possono realizzare nelle
                            vostre sedi, in spazi idonei. Una sola attività o
                            una serie di esperienze evitando la trasferta verso
                            il Chiostro di Voltorre,{' '}
                            <strong>con o senza genitori</strong>.
                        </p>
                        <p className="mt-5">
                            <strong>
                                Compilate il form sottostante per ricevere una
                                proposta ad hoc.
                            </strong>
                        </p>
                    </div>
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
                        <h2 className="my-10 text-3xl font-semibold">
                            LABORATORI PERMANENTI PRESSO IL CHIOSTRO DI VOLTORRE
                        </h2>
                        <p className="mt-5">
                            Remida Varese ha allestito presso la sua sede dei
                            contesti ludici di apprendimento per ognuna delle
                            seguenti attività, che una volta terminate prevedono
                            il riordino dei materiali riutilizzati:
                        </p>
                        <p className="mt-5">
                            <strong>
                                GIORNATA DI ACCOGLIENZA A INIZIO ANNO SCOLASTICO
                            </strong>{' '}
                            – classi di 1° secondaria di primo e secondo grado
                        </p>
                        <p className="mt-5">
                            Gli obiettivi primari del{' '}
                            <strong>periodo di accoglienza</strong> nel nuovo
                            istituto di scuola secondaria sono di disporre
                            l’allievo/a ad un{' '}
                            <strong>
                                approccio collaborativo con gli insegnanti e con
                                i nuovi compagni/e di classe
                            </strong>{' '}
                            e di consolidare una seria motivazione
                            all’apprendimento e allo studio. Per concorrere alla
                            migliore riuscita dell’accoglienza proponiamo una
                            serie di attività creative e di gruppo per un’intera
                            giornata, compreso un pranzo al sacco condiviso.
                        </p>
                        <p className="mt-5">
                            <strong>CORPO ALLE EMOZIONI</strong> – CREATIVITÁ E
                            CONSAPEVOLEZZA – tutte le classi
                        </p>
                        <p className="mt-5">
                            Laboratorio creativo in piccoli gruppi adattabile, a
                            livelli diversi, a tutte le classi della Scuola
                            secondaria. Stimoliamo gli studenti in piccoli
                            gruppi a scegliere un’emozione e a rappresentarla
                            tridimensionalmente con i materiali non strutturati
                            a disposizione. Rabbia, paura, tristezza, ansia,
                            vergogna, felicità e altre emozioni offrono
                            un'esperienza unica e coinvolgente per esprimere e
                            scoprire nuove sfumature del proprio mondo
                            interiore.
                        </p>
                        <p className="mt-5">
                            <strong>CITTÁ SOSTENIBILE</strong> – MACRO
                            COSTRUTTIVITÁ E COOPERAZIONE – tutto il quinquennio
                        </p>
                        <p className="mt-5">
                            Utilizzando i linguaggi universali della creatività
                            e della manualità, ogni gruppo di adolescenti
                            progetta e realizza la propria città, concentrandosi
                            sugli aspetti della sostenibilità ambientale e
                            sociale.
                        </p>
                        <p className="mt-5">
                            <strong>RITRATTI</strong> – CREATIVITÁ, COOPERAZIONE
                            E NARRAZIONE – tutto il quinquennio
                        </p>
                        <p className="mt-5">
                            L’auto ed etero rappresentazione offrono molti
                            spunti, attraverso il filtro della creatività, per
                            parlare di sé ed entrare in relazione con gli altri.
                            Esprimere la personalità con l’utilizzo di materiali
                            non strutturati su semplici basi di recupero non è
                            solo divertimento, ma definizione divergente
                            dell’identità.
                        </p>
                        <p className="mt-5">
                            <strong>GIOCARE CON I SUONI</strong> – SONORITÁ E
                            COOPERAZIONE
                        </p>
                        <p className="mt-5">
                            Attraverso l’uso dei materiali non strutturati, la
                            creatività e la manualità si ottenere suoni di vario
                            genere. Sperimentando ed analizzando i diversi suoni
                            e timbri ricavabili da oggetti (metalli, plastica,
                            carta e cartoni, legni, pietra ecc.), si eseguiranno
                            semplici brani e sonorizzazioni, formando
                            un’orchestra estemporanea.
                        </p>
                        <h2 className="my-10 text-3xl font-semibold">
                            LABORATORI ITINERANTI PRESSO LA SEDE DELLE SCUOLE
                        </h2>
                        <p className="mt-5">
                            Gli stessi laboratori si possono realizzare nelle
                            vostre sedi, in spazi idonei. Una sola attività o
                            una serie di esperienze evitando la trasferta verso
                            il Chiostro di Voltorre,{' '}
                            <strong>con o senza genitori</strong>.
                        </p>
                        <p className="mt-5">
                            <strong>
                                Compilate il form sottostante per ricevere una
                                proposta ad hoc.
                            </strong>
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
