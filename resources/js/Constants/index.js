export const variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.5 },
    },
};

export const EVENT_STATUS_CLASS_MAP = {
    unpublished: 'bg-red-500 ',
    published: 'bg-green-500',
};
export const EVENT_STATUS_TEXT_MAP = {
    unpublished: 'Non Pubblicato',
    published: 'Pubblicato',
};

export const COLLABORATION_ARRAY = [
    {
        title: 'Comune di varese',
        description: 'Manifestazione Reseed 2012.',
    },
    {
        title: 'Comune di Busto Arsizio',
        description: "Tappa del giro d'Italia 2012 e RiParty.",
    },
    {
        title: 'Comune di Gazzada Schianno',
        description: 'Manifestazione InterKommunale 2012.',
    },
    {
        title: 'Comune di Laveno Mombello',
        description: 'Museo Midec di Cerro',
    },
    {
        title: 'Comune di Albizzate',
        description: 'Manifestazione RiusiAMO Albizzate',
    },
    {
        title: 'Comune di Comerio',
        description: 'Festival di MicroCosmi',
    },
    {
        title: 'Comune di Oggiona Santo Stefano',
        description: 'Festival O.S.A.',
    },
    {
        title: 'Comune di Cernobbio',
        description: 'Manifestazione Family@work 2013',
    },
    {
        title: 'Join Research Center UE di Ispra',
        description: 'Open Day 2013',
    },
    {
        title: 'Oratorio di Masnago - Varese',
        description: 'Palio dei Rioni 2012',
    },
    {
        title: 'Cascina Cuccagna - Milano',
        description: "Fuori Salone del Mobile 2013 - Evento 'Oggi domani ieri'",
    },
    {
        title: 'e ancora:',
        description:
            'Comune di Angera, Comune di Besozzo, Comune di Luino, Comune di Casale Litta, Comune di Leggiuno, Comune di Inarzo, Parco Regionale del Campo dei Fiori, Parco Regionale Pineta',
    },
];
