import { Link } from '@inertiajs/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const year = new Date();
    return (
        <>
            <footer className="grid h-fit grid-cols-1 text-white md:grid-cols-3">
                <div className="grid place-items-center bg-red-800 p-10 md:block dark:bg-red-900">
                    <img
                        src="/images/remida_logo.webp"
                        className="mr-3 h-12 md:h-16 lg:h-20"
                        alt="ReMida Varese Logo"
                    />
                    <img
                        src="/images/altrementi-logo.webp"
                        className="mr-3 h-10 dark:hidden"
                        alt="Altrementi Logo"
                    />
                    <img
                        src="/images/altrementi-logo-light.webp"
                        className="mr-3 hidden h-10 dark:inline-block"
                        alt="Altrementi Logo"
                    />
                    <p>c/o Chiostro di Voltorre</p>
                    <p>Via S. Michele</p>
                    <p>21026 Gavirate - Varese</p>
                    <p className="mt-5">
                        Remida Varese fa parte di una rete nazionale e
                        internazionale che oggi si compone di 11 Centri
                        coordinati dal Centro Remida di Reggio Emilia, che dal
                        1996 porta avanti il progetto grazie a un’idea
                        dell’Istituzione Nidi e Scuole dell’Infanzia del Comune
                        di Reggio Emilia, Fondazione Reggio Children e Iren. Per
                        informazioni:{' '}
                        <a
                            className="text-white underline"
                            href="www.remida.org"
                            rel="noreferrer"
                            target="_blank"
                        >
                            www.remida.org
                        </a>
                    </p>
                </div>
                <div className="grid grid-cols-1 place-items-center bg-red-900 p-10 md:col-span-2 md:grid-cols-2 dark:bg-red-950">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">Menù</h2>
                        <Link className="text-white" href={route('home')}>
                            Home
                        </Link>
                        <Link className="text-white" href={route('about')}>
                            Chi siamo
                        </Link>
                        <Link className="text-white" href={route('expertise')}>
                            Cosa Facciamo
                        </Link>
                        <Link className="text-white" href={route('gallery')}>
                            Galleria
                        </Link>
                        <Link className="text-white" href={route('events')}>
                            In Evidenza
                        </Link>
                        <Link className="text-white" href={route('contacts')}>
                            Contatti
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="mt-5 text-lg font-semibold md:mt-0">
                            Policies
                        </h2>
                        <Link className="text-white" href={route('home')}>
                            Privacy Policy
                        </Link>
                        <Link className="text-white" href={route('home')}>
                            Cookie Policy
                        </Link>
                        <h2 className="mb-3 mt-5 text-lg font-semibold">
                            Social
                        </h2>
                        <div className="flex space-x-5">
                            <FaFacebook className="text-3xl" />
                            <FaInstagram className="text-3xl" />
                        </div>
                    </div>
                </div>
            </footer>
            <section className="flex h-fit flex-col items-center bg-red-950 p-1 lg:flex-row lg:justify-around">
                <p className="text-lg text-gray-200">
                    {year.getFullYear()}© Remida Varese
                </p>
                <p className="mt-3 text-lg text-gray-200 lg:mt-0">
                    Made with{' '}
                    <span role="img" aria-label="dita">
                        {String.fromCodePoint(0x1f22f)}
                    </span>{' '}
                    by{' '}
                    <a
                        title="Fabio Angelici"
                        target="_blank"
                        href="https://fabioangelici.com"
                        className="text-white underline"
                        rel="noreferrer"
                    >
                        Fabio Angelici
                    </a>
                </p>
            </section>
        </>
    );
}
