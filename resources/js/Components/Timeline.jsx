import NumberTicker from '@/shadcn/magicui/number-ticker';
import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';

export default function TimelineComponent() {
    return (
        <Timeline>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Title>LABORATORI SCOLASTICI</Timeline.Title>
                    <Timeline.Body>
                        Attività creative, di apprendimento e di socializzazione
                        con gruppi di bambini di Asilo Nido, Scuole d’Infanzia,
                        Scuola Primaria, ragazzi di Scuola Secondaria di Primo e
                        Secondo Grado, svolti al Chiostro di Voltorre o
                        itineranti presso le sedi dei committenti.
                        <NumberTicker
                            value="454"
                            className="ml-10 text-3xl font-bold text-black"
                        />
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Title>CORSI DI FORMAZIONE</Timeline.Title>
                    <Timeline.Body>
                        Percorsi sulla promozione della creatività con materiali
                        non strutturati, interventi sull’organizzazione di
                        attività e contesti di apprendimento per Asili e Scuole,
                        sia Pubbliche che Paritarie e Private
                        <NumberTicker
                            value="58"
                            className="ml-10 text-3xl font-bold text-black"
                        />
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Title>
                        MATERIALE NON STRUTTURATO RECUPERATO DA AZIENDE E
                        ARTIGIANI
                    </Timeline.Title>
                    <Timeline.Body>
                        Legni, corde, plastiche di vario genere, cartoni, carta,
                        metalli, stoffe, spugne, feltro, magneti, sughero,
                        pizzi, valorizzato in Quintali
                        <NumberTicker
                            value="45"
                            className="ml-10 text-3xl font-bold text-black"
                        />
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Title>AZIENDE</Timeline.Title>
                    <Timeline.Body>
                        Realtà grandi e piccole, multinazionali e singoli
                        artigiani della nostra zona che devolvono gratuitamente
                        i loro scarti, le loro rimanenze di magazzino, i loro
                        sottoprodotti a Remida Varese
                        <NumberTicker
                            value="35"
                            className="ml-10 text-3xl font-bold text-black"
                        />
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Title>PARTECIPANTI ATTIVI</Timeline.Title>
                    <Timeline.Body>
                        Bambini, adulti, anziani, famiglie intere che hanno
                        frequentato la nostra sede o hanno partecipato alle
                        nostre attività itineranti in piazze, parchi e altri
                        luoghi comunitari nel 2023
                        <NumberTicker
                            value="3650"
                            className="ml-10 text-3xl font-bold text-black"
                        />
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    );
}
